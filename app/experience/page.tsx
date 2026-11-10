import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  alternates: { canonical: "/experience" },
  description:
    "Professional experience of Rustam Mukhtarov — AI Team Lead and Teaching Assistant, building ML pipelines and mentoring engineers.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-10 md:pt-14">
      <SectionTitle as="h1" eyebrow="Career" title="Experience" />

      <div className="relative ml-1 border-l border-[var(--border)] pl-7">
        {experience.map((job) => (
          <div key={job.role + job.company} className="relative pb-10 last:pb-0">
            {/* dot */}
            <span className="absolute -left-[33px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)]">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]" />
            </span>

            <div className="card p-5">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
                <div>
                  <h2 className="card-title">{job.role}</h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className="link">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                    <span className="text-[var(--text-faint)]"> · {job.location}</span>
                  </p>
                </div>
                <span className="meta shrink-0 md:pt-1.5">{job.period}</span>
              </div>

              <ul className="mt-4 space-y-2 text-[0.9375rem] text-[var(--text-muted)]">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
