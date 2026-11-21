# DESIGN.md — nethangabrielb.dev

## 1. Aesthetic Direction

**Light-Only Stark Monochrome Precision.** Pure achromatic engineering portfolio set strictly on a stark white (`#FFFFFF`) canvas with deep carbon ink (`#09090B`) and zero chrome accent color, so real product UI screenshots carry the only color on screen. Restraint, exact `1px` structure, and immediate above-the-fold software interaction are the primary design signals.

## 2. Tech Stack & Constraints

- **Framework:** Astro (latest stable, static output) + MDX + Content Layer API (`astro/zod`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` (do NOT use deprecated `@astrojs/tailwind`). Define all tokens in `src/styles/global.css` via `@theme inline` and `:root` CSS custom properties.
- **Package Manager:** `pnpm`
- **Client JavaScript Budget:** Minimal and intentional. Tiny vanilla JS handles click-to-copy email (`astro:page-load`). No theme toggle or dark-mode runtime script. React islands hydrate only for `WorkShowcase.tsx` (`client:load` on `/`) and `ArchitectureDiagram.tsx` (`client:visible` on `/work/[slug]`).
- **Navigation Transitions:** Astro `<ClientRouter />` with subtle `160ms` cross-fade.

## 3. Color System

Light-only pure monochrome luminance hierarchy—zero accent color in UI chrome, no dark mode, no hue gradients, no glassmorphism, no glowing shadows.

| Token | Light Mode (`:root`) | Strict Usage |
| --- | --- | --- |
| `--bg` | `#FFFFFF` | Page canvas |
| `--surface` | `#F6F6F6` | Preview stage & SVG diagram canvas |
| `--surface-hover` | `#EFEFEF` | Interactive list item hover/active fill |
| `--ink` | `#09090B` | Primary headings, active states, primary button fill |
| `--ink-secondary` | `#52525B` | Body copy, descriptions, interactive links |
| `--ink-muted` | `#71717A` | Tabular dates, quiet metadata |
| `--border` | `rgba(9, 9, 11, 0.10)` | `1px` hairline rules & stage frames |
| `--border-strong` | `rgba(9, 9, 11, 0.22)` | Active borders, screenshot frames, portrait frame |

## 4. Typography

Two-font pairing only: **100% Geist** for headings, UI, and prose; **IBM Plex Mono** strictly for the top-left domain link, tabular dates, technical specs, and SVG architecture diagram labels.

- **UI & Headings (`Geist Variable`):**
  - Homepage, `/about`, and `/404` H1: `24px–26px` (`1.5rem`–`1.625rem`), weight `500`, line-height `1.2`, tracking `-0.025em`.
  - Case study `/work/[slug]` H1: `28px–36px` (`1.75rem`–`2.25rem`), weight `500`, line-height `1.15`, tracking `-0.025em`.
  - Section headings (`Selected work`, `Experience`, `Education`, case study/about rails): `14px` (`0.875rem`), weight `500`, primary ink (`--ink`).
  - Body text: `15.5px` (`0.96875rem`)–`16px`, weight `400`, line-height `1.6`–`1.65`, capped at `60–68ch`.
- **Data (`IBM Plex Mono`):**
  - Strictly limited to: top-left `nethangabrielb.dev` nav link (`13.5px`), tabular dates (`font-variant-numeric: tabular-nums`), SVG architecture node/edge labels, and inline code snippets at `12.5px`.
  - Never used for marketing copy, section eyebrows, or skill tag clouds.

## 5. Layout & Spacing Grid

- **Global Grid:** `max-w-[1080px]` centered (`px-6 sm:px-10`). Applies uniformly to top nav, compact intro, split showcase, asymmetric sections, case studies, `/about`, and footer.
- **Compact Top Intro (`/`):** Tight deadpan header (`pt-10 sm:pt-14 pb-10 sm:pb-12`) with `H1` (`Nethan Bagasbas`), 2-sentence bio (`max-w-[62ch]`), high-contrast click-to-copy email control, and quiet underlined external links so the interactive work showcase starts above the fold.
- **Interactive Split Showcase (`/` desktop `lg+`):** `grid-cols-[340px_minmax(0,1fr)] gap-10 items-start`. Left column holds 3 hairline-separated interactive project rows; right column holds the live product stage frame (`--surface`, `rounded-[6px]`). Below `lg`, stacks cleanly as 3 vertical showcase entries.
- **Asymmetric Ledgers (`Experience`, `Education`, `/about`, `/work/[slug]`):** `grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10` with sticky left-rail `14px` Geist Medium labels and borderless `1px`-divided static rows (zero hover wash on non-interactive text rows).
- **Border Radius:** `6px` on showcase stage, diagram frame, and portrait frame; `4px` on inner screenshots and primary copy button.

## 6. Component Specifications

- **Navigation:** Single non-sticky row aligned to `max-w-[1080px]` with a `1px` `--border` bottom hairline. Left: `nethangabrielb.dev` (`13.5px`, IBM Plex Mono, `--ink-secondary` hover `--ink`) linking to `/` so `Nethan Bagasbas` anchors the H1 without duplication. Right: `Work` and `About`.
- **Interactive Split Work Showcase (`src/components/WorkShowcase.tsx`):**
  - Hovering, clicking, or keyboard navigating (`Tab`, `ArrowUp`, `ArrowDown`, `Home`, `End`) selects a project immediately.
  - Active row renders a `2px` `--ink` left bar, `--surface-hover` fill, and `--ink` title; clicking an active row (or `Read case study →`) navigates to `/work/[slug]`.
  - Right stage pre-renders all three responsive `.webp` in-app UI screenshots with a `180ms ease-out` opacity crossfade (`prefers-reduced-motion` respected). Inner screenshot frames carry `1px solid var(--border-strong)` plus `shadow-[0_4px_20px_-8px_rgba(9,9,11,0.12)]` so bright white UI screens separate crisply from the `#F6F6F6` stage.
- **Interactive SVG Architecture Diagram (`src/components/ArchitectureDiagram.tsx`, `/work/[slug]` only):**
  - Right-angle orthographic SVG styled purely in monochrome light tokens.
  - Active node inverts (`fill: var(--ink)`, text `fill: var(--bg)`); active paths use `1.5px` `var(--ink)`; unrelated edges dim to `20%` opacity; bottom readout sits on `#FFFFFF`.

## 7. HARD BANS (Zero Tolerance)

Do NOT generate or retain any of the following:

1. Zero-padded index numbers (`01`, `02`, `03`, `04`) on sections, cards, tabs, or projects.
2. Uppercase `tracking-widest` eyebrow labels above headings.
3. Pill/tag clouds (`rounded-full` badges around tech stacks, status pills like "Active Role" or "Live Production").
4. Bento stat grids or KPI summary cards.
5. Bordered cards wrapping text blocks (bio cards, experience cards, stack boxes, contact link cards).
6. Decorative telemetry: live clocks, GPS coordinates, `++` crosshairs, or keyboard-shortcut banners.
7. Fake macOS window dots or fake browser URL bars around screenshots.
8. Multi-tab carousels or `UI Preview / Blueprint` toggles on homepage project cards.
9. Contact forms.
10. Emojis anywhere in UI or copy.
11. Repeating the same role, degree, or credential across multiple sections.
