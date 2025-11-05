// ------------ app/about/page.tsx ------------
import SectionTitle from "../components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="py-10">
      <SectionTitle
        title="About"
        subtitle="Who I am, what I build, and what I’m exploring next."
      />

      {/* Top intro */}
      <div className="grid gap-8 md:grid-cols-[1fr,320px]">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            I’m <strong>Rustam (Russ) Mukhtarov</strong>, an <strong>AI Product Engineer</strong> and
            M.S. candidate in AI/Data Science at San Francisco State University.
            I build human–AI products and fast prototypes—shipping early, testing with real people,
            and iterating until the experience feels effortless.
          </p>
          <p>
            My recent work spans conversational UX, model integration, and practical ML systems for
            speed and clarity. I enjoy blending design thinking with engineering craft to make AI
            collaboration feel natural and empowering.
          </p>
        </div>

        {/* Quick facts card */}
        <aside className="rounded-2xl border p-5 h-max">
          <h3 className="text-base font-semibold">Quick facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="opacity-70">Location:</span> San Francisco, CA</li>
            <li><span className="opacity-70">Role:</span> AI Product Engineer · TA @ SFSU</li>
            <li><span className="opacity-70">Languages:</span> English, Russian, Turkish, Azerbaijani; Spanish (beginner)</li>
            <li><span className="opacity-70">Tools:</span> Python, JS/TS, PyTorch, TensorFlow, Next.js, Tailwind</li>
            <li><span className="opacity-70">Interests:</span> Human–AI, prototyping, UX, medical imaging</li>
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <a href="/resume/Russ_Mukhtar_CV.pdf" className="rounded-xl border px-3 py-2 text-center hover:bg-white/10 transition">
              Resume
            </a>
            <a href="https://github.com/Rustam751" target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 text-center hover:bg-white/10 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/russmukhtar" target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 text-center hover:bg-white/10 transition col-span-2">
              LinkedIn
            </a>
          </div>
        </aside>
      </div>

      {/* In-page nav */}
      <nav className="mt-10 border-y py-4 text-sm overflow-x-auto">
        <ul className="flex gap-4">
          {[
            ["what-i-do", "What I do"],
            ["current-focus", "Current focus"],
            ["selected-work", "Selected work"],
            ["thesis", "Graduate thesis"],
            ["experience", "Experience snapshot"],
            ["values", "Principles"],
            ["beyond-work", "Beyond work"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={`#${href}`} className="hover:underline underline-offset-4">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* What I do */}
      <section id="what-i-do" className="mt-10">
        <h3 className="text-xl font-semibold">What I do</h3>
        <p className="mt-3 text-sm md:text-base opacity-90">
          I turn fuzzy product ideas into working prototypes, validate with users, and evolve them into
          crisp interfaces backed by reliable ML. I’m comfortable moving across frontend, backend, and model
          pipelines—prioritizing speed, usability, and measurable outcomes.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl border p-4">
            <div className="font-medium">Rapid prototyping</div>
            <div className="opacity-80 mt-1">Clickable demos in days, not weeks. Tight feedback loops.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="font-medium">Human–AI interaction</div>
            <div className="opacity-80 mt-1">Conversational UX, affordances, and guardrails that feel natural.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="font-medium">ML integration</div>
            <div className="opacity-80 mt-1">PyTorch/TensorFlow models, data prep, evaluation, and deployment glue.</div>
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section id="current-focus" className="mt-10">
        <h3 className="text-xl font-semibold">Current focus</h3>
        <ul className="mt-3 list-disc pl-5 text-sm md:text-base space-y-2">
          <li>Conversational UI patterns that guide users without getting in the way.</li>
          <li>Designing feedback mechanisms that improve model outputs over time.</li>
          <li>Interfaces that make advanced capabilities feel simple and trustworthy.</li>
        </ul>
      </section>

      {/* Selected work */}
      <section id="selected-work" className="mt-10">
        <h3 className="text-xl font-semibold">Selected work</h3>
        <div className="mt-4 grid gap-4">
          <div className="rounded-2xl border p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold">DriveShare · Web & Mobile</h4>
              <span className="text-xs opacity-70">2025—Present</span>
            </div>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Peer-to-peer parking: homeowners rent driveways; drivers book affordable spots.
              Built website + app (Next.js, Tailwind, PostgreSQL). Led flows, prototypes, and
              usability testing for both driver and homeowner dashboards.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold">AI Chatbot Web App</h4>
              <span className="text-xs opacity-70">2025—Present</span>
            </div>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Full-stack conversational app emphasizing interaction quality over model size.
              Flask backend + Google Gemma; custom front-end for pacing, clarity, and tone cues.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold">Medical Imaging · Alzheimer’s PET</h4>
              <span className="text-xs opacity-70">2024</span>
            </div>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Transfer-learning pipelines (VGG16, Inception V3, ResNet50) for staging Alzheimer’s from PET scans,
              with rigorous augmentation and evaluation procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section id="thesis" className="mt-10">
        <h3 className="text-xl font-semibold">Graduate thesis</h3>
        <p className="mt-3 text-sm md:text-base opacity-90">
          <strong>AI-Assisted Medial-Axis Modeling of the Human Fallopian Tube</strong> — building a
          3D deep-learning pipeline (PyTorch, MONAI) for lumen segmentation (target Dice ≥ 0.85) and
          centerline extraction with geometric descriptors (radius, curvature, torsion). Includes a Python toolkit
          (VTK/VMTK/SciPy) for quantitative analysis and dataset reproducibility.
        </p>
      </section>

      {/* Experience snapshot */}
      <section id="experience" className="mt-10">
        <h3 className="text-xl font-semibold">Experience snapshot</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <div className="flex items-baseline justify-between">
              <div className="font-semibold">Teaching Assistant · SFSU</div>
              <div className="text-xs opacity-70">2024—Present</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Led Python setup/tutorials for Theory of Computing students.</li>
              <li>1:1 lab support; clarified complex topics and debugged issues.</li>
              <li>Co-built materials and assisted grading for 30+ students.</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-baseline justify-between">
              <div className="font-semibold">AI Team Lead · RevSolz</div>
              <div className="text-xs opacity-70">2020—2023</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Directed ML pipelines for industrial data; improved accuracy & time-to-deploy.</li>
              <li>Mentored interns; coordinated with PMs; shipped production-ready models.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="values" className="mt-10">
        <h3 className="text-xl font-semibold">Principles I work by</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl border p-4">
            <div className="font-medium">Prototype to learn</div>
            <div className="opacity-80 mt-1">Real users &gt; perfect plans. Ship, test, iterate.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="font-medium">Clarity beats clever</div>
            <div className="opacity-80 mt-1">Reduce steps; raise confidence; respect attention.</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="font-medium">Make it trustworthy</div>
            <div className="opacity-80 mt-1">Good defaults, safe affordances, visible state.</div>
          </div>
        </div>
      </section>

      {/* Beyond work */}
      <section id="beyond-work" className="mt-10">
        <h3 className="text-xl font-semibold">Beyond work</h3>
        <p className="mt-3 text-sm md:text-base opacity-90">
          I lift, swim, and play basketball to reset my brain. Music (piano & guitar) keeps me curious and
          patient. I enjoy learning languages and exploring SF’s food scene.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="mailto:rmukhtarov@sfsu.edu"
          className="rounded-2xl border px-4 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          Get in touch
        </a>
        <a
          href="/projects"
          className="rounded-2xl border px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          See projects
        </a>
      </div>
    </div>
  );
}
