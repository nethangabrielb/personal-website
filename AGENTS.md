# AGENTS.md — Nethan Bagasbas Personal Portfolio

Guidance for AI coding agents (Claude Code, OpenCode, Codex, Gemini CLI, Aider, etc.) working in this repository. Read this fully before making changes. It is based on a direct analysis of the current codebase, not generic best practices.

---

## Project Overview

**Purpose:** A single-page personal portfolio site (nethangabrielb.dev) showcasing the owner's experience, projects, tech stack, and a functional contact form. The site doubles as a portfolio piece and is itself listed as a project.

**High-level architecture:**
- A client-side-rendered React SPA. `src/main.tsx` mounts `<BrowserRouter>` → `SectionProvider` → `App` → `<Routes>`.
- `App.tsx` defines one layout route (`RootLayout` wrapping a single `HomePage`) plus a `*` catch-all `NotFoundPage`.
- `HomePage` is a flat composition of section components: `Hero → About → Projects → Skills → Experience → Contact → Footer`.
- Scroll-spy: each section registers itself with `useScrollSection` (IntersectionObserver) to update `currentSection` in `CurrentSectionProvider`; the `Navbar` reads that context to highlight the active link and to set its sliding underline indicator.
- "Prerendering" for SEO: `vite-prerender-plugin` server-renders `/` and `/404` via `prerender.jsx` into static HTML at build time. This is not a real SSR framework; the app still hydrates as a client SPA.
- Content is hardcoded as local data arrays inside components (e.g. `projectsData` in `Projects.tsx`, `skillGroups` in `Skills.tsx`, nav `links` in `Navbar.tsx`). There is no CMS, API layer, or backend; the only network call is the contact-form POST.

**Primary technologies:**
- React 19 + TypeScript 5.7 (strict mode) — `package.json`
- Vite 8 (Rolldown-powered) with `@vitejs/plugin-react` and `vite-prerender-plugin` — `vite.config.ts`
- React Router v7 (`react-router-dom`)
- Motion v12 (Framer Motion successor) — always imported from `"motion/react"`, never `"framer-motion"`
- React Hook Form + Zod (`zodResolver`) for the contact form
- Sonner for toast notifications
- Styling: **custom vanilla CSS design system** (the live system) with Tailwind CSS v4 present but effectively dead (see below)
- lucide-react + `@icons-pack/react-simple-icons` for icons

---

## Development Environment

- **Package manager:** `pnpm` is the canonical choice (README documents it and `pnpm-lock.yaml` exists). `package-lock.json` is also committed — do not introduce new lockfile churn or add dependencies with npm unless explicitly asked.
- **Node version:** README requires Node 18+. The project builds on modern Node (24.x verified locally). There is no `.nvmrc`/`engines` field; do not add one unless asked.
- `.npmrc` sets `legacy-peer-deps=true` — pnpm/npm installs may misbehave without it.

**Setup:**
```bash
pnpm install
cp .env.example .env.local   # set VITE_CONTACT_FORM_ENDPOINT to test the form
pnpm dev                     # http://localhost:5173
```

**Common commands:**
- `pnpm dev` — Vite dev server
- `pnpm build` — runs `prebuild` (SEO file generation), then `tsc -b && vite build`
- `pnpm preview` — preview the production build
- `pnpm lint` — ESLint over the whole repo
- `node scripts/optimize-images.js` — regenerates `.webp` images from PNG/JPG sources (only needed when images change)

**Verification requirement for agents:** After any TypeScript/JSX change, run `pnpm lint` and `npx tsc -b` (or `pnpm build`) and ensure they pass before declaring the task complete. There is no test suite.

**Assumption:** No CI exists (no `.github/`, no `vercel.json`). The site is deployed on Vercel (`VITE_SITE_URL=https://nethangabrielb.vercel.app` in `.env.production`), which auto-detects the Vite build.

---

## Project Structure

