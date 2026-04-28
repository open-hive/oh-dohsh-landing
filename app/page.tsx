import Link from "next/link";
import { ArrowRight, Shield, Leaf, ClipboardCheck, LogIn, UserPlus, Monitor, FileText, Smartphone, CheckCircle } from "lucide-react";


import HomeTimelineCanvas from "@/components/HomeTimelineCanvas";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HERO SECTION ================= */}
      {/* Requires: import HomeTimelineCanvas from "@/components/HomeTimelineCanvas"; */}


      <section className="relative w-full bg-white overflow-hidden border-b border-[#0092CE]/10">

        {/* Brand-color top accent bar */}
        <div
          className="relative z-10 h-[3px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #01B9EB 20%, #0092CE 50%, #01B9EB 80%, transparent 100%)",
          }}
        />

        {/* Subtle dot grid (matches original homepage pattern) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(#0092CE 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            opacity: 0.04,
          }}
        />

        {/* Main split layout — stacks on mobile, side-by-side on lg+ */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:min-h-[560px]">

          {/* ── LEFT: Typography ── */}
          <div className="
      w-full lg:flex-[0_0_52%]
      px-6 sm:px-10 lg:px-14
      pt-12 pb-8 lg:py-16
      flex flex-col justify-center
      border-b lg:border-b-0 lg:border-r border-[#0092CE]/10
    ">

            {/* Eyebrow — no breadcrumb on homepage */}
            <p
              className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              OHSE Consultancy · Botswana
            </p>

            {/* Headline */}
            <h1
              className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[0.95] tracking-[-0.01em] text-[#001E3C] uppercase mb-6 lg:mb-7"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Reimagining. Redefining. Investing.<br />
              In <span className="text-[#0092CE]">Safety</span><br />
              Across Africa<br />
              &amp; Beyond.
            </h1>

            {/* Rule */}
            <div className="w-9 h-[3px] bg-[#01B9EB] mb-5 lg:mb-6" />

            {/* Body */}
            <p className="text-[14px] font-light leading-[1.75] text-[#001E3C]/55 max-w-[390px] mb-6 lg:mb-8">
              Comprehensive{" "}
              <strong className="text-[#001E3C] font-medium">
                Occupational Health, Safety &amp; Environmental
              </strong>{" "}
              management solutions aligned with ISO 45001:2018, ISO 14001:2015, ISO 9001:2015 &amp; ESG standards.
            </p>

            {/* Accreditation badges */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#0092CE]/10">
              <span className="text-[9px] font-medium tracking-[0.15em] uppercase text-[#001E3C]/35 flex-shrink-0">
                Certification
              </span>
              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0092CE]/20 bg-[#0092CE]/[0.04]">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-70 flex-shrink-0">
                    <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                      stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#0092CE]"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    CIPA
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0092CE]/20 bg-[#0092CE]/[0.04]">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-70 flex-shrink-0">
                    <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                      stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#0092CE]"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    BQA
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#0092CE]/20 bg-[#0092CE]/[0.04]">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-70 flex-shrink-0">
                    <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                      stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#0092CE]"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    HRDC
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors"
              >
                Explore Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.5 6h9M6.5 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#0092CE] text-[#0092CE] text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0092CE] hover:text-white transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Timeline canvas + Standard pills ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f5fafd]">

            {/* Canvas — fixed height on mobile, grows on desktop */}
            <div className="relative h-[320px] sm:h-[400px] lg:h-auto lg:flex-1 min-h-0">
              <HomeTimelineCanvas />
            </div>

            {/* Standard pills */}
            <div className="flex border-t border-[#0092CE]/10 bg-white relative z-10">

              {/* ISO 45001 */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/10 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#edf7fc]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L3 6v5c0 4 3.1 7.7 7 8.9C16.9 18.7 17 15 17 11V6L10 2Z"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round"
                  />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  ISO 45001:2018
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Occupational health &amp; safety
                </p>
              </div>

              {/* ISO 14001 */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/10 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#edf7fc]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="#0092CE" strokeWidth="1.2" />
                  <path d="M10 2.5C10 2.5 6.5 6 6.5 10s3.5 7.5 3.5 7.5"
                    stroke="#0092CE" strokeWidth="1" strokeLinecap="round" />
                  <path d="M10 2.5C10 2.5 13.5 6 13.5 10s-3.5 7.5-3.5 7.5"
                    stroke="#0092CE" strokeWidth="1" strokeLinecap="round" />
                  <line x1="2.5" y1="10" x2="17.5" y2="10" stroke="#0092CE" strokeWidth="1" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  ISO 14001:2015
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Environmental management
                </p>
              </div>

              {/* Human Factor */}
              <div className="flex-1 p-3 sm:p-3.5 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#edf7fc]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="6" r="3" stroke="#0092CE" strokeWidth="1.2" />
                  <path
                    d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinecap="round"
                  />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Human Factor
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  People-centred safety approach
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>
      {/* ================= END HERO SECTION ================= */}

      {/* ================= 2. HERO IMAGE (Full Width Strip) ================= */}
      <section className="w-full bg-[#0092CE] relative overflow-hidden">

        {/* Diagonal stripe texture */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(-55deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 28px)"
        }} />

        {/* Top cyan accent bar */}
        <div className="h-1 relative z-[4]"
          style={{ background: "linear-gradient(90deg,#01B9EB,#0092CE 40%,#001E3C)" }} />

        {/* Main body — stacks on mobile, side-by-side on md+ */}
        <div className="relative z-[2] flex flex-col md:flex-row md:min-h-[260px]">

          {/* ── LEFT: Copy ── */}
          <div className="flex-1 px-6 py-8 md:px-14 md:py-0 flex flex-col justify-center gap-3">
            <p
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-white/70"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-4 h-px bg-white/55 flex-shrink-0" />
              DOHSH All Safety Consultancy
            </p>

            <h2
              className="text-[30px] sm:text-[36px] md:text-[44px] font-extrabold leading-[0.92] tracking-[-0.01em] uppercase text-white"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Safety is not a priority —<br />
              it's a <span className="text-[#01B9EB]">Condition.</span>
            </h2>

            <p className="text-[12px] font-light leading-relaxed text-white/62 max-w-sm">
              Every worker deserves to return home safely. We embed a zero-harm
              culture across mining, construction, energy and healthcare sectors.
            </p>

            {/* Cert badges — shown below copy on mobile, pinned to bottom on desktop */}
            <div className="flex flex-wrap items-center gap-3 mt-1 md:mt-auto md:pt-6">
              {[
                { label: "Occupational Health & Safety", icon: "shield" },
                { label: "Environmental Management", icon: "globe" },
                { label: "Motswana Founded & Led", icon: "check" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[9.5px] font-bold tracking-[0.12em] uppercase text-white/55"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  {i > 0 && <span className="text-white/20 hidden sm:inline">·</span>}
                  <svg width="11" height="11" viewBox="0 0 20 20" fill="none" className="opacity-70 flex-shrink-0">
                    {c.icon === "shield" && <path d="M10 2L3 6v5c0 4 3.1 7.7 7 8.9C16.9 18.7 17 15 17 11V6L10 2Z" stroke="#01B9EB" strokeWidth="1.3" strokeLinejoin="round" />}
                    {c.icon === "globe" && <><circle cx="10" cy="10" r="7.5" stroke="#01B9EB" strokeWidth="1.3" /><path d="M10 2.5C10 2.5 6.5 6 6.5 10s3.5 7.5 3.5 7.5" stroke="#01B9EB" strokeWidth="1" strokeLinecap="round" /><path d="M10 2.5C10 2.5 13.5 6 13.5 10s-3.5 7.5-3.5 7.5" stroke="#01B9EB" strokeWidth="1" strokeLinecap="round" /><line x1="2.5" y1="10" x2="17.5" y2="10" stroke="#01B9EB" strokeWidth="1" /></>}
                    {c.icon === "check" && <path d="M4 10l4 4 8-8" stroke="#01B9EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />}
                  </svg>
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Stats ── */}
          <div
            className="
        flex items-center justify-center gap-0
        px-6 py-6
        md:w-[38%] md:flex-shrink-0 md:py-0 md:px-10
        bg-[#001E3C]
        border-t border-[#01B9EB]/15 md:border-t-0
        md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]
      "
            style={{
              backgroundImage: "radial-gradient(rgba(1,185,235,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          >
            {[
              { n: "Zero", l: "Harm\nPhilosophy" },
              { n: "ISO", l: "45001 &\n14001 Aligned" },
              { n: "7+", l: "Core\nIndustries" },
            ].map((s, i) => (
              <div key={i} className={`flex-1 text-center px-3 md:px-4 ${i < 2 ? "border-r border-[#01B9EB]/18" : ""}`}>
                <p className="text-[28px] md:text-[34px] font-extrabold text-[#01B9EB] leading-none mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}>{s.n}</p>
                <p className="text-[9px] font-medium tracking-[0.1em] uppercase text-white/42 leading-snug whitespace-pre-line">{s.l}</p>
              </div>
            ))}
          </div>

        </div>
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
                The Future of Safety<br />
                is <span className="text-primary">Digital.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                DOHSH has built a unified digital ecosystem that brings safety management,
                compliance tracking, and contractor onboarding into one intelligent platform.
                From SHE file management and real-time audit documentation to digital inductions
                and workforce safety records — everything your organization needs to operate
                safely and compliantly, accessible anywhere, at any time. Designed to scale
                across Africa and beyond.
              </p>

              <Link
                href="/about"
                className=" items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors inline-block shadow-lg"
              >
                Read Our Mission
              </Link>
            </div>

            {/* Right Column: Visual Image - Replaced with Home photo 1 */}
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="/portfolio1.jpeg"
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
              We offer end-to-end management systems designed to minimize risk, ensure regulatory compliance, and promote a culture of safety across industries.
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
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors  duration-300 shadow-lg"
            >
              <LogIn className="h-5 w-5" />
              Login to Portal
            </Link>
            <Link
              href="#"
              // className="px-8 py-4 rounded border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"

              className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#0092CE] text-[#0092CE] text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0092CE] hover:text-white transition-all"
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