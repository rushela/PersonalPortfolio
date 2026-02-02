import { useState, useEffect } from 'react';

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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'py-4'
    }`} style={{ backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent' }}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center w-full relative">
          <div className="text-xl font-bold absolute left-0" style={{ color: 'var(--text-heading)' }}>
            GRE
          </div>
          <div className="hidden md:flex space-x-8 justify-center">
            <button onClick={() => scrollToSection('home')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Home</button>
            <button onClick={() => scrollToSection('about')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>About</button>
            <button onClick={() => scrollToSection('projects')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Skills</button>
            <button onClick={() => scrollToSection('education')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Journey</button>
            <button onClick={() => scrollToSection('contact')} className="transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Contact</button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden transition-all duration-300 ease-in-out absolute right-0" onClick={() => setIsMobileMenuOpen((prev) => !prev)} style={{ color: 'var(--text-body)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center shadow-md absolute left-0 right-0 top-full z-50 py-4 transition-all duration-300 ease-in-out animate-fadeInDown" style={{ backgroundColor: 'var(--bg-card)' }}>
            <button onClick={() => scrollToSection('home')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Home</button>
            <button onClick={() => scrollToSection('about')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>About</button>
            <button onClick={() => scrollToSection('projects')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Skills</button>
            <button onClick={() => scrollToSection('education')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Education</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 w-full text-center transition-all duration-300 ease-in-out" style={{ color: 'var(--text-body)' }}>Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}; 