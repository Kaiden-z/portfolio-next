"use client";

import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import { Project } from "@/types/project";

const projects : Project[] = [
    {
        name: "Golfin' Slayer",
        tags: ["Unity", "C#", "In Development"],
        description: "A top down action rogue-like.",
        media: [
            {
                type: "image",
                src: "images/projects/golfinSlayer/golfinSlayerTitle.png",
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
    },
    {
        name: "Vegetables of Mass Destruction",
        tags: ["Unreal Engine 5", "C++"],
        description: "A simple 2D platformer game.",
        media: [
            {
                type: "video",
                src: "videos/projects/Vegetables of Mass Destruction Trailer.mp4",
                poster: "images/projects/vomd/vomdTitle.png"
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
        ],
        steamUrl: "https://store.steampowered.com/app/3733590/Vegetables_of_Mass_Destruction/",
        itchUrl: "https://ronghuaa.itch.io/veggies-of-mass-destruction",
        githubUrl: "https://github.com/Kaiden-z/Vegetables-Of-Mass-Destruction"
    },
    {
        name: "Procedural Animation Tool",
        tags: ["Godot", "C#", "Tooling"],
        description: "A simple 2D platformer game.",
        media: [
            {
                type: "video",
                src: "videos/projects/Vegetables of Mass Destruction Trailer.mp4",
                poster: "images/projects/vomd/vomdTitle.png"
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
        ],
        githubUrl: "https://github.com/Kaiden-z/Godot-Procedural-Animation-Tool"
    },
    {
        name: "FG Framework",
        tags: ["Unreal Engine 5", "C++", "Tooling", "In Development"],
        description: "A simple 2D platformer game.",
        media: [
            {
                type: "video",
                src: "videos/projects/Vegetables of Mass Destruction Trailer.mp4",
                poster: "images/projects/vomd/vomdTitle.png"
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
        ],
        githubUrl: "https://github.com/Kaiden-z/FGFramework"
    },
]

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="PROJECTS"
            />

            <section className="account-links">
                <h1>
                    See More:
                </h1>
                <Button
                    icon={<GitHubIcon />}
                    href="https://github.com/Kaiden-z"
                >
                    GitHub
                </Button>
                <Button
                    icon={<ItchIcon />}
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