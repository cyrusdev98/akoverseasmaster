// @ts-nocheck
// Prevent double-init in dev / HMR
if (!window.__KN_INIT__) {
  window.__KN_INIT__ = true;

  // ===== Nav scroll (guards if sentinel/nav are missing) =====
(function () {
  const nav  = document.querySelector("nav");
  const sent = document.getElementById("top-sentinel");
  if (!nav || !sent) return;

  const io = new IntersectionObserver(([entry]) => {
    const atTop = entry.isIntersecting;
    nav.classList.toggle("scrolled", !atTop);
  }, { threshold: 0 });

  io.observe(sent);
})();

  // ===== Mobile menu =====
  (function () {
    const nav = document.querySelector("nav");
    const btn = document.querySelector(".nav-toggle");
    const menu = document.getElementById("navitems");
    if (!nav || !btn || !menu) return;

    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("no-scroll", open);
    });

    menu.addEventListener("click", (e) => {
      if (e.target && e.target.closest("a")) {
        nav.classList.remove("menu-open");
        btn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    });
  })();

  // ===== Services accordion =====
  (function () {
    const cards = Array.from(document.querySelectorAll(".service-card-div"));
    if (!cards.length) return;

    cards[0].classList.add("active");
    cards.forEach((card) => {
      card.addEventListener(
        "click",
        () => {
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        },
        false
      );
    });
  })();

  // ===== Popular cities carousel =====
  (function () {
    const section = document.querySelector("#popularc");
    if (!section) return;
    const track = section.querySelector("#city-carousel");
    const prevBtn = section.querySelector(".pc-arrow.prev");
    const nextBtn = section.querySelector(".pc-arrow.next");
    if (!track || !prevBtn || !nextBtn) return;

    const SPEED = 2600;
    let timer = null;

    if (!track.dataset.original) track.dataset.original = track.innerHTML;

    let N = 0,
      pv = 5,
      index = 0,
      step = 0;

    const perView = () =>
      +getComputedStyle(section).getPropertyValue("--perView") || 5;
    const gap = () => parseFloat(getComputedStyle(track).gap) || 0;

    const setTrans = (on) =>
      (track.style.transition = on ? "transform .35s ease" : "none");
    const apply = () =>
      (track.style.transform = `translate3d(${-index * step}px,0,0)`);

    function measure() {
      const first = track.querySelector(".carousel-card");
      step = (first ? first.offsetWidth : 0) + gap();
    }

    function jump(to) {
      setTrans(false);
      index = to;
      apply();
      void track.offsetHeight; // force reflow
      setTrans(true);
    }

    function build() {
      track.innerHTML = track.dataset.original;
      const originals = Array.from(track.children);
      N = originals.length;
      pv = perView();

      for (let i = N - pv; i < N; i++) {
        const clone = originals[i].cloneNode(true);
        clone.dataset.clone = "1";
        track.insertBefore(clone, track.firstChild);
      }
      for (let i = 0; i < pv; i++) {
        const clone = originals[i].cloneNode(true);
        clone.dataset.clone = "1";
        track.appendChild(clone);
      }

      measure();
      jump(pv);
    }

    function next() {
      index += 1;
      apply();
    }
    function prev() {
      index -= 1;
      apply();
    }

    track.addEventListener("transitionend", () => {
      if (index >= pv + N) jump(pv);
      else if (index < pv) jump(pv + N - 1);
    });

    function start() {
      stop();
      timer = setInterval(next, SPEED);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    nextBtn.addEventListener("click", () => {
      next();
      start();
    });
    prevBtn.addEventListener("click", () => {
      prev();
      start();
    });
    section.addEventListener("mouseenter", stop);
    section.addEventListener("mouseleave", start);

    const imgs = track.querySelectorAll("img");
    let loaded = 0;
    const ready = () => {
      build();
      start();
    };
    if (!imgs.length) ready();
    imgs.forEach((img) => {
      if (img.complete) {
        if (++loaded === imgs.length) ready();
      } else {
        img.addEventListener("load", () => {
          if (++loaded === imgs.length) ready();
        });
      }
    });

    let lastPV = perView();
    window.addEventListener("resize", () => {
      const nowPV = perView();
      if (nowPV !== lastPV) {
        lastPV = nowPV;
        build();
        start();
      } else {
        measure();
        jump(index);
      }
    });
  })();

  // ===== Reviews slider =====
  (function () {
    const viewport = document.getElementById("reviewsViewport");
    const track = document.getElementById("reviewsTrack");
    if (!viewport || !track) return;

    const items = Array.from(track.children);
    const getPerView = () =>
      Math.max(
        1,
        parseInt(getComputedStyle(viewport).getPropertyValue("--perView")) || 4
      );

    let pageIndex = 0;
    let pageStarts = [];

    function computePageStarts() {
      const pv = getPerView();
      const totalPages = Math.ceil(items.length / pv);
      pageStarts = new Array(totalPages).fill(0).map((_, p) => {
        const firstIndex = p * pv;
        const el = items[firstIndex];
        return el ? el.offsetLeft : 0;
      });
    }

    function goToPage(i) {
      if (!pageStarts.length) return;
      const total = pageStarts.length;
      pageIndex = ((i % total) + total) % total;
      const x = pageStarts[pageIndex];
      track.style.transform = `translateX(-${x}px)`;
    }

    let timer = null;
    function start() {
      stop();
      timer = setInterval(() => goToPage(pageIndex + 1), 3500);
    }
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function init() {
      computePageStarts();
      goToPage(pageIndex);
    }

    window.addEventListener("resize", init);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init);
    }

    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);

    init();
    start();
  })();

  // ===== Floating Action Button =====
  (function () {
    const fabWrap = document.getElementById("chat-fab");
    const toggle = document.getElementById("fabToggle");
    if (!fabWrap || !toggle) return;
    const OPEN_CLS = "open";

    function setOpen(open) {
      fabWrap.classList.toggle(OPEN_CLS, open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");

      const icon = toggle.querySelector("i");
      if (icon) {
        if (open) {
          icon.classList.remove("fa-comments");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.add("fa-comments");
          icon.classList.remove("fa-xmark");
        }
      }
    }

    toggle.addEventListener("click", () =>
      setOpen(!fabWrap.classList.contains(OPEN_CLS))
    );
    document.addEventListener("click", (e) => {
      if (!fabWrap.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  })();

  // ===== Services Modal (one modal at end of body) =====
  (function () {
    const modal = document.getElementById("svcModal");
    if (!modal) return;
    if (modal.parentNode !== document.body) document.body.appendChild(modal);

    const titleEl = modal.querySelector("#svcModalTitle");
    const bodyEl = modal.querySelector(".svc-modal-body");
    const closeBtn = modal.querySelector(".svc-close");

    let lastFocus = null;

    function openModal(title, html) {
      lastFocus = document.activeElement;
      if (titleEl) titleEl.textContent = title || "Details";
      if (bodyEl) bodyEl.innerHTML = html || "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      if (closeBtn && closeBtn.focus) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.addEventListener("click", (e) => {
      const target = e.target;
      const more = target && target.closest ? target.closest(".svc-more") : null;
      if (more) {
        e.preventDefault();
        const card = more.closest(".svc-card");
        const title =
          (card && card.dataset && card.dataset.title) ||
          (card && card.querySelector(".svc-name") && card.querySelector(".svc-name").textContent) ||
          "Details";
        const sel = more.getAttribute("data-target");
        const src = sel && document.querySelector(sel);
        openModal(title, src ? src.innerHTML : "");
      }

      if (
        (target && target.closest && target.closest(".svc-close")) ||
        (target && target.dataset && target.dataset.close === "1")
      ) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  })();
}


// ===== Contact form -> POST /api/lead =====
(function(){
  const form = document.querySelector('form.form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  async function submitLead(e){
    e.preventDefault();
    const fd = new FormData(form);
    const data = {
      name:    (fd.get('name')    || '').toString().trim(),
      email:   (fd.get('email')   || '').toString().trim(),
      phone:   (fd.get('phone')   || '').toString().trim(),
      service: (fd.get('service') || '').toString().trim(),
      message: (fd.get('message') || '').toString().trim(),
      source:  'home-contact'
    };

    if (!data.name || (!data.email && !data.phone)) {
      alert('Please enter your name and at least one contact (email or phone).');
      return;
    }

    submitBtn?.setAttribute('disabled', 'true');

    try{
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const j = await res.json().catch(()=>({}));
        throw new Error(j.error || 'Failed to submit');
      }
      form.reset();
      alert('Thanks! We’ll contact you shortly.');
    }catch(err){
      console.error(err);
      alert('Submission failed. Please try WhatsApp or call.');
    }finally{
      submitBtn?.removeAttribute('disabled');
    }
  }

  form.addEventListener('submit', submitLead);
})();
