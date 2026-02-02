import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll - image shrinks, moves left and down
  // Reduced values for better mobile experience
  const imageScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.4]);
  const imageX = useTransform(scrollYProgress, [0, 0.6, 1], [0, -100, -150]);
  const imageY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 100, 200]);
  const imageOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <section 
        ref={sectionRef} 
        id="home" 
        className="relative w-full min-h-screen flex items-center justify-center overflow-visible" 
        style={{ backgroundColor: 'var(--bg-main)' }}
      >
        <div className="max-w-full mx-auto w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          {/* Main container */}
          <div className="w-full flex items-center justify-center relative">

            {/* Left text - "I AM RUSHELA" - Hidden on mobile, visible on tablet+ */}
            <motion.div 
              className="hidden sm:block absolute left-0 sm:left-4 md:left-8 lg:left-16 bottom-4 sm:bottom-8 md:bottom-12 z-20"
              style={{ opacity: textOpacity }}
            >
              <h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl italic leading-tight" 
                style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 'normal' }}
              >
                I AM<br />RUSHELA
              </h2>
            </motion.div>

            {/* Center - Image with "Hey, there" overlay split text */}
            <div className="relative flex items-center justify-center">
              <motion.div 
                className="relative w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[500px] md:h-[650px] lg:w-[650px] lg:h-[850px] xl:w-[770px] xl:h-[1000px]"
                style={{ 
                  scale: imageScale,
                  x: imageX,
                  y: imageY,
                  opacity: imageOpacity,
                }}
              >
                {/* Profile Image */}
                <img
                  src="/assets/gv.png"
                  alt="Gavindu Rushela Ekanayaka - Software Engineer"
                  className="w-full h-full object-cover object-top will-change-transform"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* "Hey," text - left side */}
                <motion.div 
                  className="absolute top-[35%] sm:top-[40%] left-0 transform -translate-y-1/2 -translate-x-1/4 sm:-translate-x-1/9 z-10"
                  style={{ opacity: textOpacity }}
                >
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif italic" 
                    style={{ fontFamily: 'Georgia, serif', color: 'var(--text-subheading)', fontWeight: 'normal' }}
                  >
                    Hey,
                  </h1>
                </motion.div>
                {/* "there" text - right side */}
                <motion.div 
                  className="absolute top-[35%] sm:top-[40%] right-0 transform -translate-y-1/2 translate-x-1/4 sm:translate-x-1/9 z-10"
                  style={{ opacity: textOpacity }}
                >
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif italic" 
                    style={{ fontFamily: 'Georgia, serif', color: 'var(--text-subheading)', fontWeight: 'normal' }}
                  >
                    there
                  </h1>
                </motion.div>
              </motion.div>
            </div>

            {/* Right text - "SOFTWARE ENGINEER" - Hidden on mobile, visible on tablet+ */}
            <motion.div 
              className="hidden sm:block absolute right-0 sm:right-4 md:right-8 lg:right-16 bottom-4 sm:bottom-8 md:bottom-12 z-20"
              style={{ opacity: textOpacity }}
            >
              <h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl italic leading-tight text-right" 
                style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 'normal' }}
              >
                SOFTWARE<br />ENGINEER
              </h2>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile text - Only visible on mobile */}
        <motion.div 
          className="sm:hidden absolute bottom-8 left-0 right-0 text-center z-20 px-4"
          style={{ opacity: textOpacity }}
        >
          <h2 
            className="text-xl italic" 
            style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)', fontWeight: 'normal' }}
          >
            I AM RUSHELA · SOFTWARE ENGINEER
          </h2>
        </motion.div>
      </section>
    </>
  );
};
