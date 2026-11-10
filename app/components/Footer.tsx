import { profile } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/russmukhtar" },
  { label: "GitHub", href: "https://github.com/Rustam751" },
  { label: "Email", href: `mailto:${profile.email}` },
];

// One quiet row. The contact block above it already carries the invitation.
export default function Footer() {
  return (
    <footer className="mt-[var(--space-section)] border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[0.8125rem] text-[var(--text-faint)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="link-muted"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <span>Built with Next.js + Tailwind · Deployed on Vercel.</span>
      </div>
    </footer>
  );
}
