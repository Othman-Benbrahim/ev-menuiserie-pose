/* =========================================================
   EV Menuiserie & Pose — scripts
   ========================================================= */

/* ---------- Configuration ----------
   IMAGE_DIR    : dossier relatif des photos (ex. images/<id>.jpg).
                  Si une photo n'y est pas encore, elle est chargée
                  automatiquement depuis l'hébergement d'origine (CDN).
   FORM_ENDPOINT: laissez vide pour un envoi via la messagerie de
                  l'utilisateur (mailto), ou collez l'URL d'un service de
                  formulaire statique (Formspree, Getform, Web3Forms…)
                  pour un envoi direct depuis GitHub Pages.            */
const CONFIG = {
  IMAGE_DIR: "images/",
  CDN_THUMB: "https://le-de.cdn-website.com/11c8321288484d3aad80e0e60acd9d95/dms3rep/multi/opt/{id}-1600-1920w.jpg",
  CDN_FULL: "https://de.cdn-website.com/11c8321288484d3aad80e0e60acd9d95/dms3rep/multi/{id}-1600.jpg",
  FORM_ENDPOINT: "",
  CONTACT_EMAIL: "evmenuiserie" + "@" + "gmail.com",
  GALLERY_STEP: 12,
};

/* ---------- Catégories ---------- */
const CATEGORIES = {
  all: "Toutes",
  verandas: "Vérandas",
  fenetres: "Fenêtres",
  portes: "Portes",
  "garde-corps": "Garde-corps",
  fermetures: "Fermetures & volets",
  toitures: "Toitures",
  atelier: "Savoir-faire",
};

