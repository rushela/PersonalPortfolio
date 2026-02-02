import { useState } from 'react';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'PHP', 'SQL', 'HTML', 'CSS', 'C', 'Kotlin']
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'React Native', 'Expo']
    },
    {
      title: 'Databases & Backend',
      items: ['MongoDB', 'MySQL', 'SQLite', 'Room Database', 'Firebase', 'REST APIs']
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Android Studio', 'IntelliJ IDEA', 'Eclipse', 'Arduino IDE', 'JIRA', 'Trello']
    },
    {
      title: 'Areas of Expertise',
      items: ['Full Stack Development', 'Web Development', 'Mobile Development', 'IoT Development', 'Database Design', 'API Development', 'UI/UX Design']
    }
  ];

  return (
    <section id="skills" className="w-full py-24 md:py-32 px-4 md:px-8" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Editorial Style */}
        <div className="text-center mb-20">
          <p 
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Expertise
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl italic mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            Skills & Technologies
          </h2>
          <p 
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-body)' }}
          >
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16" style={{ borderBottom: '1px solid var(--border-light)' }}>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className="pb-4 text-sm tracking-wide transition-all duration-300"
              style={{ 
                color: activeCategory === index ? 'var(--text-heading)' : 'var(--text-muted)',
                borderBottom: activeCategory === index ? '2px solid var(--text-heading)' : '2px solid transparent',
                marginBottom: '-1px'
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto">
          <h3 
            className="text-2xl md:text-3xl italic mb-10 text-center"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'var(--text-heading)',
              fontWeight: 'normal'
            }}
          >
            {categories[activeCategory].title}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories[activeCategory].items.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 text-sm transition-all duration-300 hover:opacity-70"
                style={{ 
                  color: 'var(--text-body)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* All Skills Overview */}
        <div className="mt-24 pt-12" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.slice(0, 3).map((cat, index) => (
              <div key={index}>
                <h4 
                  className="text-sm tracking-[0.2em] uppercase mb-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.slice(0, 6).map((skill, idx) => (
                    <li 
                      key={idx}
                      className="text-base"
                      style={{ color: 'var(--text-body)' }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