```
index.html                      # HTML shell; SEO/OG/Twitter tags, JSON-LD, %VITE_SITE_URL% placeholders
prerender.jsx                   # SSR entry for vite-prerender-plugin (renderToString + MemoryRouter)
vite.config.ts                  # React + prerender + path alias @/ → ./src
tsconfig.json                   # project refs only; real configs in tsconfig.app.json / tsconfig.node.json
components.json                 # shadcn registry config (legacy; most shadcn output is unused)
scripts/
  generate-seo-files.mjs        # prebuild: writes public/robots.txt + sitemap.xml from VITE_SITE_URL
  optimize-images.js            # sharp: converts source images to .webp
  generate-favicon.js           # sharp: regenerates favicon PNGs from public/nethan-icon.svg
public/                         # static assets: resume PDF, screenshots (.webp preferred), favicons, robots.txt, sitemap.xml
src/
  main.tsx                      # entry: createRoot + BrowserRouter + SectionProvider + Toaster + App
  App.tsx                       # routes: RootLayout > HomePage, * → NotFoundPage
  CurrentSectionProvider.tsx    # Context: currentSection + scroll-lock on nav click
  components/
    sections/                   # Hero, About, Projects, Skills, Experience, Contact, Footer, Navbar (LIVE)
    ui/                         # small reusable pieces: SectionRule, ScrollProgress, ScrollToTop, GridOverlay, Ticker (LIVE)
    layout/                     # RootLayout (+ index.ts barrel that also re-exports from sections/)
    ProjectsCard.tsx, TechBadge.tsx   # UNUSED
  hooks/
    useScrollSection.tsx        # scroll-spy: every section calls this
    useScrollProgress.ts        # 0–100 scroll % for the progress rail
    useContactForm.ts           # RHF + Zod contact form submit → VITE_CONTACT_FORM_ENDPOINT
    useSkillBars.ts             # IntersectionObserver-triggered skill bar fill
    useAnimation.ts, useMediaQuery.ts  # UNUSED (only reachable via unused components)
  lib/
    utils.ts                    # cn() = clsx + twMerge (shadcn convention)
    theme.tsx                   # UNUSED/stub (always light, setTheme is a no-op)
    techIcons.ts                # simple-icons map; ONLY used by unused TechStack.tsx
  pages/
    Home.tsx                    # section composition (single page)
    NotFoundPage.tsx            # 404 (uses Tailwind classes — likely unstyled, see caution)
  styles/                       # THE styling system (vanilla CSS)
    globals.css                 # entry: @imports base, nav, hero, about/projects, skills/contact, responsive (in order)
    base.css                    # reset, design tokens (:root), scroll/grid/overlay/scroll-to-top primitives
    nav.css, hero.css, sections-about-projects.css, sections-skills-contact.css, responsive.css
  types/index.ts                # NavItem, Project
  vite-env.d.ts                 # Vite client types
```

**Key entry points:** `src/main.tsx` (app boot), `src/App.tsx` (routing), `src/pages/Home.tsx` (page composition), `src/components/sections/Navbar.tsx` + `CurrentSectionProvider.tsx` (scroll-spy wiring), `src/styles/globals.css` (CSS entry).

---

## Coding Standards

- **Naming:**
  - Components: PascalCase, named exports (`export const Hero = () => {...}`). Default export is used **only** for `App`.
  - Hooks: `useCamelCase` (`useScrollSection`, `useContactForm`). Hooks that return refs return `{ ref, ... }` shaped objects.
  - CSS classes: lowercase BEM-ish — `block-element`, modifiers as suffixes (`nav-mobile--open`, `skill-bar-fill.animate`). Prefer `__` only in legacy sections (`AboutStack`/`TechStack`) — do not extend those.
  - Local constants inside components are uppercase snake (`TICKER_ITEMS`, `projectsData` is camel, `skillGroups` is camel — match the local file).
- **TypeScript rules (enforced by `tsconfig.app.json`):** `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `isolatedModules`, `moduleResolution: "bundler"`. Preserve these. Do not relax them.
- **Path alias:** use `@/` for `src/` imports (e.g. `@/components/ui/SectionRule`, `@/hooks/useScrollSection`). Relative imports are used only for same-directory files (`./App`, `../sections/Navbar`). Keep this.
- **Import order:** `eslint-plugin-simple-import-sort` is a hard error (`simple-import-sort/imports`). Order: side-effect/asset imports first (`import "@/styles/globals.css"`), then packages, then `@/` aliases, then relative. Run `pnpm lint` after editing imports.
- **Import style:** use `import { X } from "motion/react"`, `import type { ... }` for type-only imports (the codebase does this in `Navbar.tsx`, `MotionButton.tsx`).
- **Quotes/prettier:** There is **no Prettier config**. Files are inconsistent (older hooks use single quotes, newer section files use double quotes). Match the surrounding file; for new files prefer double quotes (majority in current code).
- **Error handling patterns:** components don't wrap in try/catch. Network errors surface via `toast.error(...)` (see `useContactForm.ts`). `useContext` is non-null asserted with `!` (`useContext(SectionContext)!`). Custom hooks that throw (e.g. `useTheme`) throw `new Error("... must be used within ...Provider")`. Follow these existing patterns.
- **JSX style:** 2-space indent, self-closing tags, `aria-label` on icon-only interactive elements, `loading="lazy"` + descriptive `alt` on images, `target="_blank"` links always carry `rel="noopener noreferrer"`.
- **No comments unless the code genuinely needs them** (the existing `/* SVG icons inlined to avoid extra deps */` comment is an example of a *useful* comment; explanatory `//` blocks in CSS headers like `/* ─── Skills ─── */` are the styling convention — preserve them).

