"use client";

import { motion, useAnimate } from "motion/react";

type ButtonProps = {
    className?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
};

export default function Button({
    className = "",
    icon,
    children,
    onClick,
    href,
}: ButtonProps) {
    const [scope, animate] = useAnimate();

    const handleMouseEnter = () => {
        animate(
            ".button-shine",
            {
                x: ["-150%", "250%"],
            },
            {
                duration: 0.5,
                ease: "easeInOut",
            }
        );
    };

    const content = (
        <>
            <motion.span
                className="button-shine"
                initial={{ x: "-150%" }}
            />

            {icon && <span className="icon">{icon}</span>}
            <span className="button-content">{children}</span>
        </>
    );

    if (href) {
        return (
            <motion.a
                ref={scope}
                href={href}
                className={`button button-primary ${className}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={scope}
            className={`button button-primary ${className}`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
        >
            {content}
        </motion.button>
    );
}