"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

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

  // Escape closes the phone menu and puts focus back on its button.
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // The exact page is marked "page"; a page below it (a case study under
  // Projects) marks its section "true".
  const current = (href: string, active: boolean) =>
    pathname === href ? "page" : active ? "true" : undefined;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] border-b border-[var(--border)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Rustam Mukhtarov, home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-sm font-bold text-[var(--on-accent)]">
              RM
            </span>
            <span className="hidden sm:inline text-sm text-[var(--text-muted)]">
              Rustam Mukhtarov
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={current(l.href, active)}
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
            {/* Light / dark switch, on every screen size */}
            <ThemeToggle />

            {/* A plain link, not <Link>: the CV is a file, not a page. */}
            <a
              href="/resume/Russ_Mukhtar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-sm"
            >
              Download CV
            </a>

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              type="button"
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
        <div className="md:hidden border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_95%,transparent)] backdrop-blur-md">
          <nav aria-label="Main" className="mx-auto max-w-5xl px-5 py-3 flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={current(l.href, active)}
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
            <a
              href="/resume/Russ_Mukhtar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn btn-primary mt-2 justify-center"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
