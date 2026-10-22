"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";

export const ExperienceTimelineSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-24 lg:py-28 bg-black overflow-hidden">
      {/* Cyan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[450px] bg-[#25C6C8]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
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

        {/* Timeline Graphic from Figma (Group 372.png) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full overflow-x-auto py-4 select-none flex justify-center"
        >
          <div className="min-w-[1000px] xl:min-w-0 w-full max-w-[1780px]">
            <img
              src="/images/Group 372.png"
              alt="Career Journey Timeline"
              className="w-full h-auto object-contain pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
