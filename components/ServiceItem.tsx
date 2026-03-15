"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
    icon: ReactNode
    title: string
    description: string
    details: string[]
}

export default function ServiceItem({ icon, title, description, details }: Props) {

    return (

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-16"
        >

            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white" />

            <div className="grid lg:grid-cols-2 gap-12">

                {/* Main Content */}
                <div>

                    <div className="text-blue-600 mb-4">
                        {icon}
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900">
                        {title}
                    </h3>

                    <p className="mt-3 text-gray-600">
                        {description}
                    </p>

                    <div className="flex gap-6 mt-6 text-sm font-medium">

                        <button className="text-blue-600 hover:underline">
                            See More
                        </button>

                        <button className="text-gray-900 hover:underline">
                            Request Quote
                        </button>

                    </div>

                </div>


                {/* Details */}
                <div>

                    <ul className="space-y-3 text-gray-700 list-disc pl-5">

                        {details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </ul>

                </div>

            </div>

        </motion.div>
    )
}