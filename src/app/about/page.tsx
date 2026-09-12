import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Muhamad Bayu Yusuf",
  description: "Backend developer focusing on REST APIs, Golang, and Java. Learn about my background, skills, and projects.",
  openGraph: {
    title: "About | Muhamad Bayu Yusuf",
description: "Backend developer focusing on REST APIs, Golang, and Java. Learn about my background, skills, and projects.",
    images: ["/images/og-image.jpeg"],
    type: "website",
  },
};

const skills = [
  "Golang",
  "Java",
  "PostgreSQL",
  "Gin",
  "GoFiber",
  "Spring Boot",
];

export default function AboutPage() {
  return (
    <section className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <h1 className="mb-6 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
              About Me
            </h1>

            <div className="space-y-4 text-justify text-base leading-relaxed text-foreground/80">
              <p>
                I&apos;m a Backend Developer with almost 2 years of hands-on
                experience building scalable services in Golang and Java. My
                background in Mathematics from Universitas Negeri Malang gave me
                a strong foundation in logical problem solving, which I now
                apply to designing clean, efficient RESTful APIs.
              </p>
              <p>
                I&apos;ve built backend systems for school information
                platforms, cooperative (koperasi) web &amp; mobile apps, and an
                Umroh service website each one taught me something new about
                writing reliable, maintainable code. I work mainly with Gin,
                GoFiber, and Spring Boot, and I enjoy turning complex
                requirements into simple, working solutions.
              </p>
              <p>
                Right now I&apos;m looking to grow my skills in backend
                architecture and system design, and I&apos;m open to roles and
                projects where I can build systems that scale well and stay
                easy to maintain.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-4 text-[20px] font-semibold text-foreground">
                Skills &amp; Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Download Resume
              </a>
            </div>
          </div>

          <aside className="flex flex-col items-start gap-6">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-lg border border-foreground/10 shadow-sm lg:max-w-none">
              <Image
                src="/images/avatar.avif"
                alt="Photo of Muhamad Bayu Yusuf"
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover object-top"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
