# Muhamad Bayu Yusuf — Personal Portfolio

> Personal portfolio website to showcase work samples, projects, case studies, certificates, resume/CV, and blog posts — built for clients and recruiters.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js](https://nextjs.org/) 16 (Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | `next/font` — self-hosted Inter |
| Deployment | [Vercel](https://vercel.com/) |

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Projects | `/projects` |
| Certificates | `/certificates` |
| Blog | `/blog` |
| About | `/about` |
| Contact | `/contact` |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
npm run dev       # Start local dev server (hot reload)
npm run build     # Build static export to out/
npm run start     # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (nav, footer, dark mode)
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects listing
│   ├── certificates/     # Certificates grid
│   ├── blog/             # Blog list + individual posts
│   ├── about/            # About (bio, skills, resume)
│   ├── contact/          # Contact links
│   └── not-found.tsx     # Custom 404
├── components/           # Reusable UI components
├── data/                 # Static content (projects.ts, certificates.ts, posts/)
├── styles/               # Global CSS (Tailwind imports)
└── lib/                  # Shared utilities
public/
├── images/               # Static image assets
├── favicon.ico
├── robots.txt
└── sitemap.xml           # Auto-generated at build
```

## Features

- ⚡ **Static Export** — all pages pre-rendered at build time, no server runtime
- 🌙 **Dark / Light Mode** — toggle with `localStorage` persistence
- 📱 **Fully Responsive** — 320px to 1920px+, hamburger nav on mobile
- ♿ **Accessible** — WCAG AA, skip-to-content link, keyboard navigable
- 🔍 **SEO Ready** — per-page meta tags, Open Graph, `sitemap.xml`, `robots.txt`
- 🖋️ **Blog** — markdown-based, no CMS needed
- 🚀 **Performance** — zero external font requests, long-term asset caching, Lighthouse CI on every PR

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| LCP (mobile 3G) | < 2.5s |
| TBT | < 200ms |
| CLS | 0 |

## Deployment

This site deploys automatically to [Vercel](https://vercel.com/) on every push to the main branch. Preview deployments are generated for every pull request.

## License

This project is for personal use. Please do not copy or redistribute without permission.
