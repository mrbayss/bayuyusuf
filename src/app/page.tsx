import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Muhamad Bayu Yusuf | Portfolio",
  description: "[PLACEHOLDER: Portfolio description, developer showcasing work, skills, and projects.]",
  openGraph: {
    title: "Muhamad Bayu Yusuf | Portfolio",
    description: "[PLACEHOLDER: Portfolio description, developer showcasing work, skills, and projects.]",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

const featured = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="bg-background px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mb-12 max-w-[65ch] text-justify text-base leading-relaxed text-foreground/70">
            A selection of backend systems, REST APIs, and tools I have built
            with Golang, Java, and PostgreSQL, focused on clean architecture,
            performance, and solving real problems.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    View Project →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
