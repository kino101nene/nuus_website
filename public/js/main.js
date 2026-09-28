// Shared mobile navigation.
(() => {
  const footer = document.querySelector(".footer");
  if (footer && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(([entry]) => {
      document.body.classList.toggle("footer-visible", entry.isIntersecting);
    }, { threshold: 0 });
    footerObserver.observe(footer);
  }

  const toggle = document.querySelector(".mobile-toggle");
  const panel = document.querySelector(".mobile-menu-panel");
  if (!toggle || !panel) return;
  const setOpen = (open, restoreFocus = false) => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = open ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
    document.body.classList.toggle("mobile-menu-open", open);
    // Keep keyboard navigation inside the menu while it covers the page.
    document.querySelectorAll("body > main, body > footer").forEach(el => { el.inert = open; });
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener("click", () => setOpen(panel.hidden));
  panel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", event => {
    if (panel.hidden) return;
    if (event.key === "Escape") setOpen(false, true);
    if (event.key === "Tab") {
      const items = [document.querySelector(".logo-link"), toggle, ...panel.querySelectorAll("a")];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia("(min-width: 861px)").addEventListener("change", event => {
    if (event.matches) setOpen(false);
  });
})();
