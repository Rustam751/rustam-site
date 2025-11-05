// ------------ app/projects/page.tsx ------------
import SectionTitle from "../components/SectionTitle";
import { projects } from "@/lib/data";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="py-10">
            <SectionTitle title="Projects" subtitle="Selected work. More on GitHub." />
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <ProjectCard key={p.name} p={p as any} />
                ))}
            </div>
        </div>
    );
}