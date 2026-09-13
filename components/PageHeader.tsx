import { itemVariants, sectionVariants } from "@/animations/variants/variants";
import { motion } from "motion/react";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <motion.header 
            className="page-header"
            variants={itemVariants}
        >
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </motion.header>
    );
}