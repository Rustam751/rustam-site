// ------------ app/page.tsx (Home) ------------
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import { profile, projects } from "@/lib/data";
import ProjectCard from "./components/ProjectCard";


export default function Page() {
  return (
    <div className="py-10">
      <Hero title={profile.title} summary={profile.summary}>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>{profile.location}</p>
        </div>
      </Hero>



      <SectionTitle title="Featured Projects" subtitle="A few things I’ve built recently." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.name} p={p as any} />
        ))}
      </div>
    </div>
  );
}