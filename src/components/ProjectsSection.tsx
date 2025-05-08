import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [{
    title: 'TeamSync – Collaboration & Evaluation System',
    technologies: 'MERN Stack, AI-driven insights, Role-based access'
  }, {
    title: 'PETdot : Pet care system',
    technologies: 'Html, Css, JavaScript,PHP, SQL, Bootstrap & jQuery',
    
  }, {
    title: 'Eco-Track: Smart bin System',
    technologies: 'MERN Stack, Arduino NodeMCU (ESP8266), HC-SR04 Ultrasonic Sensor'
  }];
  return <section id="projects" className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                {index === 0 ? (
                  <img 
                    src="/assets/projects/project1.png" 
                    alt="TeamSync Project" 
                    className="w-full h-full object-cover"
                  />
                ) : index === 1 ? (
                  <img 
                    src="/assets/projects/project2.png" 
                    alt="PETdot Project" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src="/assets/projects/project3.png" 
                    alt="Smart Bin System Project" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <ul className="mb-4">
                  {project.technologies.split(', ').map((tech, i) => <li key={i} className="text-gray-600 text-sm flex items-center mb-1">
                      <span className="mr-2 w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block"></span>
                      {tech}
                    </li>)}
                </ul>
                <a 
                  href={index === 0 ? "https://github.com/rushela/team-collaboration-project" : 
                        index === 1 ? "https://github.com/rushela/PET-Care-System" :
                        index === 2 ? "https://github.com/rushela/smart-bin-system" : "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-all duration-300 ease-in-out"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="https://github.com/rushela" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md transition-all duration-300 ease-in-out">
            <Github className="mr-2 h-5 w-5" />
            See All on GitHub
          </a>
        </div>
      </div>
    </section>;
};