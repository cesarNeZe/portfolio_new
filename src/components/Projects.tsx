
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
        imageSrc: "/projects/project_1.png",
        tags: ["React", "Express", "Spotify API"],
    },
    {
        title: "Halcyon Theme",
        href: "#",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        imageSrc: "/projects/project_2.png",
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <li key={index} className="group/card relative h-80 overflow-hidden rounded-xl border border-secondary/10 bg-background/50 shadow-lg transition-all hover:border-accent/40 hover:shadow-accent/5">
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block h-full w-full"
                                aria-label={project.title}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        priority={index === 0}
                                        sizes="(min-width: 1024px) 800px, 100vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-background/80 transition-opacity duration-300 group-hover/card:bg-background/90" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex h-full flex-col items-start justify-end p-8 text-start transition-transform duration-500  group-hover/card:translate-y-[-4px]">
                                    <h3 className="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                                        <span className="flex items-center gap-2 text-white">
                                            {project.title}
                                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1" />
                                        </span>
                                    </h3>
                                    <p className="mt-4 max-w-lg text-sm  text-slate-100 transition-colors ">
                                        {project.description}
                                    </p>
                                    <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Technologies used">
                                        {project.tags.map((tag) => (
                                            <li key={tag}>
                                                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm border border-accent/20">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center font-semibold leading-tight text-primary group" aria-label="View Full Project Archive">
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
