document.querySelectorAll<HTMLElement>(".project-soft-reveal").forEach((element) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(element);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => element.classList.add("is-in-view"));
    });
  }, { threshold: 0.35 });
  observer.observe(element);
});