---

## Frontend Guidelines

**UI architecture:**
- Add new content as a **section component in `src/components/sections/`**, composed in `pages/Home.tsx` in order. Give it a `<section id="...">` wrapper, the shared `.outer` container class, and a `SectionRule` header with the next sequential `number`.
- Every section that must be tracked by the navbar uses the same idiom:
  ```tsx
  const ref = useRef<HTMLElement>(null);
  useScrollSection({ sectionName: "Contact", ref });
  ```
  `sectionName` must match the key in `Navbar.tsx`'s `sectionMap` (About, Skills, Projects, Experience, Contact). If you add a new trackable section, you must update `Navbar.tsx` `links` array **and** `sectionMap` **and** the mobile menu (which maps the same `links`).
- Global/UI primitives that repeat go in `components/ui/` and are imported with the `@/components/ui/...` alias. Keep them small and presentational.

**State management patterns:**
- Use React Context for cross-cutting shared state — `CurrentSectionProvider` is the reference example. Do **not** reach for Zustand or TanStack Query; they are installed but unused, and adding them would be an unnecessary architecture change.
- Component-local UI state uses `useState`/`useRef`. Animation "state" is mostly CSS-class toggling driven by IntersectionObserver hooks.

**Data fetching approach:**
- There is effectively one fetch: the contact form POST in `useContactForm.ts` (native `fetch`, JSON, gated on `VITE_CONTACT_FORM_ENDPOINT`). Content itself is static and lives in component-local arrays. Keep content data near its component; only extract to `src/lib/` when two or more components share it.

**Form handling conventions:**
- Use the `useContactForm` hook pattern: React Hook Form + `zodResolver`, `z.infer` type exported as `XFormData`, validation messages inline in the schema, `toast` for success/failure, `form.reset()` on success, `isSubmitting` from `formState` to disable the submit button. The live form in `Contact.tsx` uses raw `.form-input`/`.form-textarea` classes — do **not** silently swap it to the unused `ui/Input`/`ui/Textarea` components (see technical debt).

**Styling conventions (critical):**
- **The live styling system is vanilla CSS with design tokens.** All new styles go in the appropriate file under `src/styles/` (grouped by area, imported through `globals.css` in dependency order), using tokens from `:root` in `base.css`:
  - `--gold` / `--gold-dark` (accent), `--off-white` (primary text), `--charcoal` / `--near-black` / `--deep` (backgrounds/borders), `--mid-gray` (secondary text), `--error`, `--cyan`/`--ts-blue` (tech-brand colors), `--font-display` (Bebas Neue) and `--font-body` (IBM Plex Mono).
  - 12-column grid via `--col`/`--gutter`; sections use `max-width: 1440px` + `.outer`.
  - Section layout idiom: sticky left sidebar heading (`position: sticky; top: 96px`) + content column (`grid-template-columns: 1fr 2fr` or `300px 1fr`), section `padding: 120px 0`, `border-top` dividers, `clamp(64px, 7vw, 115px)` display headings. Reference `sections-skills-contact.css` and `sections-about-projects.css`.
  - Responsive breakpoints live in `responsive.css`: `max-width: 1023px` collapses two-column layouts; `max-width: 767px` collapses grids, hides `.nav-links`, shows `.nav-toggle`. Match existing patterns there.
  - Tint borders via `rgba(192, 123, 42, 0.x)` (gold tints) — this is used everywhere.
- **Tailwind CSS v4 is configured but NOT actually imported** — `globals.css` has no `@import "tailwindcss"`, and the built CSS contains zero Tailwind class selectors. Components styled with Tailwind utilities (`button.tsx`, `Input.tsx`, `Textarea.tsx`, `MotionButton.tsx`, `ProjectsCard.tsx`, `NotFoundPage.tsx`) are effectively **unstyled in production**. Do not write new UI depending on Tailwind utilities unless you also make Tailwind actually compile; otherwise the safest new-code path is the vanilla design-system classes.
- Do not fight the dark, uppercase, monospace, gold-accent brutalist aesthetic. Use `--font-display` for headings and `--font-body` elsewhere, uppercase + `letter-spacing` for micro-labels, and the `◆` glyph for bullets (see `exp-bullets li::before`).

