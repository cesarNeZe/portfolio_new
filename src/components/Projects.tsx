import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
    title: string;
    href: string;
    description: string;
    imageSrc: string;
    tags: string[];
}

const projects: ProjectItem[] = [
    {
        title: "Spotify Profile",
        href: "#",
        description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.",
        imageSrc: "/projects/project one .png",
        tags: ["React", "Express", "Spotify API"],
    },
    {
        title: "Halcyon Theme",
        href: "#",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        imageSrc: "/projects/project 2.png",
        tags: ["VS Code", "Sublime Text", "Atom"],
    },
    {
        title: "Spotify Connected App",
        href: "#",
        description:
            "Video course that covers everything you need to build a web app with the Spotify API. Tested by thousands of students.",
        imageSrc: "/projects/project 3.png",
        tags: ["React", "Express"],
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a
                                            className="inline-flex items-baseline font-display font-medium leading-tight text-slate-200 hover:text-accent focus-visible:text-accent group/link text-base"
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={project.title}
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {project.title}
                                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal font-body text-slate-400">
                                        {project.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.tags.map((tag) => (
                                            <li key={tag} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="z-10 sm:order-1 sm:col-span-2">
                                    <div className="relative aspect-video sm:aspect-[4/3] rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 overflow-hidden">
                                        <Image
                                            src={project.imageSrc}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                            sizes="(min-width: 640px) 150px, 100vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center font-semibold leading-tight text-slate-200 group" aria-label="View Full Project Archive">
                        <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">View Full Project Archive</span>
                        <span className="whitespace-nowrap ml-1">
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
