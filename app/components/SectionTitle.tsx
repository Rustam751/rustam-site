export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  // Use "h1" for the main heading of a page, "h2" (default) for a section.
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-8">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{title}</Heading>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-[var(--text-muted)]">{subtitle}</p>
      )}
    </div>
  );
}
