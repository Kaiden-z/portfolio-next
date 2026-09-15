"use client"

import { itemVariants, lineVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import Button from "@/components/Button";
import MediaSlider from "@/components/MediaSlider";
import ArrowRightUpIcon from "@/icons/ArrowRightUpIcon";
import { Media } from "@/types/media"
import { motion } from "motion/react";
import { useEffect } from "react";

const featured_media : Media[] = [
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayerTitle.png",
    },
    {
        type: "video",
        src: "videos/projects/golfinSlayerDemo.mp4"
    },
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayer1.png"
    },
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayer2.png"
    },
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayer3.png"
    }
]

export default function Home() {
    useEffect(() => {
        document.title = "Kaiden Zapanta | Home";
    }, []);

    return (
        <motion.main 
            className="hero"
            variants={mainVariants}
            initial="hidden"
            animate="show"
        >
            <section className="hero-intro">
                <div>
                    <motion.h1 variants={itemVariants}>KAIDEN</motion.h1>
                    <motion.h1 variants={itemVariants}>ZAPANTA</motion.h1>
                </div>

                <h2>
                    <motion.span variants={itemVariants}>Software Engineer</motion.span>
                    <motion.span variants={itemVariants}> | </motion.span>
                    <motion.span variants={itemVariants}>Gameplay Programmer</motion.span>
                </h2>
            </section>

            <motion.section 
                className="featured-project"
                variants={itemVariants}
            >
                <motion.div
                    className="featured-project-line"
                    variants={lineVariants}
                />
                <div className="featured-project-header">
                    <span>01</span>
                    <span>FEATURED PROJECT</span>
                </div>

                <motion.div
                    className="featured-project-content"
                    variants={sectionVariants}
                >
                    <motion.div 
                        className="featured-project-info"
                        variants={itemVariants}
                    >
                        <h3>Golfin' Slayer</h3>

                        <p>
                            A top-down, isometric action roguelike inspired by <i>Kirby’s Dream Course</i>. 
                            Battle your way through treacherous golf courses, filled with the Lich’s monstrous creations, 
                            and help Caddy restore golf to its rightful place as the most popular sport on television.
                        </p>

                        <Button
                            icon={<ArrowRightUpIcon/>}
                            href="https://pseudomancer.studio/"
                        >
                            Check out our dev log
                        </Button>
                    </motion.div>

                    <motion.div 
                        className="featured-project-media"
                        variants={itemVariants}
                    >
                        <MediaSlider media={featured_media} />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="featured-project-line"
                    variants={lineVariants}
                />
            </motion.section>
        </motion.main>
    );
}