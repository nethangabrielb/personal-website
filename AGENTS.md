# AGENTS.md - Nethan Bagasbas Personal Portfolio

Guidance for AI coding agents working in this repository. Read this fully before making changes.

---

## Project Overview

**Purpose:** Personal engineering portfolio (`nethangabrielb.dev`) presenting Nethan Bagasbas's active role (**Junior Web Developer @ Inventra Inc.**), flagship systems (**DevLog**, **Calibrate AI**, **Chirper**), experience/education timeline, filterable stack matrix, and contact workbench.

**High-level architecture:**
- Client-side React 19 SPA with build-time static HTML prerendering (`/` and `/404`) via `vite-prerender-plugin` (`prerender.jsx`).
- `src/main.tsx` mounts `<BrowserRouter>` -> `<MotionConfig reducedMotion="user">` -> `<Toaster>` -> `<App>`.
- `HomePage` (`src/pages/Home.tsx`) renders the `FloatingDock`, `Overview` (Hero Bento Stage), `Projects` (Dual-Mode UI Preview + 3-Tier Blueprint + Lightbox), `Experience`, `Skills` (Filterable Domain Matrix), `Contact` (1-click Email Copy + RHF/Zod form + Footer), and `CommandPalette` (`⌘K` / `Ctrl+K`).
- Dual-theme support (`[data-theme="dark"]` default + `[data-theme="light"]`), initialized without FOUC in `index.html` and persisted under `localStorage["nb-theme"]`.
- All structured portfolio content is centralized in `src/data/portfolio.ts` and typed via `src/types/index.ts`. Do not falsify or invent career facts, dates, metrics, or internal employer project names.

---

## Development & Verification

- **Package manager:** `pnpm` is canonical. Do not add/remove dependencies without asking first.
- **Verification commands:** Run `npx tsc -b`, `npx eslint src prerender.jsx vite.config.ts eslint.config.ts`, and `npm run build` (or `pnpm build`) before declaring changes complete.

---

## Coding, SSR & Accessibility Standards

- **TypeScript:** `strict: true`, `noUnusedLocals`, `noUnusedParameters`. Use `@/` alias for `src/` imports and `import type` for type-only imports.
- **Import sorting:** `eslint-plugin-simple-import-sort` enforces sorted imports and exports as hard errors.
- **Motion & Icons:** Import Motion from `"motion/react"` (never `"framer-motion"`). Note `lucide-react` v1.0.1 does not export removed brand icons (`Github`, `Linkedin`).
- **SSR Prerender Safety:** `prerender.jsx` executes `renderToString` in Node during `vite build`. Guard `window`, `localStorage`, `navigator`, and live clock timers inside `useEffect` or event handlers so SSR and client hydration match cleanly.
- **Accessibility & Security:** Maintain `<label htmlFor>` on inputs, keyboard navigation (`Escape`, arrow keys) on modals (`CommandPalette` and `Projects` lightbox), shortcut guards when typing in inputs, and `target="_blank" rel="noopener noreferrer"` on external links. Never read or commit `.env` secrets.
