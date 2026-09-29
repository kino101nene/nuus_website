document.querySelectorAll<HTMLElement>(".project-soft-reveal").forEach((element) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    element.classList.add("is-in-view");
    observer.unobserve(element);
  }, { threshold: 0.35 });
  observer.observe(element);
});
