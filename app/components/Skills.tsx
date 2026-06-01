import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="card p-5">
          <h3 className="text-sm font-semibold text-[var(--text)]">{group}</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {items.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
