const grid = document.querySelector<HTMLElement>(".who-member-grid");
const previous = document.querySelector<HTMLButtonElement>(".who-member-arrow--prev");
const next = document.querySelector<HTMLButtonElement>(".who-member-arrow--next");

if (grid && previous && next) {
  const members = Array.from(grid.querySelectorAll<HTMLElement>("figure"));
  const mobile = window.matchMedia("(max-width: 700px)");

  const currentIndex = () => {
    const gridLeft = grid.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    members.forEach((member, index) => {
      const distance = Math.abs(member.getBoundingClientRect().left - gridLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const updateControls = () => {
    if (!mobile.matches) {
      previous.hidden = true;
      next.hidden = true;
      return;
    }

    const activeMember = members[currentIndex()];
    const activeImage = activeMember?.querySelector<HTMLElement>("img, video");
    if (activeImage) {
      const imageRect = activeImage.getBoundingClientRect();
      const sectionTop = grid.parentElement?.getBoundingClientRect().top ?? 0;
      const imageCenter = imageRect.top + imageRect.height / 2 - sectionTop;
      previous.style.top = `${imageCenter}px`;
      next.style.top = `${imageCenter}px`;
    }

    const maxScroll = grid.scrollWidth - grid.clientWidth;
    previous.hidden = grid.scrollLeft <= 1;
    next.hidden = maxScroll <= 1 || grid.scrollLeft >= maxScroll - 1;
  };

  const move = (direction: -1 | 1) => {
    const target = members[currentIndex() + direction];
    if (!target) return;

    const delta = target.getBoundingClientRect().left - grid.getBoundingClientRect().left;
    grid.scrollTo({ left: grid.scrollLeft + delta, behavior: "smooth" });
  };

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  grid.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();
}
