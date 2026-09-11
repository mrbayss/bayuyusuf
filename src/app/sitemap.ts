import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://muhamadbayuyusuf.com";
const routes = ["/", "/projects", "/certificates", "/blog", "/blog/hello-world", "/about", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
