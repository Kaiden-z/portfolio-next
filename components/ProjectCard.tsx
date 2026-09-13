import { Project } from "@/types/project";
import MediaSlider from "./MediaSlider";
import Button from "./Button";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import SteamIcon from "@/icons/SteamIcon";
import CurseForgeIcon from "@/icons/CurseForgeIcon";
import { motion } from "motion/react";
import { itemVariants } from "@/animations/variants/variants";

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

                <p>{description}</p>

                {links && links.length > 0 && (
                    <div className="project-links">
                        <h2>Available on</h2>

                        <div className="project-links-buttons">
                            {links.map((link) => (
                                <Button
                                    key={link.site}
                                    icon={getLinkIcon(link.site)}
                                    href={link.url}
                                >
                                    {link.site}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}