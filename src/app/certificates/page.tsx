import Image from "next/image";
import { certificates } from "@/data/certificates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Muhamad Bayu Yusuf",
  description:
    "Certificates and credentials of Muhamad Bayu Yusuf, showing a continuous learning journey and technical skill growth.",
  openGraph: {
    title: "Certificates | Muhamad Bayu Yusuf",
    description:
      "Certificates and credentials of Muhamad Bayu Yusuf, showing a continuous learning journey and technical skill growth.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function CertificatesPage() {
  return (
    <section className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
          Certificates
        </h1>
        <p className="mb-12 max-w-[65ch] text-justify text-base leading-relaxed text-foreground/70">
          Certificates that mark my learning journey, from online courses to
          hands-on technical training. Each one represents a skill I've
          validated and my commitment to keep growing.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-foreground">
                  {cert.title}
                </h2>
                <p className="mb-1 text-sm font-medium text-accent">
                  {cert.organization}
                </p>
                <time className="text-xs text-foreground/50">{cert.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