**Accessibility requirements:**
- The site reports 96/100 Accessibility on PageSpeed (stated in project copy) — protect it. Icon-only buttons need `aria-label`. Form fields need `<label htmlFor>` wired to `id`. Interactive hover states must not be the only affordance. Maintain visible focus styles where present (`focus-visible:ring` in Tailwind components, `:focus` gold borders on form fields). Keep `alt` text meaningful on images.

---

## Backend/API Guidelines

This repository has no backend. The only API surface is:

- **Contact form POST** (`src/hooks/useContactForm.ts`): posts `{ name, email, message }` as JSON to `import.meta.env.VITE_CONTACT_FORM_ENDPOINT`. Behavior when unset: fail with a toast (never throw).
  - Do not add credentials/headers to this call; it is a public form endpoint.
  - Validation is client-side Zod only (server validation is out of scope here — do not invent server-side guarantees).
  - If the endpoint changes, update the `.env.example` comment; the endpoint value itself stays in `.env.local`.

If you are asked to add real backend behavior (auth, CMS, DB), stop and flag it as a major architectural change — it is beyond the current scope of this static Vite site, and the repo already lists a separate Next.js/Prisma project (calibrate-ai) as the owner's main app.

---

## Testing Requirements

- **There is no test framework, test script, or CI.** Do not add one unless explicitly requested.
- "Verification" in this repo means: `pnpm lint` passes and `npx tsc -b` (or `pnpm build`) succeeds.
- When changing behavior, manually exercise the relevant flow (scroll-spy active link, mobile nav, contact form toasts, smooth-scroll nav clicks, scroll-to-top, prerendered `/` and `/404` after `pnpm build`).

---

## Performance Rules

- **Images:** serve `.webp` from `/public` (`.png`/`.jpg` originals are regenerated into `.webp` by `scripts/optimize-images.js`). Reference the `.webp` in components (e.g. `/calibrate-screenshot.webp`). Add `loading="lazy"` to below-the-fold images; the hero image may be eager.
- **Bundle awareness:** this is a small SPA; every new dependency directly affects the single bundle. Do not add a dependency for something one small helper can do — the codebase deliberately inlines icons (see the comment in `Projects.tsx`) and ships React `ElementType` tech icons from `@icons-pack/react-simple-icons` rather than importing extra icon libs.
- **Animation cost:** CSS transforms/opacity and IntersectionObserver (already used by `useScrollSection`, `useSkillBars`) are the approved mechanisms. Scroll handlers must use `{ passive: true }` (established pattern in `useScrollProgress.ts`, `ScrollToTop.tsx`, `BackToTop.tsx`).
- Avoid `useEffect` churn: note `CurrentSectionProvider` uses a timestamp-based scroll-lock so nav clicks don't fight the scroll-spy — preserve this mechanism if you touch it.
- The site reports 90+ Performance / 100 Best Practices on PageSpeed; treat regressions there as bugs.

---

## Security Requirements

- **Secrets:** never commit real secrets. `.env.local` is gitignored; `.env.example` documents keys. `VITE_`-prefixed vars are baked into the client bundle at build time — never put server secrets in them. `.env.production` currently contains only a public site URL.
- **Third-party links** in components always use `target="_blank" rel="noopener noreferrer"` (already the norm; keep it).
- **Contact form:** the message body is user input posted to a third-party endpoint. Keep the payload shape fixed (`name`/`email`/`message`) and validated by Zod. Do not render the submitted message into the DOM (it currently is not).
- **Avoid:** inline event handlers that trust DOM state, `dangerouslySetInnerHTML`, and adding any auth/session logic to this static client (nothing here is a safe place for credentials).
- External font/CSS loads (Google Fonts links in `index.html`) are preconnected and non-blocking-critical; don't add scripts from unknown origins.

---

## Git Workflow

- **Commit style:** Conventional Commits with lowercase type prefix, imperative subject, no scope, no body trailer. Real examples from history:
  - `feat: add sliding animated underline indicator to navbar links`
  - `fix: update mobile navbar styling to absolute positioning for proper overlay behavior`
  - `perf: increase image dimensions and WebP quality settings for optimized assets`
  - `refactor:`, `style:`, `chore:`, `docs:` are all in use. Use `chore:`/`docs:` for asset/doc-only changes (resume PDF updates are committed with `chore:`/`docs:`).
