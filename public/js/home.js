(() => {
  const work = document.querySelector(".home-work");
  document.body.classList.add("home-motion-ready");

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
})();
