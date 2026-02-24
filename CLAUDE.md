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
- `/` — About/credibility page (`src/app/page.tsx`) — mission, programs overview, network, contact
- `/program` — Programs page (`src/app/program/page.tsx`) — Summer Intensive details + application funnel + Fellowships

**Key components:**
- `src/components/navbar.tsx` — minimal top nav
- `src/components/sticky-apply.tsx` — fixed mobile "Apply" CTA
- `src/components/ui/` — shadcn/ui primitives (button, card, accordion, badge)

**Styling:** Tailwind v4 with `@tailwindcss/postcss`. CSS variables for theming defined in `src/app/globals.css`. shadcn/ui config in `components.json` (base color: neutral).

**Path aliases:** `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

## What This Site Is

TAISI (Toronto AI Safety Initiative) website. Two purposes, in order:

1. **Prove legitimacy.** People hear us pitch in class, then look us up. The site must make us look real and credible — not sell them. The selling happens in person.
2. **Funnel to apply.** Once they trust us, give them a clear path to the Summer Intensive application.

The site is NOT a sales funnel. It's a credibility check that happens to have an apply button.

Design docs live in `/docs/` — read these before making content or layout changes:
- `docs/01-site-purpose-and-goals.md` — audience, value prop, scope fence
- `docs/02-site-structure-and-style.md` — page structure, visual style, copy tone

## Key Constraints

- **No repeated information** — every piece of info stated exactly once across the site. If it's said on one page, don't say it on another.
- **Don't sell.** No urgency copy, no aggressive CTAs, no "apply now before it's too late." State what we do and let the credibility speak.
- **Mobile-first** — most traffic comes from QR codes on phones
- **Professional, not club-y** — think Anthropic/MATS, not hackathon
- **No scope creep** — no team page, no blog, no social links, no detailed curriculum
- Copy tone: direct, confident, informational, no jargon. NOT salesy.
