import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://rustam-site-lemon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rustam Mukhtarov — AI Product Engineer",
    template: "%s · Rustam Mukhtarov",
  },
  description:
    "Rustam (Russ) Mukhtarov — AI Product Engineer and M.S. candidate in AI/Data Science. I build human–AI products, fast prototypes, and practical ML systems.",
  keywords: [
    "Rustam Mukhtarov",
    "AI Product Engineer",
    "Machine Learning",
    "Human-AI Interaction",
    "Next.js",
    "PyTorch",
    "San Francisco",
  ],
  authors: [{ name: "Rustam Mukhtarov" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Rustam Mukhtarov — AI Product Engineer",
    description:
      "I build human–AI products, fast prototypes, and practical ML systems. Projects, experience, and how to reach me.",
    url: siteUrl,
    siteName: "Rustam Mukhtarov",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustam Mukhtarov — AI Product Engineer",
    description:
      "I build human–AI products, fast prototypes, and practical ML systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 w-full mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
