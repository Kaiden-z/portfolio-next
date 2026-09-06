import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import GitHubIcon from "@/icons/GitHubIcon";
import ItchIcon from "@/icons/ItchIcon";


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

            
        </main>
    );
}