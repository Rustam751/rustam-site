import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import LinkIcon from "../../components/LinkIcon";
import { siteUrl } from "@/lib/data";
import { caseStudyList, getCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

// Only projects that have a case study in lib/case-studies.ts get a page.
// Any other address under /projects/ is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyList().map(({ project }) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCaseStudy(slug);
  if (!entry) return {};
  const { project, study } = entry;
  const title = `${project.name} · Rustam Mukhtarov`;
  const url = `/projects/${slug}`;

  return {
    title: project.name,
    description: study.metaDescription,
    alternates: { canonical: url },
    // The share picture comes from opengraph-image.tsx / twitter-image.tsx
    // in this folder.
    openGraph: {
      title,
      description: study.metaDescription,
      url,
      siteName: "Rustam Mukhtarov",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.metaDescription,
    },
  };
}

// Button text for the links at the top of the page.
const linkText: Record<string, string> = {
  GitHub: "Code on GitHub",
  Docs: "Read the README",
  "Live demo": "Open the live demo",
  "Project site": "Open the project site",
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex gap-2.5">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          <span className="leading-relaxed">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const entry = getCaseStudy(slug);
  if (!entry) notFound();
  const { project, study } = entry;

  const others = caseStudyList().filter((e) => e.project.slug !== slug);
  const pageUrl = `${siteUrl}/projects/${slug}`;
  const repo = project.links.find((l) => l.label === "GitHub")?.href;
  const person = { "@type": "Person", name: "Rustam Mukhtarov", url: siteUrl };

  return (
    <article className="pt-10 md:pt-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
                { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
              ],
            },
            {
              "@type": repo ? "SoftwareSourceCode" : "CreativeWork",
              name: project.name,
              description: study.metaDescription,
              url: pageUrl,
              keywords: project.tags.join(", "),
              // Team projects list Russ as a contributor, not the sole author.
              ...(study.solo ? { author: person } : { contributor: person }),
              ...(repo ? { codeRepository: repo } : {}),
            },
          ],
        }}
      />

      <nav aria-label="Breadcrumb">
        <Link href="/projects" className="link-quiet">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          All projects
        </Link>
      </nav>

      {/* Title block */}
      <header className="mt-6">
        <p className="eyebrow">Case study</p>
        <h1 className="h-page mt-3">{project.name}</h1>
        <p className="meta mt-3">
          {project.period} · {study.role}
        </p>
        <p className="lead mt-5 max-w-2xl">{study.intro}</p>

        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? "btn btn-primary" : "btn"}
              >
                <LinkIcon label={l.label} />
                {linkText[l.label] ?? l.label}
              </a>
            ))}
          </div>
        )}

        <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </header>

      {/* Headline numbers, with the caveat that belongs to them right below */}
      <dl className="stat-row mt-10" data-cols={study.highlights.length}>
        {study.highlights.map((h) => (
          <div key={h.label} className="stat">
            <dt className="stat-label">{h.label}</dt>
            <dd className="stat-value">{h.value}</dd>
          </div>
        ))}
      </dl>
      {study.note && (
        <p className="callout mt-3">
          <svg className="mt-0.5 shrink-0 text-[var(--accent-2-text)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
          </svg>
          <span>{study.note}</span>
        </p>
      )}

      {/* Example of the system in use */}
      {study.demo && (
        <section className="section">
          <h2 className="h-sub">{study.demo.heading}</h2>
          <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
            {study.demo.intro}
          </p>
          <div className="card mt-6 divide-y divide-[var(--border)] overflow-hidden">
            {study.demo.exchanges.map((x) => (
              <div key={x.question} className="p-5">
                <p className="flex gap-3 text-[0.9375rem] font-medium">
                  <span className="shrink-0 text-[var(--text-faint)]" aria-hidden>
                    Q
                  </span>
                  <span>
                    <span className="sr-only">Question: </span>
                    {x.question}
                  </span>
                </p>
                <div className="mt-3 flex gap-3 text-[0.9375rem]">
                  <span className="shrink-0 text-[var(--accent-text)]" aria-hidden>
                    A
                  </span>
                  <div className="min-w-0">
                    {x.abstained && (
                      <p className="badge-warn mb-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                        </svg>
                        Not grounded in the documents
                      </p>
                    )}
                    <p className="leading-relaxed text-[var(--text-muted)]">
                      <span className="sr-only">Answer: </span>
                      {x.answer}
                    </p>
                    {x.sources && x.sources.length > 0 && (
                      <ul aria-label="Sources cited" className="mt-3 flex flex-wrap gap-1.5">
                        {x.sources.map((s, i) => (
                          <li key={`${s}-${i}`} className="tag font-mono">
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {study.demo.footnote && (
            <p className="mt-3 text-sm text-[var(--text-muted)]">{study.demo.footnote}</p>
          )}
        </section>
      )}

      {/* How it works: plain columns with a rule on top, no boxes */}
      <section className="section">
        <h2 className="h-sub">{study.steps.heading}</h2>
        <ol className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {study.steps.items.map((s, i) => (
            <li key={s.title} className="rule-col">
              <span className="meta" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pictures */}
      {study.figures && study.figures.length > 0 && (
        <div className="section space-y-10">
          {study.figures.map((f) => (
            <figure key={f.src} className={f.wide ? "" : "mx-auto max-w-xl"}>
              <div
                className={`overflow-hidden rounded-[var(--r-lg)] border border-[var(--border)] ${
                  f.light ? "bg-white p-2 sm:p-4" : "bg-[var(--bg-soft)]"
                }`}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  sizes={f.wide ? "(min-width: 1024px) 960px, 100vw" : "(min-width: 640px) 576px, 100vw"}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {f.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* The story */}
      <div className="section">
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {study.sections.map((s) => (
            <section key={s.title} className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
              <h2 className="h-sub">{s.title}</h2>
              <div className="max-w-2xl space-y-4 leading-relaxed text-[var(--text-muted)]">
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets && s.bullets.length > 0 && <Bullets items={s.bullets} />}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Stack */}
      <section className="section">
        <h2 className="h-sub">Built with</h2>
        <dl className="spec mt-6">
          {study.stack.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>
                <ul className="tag-line">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Other case studies */}
      {others.length > 0 && (
        <nav aria-label="More projects" className="section">
          <div className="section-head">
            <h2 className="h-sub">More projects</h2>
            <Link href="/projects" className="link-quiet shrink-0">
              All projects
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {others.map(({ project: o }) => (
              <Link key={o.slug} href={`/projects/${o.slug}`} className="card card-link block p-5">
                <p className="meta">{o.period}</p>
                <p className="card-title mt-1.5">{o.name}</p>
                {o.impact && <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{o.impact}</p>}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </article>
  );
}
