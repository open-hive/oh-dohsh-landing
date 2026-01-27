import Link from "next/link";
import { ArrowRight, Shield, Leaf, ClipboardCheck, LogIn, UserPlus, Monitor, FileText, Smartphone, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
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
