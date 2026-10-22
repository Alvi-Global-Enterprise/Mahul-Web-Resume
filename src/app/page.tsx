import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreSkillsSection } from "@/components/CoreSkillsSection";
import { SignatureWinsSection } from "@/components/SignatureWinsSection";
import { ExperienceTimelineSection } from "@/components/ExperienceTimelineSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { TechStackSection } from "@/components/TechStackSection";
import { WhyWorkWithMeSection } from "@/components/WhyWorkWithMeSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col w-full selection:bg-[#EC0116] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1 w-full flex flex-col">
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <CoreSkillsSection />
        <SignatureWinsSection />
        <ExperienceTimelineSection />
        <HowIWorkSection />
        <TechStackSection />
        <WhyWorkWithMeSection />
        <CredentialsSection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div>
  );
}
