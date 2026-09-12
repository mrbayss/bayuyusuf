import Link from "next/link";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import { parseFrontmatter } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Muhamad Bayu Yusuf",
  description:
    "Blog of Muhamad Bayu Yusuf: learning to code, backend development, and technology in the AI era.",
  openGraph: {
    title: "Blog | Muhamad Bayu Yusuf",
    description:
      "Blog of Muhamad Bayu Yusuf: learning to code, backend development, and technology in the AI era.",
    images: ["/images/og-image.jpeg"],
    type: "website",
  },
};

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), "src/data/posts");
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = readFileSync(path.join(postsDir, file), "utf-8");
      const { meta } = parseFrontmatter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: meta.title || "Untitled",
        date: meta.date || "",
        excerpt: meta.excerpt || "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mb-12 max-w-[65ch] text-justify text-base leading-relaxed text-foreground/70">
          My journey as a developer: learning experiences, the technologies I
          explore, and my perspective on programming. Written from a personal
          point of view.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-lg border border-foreground/10 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-xs text-foreground/50">{post.date}</time>
                <h2 className="mb-2 mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
