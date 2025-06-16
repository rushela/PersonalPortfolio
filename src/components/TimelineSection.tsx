import { GraduationCap, Code, Cpu } from 'lucide-react';

export const TimelineSection = () => {
  const timelineItems = [{
    period: '2023–2027',
    title: 'BSc (Hons) IT @ SLIIT',
    description: "Pursuing a bachelor's degree in Information Technology with a focus on Software Engineering.",
    icon: <GraduationCap className="h-6 w-6" />,
    position: 'right'
  }, {
    period: '2022–2023',
    title: 'Trainee Full-Stack Developer',
    description: 'UOM Open Learning - Developed web applications using modern JavaScript frameworks.',
    icon: <Code className="h-6 w-6" />,
    position: 'left'
  }, {
    period: 'Current',
    title: 'AI/ML Engineer',
    description: 'In progress @ SLIIT - Working on machine learning models and AI applications.',
    icon: <Cpu className="h-6 w-6" />,
    position: 'right'
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
                  <div className="bg-indigo-500 dark:bg-indigo-600 text-white rounded-full p-3 z-10">
                    {item.icon}
                  </div>
                </div>
                <div className="w-1/2 px-6"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};