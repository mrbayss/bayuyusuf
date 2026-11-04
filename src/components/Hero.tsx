import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:text-left">
        <div className="max-w-[65ch]">
          <h1 className="mb-4 text-[48px] font-bold leading-[1.2] tracking-tight text-foreground lg:text-[64px]">
            Muhamad Bayu Yusuf
          </h1>
          <p className="mb-3 text-xl font-medium text-accent lg:text-2xl">
            Backend Developer | Golang &amp; Java
          </p>
          <p className="mb-10 text-base leading-relaxed text-foreground/70 lg:text-lg">
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

        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-3xl bg-accent/20 blur-2xl"
          />
          <Image
            src="/images/avatar.avif"
            alt="Muhamad Bayu Yusuf, Backend Developer"
            width={320}
            height={480}
            priority
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
            className="mt-20 h-auto w-56 rounded-3xl object-cover shadow-xl shadow-accent/20 ring-1 ring-accent/30 sm:w-64 lg:mt-0 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}
