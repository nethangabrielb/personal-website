# COPY.md — nethangabrielb.dev

## Navigation

- Brand: `nethangabrielb.dev`
- Links: `Work` (`/#work`) · `About` (`/about`)

---

## Homepage (`/`)

### Opening

**H1:**
Nethan Bagasbas

**Intro:**
Full-stack developer at Inventra Inc. in Cagayan de Oro. Building TypeScript monorepos, background job queues, and real-time web applications.

**Actions:**
`contact@nethangabrielb.dev` _(click to copy, swaps to `Copied` for 1.5s)_ · `GitHub ↗` · `LinkedIn ↗` · `Resume ↗`

---

### Selected work

#### DevLog (`2026`)
- **Subtitle:** Developer telemetry, streak aggregation, and scheduled daily reports in a TypeScript monorepo.
- **Architecture note:** `pnpm monorepo · NestJS REST API · BullMQ + Redis daily digest workers`
- **Links:** `Read case study →` (`/work/devlog`) · `Live ↗` (`https://developer-logs.netlify.app`) · `Source ↗` (`https://github.com/nethangabrielb/dev-log`)

#### Calibrate AI (`2026`)
- **Subtitle:** Schema-validated resume evaluation and job application pipeline tracker.
- **Architecture note:** `Next.js App Router · Zod validation gate · Upstash Redis rate-limited Mistral AI`
- **Links:** `Read case study →` (`/work/calibrate-ai`) · `Live ↗` (`https://calibrate-ai.vercel.app`) · `Source ↗` (`https://github.com/nethangabrielb/calibrate-ai`)

#### Chirper (`2025 – 2026`)
- **Subtitle:** Real-time social platform with layered Express 5 services and containerized deployment.
- **Architecture note:** `pnpm monorepo · Layered Express 5 in Docker · Socket.IO + PostgreSQL cursors`
- **Links:** `Read case study →` (`/work/chirper`) · `Live ↗` (`https://chirper-frontend.vercel.app`) · `Source ↗` (`https://github.com/nethangabrielb/chirper`)

---

### Experience

- **Oct 2026 — Present** | **Junior Web Developer — Inventra Inc.** · Cagayan de Oro
  Maintaining React applications and building Next.js frontend features integrated with Firebase (Firestore, Auth, Cloud Functions, Storage). Managing state and responsive UI with Context API, Zustand/Redux, and Tailwind CSS alongside debugging, code reviews, and daily sprint coordination.

- **Sep 2025 — Dec 2025** | **Freelance Web Developer** · Remote
  Designed and shipped SEO-focused client websites end-to-end from technical specification to production deployment using Astro, Sanity CMS, React, and Tailwind CSS.

- **Jun 2025 — Aug 2025** | **Full-Stack Developer Intern — Syntactics Inc.** · Cagayan de Oro
  Contributed to enterprise web application modules across React, Next.js, and Laravel. Refactored shared frontend hooks and component boundaries, implemented REST API endpoints and file upload workflows, and shipped changes through team code reviews.

### Education

- **2022 — 2026** | **B.S. Computer Science — USTP-CDO**
  Graduated Cum Laude. Computer Science Best Thesis Award and 4-time Dean's Lister.

- **2023 — 2025** | **The Odin Project**
  Completed the full-stack JavaScript curriculum through project-driven work across TypeScript, React, Node.js, relational databases, and authentication.

---

### Footer

- Left: `Nethan Bagasbas · Cagayan de Oro, PH`
- Right: `contact@nethangabrielb.dev` · `GitHub` · `LinkedIn`

---

## Case Study Pages (`/work/[slug]`)

### `/work/devlog` — DevLog

