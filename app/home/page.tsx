"use client"

import { itemVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import Button from "@/components/Button";
import MediaSlider from "@/components/MediaSlider";
import ArrowRightUpIcon from "@/icons/ArrowRightUpIcon";
import { Media } from "@/types/media"
import { motion } from "motion/react";

const featured_media : Media[] = [
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayerTitle.png",
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot1.jpg"
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot2.jpg"
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot3.jpg"
    }
]

export default function Home() {
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

                <motion.h2 variants={itemVariants}>Software Engineer | Gameplay Programmer</motion.h2>
            </section>

            <motion.section 
                className="featured-project"
                variants={itemVariants}
            >
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
                            A golf-themed isometric action rogue-like.
                        </p>

                        <Button
                            icon={<ArrowRightUpIcon/>}
                            href="https://pseudomancer.studio/archive.html"
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
            </motion.section>
        </motion.main>
    );
}