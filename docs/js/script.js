document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
});

/* ================================
   PARTIALS LOADER
================================ */
async function loadPartials() {
  const includes = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includes).map(async (el) => {
      const file = el.getAttribute("data-include");
      if (!file) return;
      try {
        const resp = await fetch(file);
        el.innerHTML = await resp.text();
      } catch (err) {
        console.error("Error loading partial:", err);
      }
    }),
  );

  initNavbar();
  initSideMenu();
  initContactCard();
  document.querySelectorAll(".carousel-wrapper").forEach(initAutoCarousel);
}

/* ================================
   GLOBAL HELPERS
================================ */
function getFocusable(container = document) {
  const selectors = [
    "a[href]:not([disabled])",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ];
  return Array.from(container.querySelectorAll(selectors.join(","))).filter(
    (el) => !el.hasAttribute("disabled") && isVisible(el),
  );
}

function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
}

/* ================================
   NAVBAR / HAMBURGER
================================ */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");
  const sideMenu = document.getElementById("side-menu");

  if (!hamburger || !overlay || !sideMenu) return;

  hamburger.setAttribute("role", "button");
  hamburger.setAttribute("tabindex", "0");
  hamburger.setAttribute("aria-controls", "side-menu");
  hamburger.setAttribute("aria-expanded", "false");

  const onToggle = (e) => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    toggleMenu();
    e.preventDefault();
  };

  hamburger.addEventListener("click", onToggle);
  hamburger.addEventListener("keydown", onToggle);

  overlay.addEventListener("click", () => {
    closeMenu();
    closeContact();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeContact();
    }
  });
}

function toggleMenu() {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !sideMenu || !overlay) return;

  const isOpen = sideMenu.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  overlay.classList.toggle("show", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  document.body.classList.toggle("menu-open", isOpen);

  if (isOpen) openFocusTrap(sideMenu);
  else releaseFocusTrap();
}

function closeMenu() {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !sideMenu || !overlay) return;

  sideMenu.classList.remove("open");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");

  overlay.classList.remove("show");

  document.body.classList.remove("menu-open");

  releaseFocusTrap();
}

/* ================================
   MOVE NAV LINKS → MOBILE
================================ */
function moveNavLinks() {
  const navLinks = document.getElementById("nav-links");
  const mobileNavLinks = document.getElementById("mobile-nav-links");

  if (!navLinks || !mobileNavLinks) return;
  if (window.innerWidth > 768) return;

  if (mobileNavLinks.childElementCount === 0) {
    const clone = navLinks.cloneNode(true);
    clone.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
    mobileNavLinks.append(...Array.from(clone.children).reverse());
  }
}

/* ================================
   SIDE MENU
================================ */
function initSideMenu() {
  moveNavLinks();
  window.addEventListener("resize", moveNavLinks);
}

/* ================================
   CONTACT CARD 
================================ */
function initContactCard() {
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("contact-close");

  document.addEventListener("click", (e) => {
    const link = e.target.closest(".side-card");
    if (!link) return;

    e.preventDefault();
    closeMenu();
    openContact();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeContact);
  if (overlay) overlay.addEventListener("click", closeContact);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeContact();
  });
}

function openContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");

  if (!contactCard || !overlay) return;

  contactCard.classList.add("open");
  overlay.classList.add("show");

  document.body.classList.add("contact-open");

  openFocusTrap(contactCard);
}

function closeContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");

  if (!contactCard || !overlay) return;

  contactCard.classList.remove("open");
  document.body.classList.remove("contact-open");

  const sideMenuOpen = document.getElementById("side-menu")?.classList.contains("open");

  if (!sideMenuOpen) overlay.classList.remove("show");

  releaseFocusTrap();
}

/* ================================
   FOCUS TRAP
================================ */
let _previouslyFocused = null;
let _trapContainer = null;
let _trapHandler = null;

