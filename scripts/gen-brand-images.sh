#!/usr/bin/env bash
# ============================================================
# NEXO COOP — Generador de imágenes de marca con OpenAI gpt-image
# Uso:
#   OPENAI_API_KEY=sk-... ./scripts/gen-brand-images.sh
#   ./scripts/gen-brand-images.sh sk-...            (key como arg)
#   ./scripts/gen-brand-images.sh sk-... --push     (commit + push)
#
# Genera (sin tocar los logos SVG de Nora):
#   assets/img/og-image.png        1200x630   (Open Graph / redes)
#   assets/img/icon-512.png         512x512   (PWA maskable)
#   apple-touch-icon.png            180x180
#   favicon-48.png / favicon-32.png / favicon-16.png
# y actualiza las referencias en index.html + site.webmanifest.
# ============================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

KEY="${OPENAI_API_KEY:-}"
PUSH=0
for a in "$@"; do
  case "$a" in
    sk-*) KEY="$a" ;;
    --push) PUSH=1 ;;
  esac
done

if [ -z "$KEY" ]; then
  echo "✗ Falta la API key de OpenAI."
  echo "  Uso: OPENAI_API_KEY=sk-... $0   (o)   $0 sk-... [--push]"
  exit 2
fi

for bin in curl jq sips python3; do
  command -v "$bin" >/dev/null || { echo "✗ Falta '$bin'"; exit 3; }
done

MODEL="${OPENAI_IMAGE_MODEL:-gpt-image-2}"   # fallback automático a gpt-image-1
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p assets/img

# Paleta/identidad de marca (BRAND-SHEET de Nora) — coherente, NO un logo nuevo.
BRAND="deep near-black background #06070D, atmospheric radial glow blending indigo #6366F1, violet #A855F7 and cyan #22D3EE, premium minimal tech aesthetic, soft grain, elegant, high contrast, no text, no UI"
EMBLEM="a refined emblem of concentric thin rings with a glowing solid core, a crescent arc on the upper-right, and three small orbiting dots in cyan, violet and amber (the NEXO COOP cooperative-intelligence mark)"

gen() { # $1=prompt  $2=size  $3=outfile
  local prompt="$1" size="$2" out="$3" body resp b64
  body=$(jq -n --arg m "$MODEL" --arg p "$prompt" --arg s "$size" \
        '{model:$m, prompt:$p, size:$s, n:1}')
  resp=$(curl -sS https://api.openai.com/v1/images/generations \
        -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
        -d "$body")
  if echo "$resp" | jq -e '.error' >/dev/null 2>&1; then
    local msg; msg=$(echo "$resp" | jq -r '.error.message')
    # Fallback si el modelo no existe / no accesible
    if echo "$msg" | grep -qiE 'model|not found|does not exist|unsupported'; then
      if [ "$MODEL" != "gpt-image-1" ]; then
        echo "⚠ '$MODEL' no disponible ($msg). Reintentando con gpt-image-1…"
        MODEL="gpt-image-1"; gen "$prompt" "$size" "$out"; return
      fi
    fi
    echo "✗ OpenAI error: $msg"; exit 4
  fi
  b64=$(echo "$resp" | jq -r '.data[0].b64_json // empty')
  if [ -z "$b64" ]; then
    local url; url=$(echo "$resp" | jq -r '.data[0].url // empty')
    [ -n "$url" ] && curl -sS "$url" -o "$out" || { echo "✗ Respuesta sin imagen"; exit 5; }
  else
    echo "$b64" | python3 -c "import sys,base64;open('$out','wb').write(base64.b64decode(sys.stdin.read()))"
  fi
  echo "✓ $out"
}

echo "▶ Modelo: $MODEL"

# 1) Icono cuadrado (símbolo, sin texto)
gen "App icon, square, centered. $EMBLEM. $BRAND. Vector-clean, modern AI co-operator brand identity." \
    "1024x1024" "$TMP/icon.png"

# 2) Open Graph (3:2, se recorta a 1200x630)
gen "Wide cinematic brand banner for a premium European AI company called NEXO COOP. $EMBLEM placed in the left third, generous negative space on the right. $BRAND." \
    "1536x1024" "$TMP/og.png"

# --- Derivar tamaños con sips (macOS) ---
cp "$TMP/icon.png" assets/img/icon-512.png ; sips -z 512 512 assets/img/icon-512.png >/dev/null
cp "$TMP/icon.png" apple-touch-icon.png    ; sips -z 180 180 apple-touch-icon.png    >/dev/null
cp "$TMP/icon.png" favicon-48.png          ; sips -z 48 48   favicon-48.png          >/dev/null
cp "$TMP/icon.png" favicon-32.png          ; sips -z 32 32   favicon-32.png          >/dev/null
cp "$TMP/icon.png" favicon-16.png          ; sips -z 16 16   favicon-16.png          >/dev/null

# OG: recorte centrado a 1200x630
cp "$TMP/og.png" assets/img/og-image.png
sips -c 808 1536 assets/img/og-image.png >/dev/null   # 1536x1024 -> 1536x808 (1.90:1)
sips -z 630 1200 assets/img/og-image.png >/dev/null   # -> 1200x630
echo "✓ tamaños derivados con sips"

# --- Actualizar referencias ---
perl -0pi -e 's#(og:image" content=")[^"]*#${1}https://nexocoop.com/assets/img/og-image.png#' index.html
perl -0pi -e 's#(rel="apple-touch-icon" href=")[^"]*#${1}apple-touch-icon.png#' index.html
echo "✓ index.html actualizado (og:image + apple-touch-icon)"

if command -v node >/dev/null; then node -e "JSON.parse(require('fs').readFileSync('site.webmanifest'))" && \
  perl -0pi -e 's#"src": "[^"]*logo-hero.png"#"src": "/assets/img/icon-512.png"#; s#"sizes": "1200x1200"#"sizes": "512x512"#' site.webmanifest && echo "✓ site.webmanifest actualizado"; fi

echo ""
echo "Hecho. Revisa las imágenes en assets/img/ y la raíz."
if [ "$PUSH" = "1" ]; then
  git add -A
  git -c user.email="info@nexocoop.com" -c user.name="NEXO COOP" \
      commit -q -m "Imágenes de marca generadas con $MODEL (og:image + favicons)"
  git push origin main
  echo "✓ commit + push hechos"
else
  echo "Para publicar:  git add -A && git commit -m 'brand images' && git push"
fi
