"use client";

import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import CompassIcon from "@/icons/CompassIcon";
import { itemVariants, lineVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "Kaiden Zapanta | About";
    }, []);

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
                        and most recently <i>Deadlock</i>.
                    </motion.p>


                    <motion.p variants={itemVariants}>
                        Over the years, I have developed a deeper appreciation
                        for games not only as a form of entertainment, but as a
                        way to bring people together.
                        I especially value how games can provide a safe space for people to interact, 
                        connect, and socialize. This has been particularly meaningful to me, as games 
                        have given me opportunities to connect with others in ways that were not always 
                        easy for me through traditional activities.
                    </motion.p>

                    <motion.div 
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>02</span>
                        <h2>Why game development</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        My interest in working in the game development industry grew out of my search for 
                        a career that combined technical problem-solving with creativity. During college, 
                        I discovered a genuine enjoyment of the technical challenges of software development, 
                        but I often felt that traditional software roles lacked the creative aspect I was looking for. 
                        At the same time, I found myself increasingly drawn to game development content, particularly 
                        technical breakdowns and videos exploring how games implement their mechanics and systems. 
                        I enjoyed learning about the technical decisions behind features I had experienced as 
                        a player and understanding how those ideas were translated into working systems.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        Game development stood out to me as a field where I could bring together my technical skills, 
                        creativity, and lifelong passion for video games, while also exploring the technical side 
                        of games that I had become increasingly fascinated by.
                    </motion.p>

                    <motion.div 
                        className="about-section-heading"
                        variants={itemVariants}
                    >
                        <span>03</span>
                        <h2>What I do</h2>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        I am pursuing a career in game development, with a particular focus on gameplay programming, 
                        and am eager to break into the industry through my first professional role.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        To develop my skills, I have built personal projects and participated in game jams, 
                        giving me hands-on experience that has strengthened my programming abilities and 
                        challenged me to apply what I have learned in practical settings.
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
                    variants={sectionVariants}
                >
                    <motion.div 
                        className="about-image"
                        variants={itemVariants}
                    >
                        <img src="/images/profile.jpg" alt="Kaiden Zapanta" />
                    </motion.div>

                    <motion.div 
                        className="developer-interests"
                        variants={sectionVariants}
                    >
                        <motion.span 
                            className="interests-label"
                            variants={itemVariants}
                        >
                            DEVELOPER
                        </motion.span>

                        <motion.div 
                            className="interest-group"
                            variants={itemVariants}>
                            <motion.div
                                className="interest-group-line"
                                variants={lineVariants}
                            />
                            <span>FOCUS</span>
                            <strong>Programming</strong>
                        </motion.div>

                        <motion.div 
                            className="interest-group"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="interest-group-line"
                                variants={lineVariants}
                            />
                            <span>INTERESTS</span>
                            <strong>Gameplay Systems</strong>
                            <strong>Developer Tools</strong>
                        </motion.div>
                    </motion.div>
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