import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollAnimation } from './components/ScrollAnimation';
import { LoadingScreen } from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-[2000px] mx-auto"
          >
            <ScrollAnimation scrollToTop>
              <HeroSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.1} direction="left">
              <AboutSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.15} direction="right">
              <ProjectsSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <SkillsSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.25} direction="left">
              <TimelineSection />
            </ScrollAnimation>
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}