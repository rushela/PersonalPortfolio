import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  variant?: 'header' | 'floating';
}

export function DarkModeToggle({ variant = 'floating' }: DarkModeToggleProps) {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, sync state with localStorage and set class
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    if (saved) {
      document.documentElement.classList.add('dark');
      console.log('[DarkModeToggle] Initial: dark mode ON');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('[DarkModeToggle] Initial: dark mode OFF');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      console.log('[DarkModeToggle] Toggled: dark mode ON');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      console.log('[DarkModeToggle] Toggled: dark mode OFF');
    }
  }, [darkMode]);

  const buttonClass =
    variant === 'header'
      ? 'ml-2 flex items-center justify-center w-10 h-10 p-0 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200'
      : 'fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 z-50';

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className={buttonClass}
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-400 dark:text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700 dark:text-white" />
      )}
    </button>
  );
} 