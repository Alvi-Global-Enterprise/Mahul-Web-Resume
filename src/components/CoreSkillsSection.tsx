"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export const CoreSkillsSection: React.FC = () => {
  const skills = [
    {
      title: "Product Strategy",
      desc: "Strategy, roadmap & launch.",
      iconPath: "/images/Group.png",
    },
    {
      title: "Payments & FinTech",
      desc: "Acquiring, Fraud, PCI DSS, Wallets",
      iconPath: "/images/Group (1).png",
    },
    {
      title: "Blockchain & Web3",
      desc: "Ethereum, Solana, Smart Contracts",
      iconPath: "/images/Group (2).png",
    },
    {
      title: "Capital Markets",
      desc: "Trading, FIX Protocol, Regulation",
      iconPath: "/images/Group (3).png",
    },
    {
      title: "AI & Data",
      desc: "LLMs, Analytics, Automation",
      iconPath: "/images/Group (4).png",
    },
    {
      title: "Quality & Delivery",
      desc: "Strategy, roadmap & launch.",
      iconPath: "/images/Group (5).png",
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-black py-16 lg:py-[72px] overflow-hidden isolate"
    >
      {/* Background Mountain Panorama Asset from Figma (image 43 / Group 360.png) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/Group 360.png"
          alt="Core Skills Mountain Horizon"
          className="w-full h-full object-cover object-bottom pointer-events-none select-none block"
        />

        {/* Top Fade Gradient (Figma Rectangle 183) */}
        <div className="absolute top-0 inset-x-0 h-[160px] lg:h-[200px] bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

        {/* Bottom Fade Gradient (Figma Rectangle 184) */}
        <div className="absolute bottom-0 inset-x-0 h-[160px] lg:h-[200px] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Atmospheric Blue Horizon Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#398BFF]/20 via-[#184480]/5 to-transparent blur-[80px] pointer-events-none" />
      </div>

      <div className="max-w-[1780px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Tag: // CORE PRODUCT SKILLS */}
        <div className="mb-10 lg:mb-14">
          <SectionHeader label="Core Product Skills" color="#398BFF" />
        </div>

        {/* 6 Columns Skills Container */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-12 xl:gap-y-0">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative flex flex-col items-center text-center px-3 lg:px-4 py-2 group"
              >
                {/* 5 Vertical Divider lines between the 6 columns (Figma Vectors 24 to 28) */}
                {idx !== skills.length - 1 && (
                  <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[198px] bg-white/[0.28] pointer-events-none" />
                )}

                {/* Floating Glowing Icon */}
                <div className="h-9 flex items-center justify-center mb-6">
                  {skill.iconPath ? (
                    <img
                      src={skill.iconPath}
                      alt={skill.title}
                      className="w-8 h-8 object-contain filter drop-shadow-[0_0_14px_rgba(57,139,255,0.45)] group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-8 h-8" />
                  )}
                </div>

                {/* Skill Title in Space Mono */}
                <h3 className="font-space-mono text-[18px] xl:text-[20px] font-normal leading-[1.18] tracking-[0.07em] uppercase text-white mb-2.5 max-w-[260px] mx-auto">
                  {skill.title}
                </h3>

                {/* Skill Description in Questrial */}
                <p className="font-questrial text-[17px] xl:text-[20px] font-normal leading-[1.39] tracking-[0.11em] text-white/[0.51] capitalize max-w-[230px] mx-auto">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
