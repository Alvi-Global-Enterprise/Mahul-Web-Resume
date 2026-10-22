"use client";

import React, { useState } from "react";

interface Milestone {
  id: string;
  company: string;
  role: string;
  yearDisplay: string;
  yearAbove?: string;
  yearBelow?: string;
  position: "above" | "below";
  nodeX: number;
  nodeY: number;
}

const milestones: Milestone[] = [
  {
    id: "babylon",
    company: "Babylon Health",
    role: "QA LEAD",
    yearDisplay: "2018 — 2020",
    position: "below",
    nodeX: 115,
    nodeY: 235,
  },
  {
    id: "drmartens",
    company: "Dr. Martens",
    role: "QA AUTOMATION LEAD",
    yearDisplay: "2020",
    yearBelow: "2020",
    position: "above",
    nodeX: 260,
    nodeY: 198,
  },
  {
    id: "oxford",
    company: "Oxford Nanopore",
    role: "SDET",
    yearDisplay: "2022",
    yearAbove: "2022",
    position: "below",
    nodeX: 500,
    nodeY: 200,
  },
  {
    id: "inchcape",
    company: "Inchcape",
    role: "QUALITY LEAD",
    yearDisplay: "2022 — 2023",
    yearAbove: "2022",
    yearBelow: "2023",
    position: "below",
    nodeX: 775,
    nodeY: 255,
  },
  {
    id: "archax",
    company: "Archax",
    role: "HEAD OF QA",
    yearDisplay: "2023 — 2024",
    yearAbove: "2023",
    yearBelow: "2024",
    position: "below",
    nodeX: 935,
    nodeY: 215,
  },
  {
    id: "plutus",
    company: "Plutus",
    role: "TECHNICAL PM",
    yearDisplay: "2025",
    yearAbove: "2025",
    position: "below",
    nodeX: 1195,
    nodeY: 250,
  },
  {
    id: "confidential",
    company: "Confidential Startup",
    role: "HEAD OF PRODUCT & QA",
    yearDisplay: "2026 — PRESENT",
    yearAbove: "2026",
    position: "below",
    nodeX: 1470,
    nodeY: 245,
  },
];

