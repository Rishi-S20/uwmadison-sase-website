# Steep — Style Reference (adapted for SASE UW–Madison)
> serif analytics on warm paper — adapted: serif editorial on white with SASE blue/green in place of peach/brown

**Theme:** light

Steep renders analytics as editorial — serif Signifier headlines float over a near-monochrome white canvas while a single accent punctuates an otherwise achromatic system. The page reads like a product magazine spread: oversized italicized display type, generous breathing room, large soft-edged cards at 24px radius, and pill-shaped controls that sit flat against the surface. Components feel quiet and weightless — shadows are barely-there, borders are hairline, and color is rationed to functional emphasis. Product surfaces are presented as floating artifacts around the headline, not nested in a dashboard shell.

**SASE adaptation:** the chromatic accent pair is SASE blue on a pale blue wash (`#e3edfc` surface + `#123c7d` ink) instead of Blush Peach/Sienna Brown. SASE green appears only as functional emphasis (chart strokes, live-status dots, one stat highlight). Everything else stays achromatic.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#17191c` | `--color-ink` | Primary text, filled button background, nav logo — the only dark surface; every CTA resolves to this near-black |
| Paper White | `#ffffff` | `--color-paper` | Page canvas, button text, elevated card surfaces |
| Mist Gray | `#f2f2f3` | `--color-mist` | Card surfaces, secondary backgrounds, input fills |
| Fog White | `#fafafb` | `--color-fog` | Alternating section bands, hover surfaces |
| Slate Gray | `#777b86` | `--color-slate` | Link color, muted helper text, footer copy |
| Ash Gray | `#979799` | `--color-ash` | Tertiary labels, category tags — typographic tags, not badges |
| Smoke Gray | `#a3a6af` | `--color-smoke` | Placeholder text, disabled labels |
| Blue Wash | `#e3edfc` | `--color-sase-wash` | Accent card background (peach analog) — the only chromatic surface; at most once per page |
| SASE Deep Blue | `#123c7d` | `--color-sase-deep` | Text and strokes on Blue Wash surfaces (sienna analog); never body text on white |
| SASE Blue | `#0050bd` | `--color-sase-blue` | Brand blue — interactive hero threads, focus states, small functional accents |
| SASE Green | `#299d2d` | `--color-sase-green` | Chart strokes, live dots, delta highlights only |

## Tokens — Typography

- **Serif (Signifier sub → Source Serif 4)** `--font-serif`: display/headlines only, weight 400 always, sizes 44/64/90px, line-height 1.3, tracking -0.66/-0.96/-2.25px. Italicize one phrase mid-sentence in display headlines.
- **Sans (Sohne sub → Inter)** `--font-sans`: body, UI, nav; 14–26px; weights 400–500; tracking -0.23px at 26px.

| Role | Size | LH | Tracking |
|------|------|----|----------|
| caption | 15px | 1.5 | — |
| body | 17px | 1.35 | — |
| body-lg | 20px | 1.35 | — |
| subheading | 22px | 1.5 | — |
| heading-sm | 26px | 1.18 | -0.23px |
| heading | 44px | 1.3 | -0.66px |
| heading-lg | 64px | 1.3 | -0.96px |
| display | 90px | 1.3 | -2.25px |

## Shapes & Elevation

- Radius: cards 24px · elevated/artifact cards 20px · small cards/inputs 16px · images 12px · buttons 9999px. Never below 16px on cards.
- Shadows: content cards get **none**; only floating product artifacts earn elevation: `0 0 0 1px rgba(4,23,43,0.05), 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`.
- Layout: max-width 1200px, 80px section gaps, 4px base unit, comfortable density. Sections alternate Paper/Fog.

## Components

- **Pill Button — Filled:** bg `#17191c`, white text, radius 9999px, Sans 16px 400. Always paired with a Ghost pill on the same row.
- **Pill Button — Ghost:** transparent, 1px `#17191c` border, ink text, same geometry.
- **Text Link with Arrow:** ink text, `→` in the label, underline on hover only.
- **Nav:** transparent bar, logo left, links, CTAs right. No background, border, or shadow.
- **Neutral Card:** bg mist, 24px radius, no shadow, no border.
- **Accent Card (Blue Wash):** bg `#e3edfc`, all text/strokes `#123c7d`, 24px radius, no shadow. Max once per page, only on white.
- **Floating Product Artifact:** white, 20px radius, artifact shadow; stat metrics Sans 20px 500, deltas 14px slate, gestural charts (no axes/gridlines) stroked in green or deep blue.
- **Avatar Bubble:** 40px circle, tinted background, 2-letter monogram, weight 500.
- **Tag:** Sans 14px 400 ash, no background or border.

## Do / Don't

- Serif weight 400 only, at 44/64/90 — never bold serif, never sans at display sizes.
- Blue Wash accent surface at most once per page, only on white.
- No chromatic colors beyond the SASE blue/green rations — no purple, red, orange.
- No shadows on content cards; artifacts only.
- No underlines at rest; arrow suffix carries affordance.
- `#123c7d` deep blue only on wash surfaces and chart strokes, never body text on white.
- Hero is a text-and-UI collage: centered serif headline surrounded by floating artifacts at varied offsets — not a headline over a stock image.
