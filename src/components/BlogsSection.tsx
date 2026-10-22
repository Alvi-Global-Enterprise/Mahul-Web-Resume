"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";

export const BlogsSection: React.FC = () => {
  return (
    <section id="blogs" className="relative w-full py-14 sm:py-16 lg:py-[72px] bg-black overflow-hidden border-t border-white/10">
      {/* Red Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-[#EC0116]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionHeader label="Blogs" color="#EC0116" />
            <h2 className="font-prosto text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-white">
              Thinking Beyond <br />
              <span className="text-[#EC0116]">The Product.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-4">
            <PillButton
              href="#contact"
              variant="outline"
              circleColor="#EC0116"
              circleTextColor="#000000"
            >
              View All Articles
            </PillButton>
            <p className="font-questrial text-[17px] sm:text-[20px] lg:text-[22px] text-white/50 lg:text-right tracking-[0.05em] max-w-[560px]">
              Ideas, lessons and perspectives on product leadership, quality engineering, FinTech,
              Web3 and emerging technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
