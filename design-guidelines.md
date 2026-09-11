# design-guidelines.md — Visual Direction

## Tone

Clean, professional, minimal. Let the work speak — not flashy, not boring. Think: senior dev portfolio, not startup landing page.

**Copywriting / Text Style:**
- **No Em Dash (`—`):** Hindari penggunaan em dash (`—`) pada judul halaman (title), metadata, maupun teks konten/artikel. Gunakan separator yang lebih natural seperti `|` (pipe), koma (`,`), titik dua (`:`), atau rekonstruksi kalimat agar tidak terkesan tulisan otomatis AI.

## Color Palette

- **Primary:** deep blue (#1a1a2e) or neutral dark (#121212)
- **Accent:** teal (#00d4aa) or soft blue (#4a9eff)
- **Background:** Near-white (#fafafa) for light, near-black (#0a0a0a) for dark
- **Text:** High contrast — #1a1a1a on light, #e0e0e0 on dark
- **Error/alert:** #e53e3e

Dark mode: invert background/text, keep accent.

## Typography

- **Heading font:** Inter
- **Body font:** Same family — keep it simple
- **Font loading:** `next/font/local` for Inter (woff2, subset Latin) + `fallback: ['system-ui', 'sans-serif']`. Preload in `<head>`. `display: swap` — no FOIT.
- **Sizes:** 48px hero heading → 32px section headings → 16px body → 14px small/caption
- **Line height:** 1.5 for body, 1.2 for headings
- **Max line length:** 65–75 characters

## Spacing & Layout

- Base unit: 8px — all spacing multiples of 8
- Page max-width: 1200px, centered
- Section padding: 80px vertical (48px mobile)
- Card gaps: 24px
- Grid: 3 columns desktop → 2 tablet → 1 mobile

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

## Accessibility (WCAG AA Minimum)

- Color contrast ratio ≥ 4.5:1 for text
- All interactive elements focusable and visible
- Skip-to-content link
- Form inputs have visible labels (not placeholder-only)
- Reduced motion: `prefers-reduced-motion: reduce` disables ALL animations/transitions. Implement: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`
- Touch targets ≥ 44px × 44px

## Components

- Cards: subtle shadow, rounded corners (8px), hover lift effect
- Buttons: two styles — filled (primary) and outlined (secondary)
- Navigation: sticky top, collapses to hamburger on mobile

## Finding Design Examples (Allowed Workflow)

Cari contoh kode/desain di internet itu BOLEH dan dianjurkan, dengan aturan:

- **Inspirasi DIPERBOLEHKAN, salin-mentah DILARANG.** Lihat contoh untuk memahami pola (layout, spacing, hover effect), jangan copy file/komponen utuh dari proyek lain.
- **Jaga identitas proyek ini:** tetap patuhi palet warna, tipografi, dan tone di dokumen ini. Contoh dari luar jangan menimpa keputusan desain `design-guidelines.md`.
- **Hukum lisensi:** konten yang berlisensi ketat (dengan atribusi wajib, non-commercial) JANGAN dipakai. Prefer MIT/Apache/CC-BY atau contoh "placeholder-only".
- **Verifikasi API tetap akhir** — contoh dari blog/docs/internet bisa outdated. Cek dulu terhadap versi Next.js yang terpasang (lihat `package.json`), jangan ikuti contoh buta.
- **Kalau contoh butuh dependency tambahan** — stop. Kirim ke orchestrator untuk konfirmasi dulu (AGENTS.md: no new deps without justification).
- **Rujukan sumber Value:** tulis nama/library asal contoh di komentar `// ref:` saat mengadaptasi pola, biar bisa ditrace balik.
- **Tidak mengubah tech stack:** contoh yang pakai framework lain (Vue/Svelte/Astro) hanya jadi referensi visual, bukan kode yang disalin.

Sumber yang disarankan: GitHub, MDN, Next.js docs, Tailwind docs, blog resmi framework. Hindari situs yang menjual komponen berbayar.
