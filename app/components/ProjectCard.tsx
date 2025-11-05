// ------------ app/components/ProjectCard.tsx (client) ------------
"use client";
import { motion } from "framer-motion";


export default function ProjectCard({ p }: { p: { name: string; blurb: string; bullets: string[]; tags: string[]; period: string; link: string } }) {
    return (
        <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border p-5 hover:shadow-lg transition block"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.name}</h3>
                    <p className="text-sm opacity-70">{p.period}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                    {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">{t}</span>
                    ))}
                </div>
            </div>
            <p className="mt-3 text-sm md:text-base">{p.blurb}</p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
        </motion.a>
    );
}