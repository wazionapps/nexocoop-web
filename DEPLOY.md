# DEPLOY — nexocoop.com

## Estado actual (19-may-2026)
- ✅ Sitio publicado en **GitHub Pages**: https://wazionapps.github.io/nexocoop-web/
  (HTTPS real, online hoy, sin depender del DNS).
- ⏳ Dominio final **nexocoop.com**: pendiente de apuntar DNS (2 acciones de Francisco, abajo).

El dominio se compró durante el alta de **Google Workspace** → el DNS lo gestiona
el registrador de Google (backend Squarespace / Google Domains legacy), accesible
con la cuenta admin `info@nexocoop.com`.

---

## OPCIÓN A (recomendada) — Cloudflare: DNS + Pages, autónomo
Una sola plataforma. Yo (Nero) gestiono DNS + deploy + SSL por API.
**Francisco hace 2 cosas (5 min):**
1. Crear cuenta gratis en cloudflare.com, **Add site → nexocoop.com**. Cloudflare
   da 2 *nameservers* (ej. `xxx.ns.cloudflare.com`).
2. En el panel del dominio de Google (admin.google.com → cuenta `info@nexocoop.com`
   → gestión del dominio / registrador), **cambiar los nameservers** por los de Cloudflare.
3. Darme un **API Token** de Cloudflare (permiso Zone.DNS + Pages) →
   lo guardo en bóveda y a partir de ahí gestiono todo yo.

## OPCIÓN B — Seguir en GitHub Pages con dominio propio
1. En el registrador (Google) crear registros DNS de nexocoop.com:
   - `A` @ → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `wazionapps.github.io`
2. Añadir fichero `CNAME` con `nexocoop.com` en la raíz del repo + activar
   "Custom domain" en Settings → Pages. GitHub emite el SSL (Let's Encrypt) solo.
   ⚠️ Ojo: el email de Workspace usa registros MX de Google — **no tocar los MX**,
   solo añadir A/CNAME del sitio web.

> Recomendación: **Opción A**. Cloudflare no rompe el email (mantiene los MX),
> da SSL, caché y CDN gratis, y me permite operar sin pedirte nada cada vez.

---

## Acceso a Google Cloud (gcloud) de nexocoop
La cuenta `info@nexocoop.com` (Workspace admin) puede usar Google Cloud.
Para que yo opere `gcloud` de nexocoop desde este Mac, **una** de estas vías:

- **Rápida (sesión):** Francisco ejecuta una vez
  ```bash
  gcloud auth login info@nexocoop.com
  gcloud config set project <PROYECTO_NEXOCOOP>
  ```
  (autoriza en navegador; a partir de ahí opero el proyecto).
- **Robusta (programática, recomendada):** crear en console.cloud.google.com
  una **Service Account** con los roles necesarios + clave JSON →
  la guardo en bóveda (`gcloud auth activate-service-account`). No depende de 2FA.

> Hoy `gcloud` está logueado con `franciscoc.systeam.es@gmail.com` (otra cuenta),
> no con nexocoop. Hay que añadir la de nexocoop, no sustituir.

---

## Actualizar el sitio (una vez en producción)
```bash
cd nexocoop-web
git add -A && git commit -m "..." && git push
# GitHub Pages redespliega solo en ~1 min
```

## Seguridad — pendiente
La contraseña de `info@nexocoop.com` se pasó por chat y está guardada cifrada
en la bóveda NEXO (`nexocoop-google-workspace/admin`). **Recomendado:**
rotar la contraseña, activar verificación en 2 pasos, y usar
app-password / OAuth / Service Account para los accesos automáticos.
