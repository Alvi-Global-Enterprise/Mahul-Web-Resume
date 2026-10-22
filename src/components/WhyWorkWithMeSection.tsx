"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";

export const WhyWorkWithMeSection: React.FC = () => {
  const cards = [
    {
      title: "Proven ROI",
      desc: "40% faster time-to-market.",
    },
    {
      title: "Leadership",
      desc: "Business strategy to scalable execution.",
    },
    {
      title: "Quality",
      desc: "Ship faster without sacrificing reliability.",
    },
    {
      title: "Transformation",
      desc: "Turn chaotic delivery into predictable execution.",
    },
    {
      title: "Stakeholder",
      desc: "Bridge executives, engineering and vendors.",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-[#020905] border-t border-white/10 overflow-hidden">
      {/* Mint Emerald Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#8DD9A8]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeader label="Why Work With Mahul" color="#8DD9A8" />
            <h2 className="font-prosto text-[38px] sm:text-[46px] lg:text-[49px] leading-[1.12] text-white">
              Proven Results. <br className="hidden sm:inline" />
              Technical Leadership
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
            <PillButton
              href="#contact"
              variant="outline"
              circleColor="#8DD9A8"
              circleTextColor="#000000"
            >
              Work With Me
            </PillButton>
            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] text-white/80 lg:text-right tracking-[0.05em]">
              I combine product leadership, technical depth and quality discipline to deliver
              measurable results in complex, high-growth environments.
            </p>
          </div>
        </div>

        {/* 5 Value Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[rgba(141,217,168,0.18)] hover:bg-[rgba(141,217,168,0.26)] border border-[#8DD9A8]/30 transition-all duration-300 flex flex-col justify-center text-center h-[140px] group hover:scale-[1.02]"
            >
              <h3 className="font-space-mono text-[20px] sm:text-[22px] font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="font-questrial text-[16px] sm:text-[18px] text-white/70 tracking-wide capitalize leading-snug">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
