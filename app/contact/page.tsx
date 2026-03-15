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
              className="text-[44px] sm:text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.01em] text-[#001E3C] uppercase mb-6 lg:mb-7"
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
              We're here to assist. Reach out for{" "}
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
          <h2 className="font-heading text-3xl font-bold text-center text-dark mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem
              question="Do you offer ISO certification support?"
              answer="Yes, we specialize in aligning your safety systems with ISO 45001, ISO 14001, and ISO 9001 standards."
            />
            <FaqItem
              question="Can you supply safety officers for long-term projects?"
              answer="Absolutely. We provide qualified Safety Officers, Fire Marshals, and First Aiders for both short-term contracts and long-term project placements."
            />
            <FaqItem
              question="Do you service areas outside Jwaneng?"
              answer="While our headquarters are in Jwaneng to service the mines, we operate across Botswana including Gaborone, Francistown, and remote exploration sites."
            />
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for FAQ Accordion
function FaqItem({ question, answer }: { question: string, answer: string }) {
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