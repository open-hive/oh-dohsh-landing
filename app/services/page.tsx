import Link from "next/link";
import {
  Shield,
  Leaf,
  ClipboardCheck,
  HardHat,
  Siren,
  HeartPulse,
  Users,
  PackageCheck,
  ArrowRight,
  Monitor,
  Activity,
} from "lucide-react";

import ServicesTimeline from "@/components/ServicesTimeline"
import ServiceBlock from "@/components/ServiceBlock"
import Reveal from "@/components/animations/Reveal"

import ServicesBarCanvas from "@/components/ServicesBarCanvas";


const services = [
  {
    icon: "shield" as const,
    title: "Occupational Health, Safety & Environmental Consultancy",
    description:
      "Expert OHSE advisory services that help organizations build effective safety management systems, reduce workplace risks, and maintain regulatory compliance across complex operational environments.",
    featuresLeft: [
      "Safety advisory and regulatory compliance guidance",
      "Safety audits and compliance reviews",
      "Routine and specialized workplace inspections",
      "Risk assessments and hazard identification",
      "Mining hazard risk assessments",
    ],
    featuresRight: [
      "Contractor onboarding and SHE file development",
      "Critical safe work procedure development",
      "Working at heights safety procedures",
      "Confined space entry procedures",
      "Hot work and electrical isolation procedures",
    ],
  },

  {
    icon: "monitor" as const,
    title: "Centralized Digital OHSE Management Platform",
    description:
      "A centralized digital system that enables organizations to manage safety documentation, contractor onboarding, compliance monitoring, and workforce training through one integrated platform.",
    featuresLeft: [
      "Digital contractor onboarding",
      "Cloud-based SHE file management",
      "Online OHSE training and induction programs",
      "Remote workforce safety training access",
      "Real-time safety documentation access",
    ],
    featuresRight: [
      "Compliance requirement packages",
      "Industry-specific safety documentation templates",
      "Risk assessment templates",
      "Safe work procedure templates",
      "Contractor safety management guidance",
    ],
  },

  {
    icon: "users" as const,
    title: "Safety Workforce Recruitment, Training & Deployment",
    description:
      "Identification, recruitment, training and deployment of qualified safety personnel to strengthen workplace safety and ensure compliance with industry standards.",
    featuresLeft: [
      "Safety practitioner and safety officer recruitment",
      "First aider recruitment and placement",
      "Fire marshal recruitment",
      "Safety representative recruitment",
      "Competency assessments and candidate screening",
    ],
    featuresRight: [
      "First aid training",
      "Fire safety and emergency response training",
      "Safety representative training",
      "Hazard identification and risk control training",
      "ISO and ESG awareness training",
    ],
  },

  {
    icon: "activity" as const,
    title: "Occupational Hygiene Monitoring",
    description:
      "Workplace exposure monitoring services that evaluate environmental conditions affecting worker health and support organizations in implementing effective risk control measures.",
    featuresLeft: [
      "Air quality monitoring",
      "Noise level monitoring",
      "Respirable and inhalable dust monitoring",
      "Heat stress monitoring",
      "Chemical exposure monitoring",
    ],
    featuresRight: [
      "Workplace exposure assessments",
      "Industrial hygiene risk evaluation",
      "Worker health risk monitoring",
      "Environmental condition monitoring",
      "Safety control implementation guidance",
    ],
  },

  {
    icon: "leaf" as const,
    title: "Environmental Monitoring & ESG Advisory",
    description:
      "Advisory services supporting organizations in environmental protection, sustainability practices, and ESG compliance across mining and industrial operations.",
    featuresLeft: [
      "ESG compliance and sustainability advisory",
      "Climate risk and environmental impact assessments",
      "Environmental monitoring and risk management",
      "Dust and emissions monitoring",
      "Water quality monitoring",
    ],
    featuresRight: [
      "Mine rehabilitation and land restoration planning",
      "Pollution control strategies",
      "Environmental protection planning",
      "Community health and safety planning",
      "Sustainability and ESG reporting support",
    ],
  },

  {
    icon: "hardhat" as const,
    title: "PPE & Safety Equipment Supply",
    description:
      "Supply of certified personal protective equipment and specialized safety gear designed to protect workers in mining, construction, engineering, and industrial operations.",
    featuresLeft: [
      "Safety helmets and hard hats",
      "Protective gloves and face shields",
      "Respiratory protection equipment",
      "Hearing protection equipment",
      "High-visibility safety clothing",
    ],
    featuresRight: [
      "Flame-resistant protective clothing",
      "Safety footwear and industrial boots",
      "Fall protection systems and harnesses",
      "Emergency response equipment",
      "Specialized underground mining PPE",
    ],
  },
];



