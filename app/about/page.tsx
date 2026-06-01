import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rustam (Russ) Mukhtarov — AI Product Engineer and M.S. candidate in AI/Data Science. How I work, what I'm focused on, and my graduate thesis.",
};

const quickFacts = [
  ["Location", "San Francisco, CA"],
  ["Role", "AI Product Engineer · TA @ SFSU"],
  ["Languages", "English, Russian, Turkish, Azerbaijani · Spanish (beginner)"],
  ["Stack", "Python, JS/TS, PyTorch, TensorFlow, Next.js, Tailwind"],
  ["Interests", "Human–AI, prototyping, UX, medical imaging"],
];

const doCards = [
  ["Rapid prototyping", "Clickable demos in days, not weeks. Tight feedback loops."],
  ["Human–AI interaction", "Conversational UX, affordances, and guardrails that feel natural."],
  ["ML integration", "PyTorch/TensorFlow models, data prep, evaluation, and deployment glue."],
];

const principles = [
  ["Prototype to learn", "Real users > perfect plans. Ship, test, iterate."],
  ["Clarity beats clever", "Reduce steps; raise confidence; respect attention."],
  ["Make it trustworthy", "Good defaults, safe affordances, visible state."],
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <SectionTitle
        eyebrow="About"
        title="Who I am, and how I work"
        subtitle="What I build, and what I'm exploring next."
      />

      {/* Intro + quick facts */}
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
          <p>
            I&apos;m <strong className="text-[var(--text)]">Rustam (Russ) Mukhtarov</strong>, an{" "}
            <strong className="text-[var(--text)]">AI Product Engineer</strong> and M.S. candidate in
            AI/Data Science at San Francisco State University. I build human–AI products and fast
            prototypes — shipping early, testing with real people, and iterating until the experience
            feels effortless.
          </p>
          <p>
            My recent work spans conversational UX, model integration, and practical ML systems for
            speed and clarity. I enjoy blending design thinking with engineering craft to make AI
            collaboration feel natural and empowering.
          </p>
        </div>

        <aside className="card h-max p-5">
          <h3 className="text-sm font-semibold">Quick facts</h3>
          <dl className="mt-3 space-y-2.5 text-sm">
            {quickFacts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[var(--text-faint)]">{k}</dt>
                <dd className="text-[var(--text-muted)]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
            <a href="/resume/Russ_Mukhtar_CV.pdf" className="btn justify-center !py-2">Résumé</a>
            <a href="https://github.com/Rustam751" target="_blank" rel="noreferrer" className="btn justify-center !py-2">GitHub</a>
            <a href="https://www.linkedin.com/in/russmukhtar" target="_blank" rel="noreferrer" className="btn justify-center !py-2 col-span-2">LinkedIn</a>
          </div>
        </aside>
      </div>

      {/* What I do */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">What I do</h3>
        <p className="mt-3 text-[var(--text-muted)] leading-relaxed max-w-2xl">
          I turn fuzzy product ideas into working prototypes, validate with users, and evolve them into
          crisp interfaces backed by reliable ML. I&apos;m comfortable moving across frontend, backend,
          and model pipelines — prioritizing speed, usability, and measurable outcomes.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {doCards.map(([t, d]) => (
            <div key={t} className="card p-5">
              <div className="font-medium">{t}</div>
              <div className="mt-1 text-sm text-[var(--text-muted)]">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Current focus */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Current focus</h3>
        <ul className="mt-4 space-y-2.5 text-[var(--text-muted)]">
          {[
            "Conversational UI patterns that guide users without getting in the way.",
            "Feedback mechanisms that improve model outputs over time.",
            "Interfaces that make advanced capabilities feel simple and trustworthy.",
          ].map((t) => (
            <li key={t} className="flex gap-2.5">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span className="leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Thesis */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Graduate thesis</h3>
        <div className="card mt-4 p-6">
          <p className="text-[var(--text-muted)] leading-relaxed">
            <strong className="text-[var(--text)]">
              AI-Assisted Medial-Axis Modeling of the Human Fallopian Tube
            </strong>{" "}
            — building a 3D deep-learning pipeline (PyTorch, MONAI) for lumen segmentation
            (target Dice ≥ 0.85) and centerline extraction with geometric descriptors (radius,
            curvature, torsion). Includes a Python toolkit (VTK/VMTK/SciPy) for quantitative analysis
            and dataset reproducibility. Advised by Prof. Kazunori Okada.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Principles I work by</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {principles.map(([t, d]) => (
            <div key={t} className="card p-5">
              <div className="font-medium">{t}</div>
              <div className="mt-1 text-sm text-[var(--text-muted)]">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond work */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Beyond work</h3>
        <p className="mt-3 text-[var(--text-muted)] leading-relaxed max-w-2xl">
          I lift, swim, and play basketball to reset my brain. Music (piano &amp; guitar) keeps me
          curious and patient. I enjoy learning languages and exploring SF&apos;s food scene.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-14 flex flex-wrap gap-3">
        <a href="mailto:rmukhtarov@sfsu.edu" className="btn btn-primary">Get in touch</a>
        <a href="/projects" className="btn">See projects</a>
      </div>
    </div>
  );
}
