import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle";
import ProjectsExplorer from "../components/ProjectsExplorer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Rustam Mukhtarov — AI products, ML pipelines, and prototypes across conversational UX, medical imaging, and autonomous systems.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <SectionTitle
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Filter by stack. More on GitHub."
      />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}
