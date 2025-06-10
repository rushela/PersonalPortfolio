import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { Header } from './Header';
import { useEffect, useRef, useState } from 'react';

function NetworkMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(canvas);

    return () => {
      observer.unobserve(canvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const numNodes = 70;
    const maxDist = 120; // max distance to draw a line
    const nodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 1,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      tw: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Get the current color mode
      const isDarkMode = document.documentElement.classList.contains('dark');
      const meshColor = isDarkMode ? '#fff' : '#000';

      // Draw lines
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < maxDist) {
            ctx.save();
            ctx.globalAlpha = 0.15 * (1 - dist / maxDist);
            ctx.strokeStyle = meshColor;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (let node of nodes) {
        const twinkle = 0.7 + 0.3 * Math.sin(node.tw + Date.now() * 0.002);
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = meshColor;
        ctx.shadowColor = meshColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        // Move node
        node.x += node.dx;
        node.y += node.dy;
        node.tw += 0.01;
        // Wrap around
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      }

      animationFrameIdRef.current = requestAnimationFrame(draw);
    };

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      // Redraw immediately after resize to prevent visual glitches
      if (isIntersecting) {
        draw();
      }
    };
    window.addEventListener('resize', handleResize);

    if (isIntersecting) {
      draw();
    } else {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    }

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isIntersecting]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
}

export const HeroSection = () => {
  return (
    <>
      <Header />
      <section id="home" className="relative w-full py-20 px-4 md:px-8 pt-32 overflow-hidden">
        <NetworkMesh />
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-12">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight tracking-tight">
              Gavindu Rushela Ekanayaka
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 font-medium">
              Undergraduate Software Engineering Student
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
                <a href="https://github.com/rushela" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </button>
              <a href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  Connect on LinkedIn
                  <Linkedin className="ml-2 h-4 w-4" />
                </span>
              </a>
              <a href="/assets/REkanayakaCV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-2xl opacity-20 blur-xl transform hover:scale-105 transition-transform duration-300"></div>
              <svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 transform hover:scale-105 transition-transform duration-300">
                <defs>
                  <clipPath id="blobClip">
                    <path d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                {/* Blob background */}
                <path
                  d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z"
                  transform="translate(100 100)"
                  fill="#6366F1"
                  opacity="1"
                  className="dark:fill-indigo-500"
                />
                {/* Clipped image */}
                <image
                  href="/assets/profile.png"
                  x="0"
                  y="0"
                  width="200"
                  height="180"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#blobClip)"
                />
                {/* Optional border */}
                <path
                  d="M40.8,-62.6C52.9,-56.3,62.5,-44.7,69.8,-31.1C77,-17.6,81.8,-2.1,79.8,12.4C77.7,26.9,68.8,40.4,56.9,49.9C45,59.5,30,65.1,14.2,70.2C-1.7,75.2,-18.4,79.6,-32.9,75.7C-47.4,71.8,-59.7,59.5,-68.5,45.3C-77.3,31,-82.6,14.8,-81.4,-0.7C-80.2,-16.2,-72.4,-30.7,-62,-43.1C-51.5,-55.6,-38.3,-66,-24.4,-69.6C-10.6,-73.2,3.9,-70,17.7,-65.6C31.5,-61.2,28.8,-68.9,40.8,-62.6Z"
                  transform="translate(100 100)"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1"
                  className="dark:stroke-indigo-500"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
