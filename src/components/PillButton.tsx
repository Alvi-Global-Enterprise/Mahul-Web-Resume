"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "translucent" | "solid";
  circleColor?: string; // hex or tailwind class
  circleTextColor?: string;
  pillBgColor?: string;
  pillBorderColor?: string;
  pillTextColor?: string;
  className?: string;
  target?: string;
  rel?: string;
  size?: "sm" | "md" | "lg";
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  href,
  onClick,
  variant = "outline",
  circleColor = "#EC0116",
  circleTextColor = "#000000",
  pillBgColor,
  pillBorderColor,
  pillTextColor,
  className = "",
  target,
  rel,
  size = "md",
}) => {
  // Styles based on variant
  const basePillClass = "relative inline-flex items-center justify-between rounded-full transition-all duration-300 group cursor-pointer select-none";
  const contentClass = "font-questrial font-normal tracking-[0.05em] whitespace-nowrap pl-5 pr-2 flex items-center";

  let defaultPillBg = "transparent";
  let defaultBorder = "border border-white/90 hover:border-white";
  let defaultText = "text-white";

  if (variant === "primary") {
    defaultPillBg = "bg-[#EC0116] hover:bg-[#d60114]";
    defaultBorder = "border border-transparent";
    defaultText = "text-black font-bold";
  } else if (variant === "translucent") {
    defaultPillBg = "bg-[rgba(255,138,148,0.22)] hover:bg-[rgba(255,138,148,0.32)]";
    defaultBorder = "border border-white/20";
    defaultText = "text-white";
  } else if (variant === "outline") {
    defaultPillBg = "bg-black/30 backdrop-blur-sm hover:bg-white/10";
    defaultBorder = "border border-white/70 hover:border-white";
    defaultText = "text-white";
  }

  const heightClass = size === "sm" ? "h-[40px]" : "h-[48px]";
  const circleSizeClass = size === "sm" ? "w-[36px] h-[36px] mr-[2px]" : "w-[44px] h-[44px] mr-[2px]";
  const textSizeClass = size === "sm" ? "text-[17px]" : "text-[19px] lg:text-[21px]";

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${basePillClass} ${heightClass} ${defaultPillBg} ${defaultBorder} ${className}`}
      style={{
        backgroundColor: pillBgColor || undefined,
        borderColor: pillBorderColor || undefined,
      }}
      onClick={onClick}
    >
      <span
        className={`${contentClass} ${textSizeClass} ${defaultText}`}
        style={{ color: pillTextColor || undefined }}
      >
        {children}
      </span>
      <div
        className={`rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${circleSizeClass}`}
        style={{
          backgroundColor: circleColor,
          color: circleTextColor,
        }}
      >
        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
