# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the repo root:

- `npm run dev` — local dev server (Next.js)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx shadcn add <component>` — add shadcn/ui components

## Architecture

Next.js 16 app with React 19, Tailwind CSS v4, and shadcn/ui (new-york style, RSC enabled).

**Pages** (App Router):
- `/` — Landing page (`src/app/page.tsx`) — the only page that matters, drives applications
- `/program` — Summer Intensive details (`src/app/program/page.tsx`)
- `/about` — About TAISI (`src/app/about/page.tsx`)

**Key components:**
- `src/components/navbar.tsx` — minimal top nav
- `src/components/sticky-apply.tsx` — fixed mobile "Apply" CTA
- `src/components/ui/` — shadcn/ui primitives (button, card, accordion, badge)

**Styling:** Tailwind v4 with `@tailwindcss/postcss`. CSS variables for theming defined in `src/app/globals.css`. shadcn/ui config in `components.json` (base color: neutral).

**Path aliases:** `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

## What This Site Is

TAISI (Toronto AI Safety Initiative) website. Single purpose: **drive applications to the Summer 2026 Intensive**. Everything serves this funnel.

Design docs live in `/docs/` — read these before making content or layout changes:
- `docs/01-site-purpose-and-goals.md` — audience, value prop, scope fence
- `docs/02-site-structure-and-style.md` — page structure, visual style, copy tone

## Key Constraints

- **Mobile-first** — most traffic comes from QR codes on phones
- **Professional, not club-y** — think Anthropic/MATS, not hackathon
- **No scope creep** — no team page, no blog, no social links, no detailed curriculum
- Copy tone: direct, confident, career-framed, no jargon
