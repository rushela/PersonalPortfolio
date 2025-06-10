import { Brain, Users, MessageSquare, Code, Database, Server } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A passionate software engineering student with a keen interest in full-stack development and creating impactful solutions
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <img
              src="/assets/profile.png"
              alt="Gavindu Rushela Ekanayaka"
              className="absolute top-1/2 left-1/2 w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-700 -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I am a motivated and detail-oriented Software Engineering undergraduate at SLIIT, 
              with a strong foundation in full-stack development. My passion lies in solving 
              complex problems and building efficient software solutions that make a real impact. 
              I'm constantly learning and exploring new technologies to enhance my skills and 
              stay at the forefront of software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-lg dark:text-white">Problem-Solving</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Analytical thinker with strong debugging and solution design skills.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-lg dark:text-white">Teamwork</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborative team player with experience in agile development environments.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-lg dark:text-white">Communication</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Effective communicator with strong presentation and writing skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};