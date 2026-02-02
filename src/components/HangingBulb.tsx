import { useState, useEffect, useRef, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

export const HangingBulb = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const hasSwitched = useRef(false);

  // Sync with localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(saved);
    if (saved) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
      return newMode;
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    hasSwitched.current = false;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const delta = Math.max(0, Math.min(60, clientY - startY.current));
      setPullDistance(delta);

      // Toggle when pulled past threshold
      if (delta > 40 && !hasSwitched.current) {
        hasSwitched.current = true;
        toggleDarkMode();
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setPullDistance(0);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, toggleDarkMode]);

  return (
    <div className="fixed top-0 right-12 md:right-20 z-[90] pointer-events-none">
      <div className="relative">
        {/* Simple cord line */}
        <div 
          className="w-px mx-auto"
          style={{ 
            height: `${70 + pullDistance}px`,
            backgroundColor: 'var(--text-muted)',
            transition: isDragging ? 'none' : 'height 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
        />
        
        {/* Toggle switch */}
        <div 
          className="pointer-events-auto cursor-grab active:cursor-grabbing select-none group"
          style={{ 
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Minimal circle toggle */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: isDarkMode 
                ? 'none' 
                : '0 0 20px rgba(253, 224, 71, 0.3)',
            }}
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
            ) : (
              <Sun className="w-4 h-4" style={{ color: '#F59E0B' }} />
            )}
          </div>
          
          {/* Tooltip */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: 'var(--text-muted)' }}
          >
            Pull to switch
          </div>
        </div>
      </div>
    </div>
  );
};
