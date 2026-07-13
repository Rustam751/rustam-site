import { getGitHubRepos } from "@/lib/github";

function timeAgo(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? "1 month ago" : `${months} months ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? "1 year ago" : `${years} years ago`;
}

export default async function GitHubActivity() {
  const repos = await getGitHubRepos();
  if (repos.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            Live from GitHub
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Latest repositories
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Synced automatically from the GitHub API — new projects show up here on
            their own.
          </p>
        </div>
        <a
          href="https://github.com/Rustam751"
          target="_blank"
          rel="noopener noreferrer"
          className="link-muted mb-1 text-sm"
        >
          github.com/Rustam751 →
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group flex flex-col p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-mono text-sm font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                {r.name}
              </h3>
              <span className="shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>

            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              {r.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-[var(--text-faint)]">
              {r.language && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  {r.language}
                </span>
              )}
              {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
              <span>Updated {timeAgo(r.pushed_at)}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
