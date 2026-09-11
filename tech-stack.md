# tech-stack.md — Technology Choices

## Framework

**Next.js** — React-based, SSR/SSG support, excellent Vercel integration, strong ecosystem for blog and interactive components.

**Rendering:** Static Export (`output: 'export'`) — all pages pre-rendered at build time. No server runtime needed. Blog uses `generateStaticParams` for SSG + `revalidate` for ISR.

**Fonts:** `next/font` with self-hosted Inter + `fallback: ['system-ui', 'sans-serif']` — zero external requests, preload critical, `display: swap`, `adjustFontFallback` kills CLS.

## Styling

**Tailwind CSS** — utility-first, fast to build, small production bundle with purging. Fits minimal portfolio aesthetic.

## Language

**TypeScript** — type safety for all components, catches errors early, industry standard.

## Deployment

**Vercel** — zero-config Next.js deployment, free tier, global CDN, automatic preview deploys.

## Justification Summary

| Choice | Why |
|--------|-----|
| Next.js | React ecosystem, SSG for portfolio, SSR for blog if needed |
| Tailwind | Rapid styling, small bundle, consistent design |
| TypeScript | Type safety for any logic, catches errors early |
| Vercel | Best-in-class Next.js hosting, free tier, fast |

## Constraints

- MUST NOT add additional UI frameworks (Material UI, Chakra, etc.) without justification
- MUST configure `next.config.ts` with `output: 'export'`, `images: { unoptimized: true }`, `compress: true`, `poweredByHeader: false`
- MUST use `next/font` — no Google Fonts `<link>`, no `@import`
- MUST keep JS bundle < 100KB gzipped (measure with `@next/bundle-analyzer`)
- MUST support Node 18+ for local dev
