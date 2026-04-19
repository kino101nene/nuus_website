// public/js/home.js
(function () {
  const grid = document.getElementById("alienGrid");
  const stage = document.getElementById("glitchStageHero");
  const video = document.getElementById("heroVideo");

  if (!grid || !stage) return;

  // Only attempt video playback if video element exists and is visible (desktop)
  if (video && window.innerWidth > 600) {
    // Force autoplay on desktop
    const attemptPlay = () => {
      video.muted = true; // Ensure muted
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, try again after user interaction
          document.addEventListener("click", () => video.play(), {
            once: true,
          });
        });
      }
    };

    // Try immediately
    attemptPlay();

    // Try again when video is loaded
    video.addEventListener("loadeddata", attemptPlay, { once: true });
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return;

  const items = Array.from(grid.querySelectorAll(".alien-item"));
  const payloads = items
    .map((fig) => {
      const img = fig.querySelector("img");
      return {
        src: img?.getAttribute("src"),
        alt: img?.getAttribute("alt") || "Sticker",
      };
    })
    .filter((p) => p.src);

  if (payloads.length === 0) return;

  const rand = (min, max) => Math.random() * (max - min) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  // Controls
  const MAX_ON_SCREEN = 10;
  const SPAWN_EVERY_MS = 260;
  const DURATION_MIN = 1200;
  const DURATION_MAX = 4200;

  // pointer trail controls
  const TRAIL_COUNT = 4;
  const TRAIL_LIFETIME = 900;
  const TRAIL_THROTTLE = 70;

  const active = new Set();
  let spawnTimer = null;
  let running = false;

  function getStageRect() {
    return stage.getBoundingClientRect();
  }

  function responsiveSize(rect) {
    const base = rect.width * 0.12;
    return Math.round(clamp(base, 64, 180));
  }

  function makeSticker({ x, y, w, src, alt, lifetime }) {
    const wrap = document.createElement("div");
    wrap.className = "glitch-sticker";
    wrap.style.left = `${Math.round(x)}px`;
    wrap.style.top = `${Math.round(y)}px`;
    wrap.style.setProperty("--w", `${w}px`);

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "eager";
    wrap.appendChild(img);

    stage.appendChild(wrap);
    active.add(wrap);

    window.setTimeout(() => {
      wrap.remove();
      active.delete(wrap);
    }, lifetime);
  }

  function spawnRandomSticker() {
    if (!running) return;
    if (active.size >= MAX_ON_SCREEN) return;

    const rect = getStageRect();
    if (rect.width === 0 || rect.height === 0) return;

    const { src, alt } = pick(payloads);
    const base = responsiveSize(rect);
    const w = Math.round(rand(base * 0.7, base * 1.2));

    const x = rand(0, Math.max(0, rect.width - w));
    const y = rand(0, Math.max(0, rect.height - w));

    const lifetime = Math.round(rand(DURATION_MIN, DURATION_MAX));
    makeSticker({ x, y, w, src, alt, lifetime });
  }

  let lastTrailAt = 0;

  function spawnTrailAt(clientX, clientY) {
    if (!running) return;

    const now = Date.now();
    if (now - lastTrailAt < TRAIL_THROTTLE) return;
    lastTrailAt = now;

    const rect = getStageRect();
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;

    const { src, alt } = pick(payloads);
    const w = Math.round(responsiveSize(rect) * 0.75);

    const x = clamp(localX - w / 2, 0, Math.max(0, rect.width - w));
    const y = clamp(localY - w / 2, 0, Math.max(0, rect.height - w));

    makeSticker({ x, y, w, src, alt, lifetime: TRAIL_LIFETIME });
  }

  function onPointerMove(e) {
    spawnTrailAt(e.clientX, e.clientY);
  }

  function onTouchMove(e) {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    spawnTrailAt(t.clientX, t.clientY);
  }

  function startOverlay() {
    if (running) return;
    running = true;

    stage.classList.add("is-active");
    stage.setAttribute("aria-hidden", "false");

    spawnTimer = window.setInterval(spawnRandomSticker, SPAWN_EVERY_MS);
    spawnRandomSticker();

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
  }

  video.addEventListener("ended", startOverlay);
})();
