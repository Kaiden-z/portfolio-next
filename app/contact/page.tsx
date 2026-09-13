"use client"

import PageHeader from "@/components/PageHeader";
import LinkedInIcon from "@/icons/LinkedInIcon";
import EmailIcon from "@/icons/EmailIcon";
import { motion } from "motion/react";
import { itemVariants, mainVariants } from "@/animations/variants/variants";

export default function Contact() {
    return (
        <motion.main
            variants={mainVariants}
            initial="hidden"
            animate="show"
        >
            <PageHeader title="CONTACT" />

            <section className="contact">
                <motion.div 
                    className="contact-intro"
                    variants={itemVariants}
                >
                    <p>
                        Interested in connecting, talking games, or exploring what’s next? 
                        Feel free to reach out through email or connect with me on LinkedIn.
                    </p>
                </motion.div>

                <div className="contact-info">
                    <motion.a
                        className="contact-item border"
                        href="mailto:kaiden.zapanta@gmail.com"
                        variants={itemVariants}
                    >
                        <span className="contact-icon">
                            <EmailIcon />
                        </span>

                        <div>
                            <h2>EMAIL</h2>
                            <p>kaiden.zapanta@gmail.com</p>
                        </div>
                    </motion.a>

                    <motion.a
                        className="contact-item border"
                        href="https://linkedin.com/in/kaidenzapanta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                    >
                        <span className="contact-icon">
                            <LinkedInIcon />
                        </span>

                        <div>
                            <h2>LINKEDIN</h2>
                            <p>linkedin.com/in/kaidenzapanta</p>
                        </div>
                    </motion.a>
                </div>
            </section>
        </motion.main>
    );
}

