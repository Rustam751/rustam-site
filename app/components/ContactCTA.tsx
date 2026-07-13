export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] p-8 md:p-12 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(40rem 20rem at 50% 0%, rgba(124,140,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Let&apos;s build something people love.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm md:text-base text-[var(--text-muted)]">
          I&apos;m open to ML/AI engineering and data science roles, collaborations,
          and interesting projects. The fastest way to reach me is email.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:rmukhtarov@sfsu.edu" className="btn btn-primary">
            rmukhtarov@sfsu.edu
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
