import Link from "next/link";
import { ArrowRight, Shield, Leaf, ClipboardCheck, LogIn, UserPlus, Monitor, FileText, Smartphone, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= 1. HERO TEXT SECTION (With Wave Pattern) ================= */}
      <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-16 bg-white overflow-hidden">

        {/* CSS-based "Net/Wave" Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0092ce 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight mb-6">
            Empowering <span className="text-secondary">Zero Harm</span> Workplaces in Botswana.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comprehensive Occupational Health, Safety, and Environmental Management solutions aligned with ISO 45001 & 14001 standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button: Outline Style Deep Blue */}
            <Link
              href="/services"
              className="px-8 py-3.5 rounded border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>

            {/* Secondary Button: Solid Cyan White Text */}
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded bg-primary text-white font-bold hover:bg-secondary transition-all duration-300 shadow-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. HERO IMAGE (Full Width Strip) ================= */}
      <section className="w-full h-[250px] md:h-[300px] relative">
        {/* Image: Replaced with Home photo 2 */}
        <img
          src="/oh-dohsh-landing/Home photo 2.JPG"
          alt="Safety Officer on Site"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ================= 3. ABOUT US (Split Layout) ================= */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-8">
              {/* Tagline Pill */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-secondary text-xs font-bold uppercase tracking-wider">
                About DOHSH
              </span>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Motswana-Founded. <br />
                ISO-Aligned. <br />
                <span className="text-primary">Safety-Focused.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                DOHSH All Safety Consultancy provides expert guidance in occupational health and safety. We network and empower organizations to create safer, sustainable workplaces through innovative solutions and strict regulatory compliance.
              </p>

              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-secondary text-white font-bold rounded shadow-lg hover:bg-primary transition-colors"
              >
                Read Our Mission
              </Link>
            </div>

            {/* Right Column: Visual Image - Replaced with Home photo 1 */}
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="/oh-dohsh-landing/Home photo 1.jpg"
                alt="Professional Team Meeting"
                className="w-full h-full object-cover"
              />
              {/* Decorative Box outline to match 'Apex' style */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30 rounded"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. CORE SERVICES GRID (Updated with Header) ================= */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- NEW SECTION HEADER --- */}
          {/* This block mirrors the style of the 'About' section but adapted for the dark gradient background */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">

            {/* Tagline Pill (White variant) */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-wider shadow-sm">
              Our Expertise
            </span>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              Holistic Safety & <br /> Environmental Solutions
            </h2>

            {/* Intro Paragraph */}
            <p className="text-white/90 text-lg leading-relaxed">
              We offer end-to-end management systems designed to minimize risk, ensure regulatory compliance, and promote a culture of safety across your organization.
            </p>
          </div>

          {/* --- THE GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1: OHS */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">OHS Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Risk assessments, SHE files, and ISO 45001 alignment.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Column 2: Environmental */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">Environmental Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Impact assessments, waste management, and sustainability planning.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Column 3: Compliance */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ClipboardCheck className="h-7 w-7 text-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">Compliance Audits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Regulatory inspections and on-boarding certifications.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. CORE SERVICES GRID (Updated with Header) ================= */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- NEW SECTION HEADER --- */}
          {/* This block mirrors the style of the 'About' section but adapted for the dark gradient background */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">

            {/* Tagline Pill (White variant) */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-wider shadow-sm">
              Our Expertise
            </span>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              Holistic Safety & <br /> Environmental Solutions
            </h2>

            {/* Intro Paragraph */}
            <p className="text-white/90 text-lg leading-relaxed">
              We offer end-to-end management systems designed to minimize risk, ensure regulatory compliance, and promote a culture of safety across your organization.
            </p>
          </div>

          {/* --- THE GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1: OHS */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">OHS Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Risk assessments, SHE files, and ISO 45001 alignment.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Column 2: Environmental */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">Environmental Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Impact assessments, waste management, and sustainability planning.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Column 3: Compliance */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ClipboardCheck className="h-7 w-7 text-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">Compliance Audits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Regulatory inspections and on-boarding certifications.
              </p>
              <Link href="/services" className="text-secondary font-bold text-sm uppercase tracking-wide flex items-center gap-2 group">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. SHEQ CLIENT PORTAL SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
              DOHSH Client Portal
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
              Manage Your Safety <br />
              <span className="text-primary">Digitally, Anywhere</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our comprehensive SHEQ management platform empowers organizations to streamline safety protocols,
              track compliance in real-time, and maintain documentation—all from one centralized dashboard.
              Designed for modern businesses seeking efficiency and regulatory excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

            {/* Feature 1: Centralized Management */}
            <div className="bg-light p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-dark mb-2">Centralized Dashboard</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Access all your safety data, reports, and analytics from a single unified interface.
              </p>
            </div>

            {/* Feature 2: Compliance Tracking */}
            <div className="bg-light p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-dark mb-2">Real-Time Compliance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monitor regulatory requirements and receive instant alerts on compliance status.
              </p>
            </div>

            {/* Feature 3: Document Management */}
            <div className="bg-light p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-dark mb-2">Document Management</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Store, organize, and retrieve SHE files, certifications, and audit reports effortlessly.
              </p>
            </div>

            {/* Feature 4: Mobile Access */}
            <div className="bg-light p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-dark mb-2">Mobile Accessibility</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage safety on the go—access your portal from any device, anywhere.
              </p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#"
              className="px-8 py-4 rounded bg-secondary text-white font-bold hover:bg-primary transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              Login to Portal
            </Link>
            <Link
              href="#"
              className="px-8 py-4 rounded border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <UserPlus className="h-5 w-5" />
              Create Account
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}