import { Brain, Users, MessageSquare } from 'lucide-react';

export const AboutSection = () => {
  return <section id="about" className="w-full py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center">
            {/* Profile Image */}
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="absolute top-1/2 left-1/2 w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-white -translate-x-1/2 -translate-y-1/2 z-20"
            />
            <div className="w-full h-full rounded-full bg-[#6366F1] overflow-hidden flex items-center justify-center"></div>
            {/* Placeholder for profile image */}
            {/* <span className="text-white text-6xl font-bold opacity-30">
              GRE
            </span> */}
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A motivated and detail-oriented Software Engineering undergraduate
              with a strong foundation in full-stack development, passionate
              about solving complex problems and building efficient software
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-full mr-4">
                    <Brain className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Problem-Solving</h3>
                </div>
                <p className="text-gray-600">
                  Analytical thinker with strong debugging and solution design
                  skills.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-full mr-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Teamwork</h3>
                </div>
                <p className="text-gray-600">
                  Collaborative team player with experience in agile development
                  environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Communication</h3>
                </div>
                <p className="text-gray-600">
                  Effective communicator with strong presentation and writing skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};