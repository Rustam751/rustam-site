import type { MetadataRoute } from "next";

const siteUrl = "https://mukhtarov.dev";

// Tells search engines which pages exist. Add a line when you add a page.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.7 },
    { path: "/education", priority: 0.6 },
  ];
  const lastModified = new Date();
  return pages.map((p) => ({
    url: `${siteUrl}${p.path === "/" ? "" : p.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
