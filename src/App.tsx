import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollAnimation } from './components/ScrollAnimation';

export function App() {
  return <div className="w-full min-h-screen bg-white">
      <ScrollAnimation scrollToTop>
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2} direction="left">
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.3} direction="right">
        <ProjectsSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <SkillsSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.5} direction="left">
        <TimelineSection />
      </ScrollAnimation>
      <ContactSection />
      <Footer />
    </div>;
}