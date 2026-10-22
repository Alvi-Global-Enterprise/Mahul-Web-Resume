"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[950px] lg:min-h-[1035px] overflow-hidden bg-black flex items-center isolate"
    >
      {/* 
        Full-bleed Hero Background Image from Figma (image 41 / hero-banner.png)
        Dual guaranteed: CSS background-image + eager high-res <img> layer at z-0
        Contains:
        - London Big Ben skyline silhouette on the left
        - Open MacBook Pro laptop with VS Code Dashboard.tsx in center
        - Floating terminal window with mahul@london:~ on right
        - Wireframe red glowing globe and orbital arcs in the background
      */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-banner.png')" }}
      >
        <img
          src="/images/hero-banner.png"
          alt="Mahul Ruparelia - Technical Architecture & Quality Engineering"
          className="w-full h-full object-cover object-center pointer-events-none select-none block"
          loading="eager"
        />

        {/* Bottom seamless fade to black transition into Impact section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20 w-full pt-32 pb-20 lg:pt-40 lg:pb-24 relative z-10">
        <div className="max-w-[620px]">
          {/* Section Indicator: // SENIOR PRODUCT MANAGER */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 mb-5"
          >
            <div className="flex space-x-1">
              <span className="w-[5.97px] h-[12.68px] bg-[#EC0116] inline-block" />
              <span className="w-[5.97px] h-[12.68px] bg-[#EC0116] inline-block" />
            </div>
            <span className="font-questrial text-[17px] sm:text-[19px] tracking-[0.23em] uppercase text-white/50">
              Senior Product Manager
            </span>
          </motion.div>

          {/* Headline Name: Mahul (white) Ruparelia (red #EC0116) */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-prosto text-[68px] sm:text-[88px] md:text-[98px] lg:text-[105px] leading-[0.893] tracking-normal capitalize mb-8 select-none"
          >
            <span className="text-white block">Mahul</span>
            <span className="text-[#EC0116] block">Ruparelia</span>
          </motion.h1>

          {/* Subheading / Specialization Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space-mono text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.25] text-white/50 max-w-[522px] mb-11 space-y-3"
          >
            <p>Payments · FinTech · Web3 · AI Capital Markets · Quality Engineering</p>
            <p>Delivering product visions through a quality engineering lens.</p>
          </motion.div>

          {/* Dual Action Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* View My Work */}
            <a
              href="#work"
              className="h-[48px] px-0 pl-6 pr-[2px] rounded-full border border-white inline-flex items-center justify-between gap-4 group transition-all duration-300 hover:bg-white/10 select-none shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="font-questrial text-[20px] lg:text-[21px] text-white font-normal tracking-[0.04em]">
                View My Work
              </span>
              <div className="w-[44px] h-[44px] rounded-full bg-[#EC0116] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-0 pl-6 pr-[2px] rounded-full bg-[rgba(255,138,148,0.24)] hover:bg-[rgba(255,138,148,0.36)] border border-transparent inline-flex items-center justify-between gap-4 group transition-all duration-300 select-none"
            >
              <span className="font-questrial text-[20px] lg:text-[21px] text-white font-normal tracking-[0.04em]">
                LinkedIn
              </span>
              <div className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
