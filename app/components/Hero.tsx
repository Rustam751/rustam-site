"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile, stats } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export default function Hero() {
  return (
    <section className="py-14 md:py-20">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        {/* LEFT — text */}
        <div className="flex-1 text-center md:text-left">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-muted)]">
              <span className="status-dot" />
              {profile.status}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m {profile.firstName}.
            <br />
            <span className="gradient-text">{profile.tagline}.</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-5 max-w-xl text-base md:text-lg text-[var(--text-muted)] leading-relaxed mx-auto md:mx-0"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a href="/projects" className="btn btn-primary">
              View my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="mailto:rmukhtarov@sfsu.edu" className="btn">
              Get in touch
            </a>
            <a
              href="/resume/Russ_Mukhtar_CV.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:justify-start"
          >
            {profile.links
              .filter((l) => l.label !== "Resume (PDF)")
              .map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-muted"
                >
                  {l.label}
                </a>
              ))}
            <span className="text-[var(--text-faint)]">· {profile.location}</span>
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <motion.div
          {...fade(0.1)}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/40 to-[var(--accent-2)]/30 blur-2xl opacity-60" />
            <div className="relative rounded-[1.6rem] p-[1.5px] bg-gradient-to-br from-[var(--accent)]/60 to-[var(--accent-2)]/40">
              <Image
                src="/headshot.jpg"
                alt="Rustam Mukhtarov"
                width={320}
                height={320}
                className="rounded-[1.5rem] object-cover bg-[var(--bg-soft)]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat row */}
      <motion.div
        {...fade(0.4)}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--bg)] px-4 py-5 text-center sm:text-left">
            <div className="text-2xl font-bold gradient-text">{s.value}</div>
            <div className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
