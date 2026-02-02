import { GraduationCap, Code, Cpu, Award, LetterTextIcon } from 'lucide-react';

export const TimelineSection = () => {
  const timelineItems = [{
    period: '2023–2027',
    title: 'BSc (Hons) SE @ SLIIT',
    description: (
      <div>
        <div className="flex items-center gap-4">
          <img 
            src="/education/sliit.png" 
            alt="SLIIT Logo" 
            className="w-12 h-12 object-contain"
          />
          <div className="text-sm leading-relaxed">Pursuing a bachelor's degree in Information Technology with a focus on Software Engineering.</div>
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
        <div className="flex items-center gap-4">
          <img 
            src="/education/UOM.png" 
            alt="UOM Logo" 
            className="w-40 h-12 object-contain"
          />
          <div className="text-sm leading-relaxed">UOM Open Learning - Developed web applications using modern JavaScript frameworks.</div>
        </div>
      </div>
    ),
    icon: <Code className="h-6 w-6" />,
    position: 'left'
  }, {
    period: '2024-2025',
    title: 'AI/ML Engineer',
    description: (
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="/education/IEU.png" 
            alt="IEU Logo" 
            className="w-100 h-12 object-contain"
          />
          <div className="text-sm leading-relaxed">SLIIT - IEU (Industry Engagement Unit)</div>
        </div>
        <a 
          href="/certificate/Rushela Ekanayaka - 2025-07-05.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-heading)' }}
        >
          <Award className="h-4 w-4" />
          <span>Stage 1 Certificate</span>
        </a>
      </div>
    ),
    icon: <Cpu className="h-6 w-6" />,
    position: 'right'
  }, {
    period: '2025',
    title: 'Databricks',
    description: (
      <div className="space-y-5">
        <div>
          <div className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-body)' }}>Generative AI Fundamentals</div>
          <a 
            href="/certificate/certificate.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-heading)' }}
          >
            <Award className="h-4 w-4" />
            <span>View Certificate</span>
          </a>
        </div>
        <div>
          <div className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-body)' }}>Databricks Fundamentals Accreditation</div>
          <a 
            href="/certificate/2308_3_1118489_1751768498_Databricks - Generic.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-heading)' }}
          >
            <Award className="h-4 w-4" />
            <span>View Certificate</span>
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
  }, {
    period: '2025-2026',
    title: 'Internship',
    description: (
      <div>
        <div className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
          Completed a Software Engineering internship at Prosper Global Education (Pvt) Ltd, actively involved in building and enhancing the <a href="https://uplift.lk/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" style={{ color: 'var(--text-heading)', fontWeight: '500' }}>Uplift.lk</a> platform.
        </div>
        <a 
          href="/certificate/SL.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-heading)' }}
        >
          <LetterTextIcon className="h-4 w-4" />
          <span>Service Letter</span>
        </a>
      </div>
    ),
    icon: (
      <img 
        src="/education/uplift.png" 
        alt="Uplift Logo" 
        className="w-6 h-6 object-cover rounded-full"
      />
    ),
    position: 'right'
  }];


  return <section id="education" className="w-full py-24 md:py-32 px-4 md:px-8" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header - Editorial Style */}
        <div className="text-center mb-20">
          <p 
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Journey
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl italic mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            Education & Experience
          </h2>
        </div>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5" style={{ backgroundColor: 'var(--border-light)' }}></div>
          <div className="space-y-20 relative">
            {timelineItems.map((item, index) => <div key={index} className={`flex ${item.position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-1/2 px-8 md:px-12">
                  <div className={`${item.position === 'left' ? 'text-left' : 'text-right'}`}>
                    <span className="inline-block text-sm tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
                      {item.period}
                    </span>
                    <h3 
                      className="text-xl md:text-2xl italic mb-4" 
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        color: 'var(--text-heading)',
                        fontWeight: 'normal'
                      }}
                    >
                      {item.title}
                    </h3>
                    <div className="mt-3 leading-relaxed" style={{ color: 'var(--text-body)' }}>{item.description}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  {item.title === 'Databricks' ? (
                    <div className="rounded-full p-1 z-10" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--border-light)' }}>
                      <img 
                        src="/education/databrick.png" 
                        alt="Databricks Logo" 
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                  ) : item.title === 'Internship' ? (
                    <a href="https://uplift.lk/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1 z-10 hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--border-light)' }}>
                      <img 
                        src="/education/uplift.png" 
                        alt="Uplift Logo" 
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </a>
                  ) : (
                    <div className="rounded-full p-3 z-10" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--border-light)', color: 'var(--text-heading)' }}>
                      {item.icon}
                    </div>
                  )}
                </div>
                <div className="w-1/2 px-8 md:px-12"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};