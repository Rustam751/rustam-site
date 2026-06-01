import Link from "next/link";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import ContactCTA from "./components/ContactCTA";
import { projects } from "@/lib/data";

export default function Page() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Featured projects */}
      <section className="pt-8">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects"
            subtitle="A few things I've built recently."
          />
          <Link
            href="/projects"
            className="mb-8 hidden shrink-0 text-sm link-muted sm:inline-flex items-center gap-1"
          >
            All projects →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="pt-20">
        <SectionTitle
          eyebrow="Toolkit"
          title="What I work with"
          subtitle="From product and UX through to models and infrastructure."
        />
        <Skills />
      </section>

      {/* Contact */}
      <section className="pt-20">
        <ContactCTA />
      </section>
    </div>
  );
}
