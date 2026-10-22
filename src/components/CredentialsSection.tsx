"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export const CredentialsSection: React.FC = () => {
  const certifications = [
    {
      title: "AI Product Manager",
      issuer: "UDACITY",
    },
    {
      title: "Product Management Nanodegree",
      issuer: "UDACITY",
    },
    {
      title: "ISTQB Foundation",
      issuer: "BCS",
    },
    {
      title: "iSQI Certified Agile Tester",
      issuer: "ISQI",
    },
    {
      title: "SAFe",
      issuer: "SCALED AGILE",
    },
    {
      title: "Certified ScrumMaster",
      issuer: "CSM",
    },
  ];

  return (
    <section id="credentials" className="relative w-full py-14 sm:py-16 lg:py-[72px] bg-black overflow-hidden isolate border-t border-b border-white/10">
      {/* Sunset Mountain Landscape Background from Figma */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/Mask%20group-1.png"
          alt="Mountain Sunset Landscape"
          className="w-full h-full object-cover object-center select-none block"
          loading="eager"
        />
      </div>

      {/* Amber Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[350px] bg-[#EC8A01]/10 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <SectionHeader label="Credentials" color="#EC8A01" />

              <h2 className="font-prosto text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.08] text-white mb-10">
                Certifications <br />
                <span className="text-[#EC8A01]">& Education</span>
              </h2>
            </div>

            {/* Education Degree Item */}
            <div className="flex items-center space-x-5 pt-2">
              <img
                src="/images/Group%20(6).png"
                alt="University Degree"
                className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] object-contain shrink-0 select-none"
              />
              <div>
                <h3 className="font-space-mono text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-white leading-snug">
                  BSc (Hons) Business Information Systems
                </h3>
                <p className="font-questrial text-[13px] sm:text-[15px] text-white/50 uppercase tracking-[0.18em] mt-1">
                  UNIVERSITY OF WESTMINSTER
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Vertical Divider (Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-[1px] h-[220px] bg-white/20" />
          </div>

          {/* Right Column: 6 Certifications (3x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4"
          >
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-[18px] bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-[#EC8A01]/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-center items-center text-center h-[120px] sm:h-[130px] group hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(236,138,1,0.2)]"
              >
                <h4 className="font-space-mono text-[13px] sm:text-[14px] xl:text-[15px] font-bold text-white leading-tight mb-2 select-none">
                  {cert.title}
                </h4>
                <span className="font-space-mono text-[11px] sm:text-[12px] text-white/50 tracking-wider uppercase select-none">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
