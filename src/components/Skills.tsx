
import { useState, useEffect, useRef } from 'react';
import SkillCard, { Skill } from './SkillCard';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Sample skills data
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
      name: "Prototyping",
      level: 90,
      category: "Design",
      description: "Building interactive prototypes to test and validate design solutions."
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
      name: "HTML/CSS",
      level: 95,
      category: "Development",
      description: "Creating semantic markup and responsive layouts with modern CSS."
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
    },
    {
      name: "Accessibility",
      level: 80,
      category: "Expertise",
      description: "Building inclusive experiences that work for all users."
    },
    {
      name: "Responsive Design",
      level: 90,
      category: "Expertise",
      description: "Creating layouts that work beautifully across all device sizes."
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = ['all', ...new Set(skills.map(skill => skill.category.toLowerCase()))];

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
      className="container-section bg-muted/30"
    >
      <div 
        className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-background hover:bg-background/80'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
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
      </div>
    </section>
  );
};

export default Skills;
