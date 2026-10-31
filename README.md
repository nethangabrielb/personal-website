# Nethan Bagasbas - Personal Portfolio

Website: [nethangabrielb.dev](https://nethangabrielb.dev)

Interactive engineering portfolio for **Nethan Gabriel B. Bagasbas** (**Junior Web Developer @ Inventra Inc.**), built with React 19, TypeScript, Vite 8, Motion, and a dual-theme tactile Bento CSS design system.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.7 (strict mode)
- **Bundler:** Vite 8 (Rolldown) + `vite-prerender-plugin`
- **Styling:** Custom Vanilla CSS Design System (`Dark Atelier` & `Warm Daylight` themes)
- **Typography:** Geist Variable (geometric UI & body), Fraunces (editorial display & emphasis), IBM Plex Mono (telemetry, badges, chips, shortcuts)
- **Motion & Icons:** Motion v12 (`motion/react`) + Lucide React
- **Routing:** React Router v7
- **Forms & Validation:** React Hook Form + Zod + Sonner

## Key Features

- **Floating Precision Dock & Live PHT Clock:** Spring-animated section pill navigation (`0`-`4` shortcuts), live `Asia/Manila` clock, and persistent Dark/Light theme switcher (`T` shortcut).
- **`⌘K` Command Palette:** Keyboard-driven command palette (`⌘K` / `Ctrl+K`) to copy email, open Resume PDF, switch themes, jump across sections, or launch live project deployments.
- **Interactive Dual-Mode Project Workbench:** Each flagship project (**DevLog**, **Calibrate AI**, **Chirper**) switches seamlessly between named **UI Preview** screenshots (with fullscreen keyboard-navigable Lightbox) and a 3-tier **System Architecture Blueprint**.
- **Interactive Stack & Systems Matrix:** Filterable capability matrix across Frontend, Backend & Data, DevOps & Infrastructure, and AI & Workflow with production verification tags.

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Configure environment variables:
```bash
cp .env.example .env.local
```

3. Start the dev server:
```bash
pnpm dev
```

## Project Structure

```text
src/
├── components/
│   ├── layout/      # RootLayout, FloatingDock
│   ├── sections/    # Overview (Hero Bento), Projects, Experience, Skills, Contact
│   └── ui/          # CommandPalette, ProjectCarousel (UI Preview + Blueprint stage)
├── data/
│   └── portfolio.ts # Centralized typed copy, blueprints, experience, education, stack
├── hooks/
│   └── useContactForm.ts
├── pages/
│   ├── Home.tsx     # Scroll-spy, theme manager, shortcuts (0-4, T, Cmd+K)
│   └── NotFoundPage.tsx
├── styles/
│   ├── globals.css
│   ├── base.css     # Dual-theme tokens, ambient dot canvas, tactile primitives
│   ├── layout.css   # Floating dock, section headers, Command Palette modal
│   ├── views.css    # Hero Bento, dual-mode project stage, lightbox, timeline, contact
│   └── responsive.css
└── types/
    └── index.ts
```
