"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ServicesTimeline({
    children,
}: {
    children: React.ReactNode
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div ref={ref} className="relative">

            {/* animated vertical line */}
            <motion.div
                style={{ scaleY }}
                className="absolute left-6 top-0 w-[2px] h-full bg-secondary origin-top"
            />

            <div className="space-y-24">
                {children}
            </div>
        </div>
    )
}