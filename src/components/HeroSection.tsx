"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px] xl:min-h-[780px] 2xl:h-[832px] overflow-hidden bg-black flex items-center isolate"
    >
      {/* 
        Full-bleed Hero Background Image from Figma (w=1648, h=832)
        Scales down responsively with viewport width and stays contained without cutting off the laptop/terminal
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 flex items-center justify-end">
        <div className="relative w-full max-w-[1648px] h-full flex items-center justify-end">
          <img
            src="/images/hero-banner.png"
            alt="Mahul Ruparelia - Technical Architecture & Quality Engineering"
            className="w-full h-full object-contain object-right pointer-events-none select-none block"
            loading="eager"
          />
        </div>

        {/* Gradient overlay to ensure text contrast on compact laptops and tablets */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/70 lg:via-black/45 xl:via-black/20 to-transparent pointer-events-none" />

        {/* Bottom seamless fade to black transition into Impact section */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1648px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 w-full pt-20 sm:pt-24 lg:pt-28 xl:pt-36 pb-12 sm:pb-14 lg:pb-16 xl:pb-20 relative z-10">
        <div className="max-w-[440px] md:max-w-[480px] lg:max-w-[480px] xl:max-w-[560px] 2xl:max-w-[620px]">
          {/* Section Indicator: // SENIOR PRODUCT MANAGER */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 mb-3.5 sm:mb-4 lg:mb-5"
          >
            <div className="flex space-x-1">
              <span className="w-[5px] h-[11px] sm:w-[5.97px] sm:h-[12.68px] bg-[#EC0116] inline-block" />
              <span className="w-[5px] h-[11px] sm:w-[5.97px] sm:h-[12.68px] bg-[#EC0116] inline-block" />
            </div>
            <span className="font-questrial text-[13px] sm:text-[15px] lg:text-[17px] xl:text-[19px] tracking-[0.23em] uppercase text-white/50">
              Senior Product Manager
            </span>
          </motion.div>

          {/* Headline Name: Mahul (white) Ruparelia (red #EC0116) */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-prosto text-[46px] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[86px] 2xl:text-[105px] leading-[0.9] tracking-normal capitalize mb-4 sm:mb-5 lg:mb-6 xl:mb-8 select-none"
          >
            <span className="text-white block">Mahul</span>
            <span className="text-[#EC0116] block">Ruparelia</span>
          </motion.h1>

          {/* Subheading / Specialization Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space-mono text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] leading-[1.3] text-white/50 max-w-[420px] sm:max-w-[460px] lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[522px] mb-6 sm:mb-7 lg:mb-8 xl:mb-11 space-y-1.5 sm:space-y-2 lg:space-y-3"
          >
            <p>Payments · FinTech · Web3 · AI Capital Markets · Quality Engineering</p>
            <p>Delivering product visions through a quality engineering lens.</p>
          </motion.div>

          {/* Dual Action Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 xl:gap-5"
          >
            {/* View My Work */}
            <a
              href="#work"
              className="h-[40px] sm:h-[44px] xl:h-[48px] px-0 pl-4 sm:pl-5 xl:pl-6 pr-[2px] rounded-full border border-white inline-flex items-center justify-between gap-2.5 sm:gap-3 xl:gap-4 group transition-all duration-300 hover:bg-white/10 select-none shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="font-questrial text-[15px] sm:text-[18px] xl:text-[21px] text-white font-normal tracking-[0.04em]">
                View My Work
              </span>
              <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] xl:w-[44px] xl:h-[44px] rounded-full bg-[#EC0116] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 xl:w-5 xl:h-5 stroke-[2.5]" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] sm:h-[44px] xl:h-[48px] px-0 pl-4 sm:pl-5 xl:pl-6 pr-[2px] rounded-full bg-[rgba(255,138,148,0.24)] hover:bg-[rgba(255,138,148,0.36)] border border-transparent inline-flex items-center justify-between gap-2.5 sm:gap-3 xl:gap-4 group transition-all duration-300 select-none"
            >
              <span className="font-questrial text-[15px] sm:text-[18px] xl:text-[21px] text-white font-normal tracking-[0.04em]">
                LinkedIn
              </span>
              <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] xl:w-[44px] xl:h-[44px] rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 xl:w-5 xl:h-5 stroke-[2.5]" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
