// ------------ app/components/Nav.tsx (client) ------------
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
];


export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="hidden gap-6 md:flex">
            {links.map((l) => {
                const active = pathname === l.href;
                return (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={`text-sm hover:opacity-70 ${active ? "font-semibold" : ""}`}
                    >
                        {l.label}
                    </Link>
                );
            })}
        </nav>
    );
}