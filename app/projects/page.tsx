"use client";

import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import { Project } from "@/types/project";

const projects : Project[] = [
    {
        name: "Vegetables of Mass Destruction",
        tags: ["Unreal Engine 5", "C++"],
        description: "A simple 2D platformer game.",
        media: [
            {
                type: "video",
                src: "videos/projects/Vegetables of Mass Destruction Trailer.mp4",
            },
            {
                type: "image",
                src: "images/projects/vomd/vomdScreenshot1.jpg"
            },
            {
                type: "image",
                src: "images/projects/vomd/vomdScreenshot2.jpg"
            },
            {
                type: "image",
                src: "images/projects/vomd/vomdScreenshot3.jpg"
            }
        ]
    }
]

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="PROJECTS"
            />

            <section className="project-links">
                <Button
                    icon={<GitHubIcon />}
                    variant="secondary"
                    href="https://github.com/Kaiden-z"
                >
                    GitHub
                </Button>
                <Button
                    icon={<ItchIcon />}
                    variant="secondary"
                    href="https://kaiden-z.itch.io/"
                >
                    Itch.io
                </Button>
            </section>

            <section className="projects-list">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </section>
        </main>
    );
}