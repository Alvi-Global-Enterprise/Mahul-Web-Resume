"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";

export const TechStackSection: React.FC = () => {
  const technologies = [
    {
      name: "JAVA",
      icon: "/images/Group 324.png",
    },
    {
      name: "TYPESCRIPT",
      icon: "/images/Group 320.png",
    },
    {
      name: "PYTHON",
      icon: "/images/Group 319.png",
    },
    {
      name: "SOLIDITY",
      icon: "/images/Group 321.png",
    },
    {
      name: "RUST",
      icon: "/images/Group 322.png",
    },
    {
      name: "PLAYWRIGHT",
      icon: "/images/Group 323.png",
    },
    {
      name: "AWS",
      icon: "/images/Group 330.png",
    },
    {
      name: "GCP",
      icon: "/images/Group 328.png",
    },
    {
      name: "DOCKER",
      icon: "/images/Group 327.png",
    },
    {
      name: "KUBERNETES",
      icon: "/images/Group 326.png",
    },
  ];

  return (
    <section id="tech-stack" className="relative w-full py-14 sm:py-16 lg:py-[72px] bg-black overflow-hidden isolate">
      {/* Background Cosmic Horizon Image from Figma */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/Mask%20group-2.png"
          alt="Cosmic Horizon"
          className="w-full h-full object-cover object-[62%_center] select-none block"
          loading="eager"
        />
      </div>

      {/* Subtle Pink Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#FF6B8B]/10 blur-[160px] pointer-events-none z-0" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full relative z-10">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14 lg:mb-16">
          <div className="lg:col-span-8">
            <SectionHeader label="Technical Stack" color="#FF6B8B" />
            <h2 className="font-prosto text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-white">
              Tool & <br />
              <span className="text-[#FF6B8B]">Technologies</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
            <PillButton
              href="#contact"
              variant="outline"
              circleColor="#FF6B8B"
              circleTextColor="#000000"
            >
              View Full Stack
            </PillButton>
            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] text-white/50 lg:text-right tracking-[0.05em]">
              A selection of tools and technologies I use across product, engineering, quality and
              data.
            </p>
          </div>
        </div>

        {/* 10 Technology Icons Row / Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4 pt-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                className="group flex flex-col items-center justify-between p-3.5 rounded-[16px] bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-[#FF6B8B]/60 transition-all duration-300 h-[115px] xl:h-[125px] backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,107,139,0.25)]"
              >
                <div className="flex-1 flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain select-none"
                  />
                </div>
                <span className="font-space-mono text-[11px] sm:text-[12px] xl:text-[13px] tracking-wider text-white/90 uppercase text-center mt-2 select-none">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
