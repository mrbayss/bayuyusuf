import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[48px] font-bold leading-[1.2] tracking-tight text-foreground lg:text-[64px]">
          Muhamad Bayu Yusuf
        </h1>
        <p className="mb-3 text-xl font-medium text-accent lg:text-2xl">
          Backend Developer | Golang &amp; Java
        </p>
        <p className="mx-auto mb-10 max-w-[65ch] text-base leading-relaxed text-foreground/70 lg:text-lg">
          I build clean, efficient REST APIs and backend systems with Golang,
          Java, and PostgreSQL.
        </p>
        <Link
          href="#projects"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
