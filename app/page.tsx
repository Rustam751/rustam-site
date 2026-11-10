import type { Metadata } from "next";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Featured projects */}
      <section className="section">
        <SectionTitle
          eyebrow="Selected work"
          title="Featured projects"
          subtitle="A few things I've built recently."
          action={{ href: "/projects", label: "All projects" }}
        />
        <div className="grid gap-3 md:gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <SectionTitle
          eyebrow="Toolkit"
          title="What I work with"
          subtitle="From models and evaluation through APIs, Docker, and CI."
        />
        <Skills />
      </section>
    </div>
  );
}