export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-light">

      {/* ================= HERO SECTION ================= */}
      {/* Requires: import ServicesBarCanvas from "@/components/ServicesBarCanvas"; */}


      <section className="relative w-full bg-[#EBF6FC] overflow-hidden">

        {/* Brand-color top accent bar */}
        <div
          className="relative z-10 h-[3px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #01B9EB 20%, #0092CE 50%, #01B9EB 80%, transparent 100%)",
          }}
        />

        {/* Subtle blue grid texture */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
        linear-gradient(rgba(0,146,206,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,146,206,0.06) 1px, transparent 1px)
      `,
            backgroundSize: "52px 52px",
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
      border-b lg:border-b-0 lg:border-r border-[#0092CE]/15
    ">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2.5 mb-7">
              <Link
                href="/"
                className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#001E3C]/40 hover:text-[#0092CE] transition-colors"
              >
                Home
              </Link>
              <span className="w-4 h-px bg-[#0092CE]/25" />
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#0092CE]">
                Services
              </span>
            </nav>

            {/* Eyebrow */}
            <p
              className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              What We Offer · DOHSH
            </p>

            {/* Headline */}
            <h1
              className="text-[44px] sm:text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.01em] text-[#001E3C] uppercase mb-6 lg:mb-7"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Comprehensive<br />
              Safety &amp;<br />
              Environmental<br />
              <span className="text-[#0092CE]">Solutions.</span>
            </h1>

            {/* Rule */}
            <div className="w-9 h-[3px] bg-[#01B9EB] mb-5 lg:mb-6" />

            {/* Body */}
            <p className="text-[14px] font-light leading-[1.75] text-[#001E3C]/55 max-w-[390px] mb-8 lg:mb-10">
              Our services combine{" "}
              <strong className="text-[#001E3C] font-medium">technical expertise</strong>,
              digital innovation, and practical field experience to support industries
              including mining, construction, energy, manufacturing, and infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors"
              >
                Get a Consultation
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
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#0092CE]/45 text-[#0092CE] text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0092CE] hover:text-white transition-all"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Breathing bar chart + Industry pills ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#D9EFF9]">

            {/* Canvas — fixed height on mobile, grows on desktop */}
            <div className="relative h-[300px] sm:h-[360px] lg:h-auto lg:flex-1 min-h-0">
              <ServicesBarCanvas />
            </div>

            {/* Industry pills */}
            <div className="flex border-t border-[#0092CE]/15 bg-[#EBF6FC] relative z-10">

              {/* Mining */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M3 17l4-7 3 3 3-5 4 9H3Z"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Mining
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Jwaneng sector &amp; underground ops
                </p>
              </div>

              {/* Construction */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="11" width="16" height="6" rx="1" stroke="#0092CE" strokeWidth="1.2" />
                  <path d="M5 11V7l5-4 5 4v4"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Construction
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Site safety &amp; structural compliance
                </p>
              </div>

              {/* Energy */}
              <div className="flex-1 p-3 sm:p-3.5 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7Z"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Energy
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Utilities, renewables &amp; infrastructure
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>
      {/* ================= END HERO SECTION ================= */}



      {/* ================= 2. CORE SERVICES GRID ================= */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Integrated Occupational Health, Safety & Environmental Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            DOHSH All Safety Consultancy delivers advanced occupational health,
            safety and environmental solutions for high-risk industries including
            mining, construction, energy and large-scale infrastructure projects.
            Our services combine regulatory expertise, digital systems, workforce
            capability development and environmental stewardship to help
            organizations operate safely, efficiently and sustainably.
          </p>
        </div>

        <ServicesTimeline>
          {services.map((service, index) => (
            <Reveal key={index}>
              <ServiceBlock
                icon={service.icon}
                title={service.title}
                description={service.description}
                featuresLeft={service.featuresLeft}
                featuresRight={service.featuresRight}
              />
            </Reveal>
          ))}
        </ServicesTimeline>


      </section>





      {/* ================= 3. SPECIALIZED SUPPLY & SUPPORT ================= */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Beyond Consulting</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Specialized Supply & <span className="text-secondary">Project Support</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We don't just advise; we equip. DOHSH provides the personnel and gear necessary to execute safety strategies on the ground.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <HardHat className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">Project Personnel Supply</h3>
                    <p className="text-gray-600">Placement of qualified Safety Officers, Fire Marshals, and First Aiders for long or short-term projects.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <PackageCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">PPE & Corporate Wear</h3>
                    <p className="text-gray-600">Supply of specialized underground PPE, high-visibility corporate wear, and safety signage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image - Replaced with services photo */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/portfolio_placeholder.png"
                alt="PPE and Safety Gear"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. CTA BANNER ================= */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Ready to elevate your safety standards?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for a gap analysis or a quote on our safety management services.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3   text-[10px] font-semibold tracking-[0.16em] uppercase bg-white text-primary  rounded shadow hover:bg-gray-100 transition-colors"

            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for the Grid Cards to keep code clean
function ServiceCard({ icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/50 transition-all hover:shadow-xl group">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="font-heading text-xl font-bold text-dark mb-3">{title}</h3>
      <p className="text-gray-500 mb-6 text-sm">{description}</p>

      {/* Feature List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-primary mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-gray-100">
        <Link href="/contact" className="text-secondary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Request Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}