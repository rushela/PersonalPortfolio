import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  FileCode, 
  Coffee, 
  FileText, 
  FileCode2, 
  FileText as FileJs, 
  FileText as FileHtml, 
  FileText as FileCss, 
  Cpu,
  FileText as ReactIcon,
  Server,
  Database as MongoIcon,
  GitBranch,
  Palette,
  Smartphone,
  Boxes,
  Layers,
  Code,
  Terminal
} from 'lucide-react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const languages = [
    { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
    { name: 'C', icon: <FileCode className="w-5 h-5" /> },
    { name: 'C++', icon: <FileCode2 className="w-5 h-5" /> },
    { name: 'Java', icon: <Coffee className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <FileJs className="w-5 h-5" /> },
    { name: 'PHP', icon: <FileCode className="w-5 h-5" /> },
    { name: 'SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'HTML', icon: <FileHtml className="w-5 h-5" /> },
    { name: 'CSS', icon: <FileCss className="w-5 h-5" /> },
    { name: 'Arduino', icon: <Cpu className="w-5 h-5" /> }
  ];

  const frameworks = [
    { name: 'React.js', icon: <ReactIcon className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
    { name: 'MongoDB', icon: <MongoIcon className="w-5 h-5" /> },
    { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
    { name: 'Figma', icon: <Palette className="w-5 h-5" /> },
    { name: 'Android Studio', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'OOP', icon: <Boxes className="w-5 h-5" /> },
    { name: 'MERN Stack', icon: <Layers className="w-5 h-5" /> },
    { name: 'Eclipse', icon: <Code className="w-5 h-5" /> },
    { name: 'Arduino IDE', icon: <Terminal className="w-5 h-5" /> }
  ];

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
              {languages.map((lang, index) => (
                <span 
                  key={lang.name} 
                  className={`px-4 py-2 bg-white text-indigo-700 font-medium rounded-full shadow-sm border border-indigo-100 hover:shadow-md transition-all flex items-center gap-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '600ms'
                  }}
                >
                  {lang.icon}
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((tool, index) => (
                <span 
                  key={tool.name} 
                  className={`px-4 py-2 bg-white text-purple-700 font-medium rounded-full shadow-sm border border-purple-100 hover:shadow-md transition-all flex items-center gap-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                  style={{
                    transitionDelay: `${(index + languages.length) * 100}ms`,
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '600ms'
                  }}
                >
                  {tool.icon}
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};