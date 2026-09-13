import { Project } from "@/types/project";
import MediaSlider from "./MediaSlider";
import Button from "./Button";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import SteamIcon from "@/icons/SteamIcon";
import CurseForgeIcon from "@/icons/CurseForgeIcon";
import { motion } from "motion/react";
import { itemVariants } from "@/animations/variants/variants";
import ArrowRightUpIcon from "@/icons/ArrowRightUpIcon";

export default function ProjectCard({
    name,
    tags,
    description,
    media,
    links
}: Project) {

    const getLinkIcon = (site: string) => {
        switch (site) {
            case "GitHub":
                return <GitHubIcon />;
            case "Itch.io":
                return <ItchIcon />;
            case "Steam":
                return <SteamIcon />;
            case "CurseForge":
                return <CurseForgeIcon />;
            case "Devlog":
                return <ArrowRightUpIcon />;
            default:
                return null;
        }
    };

    return (
        <motion.article 
            className="project-card border"
            variants={itemVariants}
        >
            <div className="project-card-media">
                <MediaSlider media={media} />
            </div>

            <div className="project-card-content">
                <h1>{name}</h1>

                <div className="project-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="pill">
                            {tag}
                        </span>
                    ))}
                </div>

                {description}

                {links && links.length > 0 && (
                    <div className="project-links">
                        <h2>{name === "Golfin' Slayer" ? "" : "Available on"}</h2>

                        <div className="project-links-buttons">
                            {links.map((link) => (
                                <Button
                                    key={link.site}
                                    icon={getLinkIcon(link.site)}
                                    href={link.url}
                                >
                                    {name === "Golfin' Slayer" ? "Checkout our dev log" : link.site}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}