/* ============================================================
   NEXO COOP — Consentimiento de cookies + Google Analytics 4
   RGPD: Consent Mode v2 (default DENIED). GA4 SOLO tras aceptar.
   Configuración: data-ga="G-XXXXXXXXXX" en el <script>.
   API pública: window.NEXOConsent.open()  (reabrir preferencias)
   ============================================================ */
(function () {
  "use strict";

  /* ▼▼▼ ÚNICO PUNTO A EDITAR ▼▼▼
     Pega aquí el Measurement ID de GA4 (formato G-XXXXXXXXXX) y despliega.
     Vacío = Analytics desactivado (el resto del sitio funciona igual). */
  var GA_MEASUREMENT_ID = "";
  /* ▲▲▲ ─────────────────────── ▲▲▲ */

  var SELF = document.currentScript;
  var GA_ID = (GA_MEASUREMENT_ID || (SELF && SELF.getAttribute("data-ga")) || "").trim();
  var GA_VALID = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== "G-XXXXXXXXXX";
  var STORE = "nexocoop_consent"; // 'granted' | 'denied'

  // ---- Consent Mode v2: por defecto TODO denegado ----
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500
  });

  // ---- i18n mínimo y autónomo (no depende de i18n.js ni del orden) ----
  function lang() {
    try {
      var u = new URLSearchParams(location.search).get("lang");
      if (u === "es" || u === "en") return u;
      var s = localStorage.getItem("nexocoop_lang");
      if (s === "es" || s === "en") return s;
    } catch (e) {}
    return (navigator.language || "es").slice(0, 2).toLowerCase() === "en" ? "en" : "es";
  }
  var T = {
    es: {
      title: "Tu privacidad",
      body: "Usamos Google Analytics para entender de forma anónima cómo se usa la web y mejorarla. No se activa nada hasta que aceptes. Puedes cambiar tu decisión cuando quieras.",
      accept: "Aceptar",
      reject: "Rechazar",
      more: "Política de cookies",
      manage: "Configurar cookies"
    },
    en: {
      title: "Your privacy",
      body: "We use Google Analytics to understand anonymously how the site is used and improve it. Nothing runs until you accept. You can change your choice anytime.",
      accept: "Accept",
      reject: "Reject",
      more: "Cookie policy",
      manage: "Cookie settings"
    }
  };

  function read() { try { return localStorage.getItem(STORE); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(STORE, v); } catch (e) {} }

  function loadGA() {
    if (!GA_VALID || window.__nexoGA) return;
    window.__nexoGA = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function grant() {
    save("granted");
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    loadGA();
  }
  function deny() {
    save("denied");
    gtag("consent", "update", { analytics_storage: "denied" });
  }

  // ---- Banner ----
  function buildBanner() {
    var d = T[lang()];
    var path = location.pathname.indexOf("/legal/") === 0 || /\/legal\//.test(location.pathname);
    var cookieHref = path ? "cookies.html" : "legal/cookies.html";

    var w = document.createElement("div");
    w.className = "cc-banner";
    w.setAttribute("role", "dialog");
    w.setAttribute("aria-live", "polite");
    w.setAttribute("aria-label", d.title);
    w.innerHTML =
      '<div class="cc-inner">' +
        '<div class="cc-text"><strong>' + d.title + '</strong>' +
          '<p>' + d.body + ' <a href="' + cookieHref + '">' + d.more + '</a></p>' +
        '</div>' +
        '<div class="cc-actions">' +
          '<button type="button" class="btn cc-reject">' + d.reject + '</button>' +
          '<button type="button" class="btn btn-primary cc-accept">' + d.accept + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(w);
    requestAnimationFrame(function () { w.classList.add("cc-in"); });

    w.querySelector(".cc-accept").addEventListener("click", function () { grant(); close(w); });
    w.querySelector(".cc-reject").addEventListener("click", function () { deny(); close(w); });
  }
  function close(w) {
    w.classList.remove("cc-in");
    setTimeout(function () { w.remove(); }, 300);
  }

  function init() {
    var choice = read();
    if (choice === "granted") { grant(); return; }
    if (choice === "denied") { return; }
    buildBanner();
  }

  // Reabrir preferencias (enlace en política de cookies / footer)
  window.NEXOConsent = {
    open: function () {
      try { localStorage.removeItem(STORE); } catch (e) {}
      var ex = document.querySelector(".cc-banner");
      if (ex) ex.remove();
      buildBanner();
    },
    status: function () { return read() || "unset"; }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