- **Branching:** work happens directly on `main` in this repo's history (no PR flow visible). Local branches exist (`redesign`, `main-copy`) — keep `main` the base. If you create a branch, name it around intent (e.g. `feat/...`), but the default expectation is committing to `main`.
- **PRs:** none currently; if a PR is created, keep the description focused on the visual/behavioral change (content copy, styling, layout) since most commits are content/style iterations.
- Only stage intended files. Do not commit generated `dist/` (gitignored), `.env.*` values, or local config. Note `.gitignore` currently ignores the `.agents/` directory but not `AGENTS.md` — the root `AGENTS.md` is committable.

---

## Agent Operating Rules

1. **Understand existing patterns before changing anything.** Read the section component you are touching plus its peer sections and the matching CSS file before editing. Copy the established idioms (scroll-spy registration, `SectionRule`, `.outer`, design tokens, `toast` feedback).
2. **Prefer modifying existing files over creating new abstractions.** A new "component library" or "utils layer" is not wanted. Add a new section by composing existing primitives.
3. **Avoid introducing dependencies without justification.** `zustand`, `axios`, `date-fns`, `@tanstack/react-query`, `@tanstack/react-table`, `@fontsource-variable/geist`, and `tw-animate-css` are already installed and unused — adding *more* deps (or "activating" these) needs an explicit reason and a build/bundle check. Use built-ins and the existing toolchain.
4. **Keep solutions consistent with the current architecture:** one Home page composing sections, Context for shared state, vanilla-CSS design system for the live UI, `@/` aliases, sorted imports.
5. **Preserve type safety.** Strict TS is on; keep `noUnusedLocals`/`noUnusedParameters` green, use `z.infer` for form data, use `import type` where appropriate. Do not loosen tsconfig to silence errors.
6. **Do not perform speculative refactors.** The repo contains a parallel legacy design (`AboutStack`/`TechStack`, `ProjectsCard`, `TechBadge`, unused `ui/` components). Do not "clean up" or delete them unless explicitly asked — some may be a pending redesign (there is a `redesign` branch).
7. **Do not rewrite working code unnecessarily.** The unstyled-Tailwind situation and the `force-close`/`exit 0` build workarounds are intentional-ish survival patterns; changing them is a decision for the human, not an agent side-effect.
8. **Explain architectural tradeoffs when making significant changes** (e.g. converting the styling system, adding state management, or enabling SSR). Surface the cost/benefit in your reply before implementing.
9. **Update documentation when behavior changes:** if section order/numbering, nav links, stack, or commands change, update `README.md` and this file. Section numbers shown via `SectionRule` (`02`…`06`) and the hero are hardcoded strings — renumber them if you reorder sections.
10. **Verify commands before suggesting them.** Check `package.json` scripts first (`pnpm dev/build/lint/preview`). Do not invent scripts, and never assume a test runner exists.
11. **Run `pnpm lint` and `npx tsc -b` after every change** before reporting completion.
12. If a change affects layout on small screens, check `responsive.css` breakpoints (1023px / 767px) and match the established collapse rules.

---

## Project-Specific Observations

**Architectural decisions discovered during analysis:**
- Single-page scroll composition instead of multi-route pages; React Router exists mainly for `RootLayout`/404 and for SSR prerender support.
- Scroll-spy is inverted: every section owns an IntersectionObserver via `useScrollSection` and writes to a shared Context, with a time-based lock (`navScrollLockUntilRef`, 700ms) so navbar clicks are never immediately overridden by the observer. This is subtle — preserve it when editing `Navbar.tsx` or `CurrentSectionProvider.tsx`.
- SEO is handled at build time: `prebuild` regenerates `robots.txt`/`sitemap.xml`, `vite-prerender-plugin` emits static HTML for `/` and `/404`, and `index.html` carries all meta/OG/Twitter/JSON-LD. The `force-close` plugin + `&& exit 0` in the build script exist to stop the prerender step from hanging/leaving a bad exit code in CI — a known hack; keep it working.
- Content is copy-pasted into component-local arrays (`projectsData`, `skillGroups`, `exp-*` markup, `TICKER_ITEMS`, nav `links`) and duplicated between the live (`About`/`Skills`) and legacy (`AboutStack`/`TechStack`) sections. Editing copy means editing JSX/data in one or both places.
- Brand-driven typography/color live entirely in `base.css` tokens; the "brutalist terminal" look (monospace, uppercase, gold, grid overlay, noise texture) is the product spec — new UI must match it.

