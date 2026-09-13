"use client";

import { itemVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import { Project } from "@/types/project";
import { motion } from "motion/react";

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
        links: [
            {
                site: "Steam",
                url: "https://store.steampowered.com/app/3733590/Vegetables_of_Mass_Destruction/"
            },
            {
                site: "Itch.io",
                url: "https://ronghuaa.itch.io/veggies-of-mass-destruction"
            },
            {
                site: "GitHub",
                url: "https://github.com/Kaiden-z/Vegetables-Of-Mass-Destruction"
            }
        ]
    },
    {
        name: "Godot Procedural Animation Tool",
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
        links: [
            {
                site: "GitHub",
                url: "https://github.com/Kaiden-z/Godot-Procedural-Animation-Tool"
            }
        ]
    },
    {
        name: "Architect Villager Mod",
        tags: ["Java", "Modding"],
        description: "A simple 2D platformer game.",
        media: [
            {
                type: "image",
                src: "images/projects/architectVillagerMod/architect-villager-mod-blueprint.png",
                fit: "contain"
            },
            {
                type: "image",
                src: "images/projects/architectVillagerMod/architect-villager.png"
            },
            {
                type: "image",
                src: "images/projects/architectVillagerMod/architect-villager-mod-crafting.png"
            },
            {
                type: "image",
                src: "images/projects/architectVillagerMod/fletcher-blueprint.png"
            },
            {
                type: "image",
                src: "images/projects/architectVillagerMod/example-village.png"
            }
        ],
        links: [
            {
                site: "CurseForge",
                url: "https://www.curseforge.com/minecraft/mc-mods/architect-villager-mod"
            },
            {
                site: "GitHub",
                url: "https://github.com/Kaiden-z/ArchitectVillagerMod"
            }
        ]
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
        links: [
            {
                site: "GitHub",
                url: "https://github.com/Kaiden-z/FGFramework"
            }
        ]
    },
]

export default function Projects() {
    return (
        <motion.main
            variants={mainVariants}
            initial="hidden"
            animate="show"
        >
            <PageHeader
                title="PROJECTS"
            />

            <motion.section 
                className="account-links"
                variants={sectionVariants}>
                <motion.p
                    variants={itemVariants}
                >
                    See more of my work:
                </motion.p>
                <motion.div
                    variants={itemVariants}
                >
                    <Button
                        icon={<GitHubIcon />}
                        href="https://github.com/Kaiden-z"
                    >
                        github.com/Kaiden-z
                    </Button>
                </motion.div>
 
                <motion.div
                    variants={itemVariants}
                >
                    <Button
                        icon={<ItchIcon />}
                        href="https://kaiden-z.itch.io/"
                    >
                        kaiden-z.itch.io
                    </Button>
                </motion.div>
            </motion.section>

            <section className="projects-list">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </section>
        </motion.main>
    );
}