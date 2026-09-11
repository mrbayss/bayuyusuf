# PRD.md — Product Requirements

## Goals

- Showcase work samples, projects, case studies, certificates, resume/CV, and blog to general public, clients, and recruiters
- Load fast — under 2 seconds on mobile
- Be accessible — WCAG AA compliant
- Work on all devices — phone, tablet, desktop

## Target Audience

General public, clients seeking freelance work, and recruiters looking for talent.

## Core Pages / Sections

1. **Home** — Hero with name, tagline, one-sentence intro. CTA to projects or contact.
2. **Projects** — Grid of work samples, projects, case studies. Each shows: thumbnail, title, short description, link to detail.
3. **Certificates** — Grid of certificates with image, title, issuing organization, date.
4. **Blog** — List of blog posts with title, date, excerpt, link to full post.
5. **About** — Bio, skills list, resume/CV download, professional photo placeholder.
6. **Contact** — Simple form (name, email, message), direct email link, and social links (LinkedIn, GitHub, etc.).

## Must-Have Features

- Responsive design — works on 320px to 1920px+
- Dark/light mode toggle
- Smooth scroll navigation
- Meta tags for SEO (title, description, OG tags)
- Favicon
- 404 page

## Explicit Non-Goals

- NO CMS integration — blog posts are static markdown files
- NO e-commerce
- NO user authentication
- NO database
- NO analytics dashboard
- NO multi-language support (unless explicitly requested later)

## Success Criteria

- Site builds without errors (`npm run build` exits 0)
- All pages render correctly on Chrome, Firefox, Safari
- Lighthouse Performance ≥ 90 (mobile, throttled 3G)
- Lighthouse Accessibility ≥ 95
- Lighthouse Best Practices ≥ 90
- Lighthouse SEO ≥ 90
- All images have alt text (no empty/missing)
- Keyboard navigation works across all pages
- Zero layout shifts (CLS = 0)
- LCP < 2.5s on mobile 3G
- TBT < 200ms
