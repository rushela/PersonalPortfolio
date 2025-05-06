import React, { useEffect, useState } from 'react';
export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const languages = ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL' , 'HTML', 'CSS', 'Arduino'];
  const frameworks = ['React.js', 'Node.js', 'MongoDB', 'Git', 'Figma', 'Android Studio', 'OOP', 'MERN Stack', 'Eclipse', 'Arduino IDE'];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return <section id="skills" className="w-full py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => <span key={lang} className={`px-4 py-2 bg-white text-indigo-700 font-medium rounded-full shadow-sm border border-indigo-100 hover:shadow-md transition-all ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{
              transitionDelay: `${index * 100}ms`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '600ms'
            }}>
                  {lang}
                </span>)}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((tool, index) => <span key={tool} className={`px-4 py-2 bg-white text-purple-700 font-medium rounded-full shadow-sm border border-purple-100 hover:shadow-md transition-all ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{
              transitionDelay: `${(index + languages.length) * 100}ms`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '600ms'
            }}>
                  {tool}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};