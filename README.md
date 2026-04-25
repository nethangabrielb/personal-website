# Nethan Bagasbas — Personal Portfolio

🌐 [nethangabrielb.dev](https://nethangabrielb.dev)

A personal portfolio showcasing my experience, projects, and tech stack as a Full-Stack Developer based in the Philippines.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8 (Rolldown)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Animations:** Motion (Framer Motion)
- **Forms & Validation:** React Hook Form + Zod
- **State Management & Data Fetching:** Context API, TanStack Query
- **Icons:** React Simple Icons & Lucide React
- **UI Components:** Custom components built with Radix UI / Shadcn

## 📂 Sections

1. **Hero** — Introduction and background
2. **Tech Stack** — Languages, frameworks, and tools I use daily
3. **Experience** — Professional and freelance work (Syntactics Inc., Freelance)
4. **Projects** — Highlights including **Calibrate AI** and **Chirper**
5. **Contact** — Functional contact form

## ✨ Features

- Scroll-triggered animations via Framer Motion
- Responsive across mobile, tablet, and desktop
- Prerendered HTML for SEO via `vite-prerender-plugin`
- Strict TypeScript environment

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/nethangabrielb/personal-website.git
   cd personal-website
```

2. Install dependencies:
```bash
   pnpm install
```

3. Set up environment variables:
```bash
   cp .env.example .env.local
```
   Set `VITE_CONTACT_FORM_ENDPOINT` if you want to test the contact form.

4. Start the development server:
```bash
   pnpm dev
```

   Running at `http://localhost:5173/`

## 📦 Project Structure

```text
src/
├── components/
│   ├── sections/    # Hero, TechStack, Experience, Projects, Contact
│   ├── ui/          # Reusable UI components
│   └── layout/      # Navbar, Footer
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and providers
├── pages/           # Page components
├── styles/          # Global styles and Tailwind entry point
└── types/           # Shared TypeScript definitions
```

## 🤝 Let's Connect

Reach out through the contact form on the site or find me on [GitHub](https://github.com/nethangabrielb) and [LinkedIn](https://linkedin.com/in/nethangabrielb).
