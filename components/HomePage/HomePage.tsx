"use client";

import { About } from "./About";
import { CountMeIn } from "./CountMeIn";
import { CTASection } from "./CtaSection";
import { EmotionSection } from "./EmotionSection";
import { HeroSection } from "./HeroSection";
import { KnowledgeBase } from "./KnowledgeBase";
import { MissionSection } from "./Mission/MissionSection";
import { TeamSection } from "./TeamSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <CTASection />
      <CountMeIn />
      <EmotionSection />
      <About />
      <TeamSection />
      <KnowledgeBase />
    </>
  );
};

export { HomePage };
