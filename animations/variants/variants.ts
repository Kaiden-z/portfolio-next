import { easeOut, Variants } from "motion";

export const mainVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
export const sectionVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        },
    },
};

export const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easeOut
        },
    },
};

export const lineVariants: Variants = {
    hidden: {
        scaleX: 0,
    },
    show: {
        scaleX: 1,
        transition: {
            duration: 0.5,
            ease: easeOut,
        },
    },
};
export const menuVariants: Variants = {
    hidden: {
        clipPath: "inset(0% 0% 100% 100% round 1.25rem)",
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: easeOut,
        },
    },
    show: {
        clipPath: "inset(0% 0% 0% 0% round 1.25rem)",
        opacity: 1,
        transition: {
            clipPath: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
            },
            opacity: {
                duration: 0.3,
                ease: easeOut,
            },
            staggerChildren: 0.03,
        },
    },
};

export const menuItemVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.1,
            ease: easeOut,
        },
    },
};
