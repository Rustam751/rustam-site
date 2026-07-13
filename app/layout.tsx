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
    default: "Rustam Mukhtarov — ML/AI Engineer",
    template: "%s · Rustam Mukhtarov",
  },
  description:
    "Rustam (Russ) Mukhtarov — ML/AI Engineer and M.S. candidate in AI/Data Science. I build deployable AI systems: RAG pipelines, ML APIs, computer vision, and medical imaging.",
  keywords: [
    "Rustam Mukhtarov",
    "ML Engineer",
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "FastAPI",
    "PyTorch",
    "Computer Vision",
    "Medical Imaging",
    "San Francisco",
  ],
  authors: [{ name: "Rustam Mukhtarov" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Rustam Mukhtarov — ML/AI Engineer",
    description:
      "I build deployable AI systems: RAG pipelines, ML APIs, computer vision, and medical imaging. Projects, experience, and how to reach me.",
    url: siteUrl,
    siteName: "Rustam Mukhtarov",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustam Mukhtarov — ML/AI Engineer",
    description:
      "I build deployable AI systems: RAG pipelines, ML APIs, computer vision, and medical imaging.",
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
