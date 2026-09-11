# file-structure.md — Project Layout

```
portfolio/
├── public/                      # Static assets served as-is
│   ├── favicon.ico              # Site favicon
│   ├── robots.txt               # Search engine rules
│   ├── fonts/                   # Self-hosted font files (woff2 only)
│   └── images/                  # Static image assets
│       ├── avatar.avif          # Professional photo
│       ├── og-image.png         # OpenGraph social share image
│       ├── projects/            # Project thumbnails
│       └── certificates/        # Certificate images
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — head, nav, footer, dark mode
│   │   ├── page.tsx             # Home page (hero + featured projects)
│   │   ├── projects/
│   │   │   └── page.tsx         # All projects listing
│   │   ├── certificates/
│   │   │   └── page.tsx         # Certificates grid
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog post list
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Individual blog post
│   │   ├── about/
│   │   │   └── page.tsx         # About page (bio, skills, resume)
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact form + social links
│   │   └── not-found.tsx        # Custom 404 page
│   ├── components/
│   │   ├── Header.tsx           # Sticky nav with dark mode toggle
│   │   ├── Hero.tsx             # Home hero section
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   ├── ProjectGrid.tsx      # Grid layout for project list
│   │   ├── CertificateCard.tsx  # Individual certificate card
│   │   ├── ContactForm.tsx      # Contact form with validation
│   │   ├── Footer.tsx           # Site footer + social links
│   │   ├── DarkModeToggle.tsx   # Theme switcher
│   │   └── SkipLink.tsx         # Accessibility skip-to-content
│   ├── data/
│   │   ├── projects.ts          # Project data (title, desc, image, link)
│   │   ├── certificates.ts      # Certificate data
│   │   └── posts/               # Blog posts as markdown files
│   ├── styles/
│   │   └── globals.css          # Tailwind imports, global styles
│   └── lib/
│       └── utils.ts             # Shared helpers (date format, etc.)
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Ignore node_modules, .next
└── README.md                    # Basic project info (auto-generated)
```

## Notes

- `src/data/*.ts` centralizes content — edit one file, all pages update
- Components are single-purpose — one component, one job
- Blog posts live in `src/data/posts/` as markdown — no CMS needed
- Images live in `public/images/` — served statically for `output: 'export'` with subfolders for avatar, projects, certificates, and og-image
- No unnecessary nesting — keep it flat
