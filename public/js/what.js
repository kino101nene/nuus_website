(() => {
  const intro = document.querySelector(".work-intro");
  const entries = [...document.querySelectorAll(".work-entry")];
  const end = document.querySelector(".work-end");

  document.body.classList.add("work-motion-ready");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => intro?.classList.add("isActive"));
  });

  const targets = [...entries, end].filter(Boolean);
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("isActive"));
    return;
  }

  const observer = new IntersectionObserver((observedEntries) => {
    observedEntries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("isActive");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  targets.forEach((target) => observer.observe(target));
})();
