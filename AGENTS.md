# AGENTS.md — Portfolio Website Project

## Project Summary

Personal portfolio website for Muhamad Bayu Yusuf. Purpose: showcase work samples, projects, case studies, certificates, resume/CV, and blog. Target audience: general public, clients, and recruiters.

## Coding Conventions

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- All text content MUST be accessible — proper alt text, ARIA labels where needed
- NO lorem ipsum — use real placeholder content marked with `[PLACEHOLDER: ...]`
- NO em dash (`—`) in text content, titles, or metadata — use `|`, `,`, `:`, or natural phrasing to avoid AI-generated text appearance
- Comments in code MUST be sparse — only for non-obvious logic
- File names: lowercase, hyphen-separated (`hero-section.html`, not `HeroSection.html`)

## Folder Structure

Follow `file-structure.md` exactly. Do NOT create additional directories without asking.

## Commands

- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Test:** No test framework — verify visually in browser

## Forbidden Actions

- MUST NOT push to main branch directly — create feature branch first
- MUST NOT delete existing files without confirmation
- MUST NOT change the tech stack without confirmation
- MUST NOT deploy to production without confirmation
- MUST NOT add new dependencies without justification
- MUST NOT commit secrets, API keys, or environment variables
- MUST NOT use em dashes (`—`) in copy, titles, or metadata (use `|`, `,`, `:`, or rephrase)

## Confirmation Required

**Stop and ask for confirmation before:**
- Deleting files
- Changing the tech stack
- Deploying to production

## Performance Guardrails

- Every new component: ask "does this need client-side JS?" — default to Server Component
- Every image: use `<Image />` from `next/image` — never `<img>` — with explicit `width`/`height`/`sizes`
- Every font: `next/font` only — no external font requests
- Every third-party script: justify, load with `next/script` strategy="lazyOnload"
- Bundle size regression > 5KB = block merge

## Agent Workflow

1. Read this file first
2. Read PRD.md for requirements
3. Read design-guidelines.md for visual rules
4. Read tech-stack.md for setup
5. Read file-structure.md for layout
6. Follow tasks.md order — do not skip steps
7. After completing each task, update its checkbox in `tasks.md` (`[ ]` → `[x]`). Update immediately after work passes its "done when", before starting next task
