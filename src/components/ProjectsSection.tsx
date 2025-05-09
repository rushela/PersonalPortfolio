import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('academic');

  const academicProjects = [{
    title: 'Personal Portfolio(This Page)',
    technologies: 'React, Tailwind CSS, TypeScript, Framer Motion',
    demoUrl: 'https://personal-portfolio-six-topaz-28.vercel.app/'
  },{
    title: 'TeamSync – Collaboration & Evaluation System',
    technologies: 'MERN Stack, AI-driven insights, Role-based access',
    demoUrl: 'https://team-sync-self.vercel.app/'
  },{
    title: 'Eco-Track: Smart bin System',
    technologies: 'MERN Stack, Arduino NodeMCU (ESP8266), HC-SR04 Ultrasonic Sensor, Socket.io, Multer , jsPDF , Vercel / Heroku / DigitalOcean',
    demoUrl: 'https://echo-tracking.vercel.app/'
  }, {
    title: 'PETdot : Pet care system',
    technologies: 'Html, Css, JavaScript,PHP, SQL, Bootstrap & jQuery'
  }, {
    title: 'TeamSync – Collaboration & Evaluation System (User Management Part)',
    technologies: 'MERN Stack, AI-driven insights, Role-based access'
  },{
    title: 'Rental-System',
    technologies: 'Java, JDBC, Servlet, JSP, HTML, CSS, JavaScript'
  },{
    title: 'Financial Tracker',
    technologies: 'Kotlin, SQLite, ORM (Room Database), Android’s Notification Manager'
  }];

  const clientProjects = [{
    title: 'Holiday World Travel',
    technologies: 'React, Tailwind CSS, TypeScript, Framer Motion',
    demoUrl: 'https://holiday-world-travel.vercel.app/'
  }, {
    title: 'Eco-Track: Smart bin System',
    technologies: 'MERN Stack, Arduino NodeMCU (ESP8266), HC-SR04 Ultrasonic Sensor, Socket.io, Multer , jsPDF , Vercel / Heroku / DigitalOcean',
    demoUrl: 'https://echo-tracking.vercel.app/'
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return <section id="projects" className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Projects
        </motion.h2>
        
        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex rounded-full border-2 border-indigo-100 p-1 bg-white shadow-sm">
            <button
              onClick={() => setActiveTab('client')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out flex items-center gap-2 ${
                activeTab === 'client'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
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
                className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full"
              >
                {clientProjects.length}
              </motion.span>
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out flex items-center gap-2 ${
                activeTab === 'academic'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
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
                className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-500 ease-in-out group hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                  {activeTab === 'client' && index === 0 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/hw.png" 
                      alt="Holiday World Travel Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : activeTab === 'client' && index === 1 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/project3.png" 
                      alt="Smart Bin System Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : activeTab === 'academic' && index === 0 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/this.png" 
                      alt="Personal Portfolio" 
                      className="w-full h-full object-cover"
                    />
                  ) : activeTab === 'academic' && index === 1 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/project1.png" 
                      alt="TeamSync Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : activeTab === 'academic' && index === 2 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/project3.png" 
                      alt="Smart Bin System Project" 
                      className="w-full h-full object-cover"
                    />
                  ) : activeTab === 'academic' && index === 3 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/project2.png" 
                      alt="PETdot Project" 
                      className="w-full h-full object-cover"
                    />
                  ): activeTab === 'academic' && index === 4 ? (
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/project1.png" 
                      alt="TeamSync Project" 
                      className="w-full h-full object-cover"
                    />
                  ): activeTab === 'academic' && index === 5 ?(
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src="/assets/projects/rent.png" 
                      alt="Smart Bin System Project" 
                      className="w-full h-full object-cover"
                    />
                  ):<motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/assets/projects/fapp.png" 
                  alt="Smart Bin System Project" 
                  className="w-full h-full object-cover"
                />}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute top-3 right-3"
                  >
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activeTab === 'client' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
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
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    {project.title}
                  </motion.h3>
                  <ul className="mb-4">
                    {project.technologies.split(', ').map((tech, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        key={i} 
                        className="text-gray-600 text-sm flex items-center mb-1"
                      >
                        <span className="mr-2 w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block"></span>
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={
                            activeTab === 'client' && index === 0 ? "https://github.com/rushela/HolidayWorld-Travel" :
                            activeTab === 'client' && index === 1 ? "https://github.com/rushela/EchoTracking-with-SmartBin" :
                            activeTab === 'academic' && index === 0 ? "https://github.com/rushela/PersonalPortfolio" : 
                            activeTab === 'academic' && index === 1 ? "https://github.com/rushela/EchoTracking-with-SmartBin" : 
                            activeTab === 'academic' && index === 2 ? "https://github.com/rushela/EchoTracking-with-SmartBin" :
                            activeTab === 'academic' && index === 3 ? "https://github.com/rushela/PET-Care-System" :
                            activeTab === 'academic' && index === 4 ? "https://github.com/rushela/team-collaboration-project" :
                            activeTab === 'academic' && index === 5 ? "https://github.com/rushela/Rental-System" : 
                            activeTab === 'academic' && index === 6 ? "https://github.com/rushela/FinBot" : "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-all duration-300 ease-in-out"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.a>
                    {project.demoUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-all duration-300 ease-in-out"
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/rushela" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md transition-all duration-300 ease-in-out"
          >
            <Github className="mr-2 h-5 w-5" />
            See All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
