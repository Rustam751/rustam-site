import { skills } from "@/lib/data";

// The skill groups as a plain two-column list: group name on the left,
// its items as one line of text on the right.
export default function Skills() {
  return (
    <dl className="spec">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group}>
          <dt>{group}</dt>
          <dd>
            <ul className="tag-line">
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
