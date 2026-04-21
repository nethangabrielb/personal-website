# Vite 8 Portfolio Template

A personal frontend template built with Vite 8, React 19, TypeScript, and Tailwind CSS v4.

## Stack

| Layer | Library |
|-------|---------|
| Bundler | Vite 8 (Rolldown) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Animation | Motion (Framer Motion) |
| Forms | React Hook Form + Zod |
| Path alias | `@/` → `src/` |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Button, Input, Textarea, Reveal, ThemeToggle
│   └── layout/      # RootLayout, Navbar, Footer
├── hooks/
│   ├── useAnimation.ts     # useReveal (scroll-triggered)
│   ├── useMediaQuery.ts
│   └── useContactForm.ts   # RHF + Zod contact form
├── lib/
│   ├── theme.tsx    # ThemeProvider + useTheme hook
│   └── utils.ts     # cn() helper
├── pages/
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   └── globals.css  # Design tokens + Tailwind base
└── types/
    └── index.ts     # Shared types (Project, NavItem, etc.)
```

## Theming

Design tokens live in `src/styles/globals.css` as CSS custom properties.
Toggle between light/dark with `useTheme()` from `@/lib/theme`.

```ts
const { resolvedTheme, setTheme } = useTheme()
setTheme('dark') // 'light' | 'dark' | 'system'
```

## Animation

Use `<Reveal>` for scroll-triggered fade-ins:

```tsx
<Reveal delay={0.1} direction="up">
  <h1>Hello</h1>
</Reveal>
```

Use `useReveal()` directly for custom motion:

```ts
const { ref, isInView } = useReveal()
```

## Contact Form

Set `VITE_CONTACT_FORM_ENDPOINT` in `.env.local` (e.g. Formspree or Web3Forms URL).
Use the `useContactForm()` hook in any form component.

## Adding a Page

1. Create `src/pages/NewPage.tsx`
2. Add a route in `src/App.tsx`
3. Add a nav link in `src/components/layout/Navbar.tsx`

## Deployment

```bash
npm run build   # outputs to /dist
```

Deploy `/dist` to Vercel, Netlify, or any static host.
