"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Download,
  Share2,
  Check,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const CONTACT = {
  name: "Doris Kehinana",
  firstName: "Doris",
  lastName: "Kehinana",
  role: "Founder & CEO",
  company: "DOHSH All Safety Consultancy",
  email: "doris@dohsh.co.bw",
  phoneDisplay: "+267 7472 6733",
  phoneRaw: "+26774726733",
  whatsapp: "26774726733",
  websiteDisplay: "dohsh.co.bw",
  websiteUrl: "https://www.dohsh.co.bw",
  portalUrl: "https://dohshesheportal.com/",
  city: "Jwaneng",
  country: "Botswana",
  // Replace with the real profile URLs. Leave a value empty to hide that icon.
  linkedinUrl: "https://www.linkedin.com/company/dohsh-all-safety-consultancy",
  facebookUrl: "https://www.facebook.com/dohsh",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: CONTACT.linkedinUrl,
    Icon: LinkedInIcon,
  },
  {
    name: "WhatsApp",
    href: CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}` : "",
    Icon: WhatsAppIcon,
  },
  {
    name: "Facebook",
    href: CONTACT.facebookUrl,
    Icon: FacebookIcon,
  },
].filter((social) => social.href);

function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${CONTACT.lastName};${CONTACT.firstName};;;`,
    `FN:${CONTACT.name}`,
    `ORG:${CONTACT.company}`,
    `TITLE:${CONTACT.role}`,
    `TEL;TYPE=WORK,VOICE:${CONTACT.phoneRaw}`,
    `EMAIL;TYPE=WORK:${CONTACT.email}`,
    `URL:${CONTACT.websiteUrl}`,
    `ADR;TYPE=WORK:;;;${CONTACT.city};;;${CONTACT.country}`,
    "END:VCARD",
  ].join("\r\n");
}

export default function BusinessCard() {
  const [shared, setShared] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSaveContact = () => {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Doris-Kehinana-DOHSH.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${CONTACT.name} | ${CONTACT.company}`,
      text: `${CONTACT.name}, ${CONTACT.role} at ${CONTACT.company}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    } catch {
      // Share sheet dismissed or clipboard unavailable — nothing to recover from
    }
  };

  return (
    <section className="flex-1 flex items-center justify-center bg-light py-12 px-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header Background */}
        <div className="h-24 bg-gradient-to-r from-secondary to-primary relative">
          <div className="absolute inset-0 opacity-20 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] mix-blend-overlay"></div>

          {/* Share this card */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this card"
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            {shared ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                Share
              </>
            )}
          </button>
        </div>

        <div className="px-6 pb-6 pt-0 relative flex flex-col items-center">
          {/* Avatar Container */}
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
            className="w-28 h-28 -mt-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white relative"
          >
            <Image
              src="/profile.jpg"
              alt="Doris Kehinana"
              fill
              className="object-cover"
              sizes="(max-width: 112px) 100vw, 112px"
              priority
            />
          </motion.div>

          {/* Name, Role & Company */}
          <div className="text-center mt-4 mb-4">
            <h1 className="text-2xl font-bold text-dark font-heading tracking-tight">
              {CONTACT.name}
            </h1>
            <p className="text-primary font-semibold text-xs tracking-widest uppercase mt-1">
              {CONTACT.role}
            </p>
            <p className="text-dark font-semibold font-heading text-sm mt-2">{CONTACT.company}</p>
            <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mt-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {CONTACT.city}, {CONTACT.country}
            </p>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center justify-center gap-3 mb-5">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          )}

          {/* Contact Information */}
          <div className="w-full rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden mb-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
            >
              <span className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              <span className="text-dark font-medium font-sans text-sm break-all">
                {CONTACT.email}
              </span>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
            >
              <span className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </span>
              <span className="text-dark font-medium font-sans text-sm">
                {CONTACT.phoneDisplay}
              </span>
            </a>

            <a
              href={CONTACT.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
            >
              <span className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                <Globe className="w-4 h-4 text-primary" />
              </span>
              <span className="text-dark font-medium font-sans text-sm">
                {CONTACT.websiteDisplay}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto shrink-0" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2.5">
            <motion.button
              type="button"
              onClick={handleSaveContact}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-secondary transition-colors"
            >
              <Download className="w-5 h-5" />
              Save my contact
            </motion.button>

            <div className="grid grid-cols-2 gap-2.5">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={CONTACT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center gap-2 border-2 border-primary text-primary py-3 rounded-2xl font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
              >
                Explore DOHSH
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={CONTACT.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center gap-2 bg-dark text-white py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-dark/20 hover:bg-black transition-colors"
              >
                eSHEQ Portal
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}