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
    { name: "Debswana Diamond Company", logo: "https://via.placeholder.com/200x80/0092ce/ffffff?text=Debswana" },
    { name: "Gaborone Development Corp", logo: "https://via.placeholder.com/200x80/00b9eb/ffffff?text=GDC" },
    { name: "Princess Marina Hospital", logo: "https://via.placeholder.com/200x80/0092ce/ffffff?text=PMH" },
    { name: "Botswana Meat Commission", logo: "https://via.placeholder.com/200x80/00b9eb/ffffff?text=BMC" },
    { name: "Roads Department", logo: "https://via.placeholder.com/200x80/0092ce/ffffff?text=Roads+Dept" },
    { name: "Morupule Coal Mine", logo: "https://via.placeholder.com/200x80/00b9eb/ffffff?text=Morupule" },
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
                    <div className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link> &gt; <span className="text-primary">Portfolio</span>
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
