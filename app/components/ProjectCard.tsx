"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project, ProjectLink } from "@/lib/data";
import LinkIcon from "./LinkIcon";

const pill =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors";

export default function ProjectCard({ p }: { p: Project }) {
  // Projects with a slug have their own page at /projects/<slug>.
  const pageHref = p.slug ? `/projects/${p.slug}` : null;

  return (
    <motion.article
      className="card card-hover group relative flex flex-col p-5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
    >
      <h3 className="text-base font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
        {pageHref ? (
          // The ::after layer stretches this link over the whole card, so a
          // click anywhere on the card opens the project page.
          <Link
            href={pageHref}
            className="rounded-sm after:absolute after:inset-0 after:rounded-2xl after:content-['']"
          >
            {p.name}
          </Link>
        ) : (
          p.name
        )}
      </h3>

      <p className="mt-1 text-xs text-[var(--text-faint)]">{p.period}</p>

      {p.impact && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-2)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

      {(pageHref || p.links.length > 0) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {pageHref && (
            // Visual cue only: the stretched title link above already makes
            // the whole card open the project page.
            <span
              aria-hidden
              className={`${pill} border-[var(--border-strong)] text-[var(--text)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]`}
            >
              Case study
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          )}
          {p.links.map((l: ProjectLink) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              // relative + z-10 keeps these clickable above the stretched link.
              className={`${pill} relative z-10 hover:border-[var(--border-strong)] hover:text-[var(--accent)]`}
            >
              <LinkIcon label={l.label} />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
