"use client";
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/data";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  // Offer only the tags that at least two projects share. A tag used once
  // would just pick out a single project.
  const tags = useMemo(() => {
    const count = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => count.set(t, (count.get(t) ?? 0) + 1)));
    const shared = [...count].filter(([, n]) => n >= 2).map(([t]) => t);
    return ["All", ...shared.sort()];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter projects by technology" className="mb-7 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            aria-pressed={active === t}
            className="chip"
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:gap-4">
        {filtered.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}
