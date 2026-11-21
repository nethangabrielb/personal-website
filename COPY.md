# COPY.md — nethangabrielb.dev

## Navigation

- Brand: `Nethan Bagasbas`
- Links: `Work` (`/#work`) · `About` (`/about`)

---

## Homepage (`/`)

### Opening

**Headline (Fraunces):**
Full-stack developer building structured web applications and backend systems.

**Body (Geist):**
I'm Nethan Bagasbas, a Junior Web Developer at Inventra Inc. in Cagayan de Oro. I work across TypeScript, React, Next.js, and Node.js—with a focus on clean data models, strict API contracts, and interfaces that stay out of the user's way.

**Inline links (no buttons, no pills):**
`contact@nethangabrielb.dev` _(click to copy, swaps to `Copied` for 1.5s)_ · `GitHub` · `LinkedIn` · `Resume`

---

### Selected work

#### 1. DevLog (`2026`)

Developer activity tracker that turns coding sessions, DSA problems, and reading logs into streak analytics and automated daily reports. Built as a pnpm monorepo pairing a NestJS API with BullMQ and Redis background workers.

`NestJS · React · TypeScript · MongoDB · BullMQ · Redis · TanStack Query`

Links: `Read case study →` (`/work/devlog`) · `Live ↗` (`https://developer-logs.netlify.app`) · `Source ↗` _(preserve existing GitHub URL)_

#### 2. Calibrate AI (`2026`)

Job application pipeline tracker and resume evaluator built around deterministic LLM outputs. Uses Zod runtime schemas, an anti-inflation scoring rubric, and Upstash Redis rate limiting to keep Mistral AI evaluations predictable and bounded.

`Next.js · TypeScript · PostgreSQL · Prisma · Mistral AI · Upstash Redis · Better Auth`

Links: `Read case study →` (`/work/calibrate-ai`) · `Live ↗` (`https://calibrate-ai.vercel.app`) · `Source ↗` _(preserve existing GitHub URL)_

#### 3. Chirper (`2025 – 2026`)

Real-time social publishing platform with direct messaging and cursor-paginated feeds. Structured as a pnpm monorepo with a layered Express 5 API containerized in Docker on DigitalOcean and a Next.js frontend on Vercel.

`Next.js · Express 5 · TypeScript · PostgreSQL · Prisma · Socket.IO · Docker`

Links: `Read case study →` (`/work/chirper`) · `Live ↗` (`https://chirper-frontend.vercel.app`) · `Source ↗` _(preserve existing GitHub URL)_

---

### Experience

- **Oct 2026 — Present** | **Junior Web Developer, Inventra Inc.** — Cagayan de Oro
  Maintaining existing React applications and building new Next.js frontend features integrated with Firebase services (Firestore, Auth, Cloud Functions, and Storage). Managing application state and responsive styling with Context API, Zustand/Redux, and Tailwind CSS while handling debugging, code reviews, and daily sprint coordination.

- **Sep 2025 — Dec 2025** | **Freelance Web Developer** — Remote
  Designed and shipped SEO-focused client websites end-to-end from technical specification to production deployment using Astro, Sanity CMS, React, and Tailwind CSS.

- **Jun 2025 — Aug 2025** | **Full-Stack Developer Intern, Syntactics Inc.** — Cagayan de Oro
  Contributed to enterprise web application modules across React, Next.js, and Laravel. Refactored shared frontend hooks and component boundaries, implemented REST API endpoints and file upload workflows, and shipped changes through team code reviews.

### Education

- **2022 — 2026** | **B.S. Computer Science, USTP-CDO**
  Graduated Cum Laude. Computer Science Best Thesis Award and 4-time Dean's Lister.

- **2023 — 2025** | **The Odin Project**
  Completed the full-stack JavaScript curriculum through project-driven work across TypeScript, React, Node.js, relational databases, and authentication.

---

### Footer (Single Row)

- Left: `Nethan Bagasbas · Cagayan de Oro, PH`
- Right: `contact@nethangabrielb.dev` · `GitHub` · `LinkedIn`

---

## Case Study Pages (`/work/[slug]`)

### `/work/devlog` — DevLog

- **Subtitle:** Developer telemetry, streak aggregation, and scheduled daily reports in a TypeScript monorepo.
- **Metadata row:** `Jul – Aug 2026` · `NestJS, React, MongoDB, BullMQ, Redis` · `Live ↗` · `Source ↗`
- **Problem:** Developer logs usually stay trapped in scattered notes or GitHub commit graphs that miss DSA practice, technical reading, and snippet capture. I wanted one place to log sessions across categories and automatically summarize momentum without manual weekly reviews.
- **Interactive Architecture Diagram Nodes:**
    1. `React SPA + TanStack Query` — _"Client queries share strict request/response DTOs from a workspace package, catching contract drift at compile time rather than runtime."_
    2. `NestJS REST API` — _"Enforces JWT and Google OAuth 2.0 auth with scoped session guards before any telemetry write or aggregation query executes."_
    3. `MongoDB` — _"Flexible document schemas fit heterogeneous activity logs (sessions, DSA problems, articles, snippets) without sparse relational join tables."_
    4. `Redis + BullMQ Workers` — _"Decouples daily report compilation and streak recalculation from HTTP request latency, allowing retries if a scheduled job fails."_
