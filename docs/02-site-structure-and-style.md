# TAISI Website — Structure & Style Guide

## Site architecture

Three pages. The landing page is self-contained — a visitor can learn everything they need and apply without ever clicking away. The other pages exist for credibility ("this org has depth") and for people who want to dig deeper.

### Pages

1. **`/` — Landing page** (the only page that matters)
2. **`/program` — Summer Intensive details**
3. **`/about` — About TAISI**

---

## Page 1: Landing page (`/`)

This page does ALL the work. Someone scans a QR code on their phone, lands here, and should be able to apply **the second they land on the page** — or keep scrolling for more info.

### Section 1: Hero

- **Headline:** Something punchy about the summer intensive. Copy TBD — needs to pass the "would a 2nd year CS student stop scrolling?" test. We'll iterate on this.
- **Subheadline:** 1–2 sentences. The value prop compressed. Placeholder: "A free, selective weekend intensive for Toronto undergrads. Build portfolio pieces, learn from researchers, break into one of the fastest-growing fields in AI."
- **CTA button:** "Apply Now" — big, obvious, high contrast. Visible immediately on load, no scrolling required.
- **Deadline badge:** "Applications close April 5th" — persistent, visible.
- **Credibility line:** Small text under the CTA or near the headline. "Funded by Kairos. Hosted at Trajectory Labs."

> **Mobile note:** Hero must work in a single phone screen. Headline + subheadline + CTA + deadline all visible without scrolling.

> **Copy note:** All copy is placeholder / directional. Goal is ship the site with the right sections and layout — copy gets iterated after.

### Section 2: What you get (value prop)

3–4 cards or a clean list. Bold title + 1 sentence each.

- **Research skills** — Hands-on workshops where you build real AI safety evals and research artifacts.
- **Legible evidence of those skills** — Walk away with evals on your GitHub and published write-ups. Tangible proof you can do this work.
- **Network** — Meet AIS researchers over lunch. Get connected to a field that's hiring.
- **A path forward** — Strong participants may continue with research mentors after the program. (Soft promise — wording TBD.)

### Section 3: How it works (program structure)

Simple, visual. Could be a timeline or 4-column layout.

- **Format:** 4 weekend days across 4 weeks (1 day/week)
- **Morning:** AI safety fundamentals — understand the field
- **Lunch:** Catered. AIS researchers join.
- **Afternoon:** Technical workshops — build artifacts, learn tools
- **Where:** Trajectory Labs, a dedicated AI safety research space in Toronto
- **Cost:** Free. We cover food and API credits.

> "Designed for students with existing commitments. Keep your internship."

### Section 4: Credibility block

Not a "partners" section. Quiet confidence woven into the page.

- **Text line:** "TAISI is part of the Kairos-funded network of AI safety groups, alongside groups at Oxford, Harvard, MIT, and Cornell."
- **Track record line:** "We've run X fellowships with Y participants at U of T." (Fill in real numbers.)

This section should feel natural, not desperate.

### Section 5: FAQ (objection handling)

Accordion. 4–6 questions max.

- "What is AI safety?" → 2 sentences. Career framing, not moral framing.
- "Do I need to know about AI safety already?" → No. This is an on-ramp.
- "I have an internship / other commitments." → Weekends only, 1 day/week.
- "Is this free?" → Yes. Food and API credits included.
- "How selective is this?" → Limited spots, applications reviewed on a rolling basis.
- "What do I need to apply?" → Be a Toronto-area undergrad who can code. Short application, takes 5 minutes.

### Section 6: Final CTA

Repeat the apply button + deadline.

---

## Page 2: Summer Intensive (`/program`)

Expands on what the landing page summarizes.

- **Program overview** — fuller description of the 4-week structure
- **What you'll learn** — more specific but not a full curriculum. E.g., "Topics may include: building AI evaluations with Inspect, analyzing research impact, understanding alignment approaches."
- **Who it's for** — "Technical undergrads in the Toronto area. If you can code, you're ready."
- **Logistics** — dates (TBD), location (Trajectory Labs + address/map), time commitment
- **What past participants have done** — examples from past fellowships if available, skip if not
- **Apply CTA** at the bottom

## Page 3: About TAISI (`/about`)

Exists for credibility. Brief.

- **What TAISI is** — 2–3 sentences. Student group at U of T, focused on AI safety, part of Kairos network.
- **What we do** — Summer intensives (current focus), intro fellowships (technical + governance). Shows track record.
- **The Kairos network** — 1 sentence.
- **Trajectory Labs partnership** — 1 sentence.
- **No team page.** No bios, no headshots.
- **Contact** — a single email address.

---

## Visual style

### Overall vibe

**Professional, clean, confident.** Think: "well-funded research program" not "student club."

References for feel:
- [Anthropic](https://anthropic.com) — clean, whitespace, confident
- [MATS](https://www.matsprogram.org/) — research program, similar audience

Closer to Anthropic/MATS energy. Serious but not boring.

### Color palette

- **Primary:** Light mode. Clean white/off-white backgrounds, dark text.
- **Accent:** TBD — try a few options (electric blue, teal, warm amber). Must have strong contrast for CTAs.
- **Avoid:** Bright gradients, neon, anything that reads as "hackathon" or "club fair."

### Typography

- **Headings:** Clean sans-serif with character. Inter, Geist, or similar.
- **Body:** Same family or complementary sans. Readable at mobile sizes.
- **Monospace accents** (optional): For dates, stats, or technical details — subtle nod to the technical audience.

### Layout principles

- **Generous whitespace.** Let sections breathe.
- **Mobile-first.** Most visitors come from QR codes on phones.
- **No clutter.** Every element earns its place or gets cut.
- **Sticky CTA** on mobile — fixed "Apply" button at bottom of screen.

### Imagery

- **Minimal.** No stock photos. No group photos unless they're genuinely good.
- **Abstract/geometric** backgrounds or subtle patterns are fine.
- **Trajectory Labs photos** could work if available — shows the space is real and nice.

### Components (shadcn/ui)

- **Button** — primary CTA, large, high contrast
- **Card** — for "what you get" items
- **Accordion** — for FAQ
- **Badge** — for deadline
- **Navigation menu** — minimal top nav
- **Form inputs** — if application is embedded

---

## Navigation

Minimal top bar:
- **Left:** TAISI logo/wordmark
- **Right:** Program | About | **[Apply →]** (button style, accent color)

On mobile: keep all three visible (they fit) or hamburger.

---

## Copy tone

- **Direct.** Short sentences. No filler.
- **Confident, not salesy.** State what the program is. Don't oversell.
- **Career-framed.** AI safety = opportunity, growing field. Not "save the world."
- **Inclusive but not pandering.** "If you can code, you're ready."
- **No jargon.** Plain language. Explain briefly where needed.

---

## Application form

Short. 5 minutes max.

1. Name
2. Email
3. University
4. Program + year
5. "Why are you interested?" (2–3 sentences, TBD if optional or required)
6. "Anything else?" (optional)

> **Recommendation:** Embed on the landing page if possible. Every click away loses people.

---

## What's NOT in this design

- No animations beyond subtle hover states and smooth scrolls
- No video
- No testimonials (don't have strong ones yet)
- No chatbot or live chat
- No social media links (unless Discord — TBD)
- No newsletter signup (the application IS the email capture)
