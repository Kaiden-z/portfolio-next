"use client";

import { itemVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import { useEffect } from "react";

const projects : Project[] = [
    {
        name: "Golfin' Slayer",
        tags: ["Unity", "C#", "In Development"],
        description: (
            <div>
                <p>
                    A top-down, isometric action roguelike inspired by <i>Kirby’s Dream Course</i>. 
                    Battle your way through treacherous golf courses, filled with the Lich’s monstrous creations, 
                    and help Caddy restore golf to its rightful place as the most popular sport on television.
                </p>

                <p>
                    This game is currently in the early stages of development and has only been available through 
                    internal playtesting and showcase events. We're aiming to release a demo in late 2026 or early 2027, so stay tuned for more information.
                    In the meantime, follow our development journey through the dev log linked below for the latest updates, progress, and behind-the-scenes details.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Refactored core components using composition and other design patterns to improve scalability, maintainability, and code reuse.</li>
                    <li>Created audio editor tools to allow audio designer to dynamically connect audio events to scripts and animation events.</li>
                    <li>Implemented core player systems, including UI, a hierarchical combat state machine, and player weapons system.</li>
                </ul>
            </div>
        ),
        media: [
            {
                type: "image",
                src: "/images/projects/golfinSlayer/golfinSlayerTitle.png",
            },
            {
                type: "video",
                src: "/videos/projects/golfinSlayerDemo.mp4"
            },
            {
                type: "image",
                src: "/images/projects/golfinSlayer/golfinSlayer1.png"
            },
            {
                type: "image",
                src: "/images/projects/golfinSlayer/golfinSlayer2.png"
            },
            {
                type: "image",
                src: "/images/projects/golfinSlayer/golfinSlayer3.png"
            }
        ],
        links: [
            {
                site: "Devlog",
                url: "https://pseudomancer.studio/"
            }
        ]
    },
    {
        name: "Vegetables of Mass Destruction",
        tags: ["Unreal Engine 5", "C++"],
        description: (
            <div>
                <p>
                    An action hack 'n' slash roguelite where you play as a feisty raccoon tasked with saving the farm animals from evil robots by his master, Sensei Cow. 
                    Use the destructive power of vegetables and team up with your trusty chicken and pig pals to rescue farm animals and destroy the robot invaders!
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Designed and implemented responsive combat systems, including input buffering, attack combos, and roguelike mechanics.</li>
                    <li>Leveraged Unreal Engine features such as Chaos Destruction to create dynamic and interactive world elements.</li>
                    <li>Developed enemy wave and level management tools that give level designers greater flexibility when building and iterating on levels.</li>
                </ul>
            </div>
        ),
        media: [
            {
                type: "video",
                src: "/videos/projects/Vegetables of Mass Destruction Trailer.mp4",
                poster: "/images/projects/vomd/vomdTitle.png"
            },
            {
                type: "image",
                src: "/images/projects/vomd/vomdScreenshot1.jpg"
            },
            {
                type: "image",
                src: "/images/projects/vomd/vomdScreenshot2.jpg"
            },
            {
                type: "image",
                src: "/images/projects/vomd/vomdScreenshot3.jpg"
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
        name: "Salt Fighter",
        tags: ["Unreal Engine 5", "C++"],
        description: (
            <div>
                <p>
                    How do you win a cook-off? With hand-to-hand combat, of course! <i>Salt Fighter</i> is a chef-themed 
                    2D fighting game featuring classic combos, motion inputs, and fast-paced combat. Battle your opponent 
                    to prove who has what it takes to earn the title of <b>Chef de Bataille</b>.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Developed a fighting game input system supporting attack cancels, motion inputs, and numpad notation mapping.</li>
                    <li>Engineered a hitbox and hurtbox system for combat interactions and collision detection.</li>
                    <li>Implemented core fighting game mechanics, including air dashes, fireballs, and dragon punches.</li>
                </ul>

            </div>
        ),
        media: [
            {
                type: "video",
                src: "/videos/projects/saltFighter_Trailer.mp4",
                poster: "/images/projects/saltFighter/saltFighterTitle.jpg"
            },
            {
                type: "video",
                src: "/videos/projects/saltFighter_Demo.mp4",
            },
            {
                type: "image",
                src: "/images/projects/saltFighter/saltFighterGif.gif"
            },
            {
                type: "image",
                src: "/images/projects/saltFighter/saltFighter1.png"
            },
            {
                type: "image",
                src: "/images/projects/saltFighter/saltFighter2.png"
            },
            {
                type: "image",
                src: "/images/projects/saltFighter/saltFighter3.png"
            }
        ],
        links: [
            {
                site: "Itch.io",
                url: "https://spoonfedbread.itch.io/salt-fighter"
            },
            {
                site: "GitHub",
                url: "https://github.com/Kaiden-z/SaltFighter"
            }
        ]
    },
    {
        name: "Godot Procedural Animation Tool",
        tags: ["Godot", "C++", "Tooling"],
        description: (
            <div>
                <p>
                    A procedural animation editor tool for Godot 4.x. Quickly create and prototype procedurally animated entities using the various proceudral
                    animation types included such as FABRIK (Forward And Backward Reaching Inverse Kinematics), second order dynamics, and simple constraints.
                </p>

            <h2>Contributions</h2>

            <ul>
                <li>Built editor tooling that enables procedural animations to be authored, previewed, and refined directly within the editor.</li>
                <li>Programmed constraint-based procedural animation techniques, including damped transforms and distance constraints.</li>
            </ul>

            </div>
        ),
        media: [
            {
                type: "video",
                src: "/videos/projects/AKIK_Demo.mp4",
            },
            {
                type: "video",
                src: "/videos/projects/AKIK_Trailer.mp4",
                poster: "/images/projects/akik/AKIK_cover.png"
            },
            {
                type: "image",
                src: "/images/projects/akik/AKIK_Gif1.gif"
            },
            {
                type: "image",
                src: "/images/projects/akik/AKIK_Gif2.gif"
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
        description: (
            <div>
                <p>
                    A Minecraft mod that introduces a new villager profession: <b>the Architect</b>. 
                    Trade raw materials with this skilled builder to obtain a variety of blueprints, 
                    each allowing you to construct pre-designed structures tailored to different villager professions. 
                    Whether you're jumpstarting a new village or expanding a settlement, the Architect has everything you need to get building.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Utilized the Minecraft Forge modding framework to create custom items, villager types, and crafting recipes.</li>
                    <li>Developed systems for validating structure placement locations and dynamically spawning structures.</li>
                </ul>

            </div>
        ),
        media: [
            {
                type: "image",
                src: "/images/projects/architectVillagerMod/architect-villager-mod-blueprint.png",
                fit: "contain"
            },
            {
                type: "image",
                src: "/images/projects/architectVillagerMod/architect-villager.png"
            },
            {
                type: "image",
                src: "/images/projects/architectVillagerMod/architect-villager-mod-crafting.png"
            },
            {
                type: "image",
                src: "/images/projects/architectVillagerMod/fletcher-blueprint.png"
            },
            {
                type: "image",
                src: "/images/projects/architectVillagerMod/example-village.png"
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
        name: "Cutting It Reel Close",
        tags: ["Unity", "C#", "Game Jam"],
        description: (
            <div>
                <p>
                    You procrastinated all week and have an assignment due tonight! But with all the distractions on your phone, can you finish in time?
                    Find your flow state by finding the perfect balance between working on your essay and doom scrolling in this unique take on typing games.
                </p>

                <p>
                    This game was submitted as part of the <b>EGaDS 2025 Texas Game Jam</b> and placed <u>3rd overall</u>.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Created interactive UI systems, including a scrollable in-game phone interface and upgrade screens.</li>
                    <li>Developed core gameplay systems, including roguelike upgrades and randomized effects triggered through phone interactions.</li>
                </ul>
            </div>
        ),
        media: [
            {
                type: "image",
                src: "/images/projects/circ/CIRCTitle.png",
                fit: "contain"
            },
            {
                type: "image",
                src: "/images/projects/circ/CIRC1.png"
            },
            {
                type: "image",
                src: "/images/projects/circ/CIRC2.png"
            },
            {
                type: "image",
                src: "/images/projects/circ/CIRC3.png"
            },
            {
                type: "image",
                src: "/images/projects/circ/CIRC4.png"
            }
        ],
        links: [
            {
                site: "Itch.io",
                url: "https://spoonfedbread.itch.io/cuttingitreelclose"
            },
            {
                site: "GitHub",
                url: "https://github.com/deffeh/gummy-bear-pizza-2"
            }
        ]
    },
    {
        name: "DOOG - Take #2 To Tango",
        tags: ["Unity", "C#", "Game Jam"],
        description: (
            <div>
                <p>
                    A spin on classic <i>DOOM</i>. As a highly-trained canine operative, it is your job to guide your owner (#2) to rendezvous Tango.
                    Fight your way through a top-secret military base swarming with elite animal adversaries, you're on a daring mission where every 
                    paw step counts. Both you and your human partner must survive though the journey. 
                </p>

                <p>
                    This game was submitted as part of the <b>EGaDS 2024 Texas Game Jam</b> and placed <u>1st overall</u>.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Programmed enemy AI for various enemies to define combat behavior and interactions with the player.</li>
                    <li>Integrated UI systems and functionality with artist-created assets.</li>
                    <li>Implemented level pickups, including healing items, with gameplay effects and player interactions.</li>
                </ul>
            </div>
        ),
        media: [
            {
                type: "video",
                src: "/videos/projects/Doog_Demo.mp4",
                poster: "/images/projects/doog/DoogTitle.jpeg"
            },
            {
                type: "image",
                src: "/images/projects/doog/Doog1.png"
            },
            {
                type: "image",
                src: "/images/projects/doog/Doog2.png"
            },
            {
                type: "image",
                src: "/images/projects/doog/Doog3.png"
            },
            {
                type: "image",
                src: "/images/projects/doog/Doog4.png"
            }
        ],
        links: [
            {
                site: "Itch.io",
                url: "https://spoonfedbread.itch.io/doog-take-2-to-tango"
            },
            {
                site: "GitHub",
                url: "https://github.com/deffeh/gummy-bear-pizza"
            }
        ]
    },
    {
        name: "FG Framework",
        tags: ["Unreal Engine 5", "C++", "Tooling", "In Development"],
        description: (
            <div>
                <p>
                    An Unreal Engine 5 framework for getting started with developing your very own 2D fighting game. This framework includes all the essential
                    building blocks for a fighting game including support for motion inputs, a base character package, and essential in-game systems like
                    match flow logic, input buffers, and more. All systems are extensible and customizable with your own designs.
                </p>

                <p>
                    This project has only been planned to support 1v1 2D fighting games. Support for tag fighters and common tag mechanics may be considered
                    for future development.
                </p>

                <h2>Contributions</h2>

                <ul>
                    <li>Implemented precise frame-data and deterministic gameplay systems to ensure consistent, reproducible combat behavior.</li>
                    <li>Applied object-oriented design patterns to create extensible and maintainable gameplay classes and systems.</li>
                    <li>Engineered an extensible player framework for implementing complex, state-dependent fighting game mechanics and character behaviors.</li>
                    <li>Built an input pipeline that translates inputs into fighting game motion inputs and in-game actions, with validation and restrictions based on the player's current state.</li>
                </ul>
            </div>
        ),
        media: [
            {
                type: "image",
                src: "/images/WIP.png"
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
    useEffect(() => {
        document.title = "Kaiden Zapanta | Projects";
    }, []);

    return (
        <motion.main
            className="projects"
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
                    className="cta-label"
                    variants={itemVariants}
                >
                    SEE MORE OF MY WORK:
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