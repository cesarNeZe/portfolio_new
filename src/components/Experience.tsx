import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
    date: string;
    role: string;
    company: string;
    href: string;
    description: string;
    links: { label: string; href: string }[];
    tags: string[];
}

const experiences: ExperienceItem[] = [
    {
        date: "2024 — Present",
        role: "Senior Frontend Engineer",
        company: "Klaviyo",
        href: "https://klaviyo.com",
        description:
            "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Closely collaborate with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        links: [],
        tags: ["JavaScript", "TypeScript", "React", "Storybook"],
    },
    {
        date: "2018 — 2024",
        role: "Lead Engineer",
        company: "Upstatement",
        href: "https://upstatement.com",
        description:
            "Worked with a variety of different clients to build inclusive and accessible web products. Architected and engineered high-fidelity interfaces and led teams of engineers on large-scale projects.",
        links: [],
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        date: "Jul — Dec 2017",
        role: "UI Engineer Co-op",
        company: "Apple",
        href: "https://apple.com",
        description:
            "Developed and styled interactive UI components for Apple Music, including the Embeddable Web Player widget for third-party websites.",
        links: [],
        tags: ["Ember", "SCSS", "Javascript"],
    },
];

export const Experience = () => {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((job, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                    aria-label={job.date}
                                >
                                    {job.date}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-accent focus-visible:text-accent group/link text-base"
                                                href={job.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${job.role} at ${job.company}`}
                                            >
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {job.role} ·{" "}
                                                    <span className="inline-block">
                                                        {job.company}
                                                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-slate-400">
                                        {job.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {job.tags.map((tag) => (
                                            <li key={tag} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center font-semibold leading-tight text-slate-200 group" aria-label="View Full Resume">
                        <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">View Full Resume</span>
                        <span className="whitespace-nowrap ml-1">
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
