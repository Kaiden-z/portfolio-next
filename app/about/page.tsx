"use client";

import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import CompassIcon from "@/icons/CompassIcon";
import { itemVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import { motion } from "motion/react";

export default function About() {
    return (
        <motion.main 
            variants={mainVariants}
            initial="hidden"
            animate="show"
        >

            <PageHeader title="ABOUT ME" />

            <motion.section 
                className="about-section"
                variants={sectionVariants}
            >
                <div className="about-text">
                    <motion.div
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>01</span>
                        <h2>My connection to games</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        Video games have been a passion of mine since I played
                        my first game, <i>Team Fortress 2</i>, on the family
                        computer. Some of my favorite games of all time include
                        the <i>Monster Hunter</i> series, <i>Street Fighter 6</i>,
                        and <i>Baldur's Gate 3</i>.
                    </motion.p>


                    <motion.p variants={itemVariants}>
                        Over the years, I have developed a deeper appreciation
                        for games not only as a form of entertainment, but as a
                        way to bring people together from all over the world.
                        I especially value how games can provide an immersive
                        space for people to interact, communicate, and socialize,
                        which is something that has been particularly meaningful
                        to me as someone who has experienced physical limitations.
                    </motion.p>

                    <motion.div 
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>02</span>
                        <h2>Why game development</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        My interest in working in the game development industry
                        grew out of my search for a career that combined both
                        technical problem-solving and creativity. During college,
                        I discovered a genuine enjoyment in the technical
                        challenges of software development, but I often felt
                        that traditional software roles lacked the creative
                        aspect I was looking for.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        Game development stood out as a field that could bring
                        together my technical skills, creativity, and lifelong
                        passion for video games.
                    </motion.p>

                    <motion.div 
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>03</span>
                        <h2>What I do</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        I am currently pursuing a career in game development,
                        with a focus on gameplay programming, where I can help
                        create the mechanics and systems that make games
                        engaging and enjoyable to play.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        To develop my skills, I have participated in various
                        game jams and worked on personal projects that have
                        allowed me to experiment with different gameplay
                        mechanics, systems, and design principles.
                    </motion.p>

                    <motion.div 
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>04</span>
                        <h2>Looking ahead</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        I am always looking for new challenges and opportunities
                        to learn and grow as a developer. I look forward to
                        continuing to improve my skills, creating meaningful
                        experiences through games, and seeing where my passion
                        for game development takes me.
                    </motion.p>
                </div>

                <motion.aside
                    className="about-sidebar"
                    variants={itemVariants}
                >
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
                </motion.aside>
            </motion.section>

            <motion.section 
                className="past-works-section"
                variants={itemVariants}
            >
                <span className="cta-label">WANT TO SEE MORE?</span>

                <Button
                    icon={<CompassIcon />}
                    href="/projects"
                >
                    Explore my past work
                </Button>
            </motion.section>
        </motion.main>
    );
}