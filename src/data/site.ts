export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  location: string;
  description: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution?: string;
  description: string;
}

export interface StackRow {
  category: string;
  items: string;
}

export const SITE = {
  name: "Nethan Bagasbas",
  fullName: "Nethan Gabriel B. Bagasbas",
  siteUrl: "https://nethangabrielb.dev",
  location: "Cagayan de Oro, PH",
  email: "contact@nethangabrielb.dev",
  githubUrl: "https://github.com/nethangabrielb",
  linkedinUrl: "https://linkedin.com/in/nethangabrielb",
  resumeUrl: "/bagasbas-resume.pdf",
  defaultTitle: "Nethan Bagasbas",
  defaultDescription:
    "Full-stack developer building TypeScript monorepos, background job queues, and real-time web applications.",
  ogImage: "/personal-website.png",
} as const;

export const PORTRAIT = {
  src: "/hero-me-new-768.webp",
  srcSet:
    "/hero-me-new-540.webp 540w, /hero-me-new-768.webp 768w, /hero-me-new.webp 1086w",
  width: 768,
  height: 1024,
  alt: "Portrait of Nethan Gabriel Bagasbas",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Oct 2026 — Present",
    role: "Junior Web Developer",
    company: "Inventra Inc.",
    location: "Cagayan de Oro",
    description:
      "Maintaining React applications and building Next.js frontend features integrated with Firebase (Firestore, Auth, Cloud Functions, Storage). Managing state and responsive UI with Context API, Zustand/Redux, and Tailwind CSS alongside debugging, code reviews, and daily sprint coordination.",
  },
  {
    period: "Sep 2025 — Dec 2025",
    role: "Freelance Web Developer",
    location: "Remote",
    description:
      "Designed and shipped SEO-focused client websites end-to-end from technical specification to production deployment using Astro, Sanity CMS, React, and Tailwind CSS.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Full-Stack Developer Intern",
    company: "Syntactics Inc.",
    location: "Cagayan de Oro",
    description:
      "Contributed to enterprise web application modules across React, Next.js, and Laravel. Refactored shared frontend hooks and component boundaries, implemented REST API endpoints and file upload workflows, and shipped changes through team code reviews.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2022 — 2026",
    title: "B.S. Computer Science",
    institution: "USTP-CDO",
    description:
      "Graduated Cum Laude. Computer Science Best Thesis Award and 4-time Dean's Lister.",
  },
  {
    period: "2023 — 2025",
    title: "The Odin Project",
    description:
      "Completed the full-stack JavaScript curriculum through project-driven work across TypeScript, React, Node.js, relational databases, and authentication.",
  },
];

export const ABOUT = {
  paragraphs: [
    "I'm a software developer from Nasipit, Agusan del Norte, currently based in Cagayan de Oro. I studied Computer Science at USTP—graduating Cum Laude with the Best Thesis Award for work on lightweight plant disease severity estimation—while building full-stack fundamentals through The Odin Project.",
    "Most of my work sits at the boundary between frontend craft and backend reliability: TypeScript monorepos, relational and document schemas, real-time sockets, and AI workflows that behave deterministically in production.",
  ],
  stack: [
    {
      category: "Frontend",
      items:
        "React 19, Next.js, Astro, TypeScript, Tailwind CSS, TanStack Query, Zustand, Redux, React Hook Form",
    },
    {
      category: "Backend & Data",
      items:
        "Node.js, NestJS, Express 5, Firebase, PostgreSQL, MongoDB, Prisma, Redis, BullMQ, Socket.IO, Zod",
    },
    {
      category: "Infrastructure",
      items: "Docker, DigitalOcean, Vercel, pnpm Workspaces, Git, Linux / SSH",
    },
    {
      category: "AI & Research",
      items:
        "Vercel AI SDK, Mistral AI, Structured LLM Outputs, Python, TensorFlow, OpenCV, llama.cpp",
    },
  ] satisfies StackRow[],
  colophon:
    "Set in Geist and IBM Plex Mono. Built with Astro, MDX, and Tailwind CSS.",
} as const;