- **Subtitle:** Developer telemetry, streak aggregation, and scheduled daily reports in a TypeScript monorepo.
- **Metadata row:** `Jul – Aug 2026` · `NestJS, React, MongoDB, BullMQ, Redis` · `Live ↗` · `Source ↗`
- **Context:** I wanted one place to track coding sessions, DSA practice, and technical reading instead of scattering notes across tools, and I used the build as a hands-on project to learn NestJS and MongoDB (NoSQL) from the ground up along the way.
- **Key Decisions:**
  - **Shared pnpm workspace contracts:** Keeping API DTOs and client validation types in one monorepo eliminated silent payload mismatches between the NestJS backend and React SPA.
  - **Asynchronous report generation:** Offloading streak rollups and daily report assembly to BullMQ workers kept logging endpoints snappy regardless of history depth.
  - **Accepted tradeoff:** Running Redis and BullMQ alongside MongoDB adds extra infrastructure overhead for a single-user tracker, kept deliberately to practice queue retries and async job boundaries.

### `/work/calibrate-ai` — Calibrate AI

- **Subtitle:** Schema-validated resume evaluation and job application pipeline tracker.
- **Metadata row:** `Mar – Jun 2026` · `Next.js, PostgreSQL, Prisma, Mistral AI, Upstash Redis` · `Live ↗` · `Source ↗`
- **Context:** Most LLM resume tools return uncalibrated praise in free-form markdown that breaks UI layouts and inflates match scores. Calibrate AI treats LLM inference as an untrusted external boundary that must pass strict structural and scoring rules before reaching the database.
- **Key Decisions:**
  - **Anti-inflation rubric + Zod gate:** Constraining the model to structured JSON with calibrated scoring tiers turned vague feedback into comparable, queryable records.
  - **Content-hashed resume versioning:** Hashing uploaded resumes prevents duplicate storage and ties every job evaluation to the exact resume revision submitted.
  - **Accepted tradeoff:** Strict Zod schema rejection means malformed LLM payloads fail immediately and require a retry rather than falling back to unvalidated free-form text, prioritizing stored data integrity over partial output.

### `/work/chirper` — Chirper

- **Subtitle:** Real-time social platform with layered Express 5 services and containerized deployment.
- **Metadata row:** `Oct 2025 – Mar 2026` · `Next.js, Express 5, PostgreSQL, Prisma, Socket.IO, Docker` · `Live ↗` · `Source ↗`
- **Context:** Built as my final project for The Odin Project's Odin-Book assignment. Rather than stopping at the base brief, I used it to push further: splitting a layered Express 5 API in Docker from a Next.js frontend, adding real-time direct messaging over Socket.IO, and implementing cursor-based feed pagination.
- **Key Decisions:**
  - **Controller → Service → Repository separation:** Keeping Express route handlers thin made database queries and domain logic independently testable.
  - **Cursor-based pagination:** Avoids duplicate or skipped posts when new items arrive mid-scroll—a common failure mode of offset pagination.
  - **Accepted tradeoff:** Hosting the Next.js frontend on Vercel separately from the Dockerized Express 5 and Socket.IO API on DigitalOcean adds cross-origin session and WebSocket handshake complexity compared to a monolith, accepted to practice decoupled production deployments.

---

## About Page (`/about`)

### Bio
> I'm a software developer from Nasipit, Agusan del Norte, currently based in Cagayan de Oro. I studied Computer Science at USTP—graduating Cum Laude with the Best Thesis Award for work on lightweight plant disease severity estimation—while building full-stack fundamentals through The Odin Project.
>
> Most of my work sits at the boundary between frontend craft and backend reliability: TypeScript monorepos, relational and document schemas, real-time sockets, and AI workflows that behave deterministically in production.

### Stack
- **Frontend** — React 19, Next.js, Astro, TypeScript, Tailwind CSS, TanStack Query, Zustand, Redux, React Hook Form
- **Backend & Data** — Node.js, NestJS, Express 5, Firebase, PostgreSQL, MongoDB, Prisma, Redis, BullMQ, Socket.IO, Zod
- **Infrastructure** — Docker, DigitalOcean, Vercel, pnpm Workspaces, Git, Linux / SSH
- **AI & Research** — Vercel AI SDK, Mistral AI, Structured LLM Outputs, Python, TensorFlow, OpenCV, llama.cpp

### Colophon
Set in Geist and IBM Plex Mono. Built with Astro, MDX, and Tailwind CSS.
