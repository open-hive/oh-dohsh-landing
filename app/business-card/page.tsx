"use client";

import Image from "next/image";
import { Mail, Phone, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessCard() {
  return (
    <section className="flex-1 flex items-center justify-center bg-light py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-secondary to-primary relative">
          <div className="absolute inset-0 opacity-20 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] mix-blend-overlay"></div>
        </div>

        <div className="px-8 pb-8 pt-0 relative flex flex-col items-center">
          {/* Avatar Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
            className="w-32 h-32 -mt-16 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white relative"
          >
            <Image
              src="/profile.jpg"
              alt="Doris Kehinana"
              fill
              className="object-cover"
              sizes="(max-width: 128px) 100vw, 128px"
              priority
            />
          </motion.div>

          {/* Name & Title */}
          <div className="text-center mt-5 mb-8">
            <h1 className="text-3xl font-bold text-dark font-heading tracking-tight">Doris Kehinana</h1>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mt-1">Founder & CEO</p>
          </div>

          {/* Contact Information */}
          <div className="w-full space-y-3 mb-8">
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:doris@dohsh.co.bw"
              className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group shadow-sm"
            >
              <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-dark font-medium font-sans">doris@dohsh.co.bw</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+26774726733"
              className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group shadow-sm"
            >
              <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-dark font-medium font-sans">+267 747 267 33</span>
            </motion.a>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            {/*
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="http://www.dohsh.co.bw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-white p-4 rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-secondary transition-colors"
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </motion.a>
            */}

            {/* 
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://openhive.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-dark text-white p-4 rounded-2xl font-semibold shadow-lg shadow-dark/20 hover:bg-black transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit DOHSH Portal
            </motion.a>
            */}


          </div>
        </div>
      </motion.div>
    </section>
  );
}
