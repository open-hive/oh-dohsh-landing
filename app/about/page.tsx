import Link from "next/link";
import { CheckCircle2, Award, Users, Scale, Quote } from "lucide-react";

import HeroNetworkCanvas from "@/components/HeroNetworkCanvas";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      {/* Requires: import HeroNetworkCanvas from "@/components/HeroNetworkCanvas"; */}


      <section className="relative w-full bg-[#E8F5FC] overflow-hidden">

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
                About Us
              </span>
            </nav>

            {/* Eyebrow */}
            <p
              className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              OHSE Consultancy · Botswana
            </p>

            {/* Headline */}
            <h1
              className="text-[44px] sm:text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.01em] text-[#001E3C] uppercase mb-6 lg:mb-7"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Your Partner<br />
              in Occupational<br />
              Safety &amp;<br />
              <span className="text-[#0092CE]">Environment.</span>
            </h1>

            {/* Rule */}
            <div className="w-9 h-[3px] bg-[#01B9EB] mb-5 lg:mb-6" />

            {/* Body */}
            <p className="text-[14px] font-light leading-[1.75] text-[#001E3C]/55 max-w-[390px] mb-8 lg:mb-10">
              <strong className="text-[#001E3C] font-medium">DOHSH All Safety Consultancy</strong> is a
              Motswana-founded entity dedicated to empowering organisations with comprehensive OHSE
              solutions — from workplace risk assessment to full environmental compliance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors"
              >
                Our Services
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
                className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#0092CE]/45 text-[#0092CE] text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0092CE] hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Network graph + Pillar cards ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#DFF0F9]">

            {/* Canvas — fixed height on mobile, grows on desktop */}
            <div className="relative h-[320px] sm:h-[380px] lg:h-auto lg:flex-1 min-h-0">
              <HeroNetworkCanvas />
            </div>

            {/* Pillar cards */}
            <div className="flex border-t border-[#0092CE]/15 bg-[#E8F5FC] relative z-10">

              {/* Safety */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 6v5c0 4 3.1 7.7 7 8.9C16.9 18.7 17 15 17 11V6L10 2Z"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Safety
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Workplace risk assessment &amp; hazard control
                </p>
              </div>

              {/* Environment */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
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
                  Environment
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Environmental compliance &amp; impact studies
                </p>
              </div>

              {/* Compliance */}
              <div className="flex-1 p-3 sm:p-3.5 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="#0092CE" strokeWidth="1.2" />
                  <path d="M7 4V2.5M13 4V2.5" stroke="#0092CE" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M6 10l2.5 2.5L14 8" stroke="#0092CE" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Compliance
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  ISO 45001 &amp; 14001 audits &amp; certification
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>
      {/* ================= END HERO SECTION ================= */}

      {/* ================= 2. WHO WE ARE (Story) ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Image - Replaced with about us 1 */}
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/portfolio2.jpeg"
                alt="Professional Consultation"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/20 rounded"></div>
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                Driving Safety Culture in Botswana.
              </h2>

              {/* The "Visual Element" - Vertical Cyan Line */}
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a team of experienced professionals, we specialize in helping companies navigate challenges, streamline operations, and unlock safety opportunities. Whether you are in mining, construction, or healthcare, our tailored solutions ensure your workforce returns home safely every day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. STATS BAR (Gradient) ================= */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Compliance Focus</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">ISO</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Standards Aligned</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">Zero</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Harm Philosophy</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">7+</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Core Industries</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. MISSION & VISION ================= */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Block A: Mission (Cyan Bar) */}
            <div className="bg-white p-10 rounded shadow-md border-l-8 border-primary">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To network and empower organizations to create safer, healthier, and more sustainable workplaces through innovative solutions, expert guidance, and a commitment to excellence.
              </p>
            </div>

            {/* Block B: Vision (Deep Blue Bar) */}
            <div className="bg-white p-10 rounded shadow-md border-l-8 border-secondary">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading OHSE consultancy in Botswana, fostering a culture where zero harm is achievable and every worker returns home safely.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p
              className="flex items-center justify-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              The People Behind DOHSH
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E3C] tracking-tight">
              Our Expert Team
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              A multidisciplinary team of accredited safety, health, environmental,
              and hygiene specialists committed to protecting people and workplaces
              across Botswana.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* ── Neo Bridget Kenosi ── */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Photo / Avatar */}
              <div className="relative h-80 bg-gradient-to-br from-[#EBF6FC] to-[#D9EFF9] overflow-hidden">
                <img
                  src="/bridget.jpeg"
                  alt="Neo Bridget Kenosi"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #01B9EB, #0092CE)" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001E3C]">Neo Bridget Kenosi</h3>
                <p className="text-[#0092CE] text-sm font-semibold mt-0.5">
                  OHSE & ESG Training Specialist
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">Western Australian (WA) Mining Club Member</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Dimpho Otukile ── */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">

              <div className="relative h-80 bg-gradient-to-br from-[#EBF6FC] to-[#D9EFF9] flex items-center justify-center overflow-hidden">
                {/* Swap for <img src="/team/dimpho-otukile.jpg" ... /> when ready */}
                <div className="w-28 h-28 rounded-full bg-[#0092CE] flex items-center justify-center shadow-lg">
                  <span
                    className="text-3xl font-extrabold text-white tracking-wide"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    DO
                  </span>
                </div>
                <div className="absolute w-36 h-36 rounded-full border-2 border-[#0092CE]/20" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #01B9EB, #0092CE)" }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001E3C]">Dimpho Otukile</h3>
                <p className="text-[#0092CE] text-sm font-semibold mt-0.5">
                  Occupational Hygiene & Food Safety Specialist
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">Occupational Hygiene</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">Food Safety</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sekao Marumoagae ── */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="relative h-80 bg-gradient-to-br from-[#EBF6FC] to-[#D9EFF9] flex items-center justify-center overflow-hidden">
                {/* Swap for <img src="/team/sekao-marumoagae.jpg" ... /> when ready */}
                <div className="w-28 h-28 rounded-full bg-[#0092CE] flex items-center justify-center shadow-lg">
                  <span
                    className="text-3xl font-extrabold text-white tracking-wide"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    SM
                  </span>
                </div>
                <div className="absolute w-36 h-36 rounded-full border-2 border-[#0092CE]/20" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #01B9EB, #0092CE)" }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001E3C]">Sekao Marumoagae</h3>
                <p className="text-[#0092CE] text-sm font-semibold mt-0.5">
                  OHSE Specialist
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">Botswana Health Professions Body Member</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">ISO 45001:2018 Certified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#01B9EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2Z"
                        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-gray-500">ISO 14001:2015 Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Phenyo Kebinatshwene ── */}
            <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-[#EBF6FC] to-[#D9EFF9] flex items-center justify-center overflow-hidden">
                {/* Swap for <img src="/team/phenyo.jpg" ... /> when ready */}
                <div className="w-28 h-28 rounded-full bg-[#0092CE] flex items-center justify-center shadow-lg">
                  <span
                    className="text-3xl font-extrabold text-white tracking-wide"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    PK
                  </span>
                </div>
                <div className="absolute w-36 h-36 rounded-full border-2 border-[#0092CE]/20" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #01B9EB, #0092CE)" }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001E3C]">Phenyo Kebinatshwene</h3>
                <p className="text-[#0092CE] text-sm font-semibold mt-0.5">
                  OHSE Practitioner
                </p>
              </div>
            </div>

          </div>



        </div>
      </section>
      {/* ================= END TEAM SECTION ================= */}

      {/* ================= 5. WHY CHOOSE US GRID ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-dark">Why Choose DOHSH?</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We combine local understanding with international standards to deliver safety results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item 1: Expertise */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Proven Expertise</h4>
                <p className="text-gray-600 text-sm">Highly skilled professionals with extensive experience in the Jwaneng mining sector and industrial safety.</p>
              </div>
            </div>

            {/* Item 2: Customization */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Tailored Customization</h4>
                <p className="text-gray-600 text-sm">Personalized services maintaining open communication to fit your specific operational needs.</p>
              </div>
            </div>

            {/* Item 3: Regulatory */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Scale className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Regulatory Knowledge</h4>
                <p className="text-gray-600 text-sm">Up-to-date with evolving Botswana regulations to help you avoid penalties and ensure compliance.</p>
              </div>
            </div>

            {/* Item 4: Excellence */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Commitment to Excellence</h4>
                <p className="text-gray-600 text-sm">Dedication to quality results and integrity in every audit, plan, and inspection we perform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. FOUNDER'S NOTE ================= */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Strip */}
          <div className="flex items-center gap-6">
            <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white border border-blue-200 shadow-lg overflow-hidden group">
              <img
                src="/ceo.jpg"
                alt="Founder portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">Founder & CEO</div>
                  <div className="font-heading text-lg font-bold">Doris Kehinana</div>
                  <div className="text-xs text-white/90 mt-2">
                    Occupational Health, Safety & Environmental Consultant
                  </div>
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-white/95 text-secondary text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow">
                Founder's Note
              </div>
              <div className="absolute inset-0 border border-white/60 m-3" aria-hidden="true"></div>
            </div>

            <div className="flex-1 h-1 bg-secondary/70 rounded-full"></div>
          </div>

          {/* Note Body */}
          <div className="mt-10 relative bg-white rounded-xl shadow-lg border border-blue-100 p-8">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-primary/80 rounded-l-xl" aria-hidden="true"></div>
            <section className="max-w-4xl mx-auto px-6 py-16">
              <blockquote className="relative text-gray-700 text-lg leading-relaxed space-y-6 font-light">

                {/* Opening Quote Mark */}
                <span className="absolute -top-6 -left-4 text-6xl text-primary/20 font-serif">
                  &ldquo;
                </span>

                <p>
                  DOHSH All Safety Consultancy was established with a clear purpose: to enhance the standard of Occupational Health, Safety, and Environmental excellence across industries. We believe safety is not merely a regulatory obligation but a strategic foundation for sustainable growth and operational integrity.
                </p>

                <p>
                  As a citizen-owned consultancy led by a Motswana woman, we are driven by accountability, excellence, and measurable impact. Our approach integrates compliance, innovation, and practical implementation to ensure that safety systems are not only developed, but effectively embedded within organizational structures and/or operations.
                </p>

                <p>
                  We are committed to supporting businesses through structured training, digitalized systems, contractor management, and proactive risk prevention strategies that protect communities, the environment, and performance.
                </p>

                <p>
                  Our vision is to build resilient organizations where safety leadership becomes part of the culture — strengthening industries across Botswana, the region, and beyond.
                </p>

                <p className="font-medium text-dark">
                  Together, we can lead with safety.
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <div className="font-heading text-xl font-bold text-dark">
                  Doris Kehinana
                </div>
                <div className="text-sm text-secondary font-semibold tracking-wide">
                  Founder & CEO
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ================= 7. ZERO HARM QUOTE ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
          <blockquote className="font-heading text-2xl md:text-3xl font-medium text-dark leading-relaxed italic mb-8">
            "We believe that zero harm is achievable. Our goal is a workplace where everyone safely goes back to their families."
          </blockquote>
          <div className="font-bold text-secondary uppercase tracking-widest text-sm">
            — DOHSH Management
          </div>
        </div>
      </section>

    </div>
  );
}