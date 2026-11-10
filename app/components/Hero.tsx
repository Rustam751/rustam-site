import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { profile, stats } from "@/lib/data";

// The hero appears in small steps: each block starts 70 ms after the one
// before it. This is plain CSS (class "rise"), so the text is already in the
// page before any JavaScript runs.
const step = (i: number) => ({ "--i": i }) as CSSProperties;

// The status line reads "what — where". On a narrow phone it breaks at the
// dash, never in the middle of the place.
const [statusWhat, statusWhere] = profile.status.split(" — ");

const cv = profile.links.find((l) => l.label === "Resume (PDF)");
const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  ...profile.links.filter((l) => l.label !== "Resume (PDF)"),
];

export default function Hero() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start lg:gap-16">
        {/* Text */}
        <div className="min-w-0">
          <p className="status rise" style={step(0)}>
            <span className="status-dot" aria-hidden />
            <span>
              {statusWhat}
              {statusWhere && (
                <>
                  {" — "}
                  <span className="whitespace-nowrap">{statusWhere}</span>
                </>
              )}
            </span>
          </p>

          <p className="rise mt-6 text-balance text-[0.9375rem] font-medium text-[var(--text)]" style={step(1)}>
            {profile.title}
          </p>
          <h1 className="h-hero rise mt-2.5" style={step(1)}>
            Hi, I&apos;m {profile.firstName}.{" "}
            <span className="gradient-text block">{profile.tagline}.</span>
          </h1>

          <p className="lead rise mt-5 max-w-[36rem]" style={step(2)}>
            {profile.summary}
          </p>

          <div className="rise mt-7 flex flex-wrap items-center gap-x-7 gap-y-4" style={step(3)}>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">
                View my work
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              {cv && (
                <a href={cv.href} target="_blank" rel="noopener noreferrer" className="btn">
                  Résumé
                </a>
              )}
            </div>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    // The padding makes the link easier to tap; the
                    // negative margin keeps the row where it was.
                    className="link-muted -my-2.5 inline-block py-2.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who this is: a small row above the text on phones, a column on
            the right on wide screens. */}
        <aside className="rise order-first flex items-center gap-4 lg:order-none lg:block" style={step(1)}>
          <div className="portrait w-14 shrink-0 lg:w-full">
            <Image
              src={profile.headshot}
              alt={`Portrait of ${profile.name}`}
              width={1562}
              height={1454}
              sizes="(min-width: 1024px) 502px, 126px"
              className="portrait-img"
              priority
            />
          </div>
          <div className="min-w-0 lg:mt-4">
            <p className="text-sm font-semibold text-[var(--text)]">{profile.name}</p>
            <p className="mt-0.5 text-[0.8125rem] text-[var(--text-faint)]">{profile.location}</p>
          </div>
        </aside>
      </div>

      {/* Numbers. The labels are shown in full: they say what was measured. */}
      <dl className="stat-row rise mt-10 md:mt-12" style={step(4)}>
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <dt className="stat-label">{s.label}</dt>
            <dd className="stat-value">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
