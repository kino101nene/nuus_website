const videos = [...document.querySelectorAll<HTMLVideoElement>("video[data-managed-loop-video]")];

if (videos.length) {
  const visibleVideos = new Set<HTMLVideoElement>();
  const posterImages = new Map<HTMLVideoElement, HTMLImageElement>();
  videos.forEach((video) => {
    const shell = video.closest<HTMLElement>("[data-seamless-poster]");
    if (!shell) return;

    const posterImage = shell.querySelector<HTMLImageElement>(".loop-video-poster");
    if (posterImage) posterImages.set(video, posterImage);
    shell.classList.add("is-poster-managed");
    const showVideoFrame = () => shell.classList.add("has-video-frame");
    if ("requestVideoFrameCallback" in video) {
      video.requestVideoFrameCallback(showVideoFrame);
    }
    video.addEventListener("timeupdate", () => {
      requestAnimationFrame(() => requestAnimationFrame(showVideoFrame));
    }, { once: true });
  });

  const syncPlayback = () => {
    const pageVisible = document.visibilityState === "visible";
    videos.forEach((video) => {
      const posterImage = posterImages.get(video);
      if (pageVisible && visibleVideos.has(video) && (!posterImage || posterImage.complete)) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  posterImages.forEach((posterImage) => {
    posterImage.addEventListener("load", syncPlayback, { once: true });
    posterImage.addEventListener("error", syncPlayback, { once: true });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      const video = target as HTMLVideoElement;
      if (isIntersecting) visibleVideos.add(video);
      else visibleVideos.delete(video);
    });
    syncPlayback();
  }, { threshold: 0.01 });

  videos.forEach((video) => observer.observe(video));
  document.addEventListener("visibilitychange", syncPlayback);
  window.addEventListener("pagehide", () => videos.forEach((video) => video.pause()));
}
