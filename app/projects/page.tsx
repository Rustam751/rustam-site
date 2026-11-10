import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle";
import ProjectsExplorer from "../components/ProjectsExplorer";
import GitHubActivity from "../components/GitHubActivity";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
  description:
    "Selected work by Rustam Mukhtarov — RAG systems, deployed ML APIs, computer vision, and medical imaging. FastAPI, PyTorch, Docker, CI.",
};

// Re-render at most once per hour so the GitHub section stays fresh
// without hitting the API on every request.
export const revalidate = 3600;

export default function ProjectsPage() {
  return (
    <div className="pt-10 md:pt-14">
      <SectionTitle
        as="h1"
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Filter by stack. More on GitHub."
      />
      {/* Hidden heading so the project names (h3) sit under an h2 for screen readers */}
      <h2 className="sr-only">All projects</h2>
      <ProjectsExplorer projects={projects} />
      <GitHubActivity />
    </div>
  );
}
