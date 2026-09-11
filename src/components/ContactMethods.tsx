const contactMethods = [
  {
    label: "Email",
    detail: "bayu190903@gmail.com",
    href: "mailto:bayu190903@gmail.com",
    external: false,
    description: "For inquiries, collaborations, or just saying hello.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    detail: "+62 813-1503-2646",
    href: "https://wa.me/6281315032646",
    external: true,
    description: "Quick replies for urgent matters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M17 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    detail: "Muhamad Bayu Yusuf",
    href: "https://www.linkedin.com/in/muhamad-bayu-yusuf-a8613b214/",
    external: true,
    description: "Professional network and work history.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
          Get in Touch
        </h1>
        <p className="mb-12 max-w-[45ch] text-base leading-relaxed text-foreground/70">
          Pick the channel that works for you. Each one opens directly to the
          right place.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-lg border border-foreground/10 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`${method.label}, ${method.detail}`}
            >
              <div className="mb-4 text-accent transition-colors group-hover:text-accent/80">
                {method.icon}
              </div>
              <h2 className="mb-1 text-lg font-semibold text-foreground">
                {method.label}
              </h2>
              <p className="mb-3 text-sm font-medium text-accent break-all">
                {method.detail}
              </p>
              <p className="mt-auto text-sm leading-relaxed text-foreground/70">
                {method.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
