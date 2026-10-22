"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";

export const HowIWorkSection: React.FC = () => {
  const steps = [
    {
      icon: "/images/Group 364.png",
      title: "Quality from the Start",
      desc: "Shift-Left Thinking Across The SDLC.",
    },
    {
      icon: "/images/Group 365.png",
      title: "Metrics over Assumptions",
      desc: "Use Measurable Outcomes To Guide Decisions.",
    },
    {
      icon: "/images/Group 367.png",
      title: "Business × Engineering",
      desc: "Translate Complex Problems Into Execution.",
    },
    {
      icon: "/images/Group 368.png",
      title: "Teams over Silos",
      desc: "Product, Engineering, Design, QA & Stakeholders.",
    },
  ];

  return (
    <section id="approach" className="relative w-full py-24 lg:py-28 bg-black overflow-hidden">
      {/* Warm Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8C66A]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <SectionHeader label="How I Work" color="#E8C66A" />

            <h2 className="font-prosto text-[46px] sm:text-[56px] lg:text-[62px] leading-[1.08] text-white mb-8">
              Quality from <br />
              <span className="text-[#E8C66A]">the Start</span>
            </h2>

            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.5] text-white/50 max-w-[480px] mb-10 tracking-[0.05em]">
              I bring a quality-first mindset to product development, combining structured
              processes, measurable outcomes, and strong cross-functional collaboration.
            </p>

            <PillButton
              href="#about"
              variant="outline"
              circleColor="#E8C66A"
              circleTextColor="#000000"
            >
              More About Me
            </PillButton>
          </motion.div>

          {/* Center Column: 4 Numbered Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-7 relative pl-0 lg:pl-8 lg:border-l border-white/10"
          >
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center space-x-5 group">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 select-none"
                />

                <div>
                  <h3 className="font-space-mono text-[18px] sm:text-[21px] lg:text-[22px] text-white tracking-wide mb-1 font-bold">
                    {step.title}
                  </h3>
                  <p className="font-questrial text-[15px] sm:text-[17px] text-white/50 tracking-wide">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Process/Quality Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] rounded-[28px] p-3.5 sm:p-4 bg-[#141208]/80 border border-white/20 shadow-[0_0_40px_rgba(232,198,106,0.15)] backdrop-blur-xl overflow-hidden flex flex-col justify-between">
              {/* Photo Canvas */}
              <div className="rounded-[20px] overflow-hidden border border-white/10 mb-3 bg-black">
                <img
                  src="/images/Rectangle 159@2x.png"
                  alt="Process People Progress"
                  className="w-full h-auto object-cover select-none"
                />
              </div>

              {/* Brushed Silver Quality Pixel Badge */}
              <div className="w-full py-3.5 px-6 rounded-[18px] bg-gradient-to-r from-[#7D7F84] via-[#D3D5D9] to-[#727479] border border-white/40 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]">
                <span className="font-press-start text-[24px] sm:text-[28px] lg:text-[32px] text-black tracking-widest uppercase select-none">
                  QUALITY
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