export const CareerTimelineCustom: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Cubic Bezier paths calculated from node control points
  const primaryWavePath =
    "M 0 260 C 19.2 255.8, 71.7 245.3, 115 235 C 158.3 224.7, 195.8 203.8, 260 198 C 324.2 192.2, 414.2 190.5, 500 200 C 585.8 209.5, 702.5 252.5, 775 255 C 847.5 257.5, 865.0 215.8, 935 215 C 1005.0 214.2, 1105.8 245.0, 1195 250 C 1284.2 255.0, 1402.5 247.5, 1470 245 C 1537.5 242.5, 1578.3 236.7, 1600 235";

  const upperStrandPath =
    "M 0 310 C 21.7 304.2, 85.0 299.2, 130 275 C 175.0 250.8, 210.0 170.0, 270 165 C 330.0 160.0, 408.3 240.8, 490 245 C 571.7 249.2, 685.0 185.8, 760 190 C 835.0 194.2, 870.0 269.2, 940 270 C 1010.0 270.8, 1093.3 195.0, 1180 195 C 1266.7 195.0, 1390.0 267.5, 1460 270 C 1530.0 272.5, 1576.7 220.0, 1600 210";

  const lowerStrandPath =
    "M 0 210 C 20.0 208.3, 73.3 195.0, 120 200 C 166.7 205.0, 215.0 245.0, 280 240 C 345.0 235.0, 426.7 163.3, 510 170 C 593.3 176.7, 711.7 278.3, 780 280 C 848.3 281.7, 848.3 180.8, 920 180 C 991.7 179.2, 1116.7 269.2, 1210 275 C 1303.3 280.8, 1415.0 218.3, 1480 215 C 1545.0 211.7, 1580.0 248.3, 1600 255";

  const accentFilamentPath =
    "M 0 280 C 25.0 275.0, 100.0 260.0, 150 250 C 200.0 240.0, 245.0 225.8, 300 220 C 355.0 214.2, 405.0 211.7, 480 215 C 555.0 218.3, 671.7 237.5, 750 240 C 828.3 242.5, 880.0 230.8, 950 230 C 1020.0 229.2, 1086.7 230.8, 1170 235 C 1253.3 239.2, 1378.3 254.2, 1450 255 C 1521.7 255.8, 1575.0 242.5, 1600 240";

  return (
    <div className="w-full">
      {/* 1. MOBILE & TABLET VERTICAL TIMELINE (< lg) */}
      <div className="block lg:hidden w-full max-w-[620px] mx-auto py-6 sm:py-8 px-2 sm:px-4">
        <div className="relative pl-7 sm:pl-9">
          {/* Glowing Vertical Cyan Spine Track */}
          <div
            className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#25C6C8]/30 via-[#25C6C8] to-[#25C6C8]/20"
            style={{
              boxShadow: "0 0 12px rgba(37, 198, 200, 0.5), 0 0 4px #25C6C8",
            }}
          />

          <div className="space-y-6 sm:space-y-7">
            {milestones.map((m) => {
              const isHovered = hoveredId === m.id;
              return (
                <div
                  key={`vertical-${m.id}`}
                  className="relative flex items-start group"
                  onMouseEnter={() => setHoveredId(m.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Glowing Node on Spine */}
                  <div className="absolute -left-[28px] sm:-left-[36px] top-3.5 flex items-center justify-center">
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black border transition-all duration-300 flex items-center justify-center ${
                        isHovered
                          ? "border-[#25C6C8] scale-110 shadow-[0_0_18px_rgba(37,198,200,0.8)]"
                          : "border-[#25C6C8]/60 shadow-[0_0_10px_rgba(37,198,200,0.4)]"
                      }`}
                    >
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-[0_0_8px_#25C6C8]" />
                    </div>
                  </div>

                  {/* Glassmorphic Card */}
                  <div
                    className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-5 backdrop-blur-md ${
                      isHovered
                        ? "bg-white/[0.06] border-[#25C6C8]/60 shadow-[0_8px_30px_rgba(37,198,200,0.15)] -translate-y-0.5"
                        : "bg-white/[0.025] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    }`}
                  >
                    {/* Header Row: Role & Year */}
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                      <span className="font-questrial text-[11px] sm:text-[12px] tracking-[0.18em] text-[#25C6C8] uppercase font-semibold">
                        {m.role}
                      </span>
                      <span className="font-space-mono text-[11px] sm:text-[12px] px-2.5 py-0.5 rounded-full bg-[#25C6C8]/10 text-[#25C6C8] border border-[#25C6C8]/30">
                        {m.yearDisplay}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="font-prosto text-[19px] sm:text-[23px] text-white tracking-wide transition-colors duration-200">
                      {m.company}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. DESKTOP HORIZONTAL SINE WAVE SVG TIMELINE (>= lg) */}
      <div className="hidden lg:flex relative w-full overflow-x-auto pt-0 pb-2 select-none justify-center">
        {/* Scrollable / fluid container with responsive aspect ratio */}
        <div className="relative min-w-[1050px] xl:min-w-0 w-full max-w-[1720px] aspect-[1600/460]">
          <svg
          viewBox="0 0 1600 460"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Cyan Neon Glow Filters */}
            <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="9" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="nodeFlareGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Cyan Radial Gradient for Nodes Flare */}
            <radialGradient id="nodeFlare" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#25C6C8" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#25C6C8" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#25C6C8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#25C6C8" stopOpacity="0" />
            </radialGradient>

            {/* Subtle Gradient for Main Wave */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#25C6C8" stopOpacity="0.4" />
              <stop offset="15%" stopColor="#25C6C8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
              <stop offset="85%" stopColor="#25C6C8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#25C6C8" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Tertiary Delicate Strand */}
          <path
            d={accentFilamentPath}
            fill="none"
            stroke="rgba(37, 198, 200, 0.22)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />

          {/* Secondary Intertwined Lower Strand */}
          <path
            d={lowerStrandPath}
            fill="none"
            stroke="rgba(37, 198, 200, 0.42)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Secondary Intertwined Upper Strand */}
          <path
            d={upperStrandPath}
            fill="none"
            stroke="rgba(37, 198, 200, 0.55)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Primary High-Intensity Cyan Sine Wave */}
          <path
            d={primaryWavePath}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
            filter="url(#neonGlow)"
          />

          {/* Secondary subtle wave highlight strand */}
          <path
            d={primaryWavePath}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.75"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />

          {/* Milestone Items: Nodes & Labels */}
          {milestones.map((m) => {
            const isHovered = hoveredId === m.id;
            const isAbove = m.position === "above";

            return (
              <g
                key={m.id}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 1. Year Label Above (if present) */}
                {m.yearAbove && (
                  <text
                    x={m.nodeX}
                    y={m.nodeY - 24}
                    textAnchor="middle"
                    className="font-space-mono text-[16px] tracking-wider fill-white/45 select-none transition-colors duration-200"
                    style={{ fill: isHovered ? "#25C6C8" : "rgba(255, 255, 255, 0.5)" }}
                  >
                    {m.yearAbove}
                  </text>
                )}

                {/* 2. Above Positioned Company & Role (Dr. Martens) */}
                {isAbove && (
                  <>
                    <text
                      x={m.nodeX}
                      y={m.nodeY - 58}
                      textAnchor="middle"
                      className="font-space-mono text-[19px] font-normal tracking-wide select-none transition-colors duration-200"
                      style={{ fill: isHovered ? "#25C6C8" : "#FFFFFF" }}
                    >
                      {m.company}
                    </text>
                    <text
                      x={m.nodeX}
                      y={m.nodeY - 34}
                      textAnchor="middle"
                      className="font-questrial text-[13px] tracking-[0.14em] uppercase select-none transition-colors duration-200"
                      style={{ fill: isHovered ? "rgba(255,255,255,0.85)" : "rgba(255, 255, 255, 0.55)" }}
                    >
                      {m.role}
                    </text>
                  </>
                )}

                {/* 3. Glowing Node Flare & Circles */}
                {/* Outermost Pulsing Flare Halo */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r={isHovered ? 26 : 20}
                  fill="url(#nodeFlare)"
                  className="transition-all duration-300 pointer-events-none"
                  opacity={isHovered ? 1 : 0.85}
                />

                {/* Cross Flare Sparkle Rays on hover */}
                {isHovered && (
                  <g className="pointer-events-none" opacity="0.75">
                    <line
                      x1={m.nodeX - 22}
                      y1={m.nodeY}
                      x2={m.nodeX + 22}
                      y2={m.nodeY}
                      stroke="#25C6C8"
                      strokeWidth="1"
                    />
                    <line
                      x1={m.nodeX}
                      y1={m.nodeY - 22}
                      x2={m.nodeX}
                      y2={m.nodeY + 22}
                      stroke="#25C6C8"
                      strokeWidth="1"
                    />
                  </g>
                )}

                {/* Outer Cyan Ring */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r={isHovered ? 8.5 : 7}
                  fill="#021C1E"
                  stroke="#25C6C8"
                  strokeWidth="2.2"
                  filter="url(#nodeFlareGlow)"
                  className="transition-all duration-300"
                />

                {/* Center Solid White Bead */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r={isHovered ? 4.5 : 3.5}
                  fill="#FFFFFF"
                  className="transition-all duration-300"
                />

                {/* 4. Year Label Below (if present) */}
                {m.yearBelow && (
                  <text
                    x={m.nodeX}
                    y={m.nodeY + 36}
                    textAnchor="middle"
                    className="font-space-mono text-[16px] tracking-wider select-none transition-colors duration-200"
                    style={{ fill: isHovered ? "#25C6C8" : "rgba(255, 255, 255, 0.45)" }}
                  >
                    {m.yearBelow}
                  </text>
                )}

                {/* 5. Below Positioned Company & Role */}
                {!isAbove && (
                  <>
                    <text
                      x={m.nodeX}
                      y={m.yearBelow ? m.nodeY + 70 : m.nodeY + 45}
                      textAnchor="middle"
                      className="font-space-mono text-[19px] font-normal tracking-wide select-none transition-colors duration-200"
                      style={{ fill: isHovered ? "#25C6C8" : "#FFFFFF" }}
                    >
                      {m.company}
                    </text>
                    <text
                      x={m.nodeX}
                      y={m.yearBelow ? m.nodeY + 95 : m.nodeY + 70}
                      textAnchor="middle"
                      className="font-questrial text-[13px] tracking-[0.14em] uppercase select-none transition-colors duration-200"
                      style={{ fill: isHovered ? "rgba(255,255,255,0.85)" : "rgba(255, 255, 255, 0.55)" }}
                    >
                      {m.role}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  </div>
  );
};
