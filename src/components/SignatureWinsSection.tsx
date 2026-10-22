"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const SignatureWinsSection: React.FC = () => {
  const projects = [
    {
      id: "01 — DIFC COURTS",
      title: "Digital Wallet & Legal Notarisation",
      image: "/images/Rectangle 144.png",
      tags: [
        { label: "DIFC Courts", bg: "bg-[#B78AFF] text-white" },
        { label: "Hedera", bg: "border border-white text-white" },
      ],
    },
    {
      id: "02 — DR.MARTENS",
      title: "CyberSource → Adyen Migration",
      image: "/images/Rectangle 153.png",
      tags: [
        { label: "£232m Revenue", bg: "bg-white text-black font-semibold" },
        { label: "Global", bg: "border border-white text-white" },
      ],
    },
    {
      id: "03 — ARCHAX",
      title: "FCA-Regulated Digital Securities Exchange",
      image: "/images/Group 357.png",
      tags: [
        { label: "FIX Protocol", bg: "bg-white text-black font-semibold" },
        { label: "Capital", bg: "border border-white text-white" },
      ],
    },
    {
      id: "04 — SPHERA / ARENA",
      title: "Web3 Sports NFT Marketplace",
      image: "/images/Group 363.png",
      tags: [
        { label: "Strategy", bg: "bg-white text-black font-semibold" },
        { label: "Tokenomics", bg: "border border-white text-white" },
      ],
    },
  ];

  return (
    <section id="work" className="relative w-full py-28 bg-black overflow-hidden">
      {/* Purple Ambient Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#B78AFF]/15 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeader label="Signature Wins" color="#B78AFF" />
            <h2 className="font-prosto text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.05] text-white">
              Selected Work{" "}
              <span className="text-[#B78AFF]">That Delivered Impact.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-5">
            <PillButton
              href="#contact"
              variant="outline"
              circleColor="#B78AFF"
              circleTextColor="#000000"
            >
              View All Work
            </PillButton>
            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] text-white/50 lg:text-right tracking-[0.05em]">
              A few highlights from 0→1 products, platform migrations and regulated environments.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mb-16">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-[26px] bg-[#121316]/70 border border-white/20 hover:border-[#B78AFF]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between p-4 sm:p-5 hover:shadow-[0_0_35px_rgba(183,138,255,0.18)]"
            >
              {/* Preview Image Card from Figma */}
              <div className="h-[210px] sm:h-[240px] w-full rounded-[20px] border border-white/10 overflow-hidden relative mb-5 group-hover:scale-[1.02] transition-transform duration-300 bg-black flex items-center justify-center p-2">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Meta & Header */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-space-mono text-[16px] sm:text-[18px] text-white uppercase tracking-wider">
                      {proj.id}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/60 group-hover:border-[#B78AFF] group-hover:bg-[#B78AFF] group-hover:text-black flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="font-questrial text-[20px] sm:text-[22px] text-white/80 leading-[1.3] mb-6 capitalize">
                    {proj.title}
                  </h3>
                </div>

                {/* Pill Tags */}
                <div className="flex items-center gap-3 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-4 py-2 rounded-full font-questrial text-[17px] tracking-wide whitespace-nowrap ${tag.bg}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Associated With Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-[1728.23px] mx-auto min-h-[69.77px] xl:h-[69.77px] rounded-[34.89px] flex flex-col xl:flex-row items-center justify-between overflow-hidden"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
        >
          {/* Associated With Pill */}
          <div
            className="w-full xl:w-[592.39px] xl:min-w-[592.39px] h-[60px] xl:h-[69.77px] rounded-[34.89px] flex items-center justify-center text-center text-black font-prosto text-[26px] sm:text-[34px] xl:text-[42px] leading-[56px] shrink-0 select-none"
            style={{ backgroundColor: "rgba(183, 138, 255, 0.61)" }}
          >
            Associated With
          </div>

          {/* Links & Divider */}
          <div className="flex-1 w-full flex items-center justify-between py-4 xl:py-0 h-full">
            <a
              href="https://www.windeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center text-center font-space-mono text-[14px] sm:text-[18px] xl:text-[24px] text-white tracking-[0.07em] uppercase hover:text-[#B78AFF] transition-colors px-4"
            >
              WWW.WINDEVELOPER.COM
            </a>

            {/* Vertical Divider */}
            <div className="w-[1px] h-[32px] xl:h-[47.27px] bg-[#D9D9D9] shrink-0" />

            <a
              href="https://www.hashlock.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center text-center font-space-mono text-[14px] sm:text-[18px] xl:text-[24px] text-white tracking-[0.07em] uppercase hover:text-[#B78AFF] transition-colors px-4"
            >
              WWW.HASHLOCK.COM
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
