"use client"

import PageHeader from "@/components/PageHeader";
import ContactLink from "@/components/ContactLink";
import LinkedInIcon from "@/icons/LinkedInIcon";
import EmailIcon from "@/icons/EmailIcon";
import { motion } from "motion/react";
import { itemVariants, mainVariants, sectionVariants } from "@/animations/variants/variants";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "Kaiden Zapanta | Contact";
    }, []);

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

                <motion.div 
                    className="contact-info"
                    variants={sectionVariants}
                >
                    <ContactLink href="mailto:kaiden.zapanta@gmail.com">
                        <span className="contact-icon">
                            <EmailIcon />
                        </span>

                        <div>
                            <h2>EMAIL</h2>
                            <p>kaiden.zapanta@gmail.com</p>
                        </div>
                    </ContactLink>

                    <ContactLink
                        href="https://linkedin.com/in/kaidenzapanta/"
                        external
                    >
                        <span className="contact-icon">
                            <LinkedInIcon />
                        </span>

                        <div>
                            <h2>LINKEDIN</h2>
                            <p>linkedin.com/in/kaidenzapanta</p>
                        </div>
                    </ContactLink>
                </motion.div>
            </section>
        </motion.main>
    );
}
