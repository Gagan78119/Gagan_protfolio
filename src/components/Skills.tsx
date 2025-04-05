
import { useState, useEffect, useRef } from 'react';
import SkillCard, { Skill } from './SkillCard';
import { Code, Palette, Hammer, Lightbulb } from 'lucide-react';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Sample skills data with improved descriptions
  const skills: Skill[] = [
    {
      name: "UI Design",
      level: 90,
      category: "Design",
      description: "Creating intuitive, visually appealing interfaces with solid design principles and attention to detail."
    },
    {
      name: "UX Research",
      level: 85,
      category: "Design",
      description: "Conducting user interviews, creating personas, and developing user journeys to inform design decisions."
    },
    {
      name: "Wireframing",
      level: 92,
      category: "Design",
      description: "Rapidly developing low and high-fidelity mockups to explore layout options and functionality."
    },
    {
      name: "Prototyping",
      level: 88,
      category: "Design",
      description: "Building interactive prototypes with advanced animations to validate design solutions before development."
    },
    {
      name: "React",
      level: 85,
      category: "Development",
      description: "Building powerful, interactive UIs with React, including hooks, context, and modern patterns."
    },
    {
      name: "JavaScript/TypeScript",
      level: 83,
      category: "Development",
      description: "Writing clean, maintainable code with modern JavaScript and leveraging TypeScript for type safety."
    },
    {
      name: "HTML/CSS",
      level: 95,
      category: "Development",
      description: "Creating semantic markup and responsive layouts with advanced CSS techniques and animations."
    },
    {
      name: "TailwindCSS",
      level: 90,
      category: "Development",
      description: "Building utility-first designs with speed and consistency across multiple projects and applications."
    },
    {
      name: "Figma",
      level: 94,
      category: "Tools",
      description: "Advanced use of Figma for design, prototyping, and design systems with component libraries."
    },
    {
      name: "Adobe Creative Suite",
      level: 85,
      category: "Tools",
      description: "Creating and editing graphics, illustrations, and visual assets across Photoshop, Illustrator, and XD."
    },
    {
      name: "Accessibility",
      level: 82,
      category: "Expertise",
      description: "Ensuring designs and implementations meet WCAG standards for inclusive user experiences."
    },
    {
      name: "Responsive Design",
      level: 90,
      category: "Expertise",
      description: "Creating layouts that work beautifully and function properly across all device sizes and orientations."
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = ['all', ...new Set(skills.map(skill => skill.category.toLowerCase()))];

  const categoryIcons: Record<string, React.ReactNode> = {
    all: <Lightbulb size={18} />,
    design: <Palette size={18} />,
    development: <Code size={18} />,
    tools: <Hammer size={18} />,
    expertise: <Lightbulb size={18} />
  };

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
      className="container-section relative overflow-hidden bg-gray-50"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900">Skills & Proficiency</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I've developed a diverse skill set across design and development, allowing me to create 
            end-to-end solutions with a focus on quality and user experience.
          </p>
        </div>
        
        <div 
          className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-all flex items-center gap-2 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryIcons[category] || <Lightbulb size={18} />}
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
