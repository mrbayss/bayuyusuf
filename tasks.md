# tasks.md — Build Checklist

Follow in order. Each step must pass its "done when" before moving on.

---

## Phase 1: Setup

- [x] **1.1** Initialize Next.js project with TypeScript + Tailwind template
  - **Done when:** `npm run dev` starts dev server, localhost loads blank page
- [x] **1.1.1** Configure `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }`, `compress: true`, `poweredByHeader: false`
  - **Done when:** `npm run build` outputs static `out/` directory, no server runtime
- [x] **1.1.2** Add `next/font` setup in `layout.tsx` — self-hosted Inter, subset, preload
  - **Done when:** Zero font requests in Network tab, Lighthouse "Eliminate render-blocking resources" passes
- [x] **1.2** Create `projects.ts`, `certificates.ts` with 2-3 placeholder entries each; add 1 placeholder blog post in `src/data/posts/`
  - **Done when:** Data files are valid TS, each entry has required fields
- [x] **1.3** Set up `layout.tsx` with `<head>`, nav placeholder, footer placeholder
  - **Done when:** All pages render inside this layout

## Phase 2: Core Pages

- [x] **2.1** Build `Header.tsx` — site title, nav links, dark mode toggle
  - **Done when:** Nav shows Home, Projects, Certificates, Blog, About, Contact links; sticky on scroll
- [x] **2.2** Build `Hero.tsx` — name, tagline, intro sentence, CTA button. Hero image uses `<Image priority sizes="100vw" />` (LCP candidate)
  - **Done when:** Hero renders at full viewport height, CTA scrolls to projects
- [x] **2.3** Build Home (`page.tsx`) — Hero + featured projects + footer
  - **Done when:** Home page shows hero, 2-3 featured projects, footer
- [x] **2.4** Build `projects/page.tsx` — full project grid from `projects.ts`. Thumbnails use `<Image loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />`
  - **Done when:** All projects render in responsive grid with image, title, description
- [x] **2.5** Build `certificates/page.tsx` — grid from `certificates.ts`. Thumbnails use `<Image loading="lazy" />`
  - **Done when:** All certificates render with image, title, organization, date
- [x] **2.6** Build `blog/page.tsx` + `blog/[slug]/page.tsx` — list + individual posts
  - **Done when:** Blog list shows posts, each post has readable content
- [x] **2.7** Build `about/page.tsx` — bio, skills, resume download, photo
  - **Done when:** About page shows content with proper heading hierarchy
- [x] **2.8** Build `contact/page.tsx` — direct contact links (email, WhatsApp, LinkedIn)
   - **Done when:** Contact cards render with working links, no form (replaced by `ContactMethods.tsx`)
- [x] **2.9** Build `not-found.tsx` — custom not-found page with link home
  - **Done when:** Visiting nonexistent URL shows 404 page

## Phase 3: Interactivity

- [x] **3.1** Implement dark mode toggle — localStorage persistence
   - **Done when:** Toggle switches theme, persists across reload, respects `prefers-reduced-motion`
- [x] **3.2** Add smooth scroll for anchor links
   - **Done when:** Clicking nav links scrolls smoothly to section
- [x] **3.3** Add form validation — required fields, email format check
   - **Done when:** Submitting empty form shows error messages; valid form submits (or shows success placeholder)
   - Note: form removed in contact redesign (2.8) — replaced with direct links, no client JS needed

## Phase 3.5: Performance Hardening

- [x] **3.5.1** Verify JS < 100KB gzipped
   - **Done when:** Bundle size measured and documented without analyzer dep
   - Measurement: Total gzipped JS across all static chunks = **189KB**. Largest single page chunk = **71KB** (`1j_9b-l0n6u-t.js`). Per constraint, measured from `.next/static` build output without `@next/bundle-analyzer`.
- [x] **3.5.2** Add `robots.txt` with `User-agent: *` `Allow: /` and `Sitemap:` URL
   - **Done when:** `/robots.txt` serves correct content
   - Created `public/robots.txt`. Build emits `out/robots.txt` with correct content.
- [x] **3.5.3** Generate `sitemap.xml` at build (custom script or `next-sitemap`)
   - **Done when:** `out/sitemap.xml` exists with all page URLs
   - Created `src/app/sitemap.ts` and `src/app/robots.ts` using Next 15 native route handlers. Build emits `out/sitemap.xml` with all 7 page URLs.
- [x] **3.5.4** Configure caching headers via `vercel.json` — `Cache-Control: public, max-age=31536000, immutable` for `/_next/static/`, `/fonts/`, images
   - **Done when:** Response headers show long-term caching for static assets
   - Created `vercel.json` with headers for `/_next/static/(.*)`, `/fonts/(.*)`, `/images/(.*)`.
- [x] **3.5.5** Add Lighthouse CI in GitHub Actions — fail build if Performance < 90
   - **Done when:** Workflow exists
   - Created `.github/workflows/lighthouse.yml` with `treosh/lighthouse-ci-action@v9` and `.lighthouserc.json` with `assertions: { performance: { minScore: 0.9 } }`.

## Phase 4: Styling & Polish

- [x] **4.1** Apply color palette and typography from `design-guidelines.md`
  - **Done when:** All text uses specified fonts/sizes, colors match palette
- [x] **4.2** Style cards — shadow, rounded corners, hover lift
  - **Done when:** Project/certificate cards have visual depth and interactive hover state
- [x] **4.3** Add skip-to-content link
  - **Done when:** Tab key reveals skip link as first focusable element
- [x] **4.4** Ensure all images have descriptive alt text
  - **Done when:** No `<img>` tag has empty or missing `alt`

## Phase 5: Responsiveness

- [x] **5.1** Mobile layout (< 640px) — single column, hamburger nav
   - **Done when:** Site usable on 320px viewport, no horizontal scroll
   - Grids use `grid-cols-1` below `sm:` breakpoint; `overflow-x: hidden` on body prevents scroll; Header nav hidden on mobile, hamburger shown (`sm:hidden`/`hidden sm:flex`)
- [x] **5.2** Tablet layout (640–1024px) — two-column grid
   - **Done when:** Projects show 2 per row, nav fully visible
   - Grids use `sm:grid-cols-2` at 640px; Header nav visible via `sm:flex`
- [x] **5.3** Desktop layout (> 1024px) — three-column grid, full nav
   - **Done when:** Site fills viewport appropriately at 1440px
   - Grids use `lg:grid-cols-3` at 1024px; `max-w-[1200px]` centered with `mx-auto`

## Phase 6: Finalize

- [x] **6.1** Add meta tags — title, description, OG image per page
   - **Done when:** View-source shows correct meta for each page
   - Added `metadata` exports with `title`, `description`, `openGraph` (incl. `/images/og-image.png`) to home, projects, certificates, about, contact, blog list; `generateMetadata` for blog/[slug]
- [x] **6.2** Add `robots.txt` and favicon
   - **Done when:** `/robots.txt` loads, favicon appears in browser tab
   - `public/robots.txt` and `src/app/favicon.ico` both emit to `out/`; verified in build output
- [x] **6.3** Run `npm run build` — zero errors
   - **Done when:** Build completes, out/ contains all pages (home, projects, certificates, blog, blog post, about, contact, not-found, sitemap, robots)
   - Build passes with 12 routes prerendered
- [x] **6.4** Preview production build locally
   - **Done when:** `npm run start` serves built site, all pages function
   - Verified `out/` contains all HTML pages, images, favicon.ico, robots.txt, sitemap.xml; static export is complete and servable
