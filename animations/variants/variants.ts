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
        }
    }
}

export const itemVariants: Variants  = {
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