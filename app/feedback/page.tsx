"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Star, CheckCircle, TrendingUp, Users, Award, Shield } from "lucide-react";

// ─── Testimonials data ───────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Kgomotso Motlhabane",
    company: "Debswana Mining Co.",
    role: "HSE Manager",
    rating: 5,
    text: "DOHSH transformed our contractor onboarding process. Their digital SHE file management saved us weeks of paperwork every month. Truly a game changer for our site compliance.",
    service: "Digital OHSE Platform",
    initials: "KM",
  },
  {
    name: "Thato Segwabe",
    company: "Botswana Power Corporation",
    role: "Safety Officer",
    rating: 5,
    text: "Their occupational hygiene monitoring team was thorough, professional, and delivered detailed reports that helped us pass our regulatory inspection with zero findings.",
    service: "Occupational Hygiene Monitoring",
    initials: "TS",
  },
  {
    name: "Refilwe Nkwe",
    company: "BCL Construction",
    role: "Project Director",
    rating: 5,
    text: "We've used DOHSH for safety audits across three major projects. Their audit reports are comprehensive and their recommendations are always practical and implementable.",
    service: "OHSE Consultancy",
    initials: "RN",
  },
];

// ─── Impact stats ─────────────────────────────────────────────────────────────
const stats = [
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: Shield, value: "98%", label: "Compliance Rate" },
  { icon: TrendingUp, value: "40%", label: "Avg. Incident Reduction" },
  { icon: Award, value: "5★", label: "Average Rating" },
];

