import { Linkedin, Github, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Image animation - reduced motion for mobile friendliness
  const imageScale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.6, 0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.6, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 0.8], [-100, -30, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 0.8], [100, 30, 0]);
  
  // Content animation - fades and slides in after image settles
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
  
  // Header animation - fades in sync with hero text fading out
  const headerOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.2, 0.5], [20, 0]);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative" 
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Editorial Style */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <p 
            className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            About
          </p>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic mb-4 sm:mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            A little bit about me
          </h2>
        </motion.div>

        {/* Main Content - Clean Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left - Image */}
          <motion.div 
            ref={imageRef}
            className="relative pt-2 flex justify-center lg:justify-start"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
              x: imageX,
              y: imageY,
            }}
          >
            <img
              src="/assets/gv.png"
              alt="Gavindu Rushela Ekanayaka - Software Engineer"
              className="w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[350px] md:h-[470px] lg:w-[400px] lg:h-[530px] xl:w-[450px] xl:h-[600px] object-cover object-top will-change-transform"
              style={{ filter: 'grayscale(10%)' }}
              loading="lazy"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            {/* Bio */}
            <div>
              <h3 
                className="text-xl sm:text-2xl md:text-3xl italic mb-4 sm:mb-6"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: 'var(--text-heading)',
                  fontWeight: 'normal'
                }}
              >
                Software Engineer
              </h3>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
                style={{ color: 'var(--text-body)' }}
              >
                I am a motivated and detail oriented Software Engineering undergraduate at SLIIT with a strong foundation in full stack development. I have successfully completed my software engineering internship and have hands on experience delivering real world client projects through freelancing.
              </p>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-body)' }}
              >
                I enjoy solving complex problems and building efficient, scalable software solutions that create real impact.
              </p>
            </div>

            {/* Social Links */}
            <div 
              className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6" 
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              <a 
                href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-heading)' }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/rushela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-heading)' }}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="/assets/GRE-CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-heading)' }}
                aria-label="Download Resume"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Skills - Simple text list */}
            <div className="pt-4 sm:pt-6" style={{ borderTop: '1px solid var(--border-light)' }}>
              <h4 
                className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6"
                style={{ color: 'var(--text-muted)' }}
              >
                What I bring
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h5 
                    className="text-base sm:text-lg mb-1 sm:mb-2"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    Problem-Solving
                  </h5>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                    Analytical approach to debugging and solution design
                  </p>
                </div>
                <div>
                  <h5 
                    className="text-base sm:text-lg mb-1 sm:mb-2"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    Collaboration
                  </h5>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                    Team player with agile development experience
                  </p>
                </div>
                <div>
                  <h5 
                    className="text-base sm:text-lg mb-1 sm:mb-2"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    Communication
                  </h5>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                    Strong presentation and technical writing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};