import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 text-[64px] font-bold leading-[1.1] tracking-tight text-foreground">
        404
      </h1>
      <p className="mb-8 max-w-[45ch] text-base leading-relaxed text-foreground/70">
        The page you are looking for doesn&apos;t exist or might have been
        moved. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to Home
      </Link>
    </section>
  );
}
