import { Project } from "@/types/project";
import MediaSlider from "./MediaSlider";

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
            </div>
        </article>
    );
}