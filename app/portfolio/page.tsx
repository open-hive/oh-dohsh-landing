"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, CheckCircle, Filter } from "lucide-react";

const categories = ["All", "Mining", "Construction", "Healthcare", "Manufacturing"];

const projects = [
    {
        id: 1,
        title: "Jwaneng Mine Safety Audit",
        client: "Debswana Diamond Company",
        category: "Mining",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive safety audit and compliance review for one of the world's richest diamond mines.",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=2070&auto=format&fit=crop",
        outcome: "100% compliance achieved with ISO 45001 standards",
        year: "2024"
    },
    {
        id: 2,
        title: "Construction Site Safety Management",
        client: "Gaborone Development Corp",
        category: "Construction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Implemented comprehensive safety protocols for major commercial development project.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        outcome: "Zero incidents recorded over 18-month project duration",
        year: "2023"
    },
    {
        id: 3,
        title: "Healthcare Facility Environmental Assessment",
        client: "Princess Marina Hospital",
        category: "Healthcare",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Environmental impact assessment and waste management system implementation.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
        outcome: "ISO 14001 certification achieved within 6 months",
        year: "2024"
    },
    {
        id: 4,
        title: "Manufacturing Plant Risk Assessment",
        client: "Botswana Meat Commission",
        category: "Manufacturing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Complete risk assessment and safety protocol development for meat processing facility.",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop",
        outcome: "Reduced workplace incidents by 85%",
        year: "2023"
    },
    {
        id: 5,
        title: "Orapa Mine Environmental Compliance",
        client: "Debswana Diamond Company",
        category: "Mining",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Environmental management system implementation and ongoing compliance monitoring.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop",
        outcome: "Sustained environmental compliance for 3+ years",
        year: "2022"
    },
    {
        id: 6,
        title: "Infrastructure Safety Training Program",
        client: "Roads Department - Botswana",
        category: "Construction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Developed and delivered comprehensive safety training for road construction crews.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        outcome: "Trained 200+ workers across 5 major projects",
        year: "2024"
    }
];

const clients = [
    { name: "Debswana Diamond Company", logo: "data:image/png;base64,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" },
    { name: "Princess Marina Hospital", logo: "https://cambridgeghp.org/wp-content/uploads/2024/02/princess-marina-hospital.jpg" },
    { name: "Botswana Meat Commission", logo: "https://globalexpo.co.bw//storage/1225/bmc-logo-blue.png" },
    { name: "Morupule Coal Mine", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhpAEesdRJfKVy1YU4Pbpb2R_s45k4FKZtQ&s" },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="flex flex-col min-h-screen bg-white">

{/* ================= 1. HERO SECTION ================= */}
            <section className="relative w-full py-20 md:py-28 bg-dark overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Corporate Office Blur"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#002b4d]/90 to-[#002b4d]/70"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Breadcrumbs */}
                    <div className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider flex items-center justify-center gap-2">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-500">•</span>
                        <span className="text-primary">Portfolio</span>
                    </div>

                    <h1 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                        Our Work & Impact
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover how we've helped organizations across Botswana achieve safety excellence and environmental compliance.
                    </p>
                </div>
            </section>

            {/* ================= 2. FILTER SECTION ================= */}
            <section className="py-12 bg-light border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <Filter className="h-5 w-5 text-gray-500" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${selectedCategory === category
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 3. PROJECTS GRID ================= */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-dark">Featured Projects</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            A selection of our successful safety and environmental management projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No projects found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* ================= 4. CLIENTS SECTION ================= */}
            <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">Trusted by Leading Organizations</h2>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            We're proud to partner with some of Botswana's most respected companies and institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 5. CTA SECTION ================= */}
            <section className="py-20 bg-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h2 className="font-heading text-3xl font-bold text-dark mb-4">
                        Ready to Start Your Safety Journey?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help your organization achieve safety excellence and regulatory compliance.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded shadow-lg transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

        </div>
    );
}

// Project Card Component
function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-secondary">
                    {project.year}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                    {project.category}
                </div>

                <h3 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3 font-semibold">
                    {project.client}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Outcome Badge */}
                <div className="flex items-start gap-2 bg-green-50 p-3 rounded border-l-4 border-green-500">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 font-medium">
                        {project.outcome}
                    </p>
                </div>
            </div>
        </div>
    );
}
