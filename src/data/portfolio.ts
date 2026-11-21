import type {
  CredentialItem,
  EducationEntry,
  ExperienceEntry,
  ExternalLink,
  NavSection,
  ProjectEntry,
  StackCategory,
} from "@/types";

export const IDENTITY = {
  monogram: "N",
  name: "Nethan Bagasbas",
  fullName: "Nethan Gabriel B. Bagasbas",
  role: "Full-Stack Developer",
  status: "Junior Web Developer @ Inventra Inc.",
  statusPeriod: "Oct 2026 – Present",
  email: "contact@nethangabrielb.dev",
  resumeUrl: "/bagasbas-resume.pdf",
  githubUrl: "https://github.com/nethangabrielb",
  linkedinUrl: "https://linkedin.com/in/nethangabrielb",
  coordinates: "08°29'N 124°39'E",
  shortLocation: "Cagayan de Oro, PH",
  location: "Cagayan de Oro / Nasipit, PH",
  headlineLead: "Full-stack developer building ",
  headlineEmphasis: "resilient backends",
  headlineTail: " and tactile web applications.",
  portrait: {
    src: "/hero-me-new-768.webp",
    srcSet:
      "/hero-me-new-540.webp 540w, /hero-me-new-768.webp 768w, /hero-me-new.webp 1086w",
    width: 768,
    height: 1024,
    alt: "Portrait of Nethan Gabriel Bagasbas",
  },
  bio: "I work across TypeScript, React, and Node.js, with an emphasis on backend integrity, clear contracts, and interfaces that hold up in daily use. BS Computer Science, Cum Laude, Best Thesis Award.",
  aboutSummary:
    "I build software end to end, with an emphasis on backend integrity, strict contracts, and clean data models.",
  colophon:
    "Set in Fraunces, Geist and IBM Plex Mono · Built with React, TypeScript and Vite",
} as const;

export const NAV_SECTIONS: NavSection[] = [
  { id: "overview", index: "00", label: "Overview", shortcut: "0" },
  { id: "work", index: "01", label: "Work", shortcut: "1" },
  { id: "experience", index: "02", label: "Experience", shortcut: "2" },
  { id: "stack", index: "03", label: "Stack", shortcut: "3" },
  { id: "contact", index: "04", label: "Contact", shortcut: "4" },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    index: "01",
    label: "Current role",
    value: "Inventra Inc.",
    sub: "Junior Web Developer · Oct 2026",
  },
  {
    index: "02",
    label: "Degree",
    value: "B.S. Computer Science",
    sub: "USTP-CDO · Cum Laude (2026)",
  },
  {
    index: "03",
    label: "Honors",
    value: "Best Thesis Award",
    sub: "Dean's List · 4 Semesters",
  },
  {
    index: "04",
    label: "Foundation",
    value: "1,000+ hours",
    sub: "30+ shipped Odin projects",
  },
];

