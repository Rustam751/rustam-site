"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

type HeroProps = {
  title: string;
  summary: string;
  children?: React.ReactNode; // ✅ allow children
};

export default function Hero({ title, summary, children }: HeroProps) {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-10 py-16 md:flex-row md:py-24">
      {/* LEFT — text */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          {title}
        </motion.h1>

        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
          {summary}
        </p>

        {/* whatever you pass between <Hero>…</Hero> */}
        {children && <div className="space-y-4">{children}</div>}
      </div>

      {/* RIGHT — photo */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/headshot.jpg"        // ensure the file exists at /public/headshot.jpg
          alt="Rustam Mukhtarov"
          width={340}
          height={340}
          className="rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
    </section>
  );
}
