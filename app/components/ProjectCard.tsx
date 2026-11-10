import Link from "next/link";
import type { Project } from "@/lib/data";
import LinkIcon from "./LinkIcon";

// One project as a wide row: what it is on the left, the measured result
// and the links on the right. Used on the home page and on /projects.
export default function ProjectCard({ p }: { p: Project }) {
  // Projects with a slug have their own page at /projects/<slug>.
  const href = p.slug ? `/projects/${p.slug}` : null;
  const hasLinks = Boolean(href) || p.links.length > 0;
  const hasAside = Boolean(p.impact) || hasLinks;

  return (
    <article
      className={[
        "card reveal relative grid gap-3.5 p-5 md:p-7",
        hasAside &&
          "md:grid-cols-[minmax(0,1fr)_18.5rem] md:grid-rows-[auto_auto_1fr] md:gap-x-10 md:gap-y-2.5",
        href && "card-link",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="md:col-start-1 md:row-start-1">
        <p className="meta">{p.period}</p>
        <h3 className="card-title mt-1.5">
          {href ? (
            // "stretched" lays this link over the whole row, so a click
            // anywhere on the row opens the project page.
            <Link href={href} className="stretched">
              {p.name}
              <svg className="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ) : (
            p.name
          )}
        </h3>
      </header>

      {p.impact && (
        <p className="proof md:col-start-2 md:row-span-2 md:row-start-1 md:self-start">{p.impact}</p>
      )}

      <div className="md:col-start-1 md:row-span-2 md:row-start-2">
        <p className="max-w-[62ch] text-[0.9375rem] leading-[1.65] text-[var(--text-muted)]">{p.blurb}</p>
        <ul aria-label="Technologies" className="tag-line mt-3.5">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {hasLinks && (
        // The list itself lets clicks through to the stretched link; only
        // the real links inside it catch them.
        <ul className="pointer-events-none relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 md:col-start-2 md:row-start-3 md:self-end">
          {href && (
            // Visual cue only: the title link above is the real link.
            <li aria-hidden className="link-quiet text-[var(--accent-text)]">
              Case study
              <span>→</span>
            </li>
          )}
          {p.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-quiet pointer-events-auto">
                <LinkIcon label={l.label} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
