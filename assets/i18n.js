/* ============================================================
   NEXO COOP — i18n (ES / EN)
   - data-i18n="key"        -> textContent
   - data-i18n-html="key"   -> innerHTML (para fragmentos con <strong>)
   - data-i18n-attr="attr:key;attr2:key2" -> atributos
   Persistencia: localStorage + ?lang= + navigator.language
   ============================================================ */
(function () {
  "use strict";

  const DICT = {
    es: {
      "doc.title": "NEXO COOP — Cognitive Co-Operators | NEXO Cognitive SL",
      "doc.desc": "NEXO Cognitive SL — la empresa que crea Cognitive Co-Operators: inteligencia que se sienta a tu lado, piensa, recuerda, aprende y evoluciona contigo. Ingeniería europea, datos en Europa.",

      "nav.solutions": "Soluciones",
      "nav.products": "Productos",
      "nav.company": "Empresa",
      "nav.contact": "Contacto",
      "nav.cta": "Conoce NEXO Desktop",

      "hero.eyebrow": "COGNITIVE CO-OPERATORS",
      "hero.h1": "No contratas software. Despiertas un cerebro.",
      "hero.sub": "NEXO COOP es el vínculo cooperativo: una inteligencia que se sienta a tu lado como compañera de trabajo, no como una herramienta que ejecuta órdenes. Piensa, recuerda, aprende y evoluciona contigo.",
      "hero.cta1": "Conoce NEXO Desktop",
      "hero.cta2": "Hablar con ventas",
      "trust.rgpd": "Cumplimiento RGPD",
      "trust.europe": "Datos en Europa",
      "trust.vat": "IVA correcto",
      "trust.stripe": "Pagos verificados con Stripe",

      "meaning.eyebrow": "QUÉ SIGNIFICA",
      "meaning.h2": "Un nombre que es una declaración",
      "meaning.nexo.term": "NEXO",
      "meaning.nexo.latin": "del latín · nexus",
      "meaning.nexo.body": "Vínculo, conexión, lazo. El punto donde dos mundos distintos se encuentran y se unen.",
      "meaning.coop.term": "COOP",
      "meaning.coop.latin": "abrev. · co-operator",
      "meaning.coop.body": "Operar contigo, no para ti. Cooperación real, no automatización ciega.",
      "meaning.join": "NEXO COOP — el vínculo cooperativo entre tu negocio y una inteligencia que trabaja a tu lado.",

      "sol.eyebrow": "SOLUCIONES",
      "sol.h2": "Qué hace un Cognitive Co-Operator",
      "sol.p": "No es un chatbot. No es automatización. Es un operador cognitivo que se integra en tu día a día y crece con tu negocio.",
      "sol.think.h": "Piensa",
      "sol.think.p": "Razona sobre tu contexto real, no respuestas genéricas. Entiende tu negocio antes de actuar.",
      "sol.remember.h": "Recuerda",
      "sol.remember.p": "Memoria persistente y compartida. Lo que aprende hoy lo aplica mañana, en cada conversación.",
      "sol.learn.h": "Aprende",
      "sol.learn.p": "Observa cómo trabajas y se calibra a tu forma de operar. Menos instrucciones, más resultados.",
      "sol.evolve.h": "Evoluciona",
      "sol.evolve.p": "Mejora solo con cada ciclo. Lo que ayer era una tarea manual, mañana lo hace por su cuenta.",

      "prod.eyebrow": "PRODUCTOS",
      "prod.h2": "La familia NEXO",
      "prod.p": "Productos construidos sobre el mismo cerebro cooperativo. El primero ya está en producción.",
      "prod.flag": "PRODUCTO INSIGNIA · EN PRODUCCIÓN",
      "prod.nexod.h": "NEXO Desktop",
      "prod.nexod.p": "Tu Co-Operator de escritorio. Memoria compartida entre todas tus herramientas, aprende observando y trabaja a tu lado en Mac y Windows.",
      "prod.feat1": "Memoria compartida",
      "prod.feat2": "Aprende observando",
      "prod.feat3": "Mac + Windows",
      "prod.feat4": "Datos en Europa",
      "prod.nexod.cta": "Ir a nexo-desktop.com",
      "prod.soon": "Más productos de la familia NEXO en camino.",

      "comp.eyebrow": "EMPRESA",
      "comp.h2": "Ingeniería europea. Datos en Europa.",
      "comp.p1": "NEXO Cognitive SL es la empresa matriz detrás de la familia de productos NEXO. Diseñamos y operamos Cognitive Co-Operators con un principio firme: la inteligencia trabaja contigo, y tus datos no salen de Europa.",
      "comp.p2": "Constituida y operada en España, con cumplimiento del RGPD, facturación con IVA correcto y pagos verificados a través de Stripe.",
      "comp.card.eyebrow": "DATOS DE LA EMPRESA",
      "comp.k.name": "Razón social",
      "comp.k.cif": "CIF",
      "comp.k.addr": "Domicilio",
      "comp.k.email": "Email",
      "comp.v.addr": "Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, Islas Canarias, España",

      "cont.eyebrow": "CONTACTO",
      "cont.h2": "Hablemos",
      "cont.p": "¿Quieres un Co-Operator para tu negocio? Escríbenos o llámanos.",
      "cont.sales.lbl": "VENTAS",
      "cont.sales.sub": "Nuevos proyectos y demos",
      "cont.support.lbl": "SOPORTE",
      "cont.support.sub": "Clientes y asistencia técnica",
      "cont.email.lbl": "EMAIL",
      "cont.email.sub": "Para todo lo demás",

      "foot.tag": "Cognitive Co-Operators.",
      "foot.brandline": "NEXO Cognitive SL — la empresa que despierta cerebros, no vende software.",
      "foot.col.product": "PRODUCTO",
      "foot.col.company": "EMPRESA",
      "foot.col.legal": "LEGAL",
      "foot.link.nexod": "NEXO Desktop",
      "foot.link.solutions": "Soluciones",
      "foot.link.contact": "Contacto",
      "foot.link.about": "Sobre la empresa",
      "foot.link.legal": "Aviso legal",
      "foot.link.privacy": "Privacidad",
      "foot.link.cookies": "Cookies",
      "foot.rights": "Todos los derechos reservados.",

      "legal.back": "Volver a NEXO COOP",

      "lg.aviso.title": "Aviso legal",
      "lg.aviso.updated": "Última actualización: 19 de mayo de 2026",
      "lg.aviso.s1.h": "1. Datos identificativos",
      "lg.aviso.s1.p": "En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del titular de este sitio web:",
      "lg.aviso.s1.li1": "Razón social: NEXO Cognitive SL",
      "lg.aviso.s1.li2": "CIF: B-88728589",
      "lg.aviso.s1.li3": "Domicilio: Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, Islas Canarias, España",
      "lg.aviso.s1.li4": "Email de contacto: info@nexocoop.com",
      "lg.aviso.s2.h": "2. Objeto",
      "lg.aviso.s2.p": "El presente sitio web tiene por objeto informar sobre la actividad, productos y servicios de NEXO Cognitive SL. El acceso y uso de este sitio atribuye la condición de usuario y supone la aceptación de las presentes condiciones.",
      "lg.aviso.s3.h": "3. Propiedad intelectual e industrial",
      "lg.aviso.s3.p": "Todos los contenidos del sitio (textos, logotipos, marca NEXO COOP, diseño, código y software) son titularidad de NEXO Cognitive SL o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
      "lg.aviso.s4.h": "4. Responsabilidad",
      "lg.aviso.s4.p": "NEXO Cognitive SL no se hace responsable de los daños derivados de un uso inadecuado del sitio ni de la indisponibilidad temporal del mismo por causas técnicas. Se reserva el derecho de modificar los contenidos sin previo aviso.",
      "lg.aviso.s5.h": "5. Legislación aplicable",
      "lg.aviso.s5.p": "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.",

      "lg.priv.title": "Política de privacidad",
      "lg.priv.updated": "Última actualización: 19 de mayo de 2026",
      "lg.priv.s1.h": "1. Responsable del tratamiento",
      "lg.priv.s1.p": "El responsable del tratamiento de los datos personales es NEXO Cognitive SL (CIF B-88728589), con domicilio en Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, España. Contacto: info@nexocoop.com.",
      "lg.priv.s2.h": "2. Finalidad y base jurídica",
      "lg.priv.s2.p": "Tratamos los datos que nos facilitas (nombre, email, teléfono, contenido de tu consulta) para atender solicitudes comerciales y de soporte (base jurídica: consentimiento y medidas precontractuales, art. 6.1.a y 6.1.b RGPD). Si lo consientes, tratamos también datos de uso de la web mediante Google Analytics 4 con fines estadísticos agregados (base jurídica: tu consentimiento, art. 6.1.a RGPD).",
      "lg.priv.s3.h": "3. Conservación y ubicación de los datos",
      "lg.priv.s3.p": "Los datos se conservan mientras exista relación comercial o hasta que solicites su supresión. La infraestructura de NEXO Cognitive SL procesa y almacena datos dentro de la Unión Europea.",
      "lg.priv.s4.h": "4. Destinatarios",
      "lg.priv.s4.p": "No se ceden datos a terceros salvo obligación legal o proveedores de servicio necesarios para la prestación: Stripe (pagos) y, si consientes la analítica, Google Ireland Limited (Google Analytics 4). Estos proveedores actúan como encargados del tratamiento. Algún proveedor puede implicar transferencias internacionales, amparadas en Cláusulas Contractuales Tipo de la UE y medidas adicionales adecuadas.",
      "lg.priv.s5.h": "5. Derechos",
      "lg.priv.s5.p": "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@nexocoop.com. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",

      "lg.cook.title": "Política de cookies",
      "lg.cook.updated": "Última actualización: 19 de mayo de 2026",
      "lg.cook.s1.h": "1. Qué son las cookies",
      "lg.cook.s1.p": "Una cookie es un pequeño archivo que un sitio web guarda en tu navegador para recordar información sobre tu visita. También usamos tecnologías similares como el almacenamiento local del navegador.",
      "lg.cook.s2.h": "2. Cookies y tecnologías que usamos",
      "lg.cook.s2.p": "Técnica (sin consentimiento): almacenamiento local (localStorage) para recordar tu preferencia de idioma (ES/EN) y tu decisión sobre cookies. No se comparte ni sale de tu dispositivo. Analítica (solo con tu consentimiento): Google Analytics 4, proporcionado por Google Ireland Limited, para medir de forma agregada y con IP anonimizada cómo se usa la web. Instala las cookies _ga y _ga_<id> (caducidad máxima 13 meses) y la cookie _gid (24 h). No se utilizan cookies de publicidad ni de seguimiento entre sitios.",
      "lg.cook.s3.h": "3. Base jurídica y consentimiento",
      "lg.cook.s3.p": "Las cookies técnicas se amparan en el interés legítimo de prestar el servicio. Las cookies analíticas solo se activan tras tu consentimiento expreso (art. 6.1.a RGPD y art. 22 LSSI). Hasta que aceptas, Google Analytics no se carga y el Consent Mode v2 mantiene todo el almacenamiento denegado por defecto.",
      "lg.cook.s4.h": "4. Cómo cambiar o retirar tu consentimiento",
      "lg.cook.s4.p": "Puedes cambiar o retirar tu decisión en cualquier momento con el botón siguiente, o borrando las cookies y el almacenamiento local desde la configuración de tu navegador. Retirar el consentimiento no afecta a la licitud del tratamiento previo.",
      "lg.cook.manage": "Configurar cookies"
    },

    en: {
      "doc.title": "NEXO COOP — Cognitive Co-Operators | NEXO Cognitive SL",
      "doc.desc": "NEXO Cognitive SL — the company building Cognitive Co-Operators: intelligence that sits beside you, thinks, remembers, learns and evolves with you. European engineering, data in Europe.",

      "nav.solutions": "Solutions",
      "nav.products": "Products",
      "nav.company": "Company",
      "nav.contact": "Contact",
      "nav.cta": "Discover NEXO Desktop",

      "hero.eyebrow": "COGNITIVE CO-OPERATORS",
      "hero.h1": "You don't hire software. You wake up a brain.",
      "hero.sub": "NEXO COOP is the cooperative bond: an intelligence that sits beside you as a working partner, not a tool that just executes orders. It thinks, remembers, learns and evolves with you.",
      "hero.cta1": "Discover NEXO Desktop",
      "hero.cta2": "Talk to sales",
      "trust.rgpd": "GDPR compliant",
      "trust.europe": "Data in Europe",
      "trust.vat": "Correct VAT",
      "trust.stripe": "Verified payments with Stripe",

      "meaning.eyebrow": "WHAT IT MEANS",
      "meaning.h2": "A name that is a statement",
      "meaning.nexo.term": "NEXO",
      "meaning.nexo.latin": "from Latin · nexus",
      "meaning.nexo.body": "Bond, connection, link. The point where two different worlds meet and join.",
      "meaning.coop.term": "COOP",
      "meaning.coop.latin": "short for · co-operator",
      "meaning.coop.body": "Operating with you, not for you. Real cooperation, not blind automation.",
      "meaning.join": "NEXO COOP — the cooperative bond between your business and an intelligence that works beside you.",

      "sol.eyebrow": "SOLUTIONS",
      "sol.h2": "What a Cognitive Co-Operator does",
      "sol.p": "Not a chatbot. Not automation. A cognitive operator that fits into your day-to-day and grows with your business.",
      "sol.think.h": "Thinks",
      "sol.think.p": "Reasons about your real context, not generic answers. It understands your business before acting.",
      "sol.remember.h": "Remembers",
      "sol.remember.p": "Persistent, shared memory. What it learns today it applies tomorrow, in every conversation.",
      "sol.learn.h": "Learns",
      "sol.learn.p": "Observes how you work and calibrates to your way of operating. Fewer instructions, more results.",
      "sol.evolve.h": "Evolves",
      "sol.evolve.p": "Improves on its own every cycle. What was a manual task yesterday, it handles by itself tomorrow.",

      "prod.eyebrow": "PRODUCTS",
      "prod.h2": "The NEXO family",
      "prod.p": "Products built on the same cooperative brain. The first one is already in production.",
      "prod.flag": "FLAGSHIP PRODUCT · IN PRODUCTION",
      "prod.nexod.h": "NEXO Desktop",
      "prod.nexod.p": "Your desktop Co-Operator. Shared memory across all your tools, it learns by observing and works beside you on Mac and Windows.",
      "prod.feat1": "Shared memory",
      "prod.feat2": "Learns by observing",
      "prod.feat3": "Mac + Windows",
      "prod.feat4": "Data in Europe",
      "prod.nexod.cta": "Go to nexo-desktop.com",
      "prod.soon": "More products from the NEXO family on the way.",

      "comp.eyebrow": "COMPANY",
      "comp.h2": "European engineering. Data in Europe.",
      "comp.p1": "NEXO Cognitive SL is the parent company behind the NEXO family of products. We design and operate Cognitive Co-Operators with one firm principle: intelligence works with you, and your data does not leave Europe.",
      "comp.p2": "Incorporated and operated in Spain, GDPR compliant, with correct VAT invoicing and verified payments through Stripe.",
      "comp.card.eyebrow": "COMPANY DETAILS",
      "comp.k.name": "Legal name",
      "comp.k.cif": "Tax ID (CIF)",
      "comp.k.addr": "Registered address",
      "comp.k.email": "Email",
      "comp.v.addr": "Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, Canary Islands, Spain",

      "cont.eyebrow": "CONTACT",
      "cont.h2": "Let's talk",
      "cont.p": "Want a Co-Operator for your business? Write or call us.",
      "cont.sales.lbl": "SALES",
      "cont.sales.sub": "New projects and demos",
      "cont.support.lbl": "SUPPORT",
      "cont.support.sub": "Customers and technical help",
      "cont.email.lbl": "EMAIL",
      "cont.email.sub": "For everything else",

      "foot.tag": "Cognitive Co-Operators.",
      "foot.brandline": "NEXO Cognitive SL — the company that wakes up brains, it doesn't sell software.",
      "foot.col.product": "PRODUCT",
      "foot.col.company": "COMPANY",
      "foot.col.legal": "LEGAL",
      "foot.link.nexod": "NEXO Desktop",
      "foot.link.solutions": "Solutions",
      "foot.link.contact": "Contact",
      "foot.link.about": "About the company",
      "foot.link.legal": "Legal notice",
      "foot.link.privacy": "Privacy",
      "foot.link.cookies": "Cookies",
      "foot.rights": "All rights reserved.",

      "legal.back": "Back to NEXO COOP",

      "lg.aviso.title": "Legal notice",
      "lg.aviso.updated": "Last updated: 19 May 2026",
      "lg.aviso.s1.h": "1. Identifying information",
      "lg.aviso.s1.p": "In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following details of the owner of this website are provided:",
      "lg.aviso.s1.li1": "Legal name: NEXO Cognitive SL",
      "lg.aviso.s1.li2": "Tax ID (CIF): B-88728589",
      "lg.aviso.s1.li3": "Registered address: Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, Canary Islands, Spain",
      "lg.aviso.s1.li4": "Contact email: info@nexocoop.com",
      "lg.aviso.s2.h": "2. Purpose",
      "lg.aviso.s2.p": "This website's purpose is to inform about the activity, products and services of NEXO Cognitive SL. Accessing and using this site grants the condition of user and implies acceptance of these terms.",
      "lg.aviso.s3.h": "3. Intellectual and industrial property",
      "lg.aviso.s3.p": "All site content (texts, logos, the NEXO COOP brand, design, code and software) is owned by NEXO Cognitive SL or by third parties who have authorised its use. Reproduction, distribution or transformation without express authorisation is prohibited.",
      "lg.aviso.s4.h": "4. Liability",
      "lg.aviso.s4.p": "NEXO Cognitive SL is not liable for damages arising from improper use of the site or from its temporary unavailability due to technical reasons. It reserves the right to modify content without prior notice.",
      "lg.aviso.s5.h": "5. Applicable law",
      "lg.aviso.s5.p": "These terms are governed by Spanish law. For any dispute, the parties submit to the courts and tribunals legally competent.",

      "lg.priv.title": "Privacy policy",
      "lg.priv.updated": "Last updated: 19 May 2026",
      "lg.priv.s1.h": "1. Data controller",
      "lg.priv.s1.p": "The data controller is NEXO Cognitive SL (Tax ID B-88728589), registered at Avda. Edelmira Alfonso Alfonso, 1, 38628 Aldea Blanca — San Miguel de Abona, Santa Cruz de Tenerife, Spain. Contact: info@nexocoop.com.",
      "lg.priv.s2.h": "2. Purpose and legal basis",
      "lg.priv.s2.p": "We process the data you provide (name, email, phone, content of your enquiry) to handle sales and support requests (legal basis: consent and pre-contractual measures, Art. 6.1.a and 6.1.b GDPR). If you consent, we also process website usage data via Google Analytics 4 for aggregate statistical purposes (legal basis: your consent, Art. 6.1.a GDPR).",
      "lg.priv.s3.h": "3. Retention and data location",
      "lg.priv.s3.p": "Data is kept while a commercial relationship exists or until you request its deletion. NEXO Cognitive SL infrastructure processes and stores data within the European Union.",
      "lg.priv.s4.h": "4. Recipients",
      "lg.priv.s4.p": "No data is transferred to third parties except by legal obligation or service providers necessary for delivery: Stripe (payments) and, if you consent to analytics, Google Ireland Limited (Google Analytics 4). These providers act as data processors. Some providers may involve international transfers, covered by EU Standard Contractual Clauses and appropriate additional measures.",
      "lg.priv.s5.h": "5. Rights",
      "lg.priv.s5.p": "You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to info@nexocoop.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",

      "lg.cook.title": "Cookie policy",
      "lg.cook.updated": "Last updated: 19 May 2026",
      "lg.cook.s1.h": "1. What cookies are",
      "lg.cook.s1.p": "A cookie is a small file a website stores in your browser to remember information about your visit. We also use similar technologies such as the browser's local storage.",
      "lg.cook.s2.h": "2. Cookies and technologies we use",
      "lg.cook.s2.p": "Strictly necessary (no consent): local storage (localStorage) to remember your language preference (ES/EN) and your cookie choice. Not shared and never leaves your device. Analytics (consent only): Google Analytics 4, provided by Google Ireland Limited, to measure in aggregate and with anonymized IP how the site is used. It sets the _ga and _ga_<id> cookies (max lifetime 13 months) and the _gid cookie (24 h). No advertising or cross-site tracking cookies are used.",
      "lg.cook.s3.h": "3. Legal basis and consent",
      "lg.cook.s3.p": "Strictly necessary cookies rely on the legitimate interest of providing the service. Analytics cookies are activated only after your explicit consent (Art. 6.1.a GDPR). Until you accept, Google Analytics does not load and Consent Mode v2 keeps all storage denied by default.",
      "lg.cook.s4.h": "4. How to change or withdraw your consent",
      "lg.cook.s4.p": "You can change or withdraw your choice at any time with the button below, or by clearing cookies and local storage in your browser settings. Withdrawing consent does not affect the lawfulness of prior processing.",
      "lg.cook.manage": "Cookie settings"
    }
  };

  function detectLang() {
    const url = new URLSearchParams(location.search).get("lang");
    if (url && DICT[url]) return url;
    const saved = localStorage.getItem("nexocoop_lang");
    if (saved && DICT[saved]) return saved;
    const nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "es";
  }

  function apply(lang) {
    const d = DICT[lang] || DICT.es;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, k] = pair.split(":").map((s) => s && s.trim());
        if (attr && k && d[k] != null) el.setAttribute(attr, d[k]);
      });
    });

    if (d["doc.title"]) document.title = d["doc.title"];
    const md = document.querySelector('meta[name="description"]');
    if (md && d["doc.desc"]) md.setAttribute("content", d["doc.desc"]);

    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (!DICT[lang]) return;
    localStorage.setItem("nexocoop_lang", lang);
    apply(lang);
  }

  window.NEXOI18N = { set: setLang, current: detectLang };

  document.addEventListener("DOMContentLoaded", function () {
    apply(detectLang());
    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });
  });
})();
