import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";
import { caseStudyList } from "@/lib/case-studies";

// Tells search engines which pages exist. Project pages are added
// automatically; add a line here when you add any other page.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    ...caseStudyList().map(({ project }) => ({
      path: `/projects/${project.slug}`,
      priority: 0.8,
    })),
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.7 },
    { path: "/education", priority: 0.6 },
  ];
  const lastModified = new Date();
  return pages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