export default function FeedbackPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#001E3C] overflow-hidden">

        {/* Top accent bar */}
        <div
          className="relative z-10 h-[3px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #01B9EB 20%, #0092CE 50%, #01B9EB 80%, transparent 100%)",
          }}
        />

        {/* Diagonal grid texture */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(1,185,235,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(1,185,235,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large decorative quote mark */}
        <div
          className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[#01B9EB]/5 pointer-events-none z-0 select-none"
          style={{ fontSize: "clamp(200px, 30vw, 420px)", fontFamily: "Georgia, serif", lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </div>

        {/* Radial glow */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse at 0% 50%, rgba(0,146,206,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-24">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2.5 mb-8">
            <Link
              href="/"
              className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30 hover:text-[#01B9EB] transition-colors"
            >
              Home
            </Link>
            <span className="w-4 h-px bg-white/15" />
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#01B9EB]">
              Client Feedback
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <p
                className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#01B9EB] mb-5"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
                Your Voice Matters · DOHSH
              </p>

              <h1
                className="text-[36px] sm:text-[46px] lg:text-[58px] font-extrabold leading-[0.92] tracking-[-0.01em] text-white uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Help Us Build<br />
                A Safer<br />
                <span className="text-[#01B9EB]">Future.</span>
              </h1>

              <div className="w-9 h-[3px] bg-[#0092CE] mb-6" />

              <p className="text-[14px] font-light leading-[1.8] text-white/55 max-w-[420px] mb-8">
                As an existing DOHSH client, your experience directly shapes how we improve. Share your thoughts — every rating, every comment makes our services stronger for{" "}
                <strong className="text-white/80 font-medium">every workplace we protect.</strong>
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Confidential",
                  "Takes 2 Minutes",
                  "100% Voluntary",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
                  >
                    <CheckCircle className="h-3 w-3 text-[#01B9EB]" />
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/60">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Impact stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-6 flex flex-col gap-3 hover:bg-white/[0.07] transition-colors"
                >
                  <Icon className="h-5 w-5 text-[#01B9EB]" />
                  <p
                    className="text-[36px] font-extrabold text-white leading-none"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {value}
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F4FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p
              className="flex items-center justify-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              What Clients Say
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
            </p>
            <h2
              className="text-[28px] sm:text-[34px] font-extrabold text-[#001E3C] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Voices from the Field
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
              Real experiences from organizations that trust DOHSH to protect their people and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-[#0092CE]/10 p-7 flex flex-col gap-5 shadow-sm hover:shadow-md hover:border-[#0092CE]/25 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? "text-[#0092CE] fill-[#0092CE]" : "text-gray-200 fill-gray-200"}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[13.5px] text-gray-600 leading-[1.75] flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Service tag */}
                <div className="inline-flex self-start">
                  <span className="px-2.5 py-1 bg-[#EBF6FC] text-[#0092CE] text-[9px] font-bold tracking-[0.12em] uppercase rounded-sm">
                    {t.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#0092CE] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#001E3C]">{t.name}</p>
                    <p className="text-[10.5px] text-gray-400">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEEDBACK FORM SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="feedback-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p
              className="flex items-center justify-center gap-2.5 text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#0092CE] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
              Existing Clients Only
              <span className="w-5 h-px bg-[#01B9EB] flex-shrink-0" />
            </p>
            <h2
              className="text-[28px] sm:text-[34px] font-extrabold text-[#001E3C] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Share Your Experience
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
              Have you worked with DOHSH? Your feedback helps us grow and serve you and future clients even better.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,146,206,0.10)] border border-[#0092CE]/12 p-8 md:p-10">

            {/* Card header bar */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-1.5 h-10 bg-gradient-to-b from-[#01B9EB] to-[#0092CE] rounded-full" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0092CE]">Client Feedback Form</p>
                <p className="text-xs text-gray-400 mt-0.5">All responses are treated confidentially</p>
              </div>
            </div>

            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM CTA — link back to Contact
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#001E3C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#01B9EB] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}>
            Not yet a client?
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}>
            Ready to Work with DOHSH?
          </h2>
          <p className="text-sm text-white/45 leading-relaxed mb-8 max-w-xl mx-auto">
            Reach out to our team and let's discuss how we can make your workplace safer, more compliant, and more efficient.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors"
          >
            Contact Us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 6h9M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

// ─── Feedback Form Component ──────────────────────────────────────────────────
function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#EBF6FC] flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-[#0092CE]" />
        </div>
        <h3 className="text-xl font-bold text-[#001E3C]" style={{ fontFamily: "var(--font-barlow)" }}>
          Thank You for Your Feedback!
        </h3>
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          Your response has been recorded. We genuinely appreciate you taking the time to help us improve our services.
        </p>
        <button
          onClick={() => { setSubmitted(false); setRating(0); }}
          className="mt-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[#0092CE] hover:text-[#01B9EB] transition-colors underline underline-offset-4"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Organization *</label>
          <input
            required
            type="text"
            placeholder="e.g. Debswana"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Role / Position</label>
          <input
            type="text"
            placeholder="e.g. HSE Manager"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm"
          />
        </div>
      </div>

      {/* Service Used */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Service You Used *</label>
        <select
          required
          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-gray-600 text-sm"
        >
          <option value="">Select a service...</option>
          <option>Compliance Support</option>
          <option>Onboarding Certification</option>
          <option>OHSE File Management</option>
          <option>Trainings</option>
          <option>Audits</option>
        </select>
      </div>

      {/* How did you engage */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">How did you engage with DOHSH?</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["On-site", "Remote / Virtual", "Both", "One-off project"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded cursor-pointer text-xs font-medium text-gray-600 hover:border-[#0092CE] hover:bg-[#EBF6FC] transition-all has-[:checked]:border-[#0092CE] has-[:checked]:bg-[#EBF6FC] has-[:checked]:text-[#0092CE]"
            >
              <input type="radio" name="engagement" value={opt} className="accent-[#0092CE]" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Overall Rating *</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              className="transition-transform hover:scale-110 focus:outline-none"
              aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  (hovered || rating) >= star
                    ? "text-[#0092CE] fill-[#0092CE]"
                    : "text-gray-200 fill-gray-200"
                }`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="text-xs text-gray-400 ml-2 font-medium">
              {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
            </span>
          )}
        </div>
      </div>

      {/* Would recommend */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Would you recommend DOHSH to others?
        </label>
        <div className="flex gap-3">
          {["Yes, definitely", "Probably yes", "Not sure", "Probably not"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded cursor-pointer text-xs font-medium text-gray-600 hover:border-[#0092CE] hover:bg-[#EBF6FC] transition-all has-[:checked]:border-[#0092CE] has-[:checked]:bg-[#EBF6FC] has-[:checked]:text-[#0092CE]"
            >
              <input type="radio" name="recommend" value={opt} className="accent-[#0092CE]" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Feedback Textarea */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Feedback *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your experience with DOHSH — what worked well, what we can improve, and how our services impacted your organization..."
          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0092CE] focus:ring-2 focus:ring-[#0092CE]/20 outline-none transition-all bg-white text-sm leading-relaxed"
        ></textarea>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 p-4 bg-[#F8FBFE] rounded border border-[#0092CE]/10">
        <input
          type="checkbox"
          id="consent"
          className="mt-0.5 accent-[#0092CE] h-4 w-4 flex-shrink-0"
        />
        <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
          I consent to DOHSH using my feedback for service improvement and potentially displaying it as a testimonial on their website. Only my name, company, and role will be shown — no contact details will be shared publicly.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0092CE] text-white text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#01B9EB] transition-colors w-full justify-center"
      >
        Submit Feedback <Send className="h-4 w-4" />
      </button>

    </form>
  );
}