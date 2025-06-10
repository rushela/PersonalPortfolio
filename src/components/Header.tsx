import { useState, useEffect } from 'react';
import { DarkModeToggle } from './DarkModeToggle';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // close menu on navigation
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            GRE
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">Skills</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out">Contact</button>
          </div>
          <DarkModeToggle variant="header" />
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 shadow-md absolute left-0 right-0 top-full z-50 py-4 transition-all duration-300 ease-in-out animate-fadeInDown">
            <button onClick={() => scrollToSection('home')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">Home</button>
            <button onClick={() => scrollToSection('about')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">About</button>
            <button onClick={() => scrollToSection('projects')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">Skills</button>
            <button onClick={() => scrollToSection('education')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">Education</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-center transition-all duration-300 ease-in-out">Contact</button>
            <div className="mt-4"><DarkModeToggle variant="header" /></div>
          </div>
        )}
      </nav>
    </header>
  );
}; 