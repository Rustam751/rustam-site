// lib/github.ts
// Pulls public repos from the GitHub API so the site stays in sync with new
// projects without a code change. Cached via ISR and re-fetched at most once
// per hour, so the unauthenticated rate limit (60 req/h) is never a concern.

const GITHUB_USER = "Rustam751";

// Repos that should never show up (profile README repo, the site itself).
const EXCLUDED = new Set(["Rustam751", "rustam-site"]);

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export async function getGitHubRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();
    const visible = repos.filter(
      (r) => !r.fork && !r.archived && !EXCLUDED.has(r.name) && r.description
    );

    // Opt-in curation: if any repo carries the "portfolio" topic, show only
    // those. Otherwise fall back to every public repo with a description.
    const tagged = visible.filter((r) => r.topics?.includes("portfolio"));
    return (tagged.length > 0 ? tagged : visible).slice(0, limit);
  } catch {
    // Network hiccup or rate limit: render the page without the section.
    return [];
  }
}
