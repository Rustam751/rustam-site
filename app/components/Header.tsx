"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#08080b]/80 border-b border-[var(--border)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-sm font-bold text-[#0a0a0f]">
              RM
            </span>
            <span className="hidden sm:inline text-sm text-[var(--text-muted)]">
              Rustam Mukhtarov
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "text-[var(--text)] bg-[var(--surface-hover)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/resume/Russ_Mukhtar_CV.pdf"
              className="hidden md:inline-flex btn btn-primary !py-1.5 !px-3.5 text-sm"
            >
              Download CV
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-[var(--text)]"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#08080b]/95 backdrop-blur-md">
          <nav className="mx-auto max-w-5xl px-5 py-3 flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={`rounded-lg px-3 py-2.5 text-sm ${
                    active
                      ? "text-[var(--text)] bg-[var(--surface-hover)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/resume/Russ_Mukhtar_CV.pdf"
              onClick={close}
              className="btn btn-primary mt-2 justify-center"
            >
              Download CV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
