import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Muhamad Bayu Yusuf",
  description:
    "Portfolio of Muhamad Bayu Yusuf: REST APIs, e-commerce, and backend systems built with Golang, Java, and PostgreSQL.",
  openGraph: {
    title: "Projects | Muhamad Bayu Yusuf",
    description:
      "Portfolio of Muhamad Bayu Yusuf: REST APIs, e-commerce, and backend systems built with Golang, Java, and PostgreSQL.",
    images: ["/images/og-image.jpeg"],
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <section className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mb-12 max-w-[65ch] text-justify text-base leading-relaxed text-foreground/70">
          A collection of backend projects I've built, from REST APIs and
          e-commerce systems with Golang and Java, to AI experiments. Each
          project reflects a real problem I solved and the technologies I
          work with.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h2>
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
      </div>
    </section>
  );
}
