import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import CompassIcon from "@/icons/CompassIcon";

export default function About() {
    return (
        <main>
            <PageHeader
                title="ABOUT ME"
            />

            <section className="about-section">
                <div className="about-text">
                    <p>
                        Video games have been a passion of mine since I played my first game, <i>Team Fortress 2</i>, on the family computer. 
                        Some of my favorite games of all time include the <i>Monster Hunter</i> series, <i>Street Fighter 6</i>, and <i>Baldur's Gate 3</i>. 
                        Over the years, I have developed a deeper appreciation for games not only as a form of entertainment, but as a way to bring 
                        people together from all over the world. I especially value how games can provide an immersive space for people to 
                        interact, communicate, and socialize which is something that has been particularly meaningful to me as someone who has experienced physical limitations.
                    </p>
                    <p>
                        My interest in working in the game development industry grew out of my search for a career that combined both 
                        technical problem-solving and creativity. During college, I discovered a genuine enjoyment in the technical challenges of software development, 
                        but I often felt that traditional software roles lacked the creative aspect I was looking for. Game development stood out as a field that could 
                        bring together my technical skills, creativity, and lifelong passion for video games.
                    </p>
                    <p>
                        I am currently pursuing a career in game development, with a focus on gameplay programming, where I can help create the mechanics and 
                        systems that make games engaging and enjoyable to play. To develop my skills, I have participated in various game jams and worked on personal projects 
                        that have allowed me to experiment with different gameplay mechanics, systems, and design principles. These experiences have also given me the opportunity 
                        to collaborate across disciplines, working alongside artists and designers on larger projects and gaining a deeper understanding of the collaborative nature 
                        of game development.
                    </p>
                    <p>
                        I am always looking for new challenges and opportunities to learn and grow as a developer. I look forward to continuing to improve my skills, 
                        creating meaningful experiences through games, and seeing where my passion for game development takes me.
                    </p>
                </div>
                
                <div className="about-image">
                    <img src="/images/profile.jpg" alt="Kaiden Zapanta" />
                </div>
            </section>

            <section className="past-works-section">
                <Button
                    icon={<CompassIcon />}
                    variant="secondary"
                    href="/projects"
                >
                    Explore my past work
                </Button>
            </section>

        </main> 
    )
}