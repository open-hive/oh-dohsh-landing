"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Send } from "lucide-react";

import ContactSignalCanvas from "@/components/ContactSignalCanvas";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">


      {/* ================= HERO SECTION ================= */}
      {/* Requires: import ContactSignalCanvas from "@/components/ContactSignalCanvas"; */}

      <section className="relative w-full bg-[#E5F4FA] overflow-hidden">

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
                Contact Us
              </span>
            </nav>

            {/* Eyebrow */}
            <p
              className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              Get In Touch · DOHSH
            </p>

            {/* Headline */}
            <h1
              className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[0.9] tracking-[-0.01em] text-[#001E3C] uppercase mb-6 lg:mb-7"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Let's Build a<br />
              Safer<br />
              Workplace<br />
              <span className="text-[#0092CE]">Together.</span>
            </h1>

            {/* Rule */}
            <div className="w-9 h-[3px] bg-[#01B9EB] mb-5 lg:mb-6" />

            {/* Body */}
            <p className="text-[14px] font-light leading-[1.75] text-[#001E3C]/55 max-w-[390px] mb-8 lg:mb-10">
              We&apos;re to assist. Reach out for{" "}
              <strong className="text-[#001E3C] font-medium">consultations</strong>, quotes,
              or support — our team responds within one business day.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors"
              >
                Send a Message
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
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-[#0092CE]/45 text-[#0092CE] text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0092CE] hover:text-white transition-all"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Signal canvas + Contact pills ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#D5ECF7]">

            {/* Canvas — fixed height on mobile, grows on desktop */}
            <div className="relative h-[300px] sm:h-[360px] lg:h-auto lg:flex-1 min-h-0">
              <ContactSignalCanvas />
            </div>

            {/* Contact detail pills */}
            <div className="flex border-t border-[#0092CE]/15 bg-[#E5F4FA] relative z-10">

              {/* Email */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    stroke="#0092CE" strokeWidth="1.2"
                  />
                  <path
                    d="M3 5l7 5 7-5"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Email Us
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  info@dohsh.co.bw
                </p>
              </div>

              {/* Phone */}
              <div className="flex-1 p-3 sm:p-3.5 border-r border-[#0092CE]/12 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 4a1 1 0 011-1h2.5l1 3-1.5 1.5a11 11 0 005.5 5.5L14 11.5l3 1V15a1 1 0 01-1 1C7.163 16 4 8.837 4 5z"
                    stroke="#0092CE" strokeWidth="1.2" strokeLinejoin="round"
                  />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Call Us
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  +267 74 726 733
                </p>
              </div>

              {/* Location */}
              <div className="flex-1 p-3 sm:p-3.5 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-[#01B9EB]/[0.08]">
                <svg className="opacity-80" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2C7.239 2 5 4.239 5 7c0 4 5 11 5 11s5-7 5-11c0-2.761-2.239-5-5-5z"
                    stroke="#0092CE" strokeWidth="1.2"
                  />
                  <circle cx="10" cy="7" r="1.5" stroke="#0092CE" strokeWidth="1.2" />
                </svg>
                <p
                  className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0092CE]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Location
                </p>
                <p className="hidden sm:block text-[10px] font-light leading-[1.5] text-[#001E3C]/45">
                  Jwaneng, Botswana
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>
      {/* ================= END HERO SECTION ================= */}

      {/* ================= 2. MAIN CONTACT SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* LEFT COLUMN: The Form */}
            <div className="lg:col-span-3 bg-[#f8f9fa] p-8 md:p-10 rounded-lg shadow-sm border border-gray-100">
              <h2 className="font-heading text-2xl font-bold text-dark mb-6">Get in Touch with Us</h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Debswana"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(+267) 74..."
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What are you interested in?</label>
                  <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-600">
                    <option>General Inquiry</option>
                    <option>OHS Audit & Compliance</option>
                    <option>PPE Supply Quote</option>
                    <option>Safety Officer Placement</option>
                    <option>Environmental Assessment</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  ></textarea>
                </div>

                {/* Button */}
                <button className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors w-full justify-center">
                  Send Message <Send className="h-4 w-4" />
                </button>

              </form>
            </div>

            {/* RIGHT COLUMN: Contact Info */}
            <div className="lg:col-span-2 space-y-10 py-4">

              {/* Info Item 1: Phone */}
              <div className="flex gap-5">
                <div className="bg-blue-50 p-3 rounded-full h-fit">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark">Call Us</h3>
                  <p className="text-gray-500 text-sm mb-1">Mon - Fri, 8:00 AM - 5:00 PM</p>
                  <a href="tel:+26774726733" className="text-primary font-semibold text-lg hover:underline">
                    (+267) 74 726 733
                  </a>
                </div>
              </div>

              {/* Info Item 2: Email */}
              <div className="flex gap-5">
                <div className="bg-blue-50 p-3 rounded-full h-fit">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark">Email Support</h3>
                  <p className="text-gray-500 text-sm mb-1">We typically reply within 24 hours.</p>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:doris@dohsh.co.bw" className="text-dark hover:text-primary transition-colors">doris@dohsh.co.bw</a>
                    <a href="mailto:info@dohsh.co.bw" className="text-dark hover:text-primary transition-colors">info@dohsh.co.bw</a>
                    <a href="mailto:projects@dohsh.co.bw" className="text-dark hover:text-primary transition-colors">projects@dohsh.co.bw</a>
                  </div>
                </div>
              </div>

              {/* Info Item 3: Location */}
              <div className="flex gap-5">
                <div className="bg-blue-50 p-3 rounded-full h-fit">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark">Visit Us</h3>
                  <p className="text-gray-500 text-sm mb-1">Headquarters</p>
                  <p className="text-dark">
                    Jwaneng, Botswana<br />
                    (Near the mine access route)
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. CLIENT FEEDBACK SECTION ================= */}
<section className="py-20 bg-[#EBF6FC]">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-10">
      <p
        className="flex items-center justify-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
        Existing Clients
        <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#001E3C] tracking-tight">
        Share Your Experience
      </h2>
      <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
        Have you worked with DOHSH? We'd love to hear how our services have impacted your organization. Your feedback helps us grow and serve you better.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-xl shadow-sm border border-[#0092CE]/15 p-8 md:p-10">

      {/* Distinguishing label */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <div className="w-2 h-8 bg-[#01B9EB] rounded-full" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0092CE]">Client Feedback Form</p>
          <p className="text-xs text-gray-400 mt-0.5">This form is for existing clients only</p>
        </div>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
            />
          </div>
          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Organization *</label>
            <input
              type="text"
              placeholder="e.g. Debswana"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
            />
          </div>
        </div>

        {/* Service Used */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Service You Used *</label>
          <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-gray-600 text-sm">
            <option value="">Select a service...</option>
            <option>OHSE Consultancy</option>
            <option>Digital OHSE Platform</option>
            <option>Safety Workforce Recruitment & Training</option>
            <option>Occupational Hygiene Monitoring</option>
            <option>Environmental Monitoring & ESG Advisory</option>
            <option>PPE & Safety Equipment Supply</option>
            <option>HSE Training Programs</option>
          </select>
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Overall Rating *</label>
          <StarRating />
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Feedback *</label>
          <textarea
            rows={4}
            placeholder="Tell us about your experience with DOHSH — what worked well, what we can improve..."
            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
          ></textarea>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            className="mt-1 accent-[#0092CE]"
          />
          <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
            I consent to DOHSH using my feedback for service improvement and potentially displaying it as a testimonial on their website (name and company only).
          </label>
        </div>

        {/* Submit */}
        <button className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors w-full justify-center">
          Submit Feedback <Send className="h-4 w-4" />
        </button>

      </form>
    </div>
  </div>
</section>

      {/* ================= 3. MAP SECTION ================= */}
      {/* Full width Google Map centered on Jwaneng */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.15392842259!2d24.664421169006935!3d-24.60064560754823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5bd768393952f%3A0x86134b2909470929!2sJwaneng!5e0!3m2!1sen!2sbw!4v1705000000000!5m2!1sen!2sbw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

      {/* ================= 4. FAQ SECTION ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-dark mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">

            <FaqItem
              question="What services does DOHSH All Safety Consultancy provide?"
              answer={
                <div>
                  <p className="mb-2">We provide comprehensive Occupational Health, Safety, and Environmental (HSE) consultancy services, including:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Safety training and inductions</li>
                    <li>SHE file development and compliance management</li>
                    <li>Occupational hygiene monitoring</li>
                    <li>Environmental monitoring and reporting</li>
                    <li>Contractor onboarding and compliance verification</li>
                    <li>Safety audits and risk assessments</li>
                    <li>Supply of safety equipment and systems</li>
                  </ul>
                  <p>Our goal is to help organizations create safe, compliant, and productive workplaces.</p>
                </div>
              }
            />

            <FaqItem
              question="Which industries do you serve?"
              answer={
                <div>
                  <p className="mb-2">Our services support multiple industries including:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Mining</li>
                    <li>Construction</li>
                    <li>Energy and utilities</li>
                    <li>Manufacturing</li>
                    <li>Engineering and maintenance contractors</li>
                    <li>Logistics and transport</li>
                    <li>Banks and financial institutions</li>
                  </ul>
                  <p>Any organization that must comply with workplace health, safety, and environmental regulations can benefit from our services.</p>
                </div>
              }
            />

            <FaqItem
              question="What is a SHE File and why is it important?"
              answer={
                <div>
                  <p className="mb-2">A Safety, Health and Environment (SHE) File is a compliance document required for contractors working on industrial or construction sites. It typically includes:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Risk assessments</li>
                    <li>Method statements</li>
                    <li>Safety policies</li>
                    <li>Employee certifications</li>
                    <li>Medical fitness records</li>
                    <li>PPE compliance documentation</li>
                  </ul>
                  <p>A complete SHE file ensures legal compliance and demonstrates that a contractor is prepared to work safely.</p>
                </div>
              }
            />

            <FaqItem
              question="Do you help contractors prepare their SHE files?"
              answer={
                <p>Yes. We assist contractors in developing, reviewing, and maintaining compliant SHE files that meet site and regulatory requirements. We also ensure the file aligns with client-specific safety standards, especially in mining and construction environments.</p>
              }
            />

            <FaqItem
              question="Do you offer safety training and certification?"
              answer={
                <div>
                  <p className="mb-2">Yes. We provide workplace safety training programs, including:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Safety induction training</li>
                    <li>Hazard identification and risk assessment</li>
                    <li>PPE training</li>
                    <li>Emergency response and first aid awareness</li>
                    <li>Safety leadership and supervision training</li>
                  </ul>
                  <p>Training can be conducted in-person or through digital platforms.</p>
                </div>
              }
            />

            <FaqItem
              question="Do you provide safety equipment or PPE?"
              answer={
                <div>
                  <p className="mb-2">Yes. We supply quality personal protective equipment (PPE) and safety solutions such as:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Helmets and safety boots</li>
                    <li>High-visibility clothing</li>
                    <li>Respiratory protection</li>
                    <li>Fall protection systems</li>
                    <li>Safety signage and equipment</li>
                  </ul>
                  <p>All equipment complies with recognized safety standards.</p>
                </div>
              }
            />

            <FaqItem
              question="What is occupational hygiene monitoring?"
              answer={
                <div>
                  <p className="mb-2">Occupational hygiene monitoring involves assessing workplace conditions that may affect workers' health and safety, including both surface and underground environments. This may include:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Dust exposure</li>
                    <li>Noise levels</li>
                    <li>Chemical exposure</li>
                    <li>Air quality monitoring</li>
                    <li>Heat stress assessments</li>
                    <li>Underground occupational safety monitoring</li>
                  </ul>
                  <p>These assessments help organizations identify potential hazards and implement effective control measures to protect employees and maintain regulatory compliance.</p>
                </div>
              }
            />

            <FaqItem
              question="Can DOHSH help with contractor onboarding?"
              answer={
                <div>
                  <p className="mb-2">Yes. We assist companies with contractor safety onboarding, ensuring contractors meet all safety and compliance requirements before starting work. Our systems help streamline:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Documentation review</li>
                    <li>Compliance verification</li>
                    <li>Safety induction records</li>
                    <li>Digital onboarding processes</li>
                  </ul>
                </div>
              }
            />

            <FaqItem
              question="Do you offer digital safety solutions?"
              answer={
                <div>
                  <p className="mb-2">Yes. We have deployed a digital safety platforms to help organizations manage:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>SHE files</li>
                    <li>Contractor compliance</li>
                    <li>Safety training records</li>
                    <li>Audit documentation</li>
                  </ul>
                  <p>These systems improve transparency, efficiency, and accessibility for safety managers and coordinators.</p>
                </div>
              }
            />

            <FaqItem
              question="Where does DOHSH operate?"
              answer={
                <p>We are based in Gaborone, Botswana, but we support projects across the country and aim to expand our services across Africa and internationally.</p>
              }
            />

            <FaqItem
              question="Why choose DOHSH All Safety Consultancy?"
              answer={
                <div>
                  <p className="mb-2">We are committed to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Promoting safe and healthy workplaces</li>
                    <li>Delivering practical and compliant safety solutions</li>
                    <li>Supporting contractors and organizations with reliable expertise</li>
                    <li>Driving innovation through digital safety management systems</li>
                  </ul>
                  <p>Our approach focuses on prevention, compliance, and operational excellence.</p>
                </div>
              }
            />

            <FaqItem
              question="How can I request a consultation or quotation?"
              answer={
                <div>
                  <p className="mb-2">You can request a consultation by:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Filling out the contact form on our website</li>
                    <li>Sending us an email</li>
                    <li>Calling our office directly</li>
                  </ul>
                  <p>Our team will assess your needs and provide a tailored solution and quotation.</p>
                </div>
              }
            />

            <FaqItem
              question="Do you conduct workplace safety audits?"
              answer={
                <div>
                  <p className="mb-2">Yes. We conduct comprehensive health, safety, and environmental audits to evaluate whether organizations are meeting regulatory and operational safety requirements. Our audits help identify:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Safety gaps</li>
                    <li>Non-compliance risks</li>
                    <li>Improvement opportunities</li>
                    <li>Best practice recommendations</li>
                  </ul>
                  <p>This helps organizations build safer and more compliant workplaces.</p>
                </div>
              }
            />

            <FaqItem
              question="Can DOHSH assist companies preparing for safety inspections?"
              answer={
                <div>
                  <p className="mb-2">Yes. We help organizations prepare for regulatory inspections and internal safety reviews by ensuring all documentation, procedures, and compliance requirements are properly in place. This includes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SHE file verification</li>
                    <li>Policy reviews</li>
                    <li>Compliance gap analysis</li>
                    <li>Staff safety awareness</li>
                  </ul>
                </div>
              }
            />

            <FaqItem
              question="Do you support banks and financial institutions with safety compliance?"
              answer={
                <div>
                  <p className="mb-2">Yes. Banks and corporate offices also require occupational health and safety compliance to ensure safe working environments for employees and visitors. We assist with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Office risk assessments</li>
                    <li>Fire safety compliance</li>
                    <li>Emergency evacuation planning</li>
                    <li>Workplace safety policies</li>
                  </ul>
                </div>
              }
            />

            <FaqItem
              question="Do you provide risk assessments for workplaces?"
              answer={
                <div>
                  <p className="mb-2">Yes. Risk assessments are a critical part of workplace safety management. We help organizations:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Identify workplace hazards</li>
                    <li>Evaluate potential risks</li>
                    <li>Implement appropriate control measures</li>
                    <li>Develop safe working procedures</li>
                  </ul>
                  <p>This ensures that businesses operate safely and responsibly.</p>
                </div>
              }
            />

            <FaqItem
              question="What is contractor safety management?"
              answer={
                <div>
                  <p className="mb-2">Contractor safety management ensures that all contractors working on a project meet health and safety compliance requirements. Our services include:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Contractor prequalification</li>
                    <li>Safety documentation verification</li>
                    <li>SHE file review</li>
                    <li>Contractor onboarding and inductions</li>
                  </ul>
                  <p>This reduces the risk of incidents, delays, and legal liabilities.</p>
                </div>
              }
            />

            <FaqItem
              question="Can DOHSH develop safety policies for companies?"
              answer={
                <p>Yes. We assist organizations in developing customized health, safety, and environmental policies aligned with regulatory requirements and industry standards. These policies form the foundation of an effective safety management system.</p>
              }
            />

            <FaqItem
              question="Do you provide environmental monitoring services?"
              answer={
                <div>
                  <p className="mb-2">Yes. Our environmental monitoring services help organizations measure and manage environmental impact, including:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Air quality monitoring</li>
                    <li>Noise monitoring</li>
                    <li>Environmental compliance reporting</li>
                    <li>Environmental risk assessments</li>
                  </ul>
                  <p>This supports organizations in meeting environmental regulations and sustainability commitments.</p>
                </div>
              }
            />

            <FaqItem
              question="Can small businesses benefit from your services?"
              answer={
                <p>Absolutely. Small and medium-sized businesses often need practical safety solutions to comply with regulations without large internal safety departments. We provide affordable and scalable safety solutions tailored to small businesses and contractors.</p>
              }
            />

            <FaqItem
              question="Do you offer customized safety training for companies?"
              answer={
                <div>
                  <p className="mb-2">Yes. We design customized safety training programs tailored to the specific risks and operational environments of each organization. Training programs can include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Industry-specific hazard training</li>
                    <li>Safety leadership training</li>
                    <li>Workplace compliance training</li>
                    <li>Emergency preparedness training</li>
                  </ul>
                </div>
              }
            />

            <FaqItem
              question="How does DOHSH help organizations improve safety culture?"
              answer={
                <div>
                  <p className="mb-2">We support organizations in building a strong safety culture by:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Providing safety awareness training</li>
                    <li>Supporting leadership engagement in safety</li>
                    <li>Implementing practical safety systems</li>
                    <li>Encouraging worker participation in safety initiatives</li>
                  </ul>
                  <p>A strong safety culture leads to fewer incidents, improved productivity, and stronger employee morale.</p>
                </div>
              }
            />

            <FaqItem
              question="How can my company start working with DOHSH?"
              answer={
                <div>
                  <p className="mb-2">Getting started is simple:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Contact our team through the website or email</li>
                    <li>Share your organization's safety needs or challenges</li>
                    <li>We conduct an initial consultation</li>
                    <li>We provide a tailored safety solution and quotation</li>
                  </ol>
                </div>
              }
            />

          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for FAQ Accordion
function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-dark">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="text-2xl transition-transform hover:scale-110"
        >
          <span className={(hovered || rating) >= star ? "text-[#0092CE]" : "text-gray-300"}>
            ★
          </span>
        </button>
      ))}
      {rating > 0 && (
        <span className="text-xs text-gray-400 self-center ml-1">
          {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
        </span>
      )}
    </div>
  );
}