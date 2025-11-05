// ------------ app/layout.tsx ------------
import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rustam Mukhtarov – AI Product Engineer",
  description: "Personal website of Rustam (Russ) Mukhtarov: projects, experience, education, and contact.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="font-semibold">RM</Link>
              <Nav />
              <Link href="/resume/Russ_Mukhtar_CV.pdf" className="rounded-2xl border px-4 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Download CV</Link>
            </div>
          </div>
        </header>
        <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
        <footer className="mt-auto border-t">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm opacity-70 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span>© {new Date().getFullYear()} Rustam Mukhtarov. All rights reserved.</span>
            <span>Built with Next.js + Tailwind. Deployed on Vercel.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}