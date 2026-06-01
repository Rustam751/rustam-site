"use client";
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/data";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2">
        {allTags.map((t) => {
          const on = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                on
                  ? "border-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[#0a0a0f]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}
