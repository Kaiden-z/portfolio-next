import { itemVariants } from "@/animations/variants/variants";
import { motion, useAnimate } from "motion/react";

type ContactLinkProps = {
    href: string;
    children: React.ReactNode;
    external?: boolean;
};

export default function ContactLink({ href, children, external = false }: ContactLinkProps) {
    const [scope, animate] = useAnimate();

    const handleMouseEnter = () => {
        animate(
            ".contact-shine",
            { x: ["-150%", "250%"] },
            { duration: 0.7, ease: "easeInOut" }
        );
    };

    return (
        <motion.a
            ref={scope}
            className="contact-item border"
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            variants={itemVariants}
            onMouseEnter={handleMouseEnter}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                className="contact-shine"
                initial={{ x: "-150%" }}
            />
            {children}
        </motion.a>
    );
}