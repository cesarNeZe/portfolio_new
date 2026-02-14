"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com",
        icon: <Github className="w-5 h-5" />,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: <Twitter className="w-5 h-5" />,
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: <Instagram className="w-5 h-5" />,
    },
];

export const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-display font-bold tracking-tight text-primary sm:text-5xl">
                    <Link href="/">ELENA VANCE</Link>
                </h1>
                <h2 className="mt-3 text-lg font-display font-medium tracking-tight text-slate-100 sm:text-xl">
                    Lead Digital Designer & Creative Strategist
                </h2>
                <p className="mt-4 max-w-xs leading-normal font-body text-slate-400">
                    I craft digital experiences that merge editorial elegance with functional precision.
                </p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`group flex items-center py-3 transition-all ${activeSection === link.href.substring(1)
                                        ? "text-slate-100 font-bold"
                                        : "text-slate-500 hover:text-slate-100"
                                        }`}
                                >
                                    <span
                                        className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-100 ${activeSection === link.href.substring(1) ? "w-16 bg-slate-100" : ""
                                            }`}
                                    ></span>
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        {link.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                {socialLinks.map((link) => (
                    <li key={link.name} className="mr-5 text-xs">
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block hover:text-slate-100 transition-colors"
                            aria-label={`${link.name} (opens in a new tab)`}
                        >
                            <span className="sr-only">{link.name}</span>
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};
