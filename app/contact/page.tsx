"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full py-20 md:py-28 bg-dark overflow-hidden">
        {/* Background: Cleaner, blurred office/meeting setting */}
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
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> &gt; <span className="text-primary">Contact Us</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Contact & Support
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to assist. Reach out for consultations, quotes, or support.
          </p>
        </div>
      </section>

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
                <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded transition-colors flex justify-center items-center gap-2">
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