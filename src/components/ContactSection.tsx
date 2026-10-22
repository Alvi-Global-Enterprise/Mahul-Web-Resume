"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { PillButton } from "./PillButton";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const contactDetails = [
    {
      icon: "/images/phone.png",
      label: "+44 07440 856404",
      href: "tel:+4407440856404",
    },
    {
      icon: "/images/email.png",
      label: "mahul@proton.me",
      href: "mailto:mahul@proton.me",
    },
    {
      icon: "/images/location.png",
      label: "London, United Kingdom",
      href: null,
    },
    {
      icon: "/images/github.png",
      label: "github.com/mahul-qe/hero-e2e",
      href: "https://github.com/mahul-qe/hero-e2e",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden isolate border-t border-white/10">
      {/* Modern Skyscraper & Red Sun Skyline Background from Figma */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/Mask%20group(1).png"
          alt="Skyscrapers Skyline"
          className="w-full h-full object-cover object-bottom select-none block"
          loading="eager"
        />
      </div>

      {/* Subtle Red Ambient Skyline Glow */}
      <div className="absolute bottom-0 right-1/4 w-[750px] h-[450px] bg-[#EC0116]/10 blur-[170px] pointer-events-none z-0" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <SectionHeader label="Contact" color="#EC0116" />

            <h2 className="font-prosto text-[46px] sm:text-[56px] lg:text-[62px] leading-[1.05] text-white mb-6">
              Building something <br />
              <span className="text-[#EC0116]">complex?</span>
            </h2>

            <p className="font-questrial text-[18px] sm:text-[22px] lg:text-[24px] text-white/80 max-w-[540px] mb-8 tracking-[0.05em]">
              Let’s turn the problem into a product worth shipping.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <PillButton
                href="mailto:mahul@proton.me"
                variant="outline"
                circleColor="#EC0116"
                circleTextColor="#000000"
              >
                Start a Conversation
              </PillButton>

              <PillButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="translucent"
                circleColor="#FFFFFF"
                circleTextColor="#000000"
                pillBgColor="rgba(70, 38, 41, 0.85)"
                pillBorderColor="rgba(255, 255, 255, 0.2)"
              >
                LinkedIn
              </PillButton>
            </div>
          </motion.div>

          {/* Right Column: Contact Details with Red Icons from images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-10"
          >
            {contactDetails.map((item, idx) => {
              const content = (
                <div className="flex items-center space-x-5 group cursor-pointer">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 group-hover:scale-110 transition-transform select-none"
                  />
                  <span className="font-questrial text-[18px] sm:text-[21px] lg:text-[24px] text-white tracking-[0.04em] group-hover:text-red-400 transition-colors">
                    {item.label}
                  </span>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={idx}>{content}</div>;
            })}
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        
      </div>
    </section>
  );
};
