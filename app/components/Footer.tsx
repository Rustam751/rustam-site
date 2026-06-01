import Link from "next/link";
import { profile } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/russmukhtar" },
  { label: "GitHub", href: "https://github.com/Rustam751" },
  { label: "Email", href: "mailto:rmukhtarov@sfsu.edu" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Let&apos;s build something.
            </p>
            <a
              href="mailto:rmukhtarov@sfsu.edu"
              className="mt-1 inline-block text-sm text-[var(--accent)] hover:underline underline-offset-4"
            >
              rmukhtarov@sfsu.edu
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="link-muted"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-faint)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>
            Built with{" "}
            <Link href="https://nextjs.org" className="link-muted">Next.js</Link>
            {" "}+ Tailwind · Deployed on Vercel.
          </span>
        </div>
      </div>
    </footer>
  );
}
