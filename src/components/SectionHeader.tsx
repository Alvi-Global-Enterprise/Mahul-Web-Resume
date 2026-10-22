import React from "react";

interface SectionHeaderProps {
  label: string;
  color?: string; // hex code
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  color = "#EC0116",
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 mb-3.5 select-none ${className}`}>
      {/* Double bar indicator */}
      <div className="flex items-center gap-[2.5px]">
        <span
          className="w-[3px] h-[13px] rounded-full inline-block"
          style={{ backgroundColor: color }}
        />
        <span
          className="w-[3px] h-[13px] rounded-full inline-block"
          style={{ backgroundColor: color }}
        />
      </div>
      {/* Category Label */}
      <span className="font-questrial text-[16px] sm:text-[18px] lg:text-[19px] tracking-[0.23em] uppercase text-white/50 leading-none">
        {label}
      </span>
    </div>
  );
};
