import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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

  return (
    <section id="projects" className="w-full py-24 md:py-32 px-4 md:px-8" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Editorial Style */}
        <div className="text-center mb-16">
          <p 
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Portfolio
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl italic mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            Selected works
          </h2>
          <p 
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-body)' }}
          >
            A showcase of my academic and client projects
          </p>
        </div>
        
        {/* Tab Navigation - Simple */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-8" style={{ borderBottom: '1px solid var(--border-light)' }}>
            <button
              onClick={() => setActiveTab('client')}
              className="pb-4 text-sm tracking-wide transition-all duration-300"
              style={{ 
                color: activeTab === 'client' ? 'var(--text-heading)' : 'var(--text-muted)',
                borderBottom: activeTab === 'client' ? '2px solid var(--text-heading)' : '2px solid transparent',
                marginBottom: '-1px'
              }}
            >
              Client Projects ({clientProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className="pb-4 text-sm tracking-wide transition-all duration-300"
              style={{ 
                color: activeTab === 'academic' ? 'var(--text-heading)' : 'var(--text-muted)',
                borderBottom: activeTab === 'academic' ? '2px solid var(--text-heading)' : '2px solid transparent',
                marginBottom: '-1px'
              }}
            >
              Academic Projects ({academicProjects.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Image */}
              <div 
                className="relative overflow-hidden mb-6"
                style={{ aspectRatio: '16/10' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Project Info */}
              <div>
                <h3 
                  className="text-xl md:text-2xl italic mb-3"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    color: 'var(--text-heading)',
                    fontWeight: 'normal'
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: 'var(--text-body)' }}
                >
                  {project.description}
                </p>
                
                {/* Technologies */}
                <p 
                  className="text-xs mb-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.technologies}
                </p>
                
                {/* Links */}
                <div className="flex items-center gap-6">
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-20 pt-12" style={{ borderTop: '1px solid var(--border-light)' }}>
          <a
            href="https://github.com/rushela?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-heading)' }}
          >
            <Github className="w-5 h-5" />
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