- **Key Decisions:**
    - **Shared pnpm workspace contracts:** Keeping API DTOs and client validation types in one monorepo eliminated silent payload mismatches between the NestJS backend and React SPA.
    - **Asynchronous report generation:** Offloading streak rollups and daily report assembly to BullMQ workers kept logging endpoints snappy regardless of history depth.
- **Gallery:** Render the remaining salvaged DevLog UI screenshots vertically in `--surface` breakout mats with short 1-line captions underneath (no tabs).

### `/work/calibrate-ai` — Calibrate AI

- **Subtitle:** Schema-validated resume evaluation and job application pipeline tracker.
- **Metadata row:** `Mar – Jun 2026` · `Next.js, PostgreSQL, Prisma, Mistral AI, Upstash Redis` · `Live ↗` · `Source ↗`
- **Problem:** Most LLM resume tools return uncalibrated praise in free-form markdown that breaks UI layouts and inflates match scores. Calibrate AI treats LLM inference as an untrusted external boundary that must pass strict structural and scoring rules before reaching the database.
- **Interactive Architecture Diagram Nodes:**
    1. `Next.js App Router + Better Auth` — _"Handles authenticated application pipelines and resume uploads with server-side session checks."_
    2. `Upstash Redis Rate Limiter` — _"Sliding-window limits guard every inference endpoint against accidental retries and burst token spend."_
    3. `Mistral AI Inference` — _"Evaluates resumes against pasted job requirements using an explicit anti-inflation scoring rubric."_
    4. `Zod Validation Gate` — _"Parses every LLM payload against runtime schemas at the boundary; malformed outputs fail fast instead of corrupting stored evaluations."_
    5. `PostgreSQL + Prisma` — _"Stores application stages and content-hashed resume versions to detect duplicates and preserve historical scores."_
- **Key Decisions:**
    - **Anti-inflation rubric + Zod gate:** Constraining the model to structured JSON with calibrated scoring tiers turned vague feedback into comparable, queryable records.
    - **Content-hashed resume versioning:** Hashing uploaded resumes prevents duplicate storage and ties every job evaluation to the exact resume revision submitted.
- **Gallery:** Remaining Calibrate AI screenshots in clean vertical breakout mats.

### `/work/chirper` — Chirper

- **Subtitle:** Real-time social platform with layered Express 5 services and containerized deployment.
- **Metadata row:** `Oct 2025 – Mar 2026` · `Next.js, Express 5, PostgreSQL, Prisma, Socket.IO, Docker` · `Live ↗` · `Source ↗`
- **Problem:** Social feeds degrade quickly when offset pagination meets live writes and tightly coupled route handlers. Chirper was built to practice clean backend boundaries, stable feed latency, and real-time event fan-out across decoupled frontend and backend hosts.
- **Interactive Architecture Diagram Nodes:**
    1. `Next.js Client (Vercel)` — _"Renders timelines, threads, and direct message views while maintaining a persistent Socket.IO connection for live events."_
    2. `Express 5 Layered API (Docker / DigitalOcean)` — _"Separates HTTP transport, business logic, and data access via Controller → Service → Repository layers."_
    3. `Passport.js + Google OAuth` — _"Manages session authentication shared across REST endpoints and WebSocket handshakes."_
    4. `Socket.IO Event Bus` — _"Delivers direct messages and live engagement updates without client polling."_
    5. `PostgreSQL + Prisma` — _"Serves indexed cursor-based pagination queries so feed scroll latency stays flat as post volume grows."_
- **Key Decisions:**
    - **Controller → Service → Repository separation:** Keeping Express route handlers thin made database queries and domain logic independently testable.
    - **Cursor-based pagination:** Avoids duplicate or skipped posts when new items arrive mid-scroll—a common failure mode of offset pagination.
- **Gallery:** Remaining Chirper screenshots in clean vertical breakout mats.

---

## About Page (`/about`)

### Intro (with portrait)

Pair your portrait (clean `rounded-md` frame, subtle `1px` `--border`, no `++` crosshairs, no GPS coordinates) beside a concise bio:

> I'm a software developer from Nasipit, Agusan del Norte, currently based in Cagayan de Oro. I studied Computer Science at USTP—graduating Cum Laude with the Best Thesis Award for work on lightweight plant disease severity estimation—while building full-stack fundamentals through The Odin Project.
>
> Most of my work sits at the boundary between frontend craft and backend reliability: TypeScript monorepos, relational and document schemas, real-time sockets, and AI workflows that behave deterministically in production.

### Stack (Clean 4-Row Typographic Table — No Pills, No Filter Tabs)

- **Frontend** — React 19, Next.js, Astro, TypeScript, Tailwind CSS, TanStack Query, Zustand, Redux, React Hook Form
- **Backend & Data** — Node.js, NestJS, Express 5, Firebase, PostgreSQL, MongoDB, Prisma, Redis, BullMQ, Socket.IO, Zod
- **Infrastructure** — Docker, DigitalOcean, Vercel, pnpm Workspaces, Git, Linux / SSH
- **AI & Research** — Vercel AI SDK, Mistral AI, Structured LLM Outputs, Python, TensorFlow, OpenCV, llama.cpp

### Colophon

Set in Fraunces, Geist, and IBM Plex Mono. Built with Astro, MDX, and Tailwind CSS.