/* ---------- Photos (reprises du site d'origine) ---------- */
const PHOTOS = [
  { id: "1ef1e8f4-dcee-4ea2-a5eb-59fd9be2c9b4", cat: "verandas", t: "Véranda aluminium gris anthracite RAL 7016 à Carsac-de-Gurson", s: "wide" },
  { id: "e5de380c-57b9-4c48-a95a-0cf75f96ceec", cat: "verandas", t: "Véranda toiture victorienne", s: "tall" },
  { id: "53b63c85-bfa1-4dd3-960d-adc6fa89e0ca", cat: "garde-corps", t: "Garde-corps réalisé en Dordogne (24)" },
  { id: "9b99c849-dffe-454d-9287-816963944e47", cat: "fenetres", t: "Porte-fenêtre PVC bicolore en chêne doré" },
  { id: "183169d6-1dd6-4544-993a-7d438c0f9075", cat: "verandas", t: "Véranda blanche avec puits de jour" },
  { id: "1e5bfedc-0f91-4fe0-a6ca-b980cec331c4", cat: "portes", t: "Porte d'entrée PVC en bois merisier", s: "tall" },
  { id: "e0acff9e-3363-4d09-baf3-3e76640bd205", cat: "fermetures", t: "Fermeture de préau alu couleur rouille", s: "wide" },
  { id: "98f470e4-259c-4d3f-b438-bed1a09ddc66", cat: "fenetres", t: "Fenêtre rénovation aluminium RAL 7016" },
  { id: "8382f16a-4c10-4c50-aa4a-ad233b501dca", cat: "verandas", t: "Véranda aluminium gris anthracite RAL 7016 et garde-corps gris galet" },
  { id: "21f6250d-585e-4d40-9149-a36efbfd44b1", cat: "garde-corps", t: "Garde-corps en aluminium rouillé" },
  { id: "e9b0ea09-cb20-4c8b-bf0b-92639a8f227e", cat: "toitures", t: "Toiture aluminium" },
  { id: "3e11d6a0-1e65-4382-b458-1a7961ad47be", cat: "verandas", t: "Véranda", s: "wide" },

  { id: "4d01dec9-f967-4462-a074-479de473da1d", cat: "atelier", t: "EV Menuiserie & Pose à Carsac-de-Gurson" },
  { id: "4068952f-0fd7-4088-b281-e50db2e3550c", cat: "atelier", t: "Réalisation de menuiseries à Bergerac (24)" },
  { id: "7b425fc8-4d39-4c64-814d-5b641a0d2f91", cat: "verandas", t: "Véranda réalisée à Bergerac (24)" },
  { id: "a17ab281-078f-4ab8-a0a8-239578b32d86", cat: "fenetres", t: "Fenêtres PVC" },
  { id: "3da56441-8791-4c64-b10a-670998452da3", cat: "portes", t: "Porte PVC blanche" },
  { id: "fca0bb28-9093-42cc-84d8-b6d7e811ba00", cat: "fermetures", t: "Fermetures PVC en chêne foncé" },
  { id: "8b573262-7624-4d1d-b54b-081c8e4df773", cat: "atelier", t: "Spécialiste de la menuiserie" },
  { id: "e5ef06c9-2c72-4f17-884a-49308d7e1112", cat: "atelier", t: "Conseil dans le choix des matériaux" },
  { id: "5756ac92-13c4-4f45-a2a0-4b84008fcf6e", cat: "atelier", t: "Menuiserie aluminium" },
  { id: "4f310823-fa0e-42f1-8517-f163c49bd751", cat: "fermetures", t: "Fermetures et travaux de menuiserie" },
  { id: "288cd3bd-d0a9-49f5-8dc3-2acdb41ea301", cat: "fermetures", t: "Fermeture de préau alu couleur rouille (mars)" },
  { id: "8938abe2-fcef-4b8a-9397-f09964db1fc2", cat: "fermetures", t: "Fermeture de préau alu couleur rouille (mars)" },
  { id: "ffa8d6f8-d27c-49e9-911c-724ffd547d1b", cat: "fermetures", t: "Façade alu couleur rouille" },
  { id: "b2bfa92b-8ef7-4dc9-a82f-9e18464c1a79", cat: "toitures", t: "Toiture aluminium" },
  { id: "e375e37a-210d-4de4-8ba3-6c3353020241", cat: "atelier", t: "Butée aimant" },
  { id: "8209d742-daf3-4e69-a7d0-182b799c6795", cat: "fenetres", t: "Fenêtre rénovation aluminium RAL 7016" },
  { id: "5a8c2395-db41-40d9-9a27-405cd838b61b", cat: "fenetres", t: "Fenêtre rénovation aluminium RAL 7016" },
  { id: "9b31a29e-f8f4-491c-be47-eb3e9da32f00", cat: "fenetres", t: "Fenêtre rénovation aluminium RAL 7016" },
  { id: "129be488-16d5-4df0-a501-3eac2305bc6a", cat: "fenetres", t: "Fenêtre rénovation aluminium RAL 7016" },
  { id: "7858c5fa-3cd3-4464-ba63-421d5dcd02bc", cat: "verandas", t: "Véranda blanche avec puits de jour" },
  { id: "6c212cfd-3033-41a4-a46d-ac8d6299c268", cat: "verandas", t: "Véranda blanche avec puits de jour" },
  { id: "da3654c0-5808-4ef5-8cea-b3aa97a7ad7e", cat: "verandas", t: "Véranda blanche avec puits de jour" },
  { id: "add117a6-ed0b-4a64-af60-78be26985b7c", cat: "toitures", t: "Fabrication de toiture en atelier" },
  { id: "181c1dcb-a21f-4ea0-8842-94d8151ec68c", cat: "toitures", t: "Fabrication de toiture en atelier" },
  { id: "90d49cb6-493d-4f3b-a87f-5dae26162c34", cat: "verandas", t: "Véranda" },
  { id: "ca44e4b7-8dbe-4821-adb1-fcad0f79ad94", cat: "verandas", t: "Véranda toiture victorienne" },
  { id: "a941f885-1918-4ca2-a2ca-4c1024c52a7c", cat: "verandas", t: "Véranda toiture victorienne" },
  { id: "fe31b04e-398b-47e7-b9a9-2caa2cf47242", cat: "verandas", t: "Véranda toiture victorienne" },
  { id: "eeeebc12-07ed-4d15-adaf-64e1bf3a96e1", cat: "verandas", t: "Véranda toiture victorienne" },
  { id: "16b543d9-a33e-4f58-a067-c8b6f282856a", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "b0025652-3c0d-4f8d-9f32-4e850be565ad", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "723896fb-6072-42a7-829e-93f47d2e4a71", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "e3bbbe61-d7d1-45b8-968d-9dc394b1feb6", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "a47abfab-e8cc-4283-8fd4-2766c11ef96b", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "108995a9-4cec-4698-a549-b528a0c2f5d4", cat: "fermetures", t: "Fermeture de préau beige RAL 1015" },
  { id: "8ef980b6-21b1-4b47-a56c-c72e1465a35f", cat: "portes", t: "Portes PVC à Carsac-de-Gurson" },
  { id: "a3af46f9-2f26-41d8-8e84-fe11a2f1e74b", cat: "fermetures", t: "Volets roulants sur mesure" },
  { id: "92ab42da-7b23-4b5c-871a-231f233580d4", cat: "garde-corps", t: "Garde-corps gris galet" },
];

