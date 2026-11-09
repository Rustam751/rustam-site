import ProjectShareImage from "./opengraph-image";
import { shareImageSize } from "@/lib/share-image";
import { caseStudyList } from "@/lib/case-studies";

// Same picture as opengraph-image.tsx, for X / Twitter cards.
export const alt = "Project case study by Rustam Mukhtarov";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudyList().map(({ project }) => ({ slug: project.slug }));
}

export default ProjectShareImage;
