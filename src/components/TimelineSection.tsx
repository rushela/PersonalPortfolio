import { GraduationCap, Code, Cpu, Award } from 'lucide-react';

export const TimelineSection = () => {
  const timelineItems = [{
    period: '2023–2027',
    title: 'BSc (Hons) SE @ SLIIT',
    description: (
      <div>
        <div className="flex items-center gap-3">
          <img 
            src="/education/sliit.png" 
            alt="SLIIT Logo" 
            className="w-12 h-12 object-contain rounded-lg shadow-md"
          />
          <div>Pursuing a bachelor's degree in Information Technology with a focus on Software Engineering.</div>
        </div>
      </div>
    ),
    icon: <GraduationCap className="h-6 w-6" />,
    position: 'right'
  }, {
    period: '2022–2023',
    title: 'Trainee Full-Stack Developer',
    description: (
      <div>
        <div className="flex items-center gap-3">
          <img 
            src="/education/UOM.png" 
            alt="UOM Logo" 
            className="w-40 h-12 object-contain rounded-lg shadow-md"
          />
          <div>UOM Open Learning - Developed web applications using modern JavaScript frameworks.</div>
        </div>
      </div>
    ),
    icon: <Code className="h-6 w-6" />,
    position: 'left'
  }, {
    period: 'Current',
    title: 'AI/ML Engineer',
    description: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <img 
            src="/education/IEU.png" 
            alt="IEU Logo" 
            className="w-100 h-12 object-contain rounded-lg shadow-md"
          />
          <div>SLIIT - IEU (Industry Engagement Unit)</div>
        </div>
        <a 
          href="/certificate/Rushela Ekanayaka - 2025-07-05.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          <span>Stage 1</span>
          <Award className="h-3.5 w-3.5" />
        </a>
      </div>
    ),
    icon: <Cpu className="h-6 w-6" />,
    position: 'right'
  }, {
    period: '2025',
    title: 'Databricks',
    description: (
      <div className="space-y-4">
        <div>
          <div className="text-gray-600 dark:text-gray-300">Generative AI Fundamentals</div>
          <a 
            href="/certificate/certificate.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs font-medium rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 min-w-[140px] whitespace-nowrap"
          >
            <span>View Certificate</span>
            <Award className="h-3 w-3" />
          </a>
        </div>
        <div>
          <div className="text-gray-600 dark:text-gray-300">Databricks Fundamentals Accreditation</div>
          <a 
            href="/certificate/2308_3_1118489_1751768498_Databricks - Generic.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-medium rounded-full shadow-md hover:shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 min-w-[140px] whitespace-nowrap"
          >
            <span>View Certificate</span>
            <Award className="h-3 w-3" />
          </a>
        </div>
      </div>
    ),
    icon: (
      <img 
        src="/education/databrick.png" 
        alt="Databricks Logo" 
        className="w-6 h-6 object-cover rounded-full"
      />
    ),
    position: 'left'
  }];
  return <section id="education" className="w-full py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Education & Experience
        </h2>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
          <div className="space-y-16 relative">
            {timelineItems.map((item, index) => <div key={index} className={`flex ${item.position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-1/2 px-6">
                  <div className={`${item.position === 'left' ? 'text-left' : 'text-right'}`}>
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  {item.title === 'Databricks' ? (
                    <img 
                      src="/education/databrick.png" 
                      alt="Databricks Logo" 
                      className="w-12 h-12 object-cover rounded-full z-10"
                    />
                  ) : (
                    <div className="bg-indigo-500 dark:bg-indigo-600 text-white rounded-full p-3 z-10">
                      {item.icon}
                    </div>
                  )}
                </div>
                <div className="w-1/2 px-6"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};