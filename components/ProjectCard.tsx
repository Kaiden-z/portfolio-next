import { Project } from "@/types/project";
import MediaSlider from "./MediaSlider";
import Button from "./Button";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";
import SteamIcon from "@/icons/SteamIcon";

export default function ProjectCard({
    name,
    tags,
    description,
    media,
    githubUrl,
    itchUrl,
    steamUrl,
}: Project) {
    return (
        <article className="project-card border">
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

                {(githubUrl || itchUrl || steamUrl) && (
                    <div className="project-links">
                        <h2>Available on</h2>
                        <div className="project-links-buttons">
                            {steamUrl && (
                                <Button
                                    icon={<SteamIcon/>}
                                    href={steamUrl}
                                >
                                    Steam
                                </Button>
                            )}

                            {itchUrl && (
                                <Button
                                    icon={<ItchIcon/>}
                                    href={itchUrl}
                                >
                                    Itch.io
                                </Button>
                            )}

                            {githubUrl && (
                                <Button
                                    icon={<GitHubIcon/>}
                                    href={githubUrl}
                                >
                                    GitHub
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                
                    
            </div>
        </article>
    );
}