import Link from "next/link";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  // Use "h1" for the main heading of a page, "h2" (default) for a section.
  as?: "h1" | "h2";
  // Optional link shown at the right end, e.g. "All projects".
  action?: { href: string; label: string };
}) {
  return (
    <div className="section-head">
      <div className="min-w-0">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className={`${Heading === "h1" ? "h-page" : "h-section"} mt-3`}>{title}</Heading>
        {subtitle && (
          <p className="mt-2 max-w-[60ch] text-[0.9375rem] text-[var(--text-muted)]">{subtitle}</p>
        )}
      </div>
      {action && (
        <Link href={action.href} className="link-quiet shrink-0">
          {action.label}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
