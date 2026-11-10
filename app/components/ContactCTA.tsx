import { profile } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="card relative overflow-hidden p-7 md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(36rem 18rem at 0% 0%, var(--glow-a), transparent 65%)" }}
      />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-xl">
          <h2 className="h-section">Let&apos;s build something people love.</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
            I&apos;m open to ML/AI engineering and data science roles, collaborations,
            and interesting projects. The fastest way to reach me is email.
          </p>
        </div>
        {/* Stacked at full width on phones, side by side from 640px. */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {profile.email}
          </a>
          <a
            href="https://www.linkedin.com/in/russmukhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
