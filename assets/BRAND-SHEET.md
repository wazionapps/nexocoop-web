# 🎨 NEXOCOOP — Brand Sheet v1
*La identidad visual de una nueva categoría: Cognitive Co-Operators.*
*Versión 5-mayo-2026 · Producida por Nora · NEXO COGNITIVE SL*

---

## 🪪 Marca

**Nombre comercial:** NEXOCOOP
**Razón social:** NEXO COGNITIVE SL
**Categoría que reclamamos:** Cognitive Co-Operator
**Tagline maestro:** *No contratas software. Despiertas un cerebro.*
**Tagline corto:** *Cognitive Co-Operators.*
**Voz:** Calmada, profesional, profunda. No grita. No vende humo. Asume.
**Tono:** Claro · directo · técnico-cuando-toca · cálido-cuando-importa.

---

## 🌀 Logo

### El símbolo significa
- **Anillo exterior** (consciencia) — campo de visión, contexto
- **Arco crescent** (cooperación) — el "Co-" de Co-Operator
- **Anillo interior** (memoria) — procesa, recuerda, evoluciona
- **Núcleo** (identidad) — la persona digital estable
- **Tres satélites** (cyan/violet/amber) — las conexiones que aprende: clientes, sistemas, decisiones

### Variantes incluidas en `assets/`
| Archivo | Cuándo usar |
|---|---|
| `logo.svg` | Versión completa: símbolo + wordmark + tagline. Para web, presentaciones, papelería |
| `logo-mark.svg` | Solo el símbolo. Para favicon, redes sociales, app icon, watermark |
| `logo-mono.svg` | Versión monocromática (hereda `currentColor`). Para fondos claros, prensa, fax, sello |

### Espaciado de seguridad
Mínimo igual al diámetro del núcleo central alrededor del logo. No comprimir, no rotar, no rellenar de fondos saturados.

### Tamaño mínimo
- Símbolo: 24×24 px (favicon)
- Logo completo: 160 px de ancho (legibilidad del wordmark)

---

## 🎨 Paleta

### Surfaces (fondos y superficies)
| Token | HEX | Uso |
|---|---|---|
| Abyss | `#06070D` | Fondo principal — el "espacio" del producto |
| Surface | `#0F1015` | Paneles oscuros |
| Elevated | `#16181F` | Cards |
| Border | `#1F2230` | Bordes destacados |

### Ink (texto)
| Token | HEX | Uso |
|---|---|---|
| Ink | `#F4F4F7` | Texto principal |
| Ink soft | `#A1A1AA` | Texto secundario |
| Ink muted | `#6E6E76` | Hints, captions |

### Brand (marca)
| Token | HEX | Uso |
|---|---|---|
| **Indigo** | `#6366F1` | **Primario.** Identidad NEXO |
| Indigo glow | `#818CF8` | Hover, highlight, eyebrow |
| **Violet** | `#A855F7` | Secundario. Profundidad cognitiva |
| **Cyan** | `#22D3EE` | Acento eléctrico. Datos, tech, señales |
| **Amber** | `#F59E0B` | Calor humano. CTAs, decisión |
| **Emerald** | `#10B981` | Éxito, ROI, positivo |
| **Rose** | `#F43F5E` | Alerta, riesgo |

### Gradientes oficiales
- **Principal**: `linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%)`
  Indigo → Violet → Cyan. Para portadas, números grandes, hero text.
- **Cálido**: `linear-gradient(135deg, #6366F1 0%, #A855F7 60%, #F59E0B 100%)`
  Indigo → Violet → Amber. Para llamadas a acción y momentos cálidos.
- **Halo**: `radial-gradient(closest-side, rgba(99,102,241,.35), transparent 70%)`
  Para glow detrás del logo o hero.

---

## 🔤 Tipografía

| Familia | Uso | Pesos |
|---|---|---|
| **Manrope** | Display, titulares, números | 300 / 600 / 700 / 800 |
| **Inter** | Body, párrafos, UI | 400 / 500 / 600 |
| **JetBrains Mono** | Datos, eyebrows, código, cifras técnicas | 400 / 600 |

### Reglas de uso
- Titulares siempre en Manrope 700-800 con `letter-spacing: -.02em`.
- Cuerpo en Inter 400-500, line-height 1.6.
- Eyebrows (etiquetas de sección) en JetBrains Mono mayúsculas con `letter-spacing: .28em` y color indigo glow.
- **No mezclar más de dos pesos por slide.**

---

## ✍️ Voz de marca

### Hacer
- Frases cortas. Punto. Sin paja.
- Verbos fuertes: *despierta, opera, aprende, evoluciona, decide*.
- Comparaciones físicas: *como un fichaje, un cofundador, un nuevo compañero*.
- Hablar de *tu* Co-Operator (posesivo). Es personal.

### No hacer
- ❌ "Soluciones de IA". *Demasiado genérico.*
- ❌ "Automatización inteligente". *Eso lo dicen todos.*
- ❌ Acrónimos técnicos sin explicar (LLM, RAG, RPA…).
- ❌ Comparaciones con personas reales por nombre.
- ❌ Promesas de magia. Promesas de **resultado medido**.

---

## 📐 Sistema de slides

| Elemento | Regla |
|---|---|
| Padding interior | `5vh 7vw` mínimo |
| Cards | Border-radius 18px, fondo gradiente sutil 3% blanco |
| Iconos | 44×44px en cuadrado redondeado con fondo `--grad-soft` |
| Botones | Borde 1px `--line`, hover indigo |
| Bordes | `rgba(168,168,200,.10)` por defecto, `.20` destacado |

---

## 🚫 Anti-patrones

- 🚫 No usar el logo sobre fondos blancos planos sin halo.
- 🚫 No estirar el wordmark.
- 🚫 No usar amarillos saturados (`#FFD54F` antiguo). Usar `#F59E0B` ámbar cálido.
- 🚫 No usar gradientes con más de 3 paradas.
- 🚫 No emojis decorativos en titulares formales (sí en cards explicativas o sectores).

---

## 📦 Archivos en este proyecto

```
NEXOCOOP/
├── assets/
│   ├── logo.svg          (logo completo)
│   ├── logo-mark.svg     (símbolo solo)
│   ├── logo-mono.svg     (monocromo currentColor)
│   ├── style.css         (sistema completo)
│   └── deck.js           (navegación)
├── presentacion-nexocoop-v1.html
├── presentacion-nexocoop-v1.pdf
├── BRAND-SHEET.md        ← este documento
├── NOTAS-PRIVADAS-no-compartir.md
└── LEEME.md
```

---

## 🌐 Aplicaciones futuras (roadmap visual)

- Web pública nexocoop.com — hero con halo + tipografía Manrope display
- Email firma con `logo.svg` + paleta indigo
- Plantillas Notion / Google Slides corporativas
- App icon iOS/macOS basado en `logo-mark.svg`
- Camisetas / merchandising tonos abismo + acento amber
- Decks comerciales por sector (mismas reglas, contenido sectorial)

---

*Esta brand sheet es viva. Cuando aparezcan nuevos casos de uso, se actualiza. La marca se respeta. La marca se cuida. La marca se hace fuerte cuando todos hablamos el mismo idioma visual.*

**NEXO COGNITIVE SL · 2026**
