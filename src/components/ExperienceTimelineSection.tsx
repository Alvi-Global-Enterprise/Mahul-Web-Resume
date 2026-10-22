"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { CareerTimelineCustom } from "./CareerTimelineCustom";
import { motion } from "framer-motion";

export const ExperienceTimelineSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-14 sm:py-16 lg:py-[72px] bg-black overflow-hidden isolate">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Header row with tight, elegant spacing matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-6 sm:mb-8 lg:mb-10">
          <div className="lg:col-span-7">
            <SectionHeader label="Experience" color="#25C6C8" />
            <h2 className="font-prosto text-[42px] sm:text-[52px] lg:text-[61px] leading-[1.05] text-white">
              Career <span className="text-[#25C6C8]">Journey</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-4">
            <PillButton
              href="#contact"
              variant="outline"
              circleColor="#25C6C8"
              circleTextColor="#000000"
            >
              View Full Experience
            </PillButton>
            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] text-white/50 lg:text-right tracking-[0.05em] max-w-[620px]">
              A track record of leading high-impact products and quality organisations across global companies and innovative startups.
            </p>
          </div>
        </div>

        {/* Custom Interactive Career Timeline Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          {/* Top-Center Cyan Atmospheric Nebula Aurora (completely organic falloff, zero cut, true silk diffusion) */}
          <div
            className="absolute left-[54%] top-[24%] -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] lg:w-[880px] h-[260px] sm:h-[340px] lg:h-[400px] rounded-full pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 48% at 50% 50%, rgba(37, 198, 200, 0.32) 0%, rgba(37, 198, 200, 0.15) 30%, rgba(0, 229, 255, 0.04) 55%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />

          {/* Wide Soft Ambient Cyan Aura for cinematic depth across sine waves */}
          <div
            className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1050px] lg:w-[1350px] h-[340px] sm:h-[440px] lg:h-[520px] rounded-full pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(37, 198, 200, 0.14) 0%, rgba(37, 198, 200, 0.04) 45%, transparent 70%)",
              filter: "blur(130px)",
            }}
          />

          <CareerTimelineCustom />
        </motion.div>
      </div>
    </section>
  );
};
