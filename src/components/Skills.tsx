
import { useState, useEffect, useRef } from 'react';
import SkillCard, { Skill } from './SkillCard';
import { Code, Palette, Briefcase, Lightbulb } from 'lucide-react';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Reduced skills data for better focus
  const skills: Skill[] = [
    {
      name: "UI Design",
      level: 90,
      category: "Design",
      description: "Creating intuitive, visually appealing interfaces with solid design principles."
    },
    {
      name: "UX Research",
      level: 85,
      category: "Design",
      description: "Conducting user research, creating personas, and developing user journeys."
    },
    {
      name: "Wireframing",
      level: 95,
      category: "Design",
      description: "Rapidly developing low-fidelity mockups to explore layout and functionality."
    },
    {
      name: "React",
      level: 85,
      category: "Development",
      description: "Building powerful, interactive UIs with React and modern hooks."
    },
    {
      name: "JavaScript/TypeScript",
      level: 80,
      category: "Development",
      description: "Writing clean, maintainable code with modern JavaScript and TypeScript."
    },
    {
      name: "TailwindCSS",
      level: 90,
      category: "Development",
      description: "Building utility-first designs with speed and consistency."
    },
    {
      name: "Figma",
      level: 95,
      category: "Tools",
      description: "Collaborative design, prototyping, and design systems."
    },
    {
      name: "Adobe Creative Suite",
      level: 85,
      category: "Tools",
      description: "Creating and editing graphics, illustrations, and other visual assets."
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Briefcase size={16} /> },
    { id: 'design', name: 'Design', icon: <Palette size={16} /> },
    { id: 'development', name: 'Development', icon: <Code size={16} /> },
    { id: 'tools', name: 'Tools', icon: <Lightbulb size={16} /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="container-section bg-muted/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-theme-electricBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-theme-neonPurple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div 
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="section-title mb-0">Skills & Expertise</h2>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-neon-blue'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={`${skill.name}-${index}`}
                skill={skill}
                delay={index * 100}
                isInView={isInView}
              />
            ))}
          </div>
          
          {filteredSkills.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-foreground/60">No skills found in this category.</p>
              <button 
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                onClick={() => setActiveCategory('all')}
              >
                View All Skills
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
