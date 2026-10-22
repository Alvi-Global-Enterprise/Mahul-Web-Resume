"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export const ImpactSection: React.FC = () => {
  const stats = [
    {
      value: "15+",
      highlight: true,
      label: "Years in product and quality leadership",
    },
    {
      value: "28",
      highlight: false,
      label: "Engineers led at peak",
    },
    {
      value: "15+",
      highlight: false,
      label: "Products shipped to production",
    },
    {
      value: "40%",
      highlight: false,
      label: "Faster time-to-market",
    },
    {
      value: ">95%",
      highlight: false,
      label: "Sprint goal completion",
    },
  ];

  return (
    <section className="relative w-full py-24 border-t border-white/10 overflow-hidden bg-black">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-600/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <SectionHeader label="Impact" color="#FF8A24" />
            <h2 className="font-prosto text-[38px] sm:text-[48px] lg:text-[59px] leading-[1.1] text-white">
              Turning strategy <br />
              <span className="text-[#FF8A24]">into real-world results</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.5] text-white/50 lg:text-right max-w-[620px] tracking-[0.05em]">
              From 0→1 products to global platform migrations, I combine product leadership with
              technical depth and a quality-first mindset to deliver measurable business impact.
            </p>
          </div>
        </div>

        {/* Stats 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 border-t border-b border-white/15 py-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center text-center px-4 sm:px-6 ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/15" : ""
              }`}
            >
              <div
                className={`font-press-start text-[32px] sm:text-[38px] lg:text-[44px] leading-tight mb-4 tracking-tight ${
                  stat.highlight ? "text-[#FF8A24]" : "text-white"
                }`}
              >
                {stat.value}
              </div>
              <p className="font-questrial text-[16px] sm:text-[19px] lg:text-[22px] leading-[1.35] text-white/50 tracking-[0.06em] max-w-[260px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
