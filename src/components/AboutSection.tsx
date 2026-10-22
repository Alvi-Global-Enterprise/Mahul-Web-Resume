"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Product Leadership",
      desc: "Strategy, Roadmap & Launch.",
      icon: "/images/Mask%20group%20(1).png",
    },
    {
      title: "Technical Depth",
      desc: "APIs, Cloud & Blockchain.",
      icon: "/images/Mask%20group%20(2).png",
    },
    {
      title: "Quality Engineering",
      desc: "Testing, Automation & Delivery.",
      icon: "/images/Mask%20group%20(3).png",
    },
    {
      title: "AI & Emerging Tech",
      desc: "LLMs, Digital Assets & Web3.",
      icon: "/images/Mask%20group%20(4).png",
    },
  ];

  return (
    <section id="about" className="relative w-full py-14 sm:py-16 lg:py-[72px] bg-black overflow-hidden isolate">
      {/* Emerald Neon Aura Backdrop */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-[#36B878]/15 blur-[160px] pointer-events-none -z-10" />

      {/* Main Container - aligned with Impact & Core Skills sections */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Card: 8 Columns on desktop (approx 68%-70% width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/15 bg-[#050806] flex flex-col justify-between p-8 sm:p-12 lg:p-14 h-[650px] isolate shadow-[0_0_50px_rgba(54,184,120,0.12)]"
          >
            {/* Background Graphic: strategy.png containing the standing tablet & green glowing concentric rings on right */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-cover bg-right bg-no-repeat">
              <img
                src="/images/strategy.png"
                alt="Strategy Technology Quality"
                className="w-full h-full object-cover object-right pointer-events-none select-none block"
                loading="eager"
              />
              {/* Subtle gradient overlay on left for optimal contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent lg:from-black/40 lg:via-transparent" />
            </div>

            {/* Left Card Top Content */}
            <div className="relative z-10 max-w-[520px]">
              {/* Section Header: // ABOUT */}
              <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
                <div className="flex space-x-1">
                  <span className="w-[5.97px] h-[12.68px] bg-[#36B878] inline-block" />
                  <span className="w-[5.97px] h-[12.68px] bg-[#36B878] inline-block" />
                </div>
                <span className="font-questrial text-[17px] sm:text-[19px] tracking-[0.23em] uppercase text-white/50">
                  About
                </span>
              </div>

              {/* Heading: Strategy. Technology. Quality. */}
              <h2 className="font-prosto text-[46px] sm:text-[56px] lg:text-[67px] leading-[1.04] text-white mb-6 sm:mb-8">
                Strategy. <br />
                Technology. <br />
                <span className="text-[#36B878]">Quality.</span>
              </h2>

              {/* Subheading / Description */}
              <p className="font-questrial text-[18px] sm:text-[21px] lg:text-[24px] leading-[1.536] text-white/60 max-w-[500px] tracking-[0.07em]">
                15+ years leading products across Payments, FinTech, Web3 and Capital Markets.
                <br className="hidden sm:inline" />
                {" "}I turn complex challenges into scalable products.
              </p>
            </div>

            {/* Left Card Bottom Action Button */}
            <div className="relative z-10 pt-8 sm:pt-10">
              <a
                href="#experience"
                className="h-[48px] px-0 pl-6 pr-[2px] rounded-full border border-white hover:border-[#36B878] bg-transparent inline-flex items-center justify-between gap-4 group transition-all duration-300 select-none shadow-[0_0_20px_rgba(54,184,120,0.15)]"
              >
                <span className="font-questrial text-[19px] sm:text-[21px] text-white font-normal tracking-[0.05em]">
                  More About Me
                </span>
                <div className="w-[44px] h-[44px] rounded-full bg-[#36B878] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Card: 4 Columns on desktop (approx 30%-32% width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 rounded-[28px] sm:rounded-[32px] border border-white/15 bg-[#070b08]/85 backdrop-blur-md p-2 sm:p-9 lg:p-10 flex flex-col  space-y-18  h-[650px] shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          >
            {pillars.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-5  group cursor-default">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] lg:w-[68px] lg:h-[68px] object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <h3 className="font-space-mono text-[17px] sm:text-[19px] xl:text-[20px] font-normal tracking-[0.07em] uppercase text-white group-hover:text-[#36B878] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-questrial text-[15px] sm:text-[17px] xl:text-[18px] text-white/50 tracking-[0.07em] capitalize mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
