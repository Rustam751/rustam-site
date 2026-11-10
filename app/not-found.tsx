import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

// Shown for any address that does not exist. Without this file Next.js
// uses its own 404 screen, which ignores the site's colours.
export default function NotFound() {
  return (
    <div className="pt-10 md:pt-14">
      <p className="eyebrow">404</p>
      <h1 className="h-page mt-3">Page not found</h1>
      <p className="lead mt-4 max-w-xl">
        That address does not exist on this site. It may be mistyped, or the page may have moved.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/projects" className="btn">
          See projects
        </Link>
      </div>
    </div>
  );
}
