import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('academic');

  const academicProjects = [{
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS',
    technologies: 'React, Tailwind CSS, TypeScript, Framer Motion',
    demoUrl: 'https://personal-portfolio-six-topaz-28.vercel.app/',
    image: '/assets/projects/this.png',
    githubUrl: 'https://github.com/rushela/PersonalPortfolio'
  },{
    title: 'TeamSync – Collaboration & Evaluation System',
    description: 'A comprehensive team collaboration platform with AI-driven insights',
    technologies: 'MERN Stack, AI-driven insights, Role-based access',
    demoUrl: 'https://team-sync-self.vercel.app/',
    image: '/assets/projects/project1.png',
    githubUrl: 'https://github.com/rushela/team-collaboration-project'
  },{
    title: 'Eco-Track: Smart bin System',
    description: 'IoT-based smart waste management system with real-time monitoring',
    technologies: 'MERN Stack, Arduino NodeMCU (ESP8266), HC-SR04 Ultrasonic Sensor, Socket.io, Multer, jsPDF',
    demoUrl: 'https://echo-tracking.vercel.app/',
    image: '/assets/projects/project3.png',
    githubUrl: 'https://github.com/rushela/EchoTracking-with-SmartBin'
  }, {
    title: 'PETdot: Pet Care System',
    description: 'A comprehensive pet care management platform',
    technologies: 'HTML, CSS, JavaScript, PHP, SQL, Bootstrap, jQuery',
    image: '/assets/projects/project2.png',
    githubUrl: 'https://github.com/rushela/PET-Care-System'
  }, {
    title: 'Rental System',
    description: 'A Java-based rental management system',
    technologies: 'Java, JDBC, Servlet, JSP, HTML, CSS, JavaScript',
    image: '/assets/projects/rent.png',
    githubUrl: 'https://github.com/rushela/Rental-System'
  },{
    title: 'Financial Tracker',
    description: 'Android app for personal finance management',
    technologies: "Kotlin, SQLite, Room Database, Android's Notification Manager",
    image: '/assets/projects/fapp.png',
    githubUrl: 'https://github.com/rushela/FinBot'
  }];

  const clientProjects = [{
    title: 'Holiday World Travel',
    description: 'A modern travel booking platform with real-time availability',
    technologies: 'React, Tailwind CSS, TypeScript, Framer Motion',
    demoUrl: 'https://hwtravelsrilanka.com/',
    image: '/assets/projects/hw.png',
    githubUrl: 'https://github.com/rushela/HolidayWorld-Travel'
  },{
    title: 'Eco-Track: Smart bin System',
    description: 'IoT-based smart waste management system with real-time monitoring',
    technologies: 'MERN Stack, Arduino NodeMCU (ESP8266), HC-SR04 Ultrasonic Sensor, Socket.io, Multer, jsPDF',
    demoUrl: 'https://echo-tracking.vercel.app/',
    image: '/assets/projects/project3.png',
    githubUrl: 'https://github.com/rushela/EchoTracking-with-SmartBin'
  },{
    title: 'WeatherReporter - Lanka Software Foundation(assignment)',
    description: 'Frontend app for checking current weather and forecasts using a custom backend API',
    technologies: 'HTML, CSS, JavaScript (Fetch API), OpenWeatherMap API',
    demoUrl: 'https://weather-reporter-two.vercel.app/',
    image: '/assets/projects/project4.png',
    githubUrl: 'https://github.com/rushela/weather-reporter'
  }];

  const projects = activeTab === 'academic' ? academicProjects : clientProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A showcase of my academic and client projects, demonstrating my skills and experience
        </motion.p>
        
        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex rounded-full border-2 border-indigo-100 dark:border-indigo-800 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
            <button
              onClick={() => setActiveTab('client')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out flex items-center gap-2 ${
                activeTab === 'client'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700'
              }`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="w-4 h-4" />
              </motion.div>
              Client Projects
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="ml-1 text-xs bg-white/20 dark:bg-gray-900/20 px-2 py-0.5 rounded-full"
              >
                {clientProjects.length}
              </motion.span>
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out flex items-center gap-2 ${
                activeTab === 'academic'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700'
              }`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <GraduationCap className="w-4 h-4" />
              </motion.div>
              Academic Projects
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="ml-1 text-xs bg-white/20 dark:bg-gray-900/20 px-2 py-0.5 rounded-full"
              >
                {academicProjects.length}
              </motion.span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 will-change-transform-opacity"
          >
            {projects.map((project, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl dark:hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.25)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 will-change-transform-opacity"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute top-3 right-3"
                  >
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activeTab === 'client' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                        : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                    }`}>
                      {activeTab === 'client' ? 'Client' : 'Academic'}
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-semibold text-gray-800 dark:text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-300 ease-in-out"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      View Code
                    </motion.a>
                    {project.demoUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                      >
                        Live Demo
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/rushela?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Github className="mr-3 h-6 w-6" />
            See All Projects on GitHub
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
