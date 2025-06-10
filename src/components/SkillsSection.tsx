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
  Terminal,
  Zap,
  Cpu as Hardware,
  Globe,
  Shield,
  Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const languages = [
    { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <FileJs className="w-5 h-5" /> },
    { name: 'Java', icon: <Coffee className="w-5 h-5" /> },
    { name: 'C++', icon: <FileCode2 className="w-5 h-5" /> },
    { name: 'PHP', icon: <FileCode className="w-5 h-5" /> },
    { name: 'SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'HTML', icon: <FileHtml className="w-5 h-5" /> },
    { name: 'CSS', icon: <FileCss className="w-5 h-5" /> },
    { name: 'C', icon: <FileCode className="w-5 h-5" /> },
    { name: 'Arduino', icon: <Cpu className="w-5 h-5" /> }
  ];

  const frameworks = [
    { name: 'React.js', icon: <ReactIcon className="w-5 h-5" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'MongoDB', icon: <MongoIcon className="w-5 h-5" />, category: 'Database' },
    { name: 'Git', icon: <GitBranch className="w-5 h-5" />, category: 'Tools' },
    { name: 'Figma', icon: <Palette className="w-5 h-5" />, category: 'Design' },
    { name: 'Android Studio', icon: <Smartphone className="w-5 h-5" />, category: 'Mobile' },
    { name: 'MERN Stack', icon: <Layers className="w-5 h-5" />, category: 'Full Stack' },
    { name: 'Eclipse', icon: <Code className="w-5 h-5" />, category: 'IDE' },
    { name: 'Arduino IDE', icon: <Terminal className="w-5 h-5" />, category: 'Hardware' },
    { name: 'OOP', icon: <Boxes className="w-5 h-5" />, category: 'Paradigms' }
  ];

  const expertise = [
    { name: 'Full Stack Development', icon: <Layers className="w-5 h-5" /> },
    { name: 'Web Development', icon: <Globe className="w-5 h-5" /> },
    { name: 'Mobile Development', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'IoT Development', icon: <Hardware className="w-5 h-5" /> },
    { name: 'Database Design', icon: <Database className="w-5 h-5" /> },
    { name: 'API Development', icon: <Workflow className="w-5 h-5" /> },
    { name: 'UI/UX Design', icon: <Palette className="w-5 h-5" /> },
    { name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { name: 'Performance Optimization', icon: <Zap className="w-5 h-5" /> }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="w-full py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical skills and expertise
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Expertise Areas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      {lang.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {lang.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Frameworks & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {frameworks.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      {tool.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};