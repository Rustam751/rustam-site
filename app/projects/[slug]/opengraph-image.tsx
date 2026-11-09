import { shareImage, shareImageSize } from "@/lib/share-image";
import { caseStudyList, getCaseStudy } from "@/lib/case-studies";

// One share picture per project page, built at deploy time.
export const alt = "Project case study by Rustam Mukhtarov";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudyList().map(({ project }) => ({ slug: project.slug }));
}

export default async function ProjectShareImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getCaseStudy(slug);
  if (!entry) return new Response("Not found", { status: 404 });
  const { project } = entry;

  return shareImage({
    kicker: `Case study · ${project.period}`,
    headline: project.name,
    // Tags only, no numbers: link previews are cached for a long time.
    subline: project.tags.slice(0, 4).join(" · "),
    footerRight: "Projects",
  });
}
