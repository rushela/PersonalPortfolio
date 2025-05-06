import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            GRE
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 hover:text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}; 