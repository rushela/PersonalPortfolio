import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollAnimation } from './components/ScrollAnimation';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HangingBulb } from './components/HangingBulb';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if critical resources are loaded
    const handleLoad = () => {
      // Minimum 800ms for smooth transition, but wait for document ready
      const minLoadTime = 800;
      const startTime = performance.now();
      
      const checkReady = () => {
        const elapsed = performance.now() - startTime;
        if (elapsed >= minLoadTime && document.readyState === 'complete') {
          setIsLoading(false);
        } else if (elapsed < minLoadTime) {
          setTimeout(checkReady, minLoadTime - elapsed);
        } else {
          setIsLoading(false);
        }
      };
      
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), minLoadTime);
      } else {
        window.addEventListener('load', () => setTimeout(checkReady, 100));
      }
    };
    
    handleLoad();
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div 
      className="w-full min-h-screen transition-colors duration-300" 
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* Header and HangingBulb are always visible after loading */}
      {!isLoading && (
        <>
          <Header />
          <HangingBulb />
        </>
      )}
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-[2000px] mx-auto"
            role="main"
          >
            <ScrollAnimation scrollToTop>
              <HeroSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.05} direction="up">
              <AboutSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.05} direction="up">
              <ProjectsSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.05} direction="up">
              <SkillsSection />
            </ScrollAnimation>
            <ScrollAnimation delay={0.05} direction="up">
              <TimelineSection />
            </ScrollAnimation>
            <ContactSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}