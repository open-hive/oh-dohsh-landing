"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Shield, Leaf, ClipboardCheck, Users, Siren, HeartPulse } from "lucide-react"
import ServiceItem from "./ServiceItem"

export default function ServicesSection() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section
            ref={ref}
            className="relative py-32 max-w-7xl mx-auto px-6"
        >

            {/* Timeline */}
            <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-200">

                <motion.div
                    style={{ height }}
                    className="absolute top-0 left-0 w-full
          bg-gradient-to-b from-blue-500 to-indigo-500"
                />

            </div>


            <div className="space-y-24">

                <ServiceItem
                    icon={<Shield />}
                    title="OHS Management"
                    description="Complete oversight of occupational health and safety management systems."
                    details={[
                        "Risk Assessments (Baseline & Job Specific)",
                        "Safety Plans & SHE Files",
                        "Incident Investigations",
                        "ISO 45001 Alignment"
                    ]}
                />

                <ServiceItem
                    icon={<Leaf />}
                    title="Environmental Solutions"
                    description="Strategic environmental management to minimize ecological impact."
                    details={[
                        "Environmental Impact Assessments",
                        "Waste Management Plans",
                        "Pollution Control Strategies",
                        "ISO 14001 Compliance"
                    ]}
                />

                <ServiceItem
                    icon={<ClipboardCheck />}
                    title="Compliance Audits"
                    description="Ensuring operational compliance with legal and industry requirements."
                    details={[
                        "Legal Compliance Audits",
                        "Gap Analysis",
                        "Regulatory Inspections",
                        "Audit Preparation"
                    ]}
                />

                <ServiceItem
                    icon={<Users />}
                    title="On-Boarding Support"
                    description="Support services to streamline contractor access processes."
                    details={[
                        "Medical Examination Bookings",
                        "Security & SHE Inductions",
                        "Access Permit Facilitation",
                        "Contractor Pack Submissions"
                    ]}
                />

                <ServiceItem
                    icon={<Siren />}
                    title="Emergency Preparedness"
                    description="Preparing organizations to respond effectively to critical incidents."
                    details={[
                        "Emergency Response Plans",
                        "Evacuation Drills",
                        "Fire Simulation Training",
                        "First Aid Preparedness"
                    ]}
                />

                <ServiceItem
                    icon={<HeartPulse />}
                    title="Occupational Health"
                    description="Protecting worker health through proactive monitoring programs."
                    details={[
                        "Ergonomic Assessments",
                        "Industrial Hygiene Monitoring",
                        "Stress Management Programs",
                        "Substance Abuse Prevention"
                    ]}
                />

            </div>

        </section>
    )
}