function openFocusTrap(container) {
  _trapContainer = container;
  _previouslyFocused = document.activeElement;

  const focusables = getFocusable(container);
  if (focusables.length) focusables[0].focus();

  _trapHandler = (e) => {
    if (e.key !== "Tab") return;

    const f = getFocusable(_trapContainer);
    if (!f.length) {
      e.preventDefault();
      return;
    }

    const first = f[0];
    const last = f[f.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };

  document.addEventListener("keydown", _trapHandler);
}

function releaseFocusTrap() {
  if (_trapHandler) document.removeEventListener("keydown", _trapHandler);
  _trapHandler = null;

  if (_previouslyFocused) _previouslyFocused.focus();
  _previouslyFocused = null;
  _trapContainer = null;
}

/* ================================
   PROJECT CAROUSEL
================================ */
(() => {
  const track = document.querySelector(".carousel-track");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!track || !nextBtn || !prevBtn) return;

  const cards = Array.from(track.children);
  let cardWidth;
  let index = 1;

  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  track.append(firstClone);
  track.prepend(lastClone);

  const allCards = Array.from(track.children);

  function setCardWidth() {
    const containerWidth = track.parentElement.getBoundingClientRect().width;
    cardWidth = allCards[index].getBoundingClientRect().width;

    const offset = cardWidth * index - (containerWidth / 2 - cardWidth / 2);

    track.style.transition = "none";
    track.style.transform = `translateX(-${offset}px)`;
  }

  window.addEventListener("resize", setCardWidth);
  setCardWidth();

  nextBtn.addEventListener("click", () => {
    if (index >= allCards.length - 1) return;
    index++;
    updatePosition();
  });

  prevBtn.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    updatePosition();
  });

  track.addEventListener("transitionend", () => {
    if (allCards[index].id === "first-clone") {
      index = 1;
      updatePosition(false);
    }

    if (allCards[index].id === "last-clone") {
      index = allCards.length - 2;
      updatePosition(false);
    }
  });

  function updatePosition(withTransition = true) {
    const containerWidth = track.parentElement.getBoundingClientRect().width;

    const offset = cardWidth * index - (containerWidth / 2 - cardWidth / 2);

    track.style.transition = withTransition ? "transform 0.4s ease" : "none";

    track.style.transform = `translateX(-${offset}px)`;
  }
  /* ================================
     TOUCH / SWIPE SUPPORT
  ================================ */
  const viewport = track.closest(".carousel-viewport");

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const SWIPE_THRESHOLD = 50;

  viewport.style.touchAction = "pan-y";

  viewport.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a, button")) return;
    isDragging = true;
    startX = e.clientX;
    currentX = startX;
    track.style.transition = "none";
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const delta = startX - currentX;
    track.style.transform = `translateX(-${cardWidth * index + delta}px)`;
  });

  viewport.addEventListener("pointerup", finishSwipe);
  viewport.addEventListener("pointercancel", finishSwipe);

  function finishSwipe(e) {
    if (!isDragging) return;
    isDragging = false;

    const delta = startX - currentX;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0 && index < allCards.length - 1) {
        index++;
      } else if (delta < 0 && index > 0) {
        index--;
      }
    }

    track.style.transition = "transform 0.4s ease";
    updatePosition();
  }
})();

/* ================================
   BOOK CAROUSEL
================================ */
function initAutoCarousel(wrapper) {
  const carousel = wrapper.querySelector(".carousel");
  const track = wrapper.querySelector(".carousel-track-books, .carousel-track-audio");
  const leftArrow = wrapper.querySelector(".carousel-arrow.left");
  const rightArrow = wrapper.querySelector(".carousel-arrow.right");

  if (!carousel || !track || !leftArrow || !rightArrow) return;

  const SPEED = 0.4;
  let paused = false;
  let rafId = null;

  const originals = Array.from(track.children);
  originals.forEach((item) => track.append(item.cloneNode(true)));

  const loopWidth = () => track.scrollWidth / 2;

  let scrollPos = 1;
  carousel.scrollLeft = 1;

  function animate() {
    if (!paused) {
      scrollPos += SPEED;
      if (scrollPos >= loopWidth()) {
        scrollPos -= loopWidth();
      }
      carousel.scrollLeft = Math.floor(scrollPos);
    }
    rafId = requestAnimationFrame(animate);
  }

  function start() {
    if (!rafId) animate();
  }

  carousel.addEventListener("mouseenter", () => (paused = true));
  carousel.addEventListener("mouseleave", () => (paused = false));

  leftArrow.addEventListener("click", () => {
    paused = true;
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    paused = true;
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });

  const images = carousel.querySelectorAll("img");
  let loaded = 0;

  images.forEach((img) => {
    if (img.complete) loaded++;
    else
      img.onload = () => {
        loaded++;
        if (loaded === images.length) start();
      };
  });

  if (loaded === images.length) start();
}
