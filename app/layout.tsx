import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import ContactCTA from "./components/ContactCTA";
import { profile, siteUrl } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
  openGraph: {
    title: "Rustam Mukhtarov — ML/AI Engineer",
    description:
      "I build deployable AI systems: RAG pipelines, ML APIs, computer vision, and medical imaging. Projects, experience, and how to reach me.",
    // No "url" here: every page would inherit it and claim to be the home
    // page. Without it, a link preview uses the address that was shared.
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

// Structured data: tells Google who this site is about (name, role, profiles).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rustam Mukhtarov",
  alternateName: ["Russ Mukhtarov", "Russ Mukhtar"],
  url: siteUrl,
  image: `${siteUrl}${profile.headshot}`,
  jobTitle: "ML/AI Engineer",
  description: profile.summary,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "San Francisco State University" },
    { "@type": "CollegeOrUniversity", name: "Yildiz Technical University" },
  ],
  knowsAbout: ["Machine Learning", "Retrieval-Augmented Generation", "Computer Vision", "Medical Imaging", "MLOps"],
  sameAs: ["https://www.linkedin.com/in/russmukhtar", "https://github.com/Rustam751"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased">
        {/* First stop for the Tab key; hidden until it has focus. */}
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1 w-full mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          {children}
          {/* The same contact block closes every page. */}
          <div className="section">
            <ContactCTA />
          </div>
        </main>
        <Footer />
        <JsonLd data={personJsonLd} />
      </body>
    </html>
  );
}