**Existing patterns that should be preserved:**
- Section recipe: `<section id>` + `.outer` + `SectionRule` + sticky-sidebar/two-column grid + hover `translateX`/color transitions on `--gold`.
- `SectionRule` usage with `number`/`title`/`date` (e.g. `<SectionRule number="06" title="Contact" date="LET'S BUILD SOMETHING" />`).
- Scroll hooks (`useScrollSection`, `useScrollProgress`, `useSkillBars`) as the only "behavioral" layer.
- Inline SVG icons with the "avoid extra deps" rationale.
- Form UX: Zod schema with inline messages, `toast` feedback, `SENDING...`/disabled submit state.

**Areas of technical debt:**
- **Two styling systems:** Tailwind v4 configured (plugin + `@tailwindcss/vite`) but never imported; several components (`button.tsx`, `MotionButton.tsx`, `Input.tsx`, `Textarea.tsx`, `ProjectsCard.tsx`, `TechBadge.tsx`, `NotFoundPage.tsx`) rely on Tailwind classes that do not compile, so they render unstyled or are unused. The shadcn tokens in `base.css` (`--background`, `--foreground`, `--ring`, `--primary`, …) exist to support them but nothing consumes them.
- **Dead code:** `components/ProjectsCard.tsx`, `components/TechBadge.tsx`, `components/sections/AboutStack.tsx`, `components/sections/TechStack.tsx`, `components/ui/{ThemeToggle,Input,Textarea,BackToTop,Reveal,button}.tsx`, `hooks/useAnimation.ts`, `hooks/useMediaQuery.ts`, `lib/theme.tsx`, `lib/techIcons.ts` are unreachable from the live tree (verify with a reference search before touching). `layout/index.ts` re-exports Footer/Navbar from `sections/` — a slightly odd barrel, used only for imports that actually come from `sections/` directly.
- **Duplicated content sections:** `About` vs `AboutStack` and `Skills` vs `TechStack` present the same resume info twice with divergent styling; the live tree uses the vanilla-CSS versions.
- **Unused dependencies:** `zustand`, `axios`, `date-fns`, `@tanstack/react-query`, `@tanstack/react-table`, `@fontsource-variable/geist`, `tw-animate-css` (Geist font is not loaded; Google Fonts are). Leftovers from the template/redesign.
- **`lib/theme.tsx` is a stub:** `resolvedTheme` is hardcoded to `"light"` and `setTheme` always writes `"light"`. `ThemeToggle` is dead code, so no user-visible bug — but treat the file as non-functional.
- **Inconsistent formatting:** no Prettier, single vs double quotes mixed, semicolons mostly present. Match per-file style rather than "fixing" it.
- **Duplicate lockfiles** (`pnpm-lock.yaml` + `package-lock.json`) and Node version not pinned.

**Areas requiring extra caution:**
- **`Navbar.tsx` indicator math** (bounding-rect based underline) depends on `linkRefs`/`linksContainerRef` and resize listeners; changing nav markup (adding/removing links, altering padding) can silently break the underline position or leave `opacity: 0`. Keep the `nav-links` container and link refs intact.
- **Section id ↔ `sectionMap` ↔ `useScrollSection` name alignment:** Hero registers `"Home"` while others register `"About"/"Skills"/"Projects"/"Experience"/"Contact"`. Mismatches cause a dead nav highlight. If you add/rename a section, update all three places.
- **Build-time environment:** `prebuild` (SEO generation) reads `VITE_SITE_URL` from env files/default; `index.html` uses `%VITE_SITE_URL%` placeholders. Changing deployment domain requires updating `.env.production` + `.env.example`.
- **Don't "fix" the build hacks** (`force-close` in `vite.config.ts`, `&& exit 0` in the build script) without verifying a full `pnpm build` still exits cleanly — they mask a flaky prerender step.
- **The 404 page** currently uses Tailwind utilities and will look broken if you start relying on it visually; prerendered `dist/404/index.html` exists, so the route works, but styling is suspect. Confirm with the human before "fixing" it so you don't trigger a styling-system debate.
- **Content accuracy:** this is a personal resume site — names, dates, statistics (e.g. `1,000+ hours`, `30+ projects`, `Cum Laude`), links, and the resume PDF are factual claims. Do not invent or "improve" facts. Copy changes should come from the user.
