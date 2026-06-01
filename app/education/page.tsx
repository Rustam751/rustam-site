import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle";
import { education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education of Rustam Mukhtarov — M.S. in AI & Data Science at SFSU and B.S. in Mechatronics Engineering.",
};

export default function EducationPage() {
  return (
    <div className="py-12">
      <SectionTitle eyebrow="Academics" title="Education" />

      <div className="grid gap-5">
        {education.map((e) => (
          <div key={e.school} className="card card-hover p-6">
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{e.degree}</h3>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                  {e.school} <span className="text-[var(--text-faint)]">·</span>{" "}
                  {e.location}
                </p>
              </div>
              <span className="shrink-0 text-sm text-[var(--text-muted)]">
                {e.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {e.details.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