/* ---------- Utilitaires ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const localSrc = (id) => `${CONFIG.IMAGE_DIR}${id}.jpg`;
const cdn = (tpl, id) => tpl.replace("{id}", id);

/** Charge l'image locale, et bascule sur le CDN d'origine si elle est absente. */
function setImage(img, id, full = false) {
  img.onerror = () => {
    img.onerror = null;
    img.src = cdn(full ? CONFIG.CDN_FULL : CONFIG.CDN_THUMB, id);
  };
  img.src = localSrc(id);
}

document.documentElement.classList.remove("no-js");

/* ---------- En-tête & navigation ---------- */
(() => {
  const header = $("#header");
  const nav = $("#nav");
  const burger = $("#burger");
  const toTop = $("#toTop");

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 10);
    toTop.classList.toggle("is-visible", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    if (open) nav.style.top = `${header.getBoundingClientRect().bottom}px`;
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("is-locked", open);
  };

  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) setMenu(false); });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
    if (e.matches) { setMenu(false); nav.style.top = ""; }
  });

  // Lien actif selon la section visible
  const links = $$(".nav__link");
  const map = { accueil: "accueil", entreprise: "accueil", prestations: "accueil", verandas: "verandas", galerie: "galerie", plan: "plan", contact: "contact" };
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = map[entry.target.id];
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${target}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(map).forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
})();

/* ---------- Apparition au défilement ---------- */
(() => {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el, i) => {
    if (el.classList.contains("service")) el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
})();

