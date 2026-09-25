(() => {
  const overview = document.querySelector(".rc-overview");
  const intro = document.querySelector(".rc-intro");
  const mediaGallery = document.querySelector(".rc-media-gallery");
  if (!overview || !intro) return;

  const updateIntroHeight = () => {
    overview.style.setProperty("--rc-intro-height", `${intro.getBoundingClientRect().height}px`);
  };

  updateIntroHeight();
  if ("ResizeObserver" in window) {
    new ResizeObserver(updateIntroHeight).observe(intro);
  } else {
    window.addEventListener("resize", updateIntroHeight);
  }

})();
