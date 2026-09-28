// Shared reversible viewport reveal for project cards.
document.querySelectorAll(".project-next").forEach((element) => {
  const observer = new IntersectionObserver(([entry]) => {
    element.classList.toggle("is-in-view", entry.isIntersecting);
  }, { threshold: 0.25 });
  observer.observe(element);
});
