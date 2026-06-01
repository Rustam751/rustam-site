"use client";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  const isLive = p.link && p.link !== "#";

  return (
    <motion.a
      href={isLive ? p.link : undefined}
      target={isLive ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`card card-hover group relative flex flex-col p-5 ${
        isLive ? "cursor-pointer" : "cursor-default"
      }`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
          {p.name}
        </h3>
        {isLive ? (
          <span className="mt-0.5 shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        ) : (
          <span className="tag !text-[0.62rem] shrink-0">In progress</span>
        )}
      </div>

      <p className="mt-1 text-xs text-[var(--text-faint)]">{p.period}</p>

      {p.impact && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-2)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 5 5L20 7" />
          </svg>
          {p.impact}
        </p>
      )}

      <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{p.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
