# DESIGN.md — nethangabrielb.dev

## 1. Aesthetic Direction

**Editorial Engineering Index.** Calm, warm, light-first typographic portfolio modeled after technical monographs and indexical engineering sites—not SaaS dashboards, Bento grids, or Swiss-mono agency templates. Restraint is the primary design signal.

## 2. Tech Stack & Constraints

- **Framework:** Astro (latest stable, static output) + MDX + Content Layer API (`astro/zod`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` (do NOT use deprecated `@astrojs/tailwind`). Define all tokens in `src/styles/global.css` via `@theme` and CSS custom properties.
- **Package Manager:** `pnpm`
- **Client JavaScript Budget:** Near-zero. Use tiny inline vanilla JS only for theme persistence (anti-FOUC `<head>` script) and click-to-copy email. Use a single React island (`client:visible`) _only_ for the interactive SVG architecture diagram on `/work/[slug]`.
- **Navigation Transitions:** Astro `<ClientRouter />` with subtle cross-fade (no dramatic slide/zoom animations).

## 3. Color System

Warm archival paper by default; warm carbon in dark mode. No pure `#FFFFFF`, no pure `#000000`, no blue-purple gradients, no glassmorphism, no glowing shadows.

| Token         | Light Mode (Default)     | Dark Mode (`html.dark`)     | Strict Usage                                      |
| ------------- | ------------------------ | --------------------------- | ------------------------------------------------- |
| `--bg`        | `#F9F7F4`                | `#111110`                   | Page canvas                                       |
| `--surface`   | `#F1EEE8`                | `#1A1A18`                   | Image mats & SVG diagram canvas ONLY              |
| `--ink`       | `#161614`                | `#ECEAE4`                   | Headings, primary body text                       |
| `--ink-muted` | `#62605A`                | `#94928B`                   | Dates, metadata, secondary captions               |
| `--border`    | `rgba(22, 22, 20, 0.11)` | `rgba(236, 234, 228, 0.12)` | `1px` hairline rules & image frames               |
| `--accent`    | `#2E5B45`                | `#7DA891`                   | Link underline/hover, active SVG path, focus ring |

## 4. Typography

Keep the three-font pairing, but cut monospace usage by ~80% compared to typical developer sites.

- **Display (`Fraunces`):**
    - Used ONLY for the homepage opening statement (`clamp(1.85rem, 3.2vw, 2.35rem)`, weight `400`, line-height `1.2`, tracking `-0.02em`, `font-variation-settings: "opsz" 72, "SOFT" 20, "WONK" 0`) and `/work/[slug]` page H1.
    - Never used for nav, section headings, or buttons.
- **UI & Prose (`Geist`):**
    - Body text: `15.5px` (`0.96875rem`), weight `400`, line-height `1.65`.
    - Section headings (`H2`): `14px`, weight `500`, sentence case (e.g., `Selected work`, `Experience`), muted ink (`--ink-muted`), separated from previous section by generous whitespace or a `1px` `--border` hairline.
    - Project/role titles (`H3`): `16px`, weight `500`, primary ink (`--ink`).
- **Data (`IBM Plex Mono`):**
    - Strictly limited to: tabular dates (`font-variant-numeric: tabular-nums`), SVG architecture node labels, and inline code snippets at `12.5px`.
    - Never used for marketing copy, section eyebrows, or skill lists.

## 5. Layout & Spacing Grid

- **Reading Column:** `max-w-[680px]` centered (`px-6`). Applies to header, intro, section headings, project captions, experience ledger, case-study prose, `/about`, and footer.
- **Media Breakout Column:** `max-w-[1000px]` centered (`px-4 sm:px-6`). Applies ONLY to project showcase visuals on `/` and diagrams/screenshots on `/work/[slug]`.
- **Vertical Rhythm:**
    - Top of page to intro: `pt-14 sm:pt-20`
    - Major sections: `mt-24 sm:mt-28`
    - Between flagship projects on `/`: `space-y-20 sm:space-y-24`
    - Border radius: `6px` (`rounded-md`) on image mats and diagrams; `4px` on inner screenshots. Nothing larger.

## 6. Component Specifications

- **Navigation:** Single non-sticky row inside `max-w-[680px]`. Left: plain text `Nethan Bagasbas` linking to `/`. Right: `Work`, `About`, `Notes` (optional if populated), and a minimal 16px sun/moon theme toggle. No monogram logo box, no live clock, no `⌘K` button.
- **Homepage Project Entry:**
    - Breakout mat (`--surface`, `p-5 sm:p-10`, `1px solid var(--border)`, `rounded-md`) framing ONE crisp, high-DPI UI screenshot with subtle `1px` border and no fake browser toolbar.
    - Directly below inside `max-w-[680px]`: title + right-aligned mono year on line 1; max 2-sentence description on line 2; muted plain-text stack separated by middots (`·`) on line 3; `Read case study →`, `Live ↗`, `Source ↗` links on line 4.
- **Experience & Education Ledger:** Borderless 2-column grid (`160px 1fr` on desktop, stacked on mobile) with `1px` `--border` top hairlines between rows. Left column: mono date range. Right column: bold role + company, muted location, and concise 1–2 sentence scope.
- **Interactive SVG Architecture Diagram (`/work/[slug]` only):**
    - Custom, clean right-angle SVG node graph styled strictly with `--bg`, `--surface`, `--ink`, `--ink-muted`, `--border`, and `--accent`.
    - Clicking or hovering a node highlights its connected path in `--accent`, dims unrelated edges to `25%` opacity, and updates a clean 1–2 sentence engineering tradeoff note directly below the SVG canvas. Keyboard accessible (`Tab` + `Enter`/`Space`).

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
