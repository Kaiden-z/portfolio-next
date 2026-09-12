import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import CompassIcon from "@/icons/CompassIcon";

export default function About() {
    return (
        <main>
            <PageHeader title="ABOUT ME" />

            <section className="about-section">
                <div className="about-text">
                    <div className="about-section-heading">
                        <span>01</span>
                        <h2>My connection to games</h2>
                    </div>

                    <p>
                        Video games have been a passion of mine since I played
                        my first game, <i>Team Fortress 2</i>, on the family
                        computer. Some of my favorite games of all time include
                        the <i>Monster Hunter</i> series, <i>Street Fighter 6</i>,
                        and <i>Baldur's Gate 3</i>.
                    </p>

                    <p>
                        Over the years, I have developed a deeper appreciation
                        for games not only as a form of entertainment, but as a
                        way to bring people together from all over the world.
                        I especially value how games can provide an immersive
                        space for people to interact, communicate, and socialize,
                        which is something that has been particularly meaningful
                        to me as someone who has experienced physical limitations.
                    </p>

                    <div className="about-section-heading">
                        <span>02</span>
                        <h2>Why game development</h2>
                    </div>

                    <p>
                        My interest in working in the game development industry
                        grew out of my search for a career that combined both
                        technical problem-solving and creativity. During college,
                        I discovered a genuine enjoyment in the technical
                        challenges of software development, but I often felt
                        that traditional software roles lacked the creative
                        aspect I was looking for.
                    </p>

                    <p>
                        Game development stood out as a field that could bring
                        together my technical skills, creativity, and lifelong
                        passion for video games.
                    </p>

                    <div className="about-section-heading">
                        <span>03</span>
                        <h2>What I do</h2>
                    </div>

                    <p>
                        I am currently pursuing a career in game development,
                        with a focus on gameplay programming, where I can help
                        create the mechanics and systems that make games
                        engaging and enjoyable to play.
                    </p>

                    <p>
                        To develop my skills, I have participated in various
                        game jams and worked on personal projects that have
                        allowed me to experiment with different gameplay
                        mechanics, systems, and design principles.
                    </p>

                    <div className="about-section-heading">
                        <span>04</span>
                        <h2>Looking ahead</h2>
                    </div>

                    <p>
                        I am always looking for new challenges and opportunities
                        to learn and grow as a developer. I look forward to
                        continuing to improve my skills, creating meaningful
                        experiences through games, and seeing where my passion
                        for game development takes me.
                    </p>
                </div>

                <aside className="about-sidebar">
                    <div className="about-image">
                        <img src="/images/profile.jpg" alt="Kaiden Zapanta" />
                    </div>

                    <div className="developer-interests">
                        <span className="interests-label">DEVELOPER</span>

                        <div className="interest-group">
                            <span>FOCUS</span>
                            <strong>Programming</strong>
                        </div>

                        <div className="interest-group">
                            <span>INTERESTS</span>
                            <strong>Gameplay Systems</strong>
                            <strong>Developer Tools</strong>
                        </div>
                    </div>
                </aside>
            </section>

            <section className="past-works-section">
                <span className="cta-label">WANT TO SEE MORE?</span>

                <Button
                    icon={<CompassIcon />}
                    href="/projects"
                >
                    Explore my past work
                </Button>
            </section>
        </main>
    );
}