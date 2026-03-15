"use client"
import Link from "next/link";
import {
    Shield,
    Monitor,
    Users,
    Activity,
    Leaf,
    HardHat,
    ArrowRight,
} from "lucide-react"

const iconMap = {
    shield: Shield,
    monitor: Monitor,
    users: Users,
    activity: Activity,
    leaf: Leaf,
    hardhat: HardHat,
}

type ServiceBlockProps = {
    icon: keyof typeof iconMap
    title: string
    description: string
    featuresLeft: string[]
    featuresRight: string[]
}

export default function ServiceBlock({
    icon,
    title,
    description,
    featuresLeft,
    featuresRight,
}: ServiceBlockProps) {

    const Icon = iconMap[icon]

    return (
        <div className="relative pl-16 grid lg:grid-cols-3 gap-12">

            <div className="absolute left-4 top-2 w-4 h-4 bg-secondary rounded-full ring-4 ring-white" />

            <div>
                <Icon className="h-10 w-10 text-secondary mb-4" />

                <h3 className="text-2xl font-semibold">{title}</h3>

                <p className="text-gray-600 mt-3">{description}</p>
                <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact" className="text-secondary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Request Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 text-sm">
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    {featuresLeft.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    {featuresRight.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}