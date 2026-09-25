(() => {
  const about = document.querySelector(".home-about");
  const work = document.querySelector(".home-work");

  document.body.classList.add("home-motion-ready");

  const mobile = window.matchMedia("(max-width: 700px)");

  if (about && mobile.matches) {
    if ("IntersectionObserver" in window) {
      const aboutObserver = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        about.classList.add("isActive");
        observer.disconnect();
      }, { threshold: 0.2 });
      aboutObserver.observe(about);
    } else {
      about.classList.add("isActive");
    }
  }

  if (work) {
    if ("IntersectionObserver" in window) {
      const workObserver = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        work.classList.add("isActive");
        observer.disconnect();
      }, { threshold: 0.3 });
      workObserver.observe(work);
    } else {
      work.classList.add("isActive");
    }
  }

  let frameRequested = false;

  const updateAboutExit = () => {
    frameRequested = false;

    if (about && work && !mobile.matches) {
      // When Work starts entering from the bottom, About has reached its
      // sticky position. Use Work's live viewport position so this remains
      // accurate after resizing and on mobile browser chrome changes.
      const workTop = work.getBoundingClientRect().top;
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      const exitDistance = Math.max(1, window.innerHeight - headerHeight);
      const exitProgress = Math.min(1, Math.max(0, (window.innerHeight - workTop) / exitDistance));
      const easedExit = exitProgress * exitProgress * (3 - (2 * exitProgress));
      about.style.setProperty("--about-exit-x", `${easedExit * 110}vw`);
      about.style.setProperty("--about-label-opacity", String(1 - easedExit));
    }
  };

  const requestAboutUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updateAboutExit);
  };

  window.addEventListener("scroll", requestAboutUpdate, { passive: true });
  window.addEventListener("resize", requestAboutUpdate);
  requestAboutUpdate();
})();
