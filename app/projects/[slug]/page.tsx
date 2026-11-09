import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "../../components/ContactCTA";
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
    <article className="py-12">
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
        <Link href="/projects" className="link-muted inline-flex items-center gap-1.5 text-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          All projects
        </Link>
      </nav>

      {/* Title block */}
      <header className="mt-6">
        <p className="eyebrow">Case study</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          {project.period} · {study.role}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          {study.intro}
        </p>

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

      {/* Headline numbers */}
      <dl
        className={`mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] ${
          study.highlights.length % 2 === 1
            ? "sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1"
            : "sm:grid-cols-4"
        }`}
      >
        {study.highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse justify-end bg-[var(--bg)] px-4 py-5">
            <dt className="mt-1 text-xs leading-snug text-[var(--text-muted)]">{h.label}</dt>
            <dd className="gradient-text text-2xl font-bold">{h.value}</dd>
          </div>
        ))}
      </dl>

      {/* Honest caveat */}
      {study.note && (
        <p className="mt-5 flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-relaxed text-[var(--text-muted)]">
          <svg className="mt-0.5 shrink-0 text-[var(--accent-2)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
          </svg>
          <span>{study.note}</span>
        </p>
      )}

      {/* Example of the system in use */}
      {study.demo && (
        <section className="mt-16">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">{study.demo.heading}</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-[var(--text-muted)]">{study.demo.intro}</p>
          <div className="card mt-6 divide-y divide-[var(--border)] overflow-hidden">
            {study.demo.exchanges.map((x) => (
              <div key={x.question} className="p-5">
                <p className="flex gap-3 text-sm font-medium md:text-base">
                  <span className="shrink-0 text-[var(--text-faint)]" aria-hidden>
                    Q
                  </span>
                  <span>
                    <span className="sr-only">Question: </span>
                    {x.question}
                  </span>
                </p>
                <div className="mt-3 flex gap-3 text-sm md:text-base">
                  <span className="shrink-0 text-[var(--accent)]" aria-hidden>
                    A
                  </span>
                  <div className="min-w-0">
                    {x.abstained && (
                      <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-0.5 text-xs font-medium text-amber-200">
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

      {/* How it works */}
      <section className="mt-16">
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">{study.steps.heading}</h2>
        <ol
          className={`mt-6 grid gap-4 sm:grid-cols-2 ${
            study.steps.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {study.steps.items.map((s, i) => (
            <li key={s.title} className="card p-5">
              <span className="font-mono text-xs text-[var(--accent)]" aria-hidden>
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
        <div className="mt-16 space-y-10">
          {study.figures.map((f) => (
            <figure key={f.src} className={f.wide ? "" : "mx-auto max-w-xl"}>
              <div
                className={`overflow-hidden rounded-2xl border border-[var(--border)] ${
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
      <div className="mt-16 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {study.sections.map((s) => (
          <section key={s.title} className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
            <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
            <div className="max-w-2xl space-y-4 leading-relaxed text-[var(--text-muted)]">
              {s.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.bullets && s.bullets.length > 0 && <Bullets items={s.bullets} />}
            </div>
          </section>
        ))}
      </div>

      {/* Stack */}
      <section className="mt-16">
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">Built with</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.stack.map((g) => (
            <div key={g.group} className="card p-5">
              <h3 className="text-sm font-semibold">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li key={it} className="tag">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Other case studies */}
      {others.length > 0 && (
        <nav aria-label="More projects" className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">More projects</h2>
            <Link href="/projects" className="link-muted shrink-0 text-sm">
              All projects →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {others.map(({ project: o }) => (
              <Link key={o.slug} href={`/projects/${o.slug}`} className="card card-hover group block p-5">
                <p className="text-xs text-[var(--text-muted)]">{o.period}</p>
                <p className="mt-1 font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {o.name}
                </p>
                {o.impact && <p className="mt-2 text-sm text-[var(--text-muted)]">{o.impact}</p>}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <section className="pt-20">
        <ContactCTA />
      </section>
    </article>
  );
}
