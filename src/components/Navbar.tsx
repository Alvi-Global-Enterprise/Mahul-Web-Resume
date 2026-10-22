"use client";

import React, { useState, useEffect } from "react";
import { PillButton } from "./PillButton";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Approach", href: "#approach", id: "approach" },
    { name: "Credentials", href: "#credentials", id: "credentials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between">
        {/* Brand / Logo from public/images/logo.png */}
        <a
          href="#home"
          className="flex items-center group cursor-pointer select-none"
        >
          <img
            src="/images/logo.png"
            alt="DeMAR7 - Blockchain Advisory Firm"
            className="h-[36px] sm:h-[42px] w-auto object-contain select-none transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links matching Figma (LINE Seed JP / 18px / Home in #EC0116, others white/30) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 text-[18px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`transition-colors duration-200 tracking-wide ${
                  isActive
                    ? "text-[#EC0116] font-bold"
                    : "text-white/35 hover:text-white font-normal"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Let's Talk Pill Button (#EC0116 pill + #B00010 circle + black arrow) */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="h-[48px] px-0 pl-6 pr-[2px] rounded-full bg-[#EC0116] hover:bg-[#d60114] inline-flex items-center justify-between gap-4 group transition-all duration-300 shadow-[0_0_25px_rgba(236,1,22,0.35)] select-none"
          >
            <span className="font-bold text-[18px] text-black tracking-normal">
              Let’s Talk
            </span>
            <div className="w-[44px] h-[44px] rounded-full bg-[#B00010] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-lg py-1 ${
                    activeSection === link.id
                      ? "text-[#EC0116] font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <PillButton
                  href="#contact"
                  variant="primary"
                  pillBgColor="#EC0116"
                  circleColor="#B00010"
                  circleTextColor="#000000"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let’s Talk
                </PillButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
