import Link from "next/link";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import { parseFrontmatter } from "@/lib/utils";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// mini-markdown renderer: bold/italic inline, lists, headings, hr
function renderInline(text: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return <em key={i}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
}

function parseBlocks(body: string) {
  return body
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block) => {
      if (block.trim() === "---") return { type: "hr" as const };
      const heading = block.match(/^(#{1,6})\s+(.*)$/);
      if (heading) {
        return {
          type: "heading" as const,
          level: Math.min(heading[1].length + 1, 6),
          text: heading[2],
        };
      }
      const lines = block.split("\n");
      const itemMatch = lines.map((l) =>
        l.match(/^[-*]\s+(.*)$/) ?? l.match(/^\d+\.\s+(.*)$/)
      );
      if (itemMatch.every(Boolean)) {
        return {
          type: "list" as const,
          ordered: /^\d/.test(lines[0]),
          items: itemMatch.map((m) => m![1]),
        };
      }
      return { type: "p" as const, text: block };
    });
}

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/data/posts");
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/data/posts", `${slug}.md`);
  const raw = readFileSync(filePath, "utf-8");
  const { meta } = parseFrontmatter(raw);

  return {
    title: meta.title || "Untitled",
    description: meta.excerpt || "Read the full post on Muhamad Bayu Yusuf's blog.",
    openGraph: {
      title: meta.title || "Untitled",
      description: meta.excerpt || "Read the full post on Muhamad Bayu Yusuf's blog.",
      images: ["/images/og-image.jpeg"],
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/data/posts", `${slug}.md`);
  const raw = readFileSync(filePath, "utf-8");
  const { meta, body } = parseFrontmatter(raw);

  return (
    <article className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[65ch]">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent/80"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="mb-2 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
            {meta.title || "Untitled"}
          </h1>
          {meta.date && (
            <time className="text-sm text-foreground/50">{meta.date}</time>
          )}
        </header>

        <div className="prose max-w-none">
          {parseBlocks(body).map((b, i) => {
            if (b.type === "hr") {
              return (
                <hr
                  key={i}
                  className="my-8 border-foreground/10"
                />
              );
            }
            if (b.type === "heading") {
              const Tag = `h${b.level}` as keyof React.JSX.IntrinsicElements;
              return (
                <Tag
                  key={i}
                  className={
                    b.level === 2
                      ? "mb-4 mt-8 text-[24px] font-bold leading-[1.3] text-foreground"
                      : "mb-3 mt-6 text-[20px] font-semibold leading-[1.3] text-foreground"
                  }
                >
                  {renderInline(b.text)}
                </Tag>
              );
            }
            if (b.type === "list") {
              const Tag = b.ordered ? "ol" : "ul";
              return (
                <Tag
                  key={i}
                  className="mb-4 list-inside space-y-2 text-base leading-relaxed text-foreground/80"
                >
                  {b.items.map((item, j) => (
                    <li key={j} className={b.ordered ? "list-decimal" : "list-disc"}>
                      {renderInline(item)}
                    </li>
                  ))}
                </Tag>
              );
            }
            return (
              <p
                key={i}
                className="mb-4 text-justify text-base leading-relaxed text-foreground/80"
              >
                {renderInline(b.text)}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