/* ---------- Galerie + visionneuse ---------- */
(() => {
  const gallery = $("#gallery");
  const filtersEl = $("#filters");
  const moreBtn = $("#galleryMore");
  let current = "all";
  let shown = CONFIG.GALLERY_STEP;
  let visible = [];

  // Filtres
  Object.entries(CATEGORIES).forEach(([key, label]) => {
    const count = key === "all" ? PHOTOS.length : PHOTOS.filter((p) => p.cat === key).length;
    if (!count) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "filter" + (key === "all" ? " is-active" : "");
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(key === "all"));
    b.dataset.filter = key;
    b.innerHTML = `${label}<sup>${count}</sup>`;
    filtersEl.appendChild(b);
  });

  const applyFilter = (key) => {
    current = key;
    shown = CONFIG.GALLERY_STEP;
    $$(".filter", filtersEl).forEach((b) => {
      const on = b.dataset.filter === key;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", String(on));
    });
    render();
  };

  filtersEl.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (b) applyFilter(b.dataset.filter);
  });

  // Liens « Voir les vérandas » → filtre direct
  $$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => applyFilter(a.dataset.filterLink)));

  function render() {
    visible = current === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === current);
    gallery.innerHTML = "";
    const frag = document.createDocumentFragment();

    visible.slice(0, shown).forEach((p, i) => {
      const li = document.createElement("li");
      li.className = "gallery__item";
      // Les formats larges/hauts ne s'appliquent que dans la vue complète
      if (current === "all" && p.s) li.classList.add(`gallery__item--${p.s}`);
      li.style.animationDelay = `${(i % CONFIG.GALLERY_STEP) * 35}ms`;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Agrandir : ${p.t}`);
      btn.addEventListener("click", () => openLightbox(i));

      const img = document.createElement("img");
      img.alt = p.t;
      img.loading = "lazy";
      img.decoding = "async";
      setImage(img, p.id);

      const cap = document.createElement("span");
      cap.className = "gallery__caption";
      cap.innerHTML = `<small>${CATEGORIES[p.cat]}</small>${p.t}`;

      btn.append(img, cap);
      li.appendChild(btn);
      frag.appendChild(li);
    });

    gallery.appendChild(frag);
    moreBtn.parentElement.hidden = shown >= visible.length;
    moreBtn.textContent = `Voir plus de photos (${visible.length - Math.min(shown, visible.length)})`;
  }

  moreBtn.addEventListener("click", () => { shown += CONFIG.GALLERY_STEP; render(); });
  render();

  // Visionneuse
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCaption");
  const lbCount = $("#lbCount");
  let index = 0;
  let lastFocus = null;

  function show(i) {
    index = (i + visible.length) % visible.length;
    const p = visible[index];
    lbImg.classList.add("is-loading");
    lbImg.onload = () => lbImg.classList.remove("is-loading");
    lbImg.alt = p.t;
    setImage(lbImg, p.id, true);
    lbCap.textContent = p.t;
    lbCount.textContent = `${index + 1} / ${visible.length}`;
    // Pré-chargement de la suivante
    const next = visible[(index + 1) % visible.length];
    const pre = new Image(); setImage(pre, next.id, true);
  }

  function openLightbox(i) {
    lastFocus = document.activeElement;
    lb.hidden = false;
    document.body.classList.add("is-locked");
    show(i);
    $("#lbClose").focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => show(index - 1));
  $("#lbNext").addEventListener("click", () => show(index + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__figure")) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "Tab") { // garde le focus dans la visionneuse
      const f = $$("button", lb);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Balayage tactile
  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();

/* ---------- Adresse e-mail (protégée des robots) ---------- */
$$(".js-mail").forEach((a) => {
  const mail = `${a.dataset.u}@${a.dataset.d}`;
  a.href = `mailto:${mail}`;
  const target = a.querySelector("strong") || a;
  target.textContent = mail;
});

/* ---------- Formulaire de contact ---------- */
(() => {
  const form = $("#contactForm");
  const ok = $("#formOk");
  const err = $("#formErr");
  const submit = $("#formSubmit");

  const messages = {
    valueMissing: "Ce champ est obligatoire.",
    typeMismatch: "Adresse e-mail invalide.",
    tel: "Numéro de téléphone invalide.",
    rgpd: "Merci d'accepter l'utilisation de vos données pour être recontacté(e).",
  };

  const telOk = (v) => /^[+\d][\d\s().-]{7,}$/.test(v.trim());

  function check(input) {
    const field = input.closest(".field");
    const out = field.querySelector(".field__error");
    let msg = "";
    if (input.type === "checkbox") msg = input.checked ? "" : messages.rgpd;
    else if (input.validity.valueMissing || (input.required && !input.value.trim())) msg = messages.valueMissing;
    else if (input.validity.typeMismatch) msg = messages.typeMismatch;
    else if (input.type === "tel" && !telOk(input.value)) msg = messages.tel;
    field.classList.toggle("is-invalid", !!msg);
    input.setAttribute("aria-invalid", String(!!msg));
    if (out) out.textContent = msg;
    return !msg;
  }

  const required = $$("[required]", form);
  required.forEach((input) => {
    input.addEventListener("blur", () => check(input));
    input.addEventListener("input", () => { if (input.closest(".field").classList.contains("is-invalid")) check(input); });
    input.addEventListener("change", () => check(input));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    ok.hidden = true; err.hidden = true;

    const valid = required.map(check).every(Boolean);
    if (!valid) { form.querySelector(".is-invalid input, .is-invalid textarea")?.focus(); return; }
    if (form._gotcha.value) return; // robot

    const data = Object.fromEntries(new FormData(form));
    delete data._gotcha;

    submit.disabled = true;
    const label = submit.textContent;
    submit.textContent = "Envoi en cours…";

    try {
      if (CONFIG.FORM_ENDPOINT) {
        const res = await fetch(CONFIG.FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, _subject: `Demande de contact — ${data.titre || "site web"}` }),
        });
        if (!res.ok) throw new Error(res.status);
      } else {
        // Sans service d'envoi : ouverture de la messagerie, message pré-rempli
        const subject = `Demande de contact${data.titre ? " — " + data.titre : ""}`;
        const body =
          `Nom : ${data.nom}\nPrénom : ${data.prenom}\nE-mail : ${data.email}\nTéléphone : ${data.telephone}\n\n${data.message}`;
        window.location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      form.reset();
      ok.hidden = false;
    } catch (_) {
      err.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
})();

/* ---------- Partage ---------- */
(() => {
  const url = encodeURIComponent(location.href.split("#")[0]);
  const text = encodeURIComponent("EV Menuiserie & Pose — menuisier alu, PVC et bois en Dordogne");
  const targets = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    mail: `mailto:?subject=${text}&body=${url}`,
  };
  $$("[data-share]").forEach((b) => b.addEventListener("click", () => {
    const k = b.dataset.share;
    if (k === "mail") location.href = targets.mail;
    else window.open(targets[k], "_blank", "noopener,width=620,height=560");
  }));
})();

/* ---------- Année ---------- */
$("#year").textContent = new Date().getFullYear();
