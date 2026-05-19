# nexocoop-web

Web corporativa de **NEXO Cognitive SL** (empresa matriz / master) — marca **NEXO COOP**.

- 100% estática (HTML/CSS/JS vanilla). Sin build, sin dependencias.
- Bilingüe **ES/EN** (`assets/i18n.js`, `?lang=es|en`, recuerda preferencia).
- Sistema visual = `BRAND-SHEET.md` de Nora (logos, paleta, tipografías).
- Presenta **NEXO Desktop** como producto insignia → enlaza a https://nexo-desktop.com

## Estructura
```
index.html                 Landing one-page (hero, soluciones, productos, empresa, contacto)
404.html
legal/aviso-legal.html     Aviso legal (LSSI)
legal/privacidad.html      Política de privacidad (RGPD)
legal/cookies.html         Política de cookies
assets/styles.css          Sistema visual completo
assets/i18n.js             Diccionario ES/EN + lógica de idioma
assets/logos/              Logos SVG/PNG (MAYO completo + NORA-v1 simplificado)
assets/BRAND-SHEET.md      Guía de marca
robots.txt · sitemap.xml · site.webmanifest
```

## Desarrollo local
```bash
python3 -m http.server 4173
# http://localhost:4173
```

## Deploy
Ver `DEPLOY.md`. Actualmente: GitHub Pages (rama `main`, raíz).
Dominio final: **nexocoop.com** (pendiente de apuntar DNS — ver DEPLOY.md).