export const QUICK_LINKS: ExternalLink[] = [
  {
    label: "GitHub",
    value: "github.com/nethangabrielb",
    href: "https://github.com/nethangabrielb",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nethangabrielb",
    href: "https://linkedin.com/in/nethangabrielb",
    external: true,
  },
  {
    label: "Resume",
    value: "bagasbas-resume.pdf",
    href: "/bagasbas-resume.pdf",
    external: true,
  },
  {
    label: "Email",
    value: "contact@nethangabrielb.dev",
    href: "mailto:contact@nethangabrielb.dev",
    external: false,
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    number: "01",
    slug: "devlog",
    title: "DevLog",
    date: "Jul 2026 – Aug 2026",
    domainUrl: "developer-logs.netlify.app",
    tagline: "Monorepo developer telemetry, streak analytics, and BullMQ daily reports",
    summary:
      "Developer activity tracker that logs coding sessions across projects, DSA problems, articles, and snippets, transforming raw telemetry into streaks, visual analytics, and automated daily reports.",
    architecture: [
      "Architected as a pnpm monorepo with a decoupled NestJS REST API and React SPA sharing strict end-to-end TypeScript contracts.",
      "Implemented JWT and Google OAuth 2.0 authentication with scoped session guards.",
      "Engineered asynchronous daily report generation and streak aggregation workers backed by BullMQ, Redis, and MongoDB.",
    ],
    blueprint: [
      {
        tier: "Client & contracts",
        nodes: [
          {
            name: "React 19 SPA",
            detail: "TanStack Query cache, session timer & analytics charts",
          },
          {
            name: "Shared Types Package",
            detail: "pnpm workspace end-to-end DTO & schema contracts",
          },
        ],
      },
      {
        tier: "API & auth gateway",
        nodes: [
          {
            name: "NestJS REST API",
            detail: "Modular controllers, guards & activity aggregation endpoints",
          },
          {
            name: "JWT + Google OAuth",
            detail: "Stateless token verification & OAuth 2.0 identity flow",
          },
        ],
      },
      {
        tier: "Data & async workers",
        nodes: [
          {
            name: "BullMQ + Redis",
            detail: "Background job queue scheduling daily report compilation",
          },
          {
            name: "MongoDB",
            detail: "Document store for time logs, DSA entries, snippets & streaks",
          },
        ],
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "BullMQ",
      "Redis",
      "TanStack Query",
    ],
    screenshots: [
      {
        src: "/devlog.webp",
        label: "Overview dashboard",
        width: 960,
        height: 501,
        srcSet:
          "/devlog-480.webp 480w, /devlog-768.webp 768w, /devlog.webp 960w",
      },
      {
        src: "/devlog-1.webp",
        label: "Activity sessions",
        width: 960,
        height: 503,
        srcSet:
          "/devlog-1-480.webp 480w, /devlog-1-768.webp 768w, /devlog-1.webp 960w",
      },
      {
        src: "/devlog-2.webp",
        label: "Analytics and streaks",
        width: 960,
        height: 498,
        srcSet:
          "/devlog-2-480.webp 480w, /devlog-2-768.webp 768w, /devlog-2.webp 960w",
      },
      {
        src: "/devlog-3.webp",
        label: "Daily reports",
        width: 960,
        height: 501,
        srcSet:
          "/devlog-3-480.webp 480w, /devlog-3-768.webp 768w, /devlog-3.webp 960w",
      },
    ],
    links: {
      live: "https://developer-logs.netlify.app",
      github: "https://github.com/nethangabrielb/dev-log",
    },
  },
  {
    number: "02",
    slug: "calibrate-ai",
    title: "Calibrate AI",
    date: "Mar 2026 – Jun 2026",
    domainUrl: "calibrate-ai.vercel.app",
    tagline: "Schema-validated Mistral AI resume scoring and job pipeline tracker",
    summary:
      "AI-powered job application tracker featuring resume scoring, requirement match analysis, and deterministic Zod-validated JSON evaluation outputs powered by Mistral AI.",
    architecture: [
      "Enforced deterministic JSON evaluation payloads from Mistral AI using Zod runtime schemas and an anti-inflation scoring rubric.",
      "Protected LLM inference endpoints with sliding-window rate limiting backed by Upstash Redis.",
      "Modeled application pipelines and content-hashed resume versioning with duplicate detection in PostgreSQL and Prisma.",
    ],
    blueprint: [
      {
        tier: "Application & auth",
        nodes: [
          {
            name: "Next.js Full-Stack App",
            detail: "Server endpoints, pipeline board & match breakdown UI",
          },
          {
            name: "Better Auth",
            detail: "Authenticated user sessions & protected workspace routes",
          },
        ],
      },
      {
        tier: "Guard & AI inference",
        nodes: [
          {
            name: "Upstash Redis Limiter",
            detail: "Sliding-window rate limiting on evaluation requests",
          },
          {
            name: "Mistral AI + Zod Rubric",
            detail: "Anti-inflation prompt rubric parsed through strict Zod schemas",
          },
        ],
      },
      {
        tier: "Relational persistence",
        nodes: [
          {
            name: "Prisma ORM",
            detail: "Type-safe queries, migrations & relational constraints",
          },
          {
            name: "PostgreSQL",
            detail: "Applications, match scores & deduplicated resume versions",
          },
        ],
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Mistral AI",
      "Upstash Redis",
      "Better Auth",
    ],
    screenshots: [
      {
        src: "/calibrate-ai.webp",
        label: "Landing and overview",
        width: 960,
        height: 502,
        srcSet:
          "/calibrate-ai-480.webp 480w, /calibrate-ai-768.webp 768w, /calibrate-ai.webp 960w",
      },
      {
        src: "/calibrate-ai-1.webp",
        label: "Application tracker",
        width: 960,
        height: 497,
        srcSet:
          "/calibrate-ai-1-480.webp 480w, /calibrate-ai-1-768.webp 768w, /calibrate-ai-1.webp 960w",
      },
      {
        src: "/calibrate-ai-2.webp",
        label: "AI match analysis",
        width: 960,
        height: 498,
        srcSet:
          "/calibrate-ai-2-480.webp 480w, /calibrate-ai-2-768.webp 768w, /calibrate-ai-2.webp 960w",
      },
    ],
    links: {
      live: "https://calibrate-ai.vercel.app/",
      github: "https://github.com/nethangabrielb/calibrate-ai",
    },
  },
  {
    number: "03",
    slug: "chirper",
    title: "Chirper",
    date: "Oct 2025 – Mar 2026",
    domainUrl: "chirper-frontend.vercel.app",
    tagline: "Real-time Socket.IO social platform and Dockerized Express 5 backend",
    summary:
      "Full-stack social publishing platform with real-time messaging via Socket.IO, cursor-based feed pagination, Google OAuth, and decoupled Docker deployment on DigitalOcean.",
    architecture: [
      "Built as a pnpm monorepo separating a layered Express 5 API (Controller -> Service -> Repository) from a Next.js client on Vercel.",
      "Engineered real-time direct messaging and live event delivery over Socket.IO paired with Google OAuth via Passport.js.",
      "Containerized backend services with Docker on DigitalOcean alongside cursor-based pagination for stable feed latency.",
    ],
    blueprint: [
      {
        tier: "Edge client tier",
        nodes: [
          {
            name: "Next.js Client (Vercel)",
            detail: "Cursor-paginated timeline feeds & optimistic interactions",
          },
          {
            name: "Socket.IO Client",
            detail: "Persistent bidirectional channel for live chat & events",
          },
        ],
      },
      {
        tier: "Layered API & auth",
        nodes: [
          {
            name: "Express 5 Service",
            detail: "Controller -> Service -> Repository separation in pnpm monorepo",
          },
          {
            name: "Passport.js OAuth",
            detail: "Google OAuth authentication & session middleware",
          },
        ],
      },
      {
        tier: "Cloud runtime",
        nodes: [
          {
            name: "Socket.IO Event Bus",
            detail: "Room-scoped real-time message routing",
          },
          {
            name: "Docker on DigitalOcean",
            detail: "Containerized Linux production deployment",
          },
        ],
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Express 5",
      "Socket.IO",
      "Docker",
      "DigitalOcean",
      "Passport.js",
    ],
    screenshots: [
      {
        src: "/chirper.webp",
        label: "Timeline feed",
        width: 960,
        height: 498,
        srcSet:
          "/chirper-480.webp 480w, /chirper-768.webp 768w, /chirper.webp 960w",
      },
      {
        src: "/chirper-1.webp",
        label: "Thread and engagement",
        width: 960,
        height: 501,
        srcSet:
          "/chirper-1-480.webp 480w, /chirper-1-768.webp 768w, /chirper-1.webp 960w",
      },
      {
        src: "/chirper-2.webp",
        label: "Real-time messaging",
        width: 960,
        height: 497,
        srcSet:
          "/chirper-2-480.webp 480w, /chirper-2-768.webp 768w, /chirper-2.webp 960w",
      },
    ],
    links: {
      live: "https://chirper-frontend.vercel.app/",
      github: "https://github.com/nethangabrielb/chirper",
    },
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Junior Web Developer",
    company: "Inventra Inc.",
    date: "Oct 2026 – Present",
    location: "Remote",
    current: true,
    summary:
      "Maintaining React applications, expanding Next.js frontend features, and integrating backend-as-a-service workflows.",
    responsibilities: [
      "Maintain existing React applications and build new Next.js frontend features integrated with Firebase services (Firestore, Auth, Cloud Functions, and Storage).",
      "Manage application state and responsive UI styling using Context API, Zustand/Redux, and Tailwind CSS.",
      "Debug application issues, write clean modular code, participate in code reviews, and coordinate daily sprint progress with the engineering team.",
      "Research technical solutions via documentation and deliver production components within project timelines.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "Sep 2025 – Dec 2025",
    location: "Remote",
    summary:
      "Designed and delivered tailored web applications and marketing sites for client engagements.",
    responsibilities: [
      "Built and shipped SEO-focused websites from technical specification through production deployment.",
      "Owned end-to-end layout architecture, responsive styling, and asset optimization.",
      "Integrated headless CMS schemas for structured client content authoring.",
    ],
    stack: ["Astro", "Sanity CMS", "React", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Syntactics Inc.",
    date: "Jun 2025 – Aug 2025",
    location: "Cagayan de Oro City",
    summary:
      "Contributed to enterprise web systems and internal training platforms.",
    responsibilities: [
      "Developed and maintained enterprise web application modules across React, Next.js, and Laravel.",
      "Refactored shared frontend hooks and component boundaries to reduce duplication.",
      "Implemented REST API endpoints and file upload workflows, shipping changes through team code reviews.",
    ],
    stack: ["React", "Next.js", "Laravel", "Tailwind CSS"],
  },
];

export const EDUCATION: EducationEntry = {
  degree: "B.S. in Computer Science",
  institution:
    "University of Science and Technology of Southern Philippines (USTP)",
  shortInstitution: "USTP - Cagayan de Oro",
  date: "2026",
  location: "Cagayan de Oro City",
  honors: ["Cum Laude", "Best Thesis Award", "Dean's List (4 Semesters)"],
  details:
    "Graduated Cum Laude and received the Computer Science Best Thesis Award.",
  foundation: {
    title: "The Odin Project",
    metrics: "Late 2023 · 1,000+ hours · 30+ full-stack projects",
    description:
      "Built end-to-end full-stack foundations through intensive project-based engineering across TypeScript, React, Node.js, relational databases, and authentication.",
  },
};

export const STACK_SPECS: StackCategory[] = [
  {
    index: "01",
    id: "frontend",
    category: "Frontend",
    scope:
      "Client & SSR web interfaces, predictable state architecture, schema-validated forms, and accessible UI systems.",
    verifiedIn: ["Inventra Inc.", "DevLog", "Calibrate AI", "Chirper"],
    items: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vanilla CSS",
      "TanStack Query",
      "Zustand / Redux",
      "Context API",
      "Motion",
      "React Hook Form",
      "Vite",
    ],
  },
  {
    index: "02",
    id: "backend",
    category: "Backend & data",
    scope:
      "Layered REST APIs, Firebase BaaS workflows, relational & document modeling, background job queues, and WebSockets.",
    verifiedIn: ["Inventra Inc.", "DevLog", "Calibrate AI", "Chirper"],
    items: [
      "Node.js",
      "NestJS",
      "Express 5",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Zod",
    ],
  },
  {
    index: "03",
    id: "devops",
    category: "DevOps & infrastructure",
    scope:
      "Dockerized Linux deployments, pnpm monorepo workspaces, cloud VPS hosting, and automated edge delivery.",
    verifiedIn: ["DevLog", "Calibrate AI", "Chirper"],
    items: [
      "Docker",
      "DigitalOcean",
      "Vercel",
      "pnpm workspaces",
      "Git / GitHub",
      "Linux / SSH",
    ],
  },
  {
    index: "04",
    id: "ai",
    category: "AI & workflow",
    scope:
      "Deterministic schema-validated LLM inference, anti-inflation prompt rubrics, computer vision research, and agentic workflows.",
    verifiedIn: ["Calibrate AI", "USTP Thesis"],
    items: [
      "Vercel AI SDK",
      "Mistral AI",
      "Structured LLM outputs",
      "AI coding agents",
      "Python / TensorFlow",
      "llama.cpp",
      "OpenCV",
    ],
  },
];
