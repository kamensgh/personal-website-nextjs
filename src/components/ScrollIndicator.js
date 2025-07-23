"use client"

import { motion, useScroll } from "motion/react"

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                originX: 0,
                backgroundColor: "#ffc107",
                zIndex: 9999,
            }}
        />
    );
}
