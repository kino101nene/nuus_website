const videos = [...document.querySelectorAll<HTMLVideoElement>("video[data-managed-loop-video]")];

if (videos.length) {
  const visibleVideos = new Set<HTMLVideoElement>();
  const syncPlayback = () => {
    const pageVisible = document.visibilityState === "visible";
    videos.forEach((video) => {
      if (pageVisible && visibleVideos.has(video)) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

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
