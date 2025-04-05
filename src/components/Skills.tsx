
import { useState, useEffect, useRef } from 'react';
import { Code, Palette, Hammer, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  color: 'blue' | 'purple';
}

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Skills data with improved descriptions
  const skills: Skill[] = [
    {
      name: "UI Design",
      level: 90,
      category: "Design",
      description: "Creating intuitive, visually appealing interfaces with solid design principles.",
      color: 'purple'
    },
    {
      name: "UX Research",
      level: 85,
      category: "Design",
      description: "Conducting user research, creating personas, and developing user journeys.",
      color: 'blue'
    },
    {
      name: "Wireframing",
      level: 95,
      category: "Design",
      description: "Rapidly developing low-fidelity mockups to explore layout and functionality.",
      color: 'purple'
    },
    {
      name: "React",
      level: 85,
      category: "Development",
      description: "Building powerful, interactive UIs with React and modern hooks.",
      color: 'blue'
    },
    {
      name: "JavaScript/TypeScript",
      level: 80,
      category: "Development",
      description: "Writing clean, maintainable code with modern JavaScript and TypeScript.",
      color: 'blue'
    },
    {
      name: "TailwindCSS",
      level: 90,
      category: "Development",
      description: "Building utility-first designs with speed and consistency.",
      color: 'purple'
    },
    {
      name: "Figma",
      level: 94,
      category: "Tools",
      description: "Advanced use of Figma for design, prototyping, and design systems.",
      color: 'purple'
    },
    {
      name: "Accessibility",
      level: 82,
      category: "Expertise",
      description: "Ensuring designs meet WCAG standards for inclusive user experiences.",
      color: 'blue'
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

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

  const categories = [
    { value: 'all', label: 'All Skills', icon: <Lightbulb size={18} /> },
    { value: 'design', label: 'Design', icon: <Palette size={18} /> },
    { value: 'development', label: 'Development', icon: <Code size={18} /> },
    { value: 'tools', label: 'Tools', icon: <Hammer size={18} /> },
  ];

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
          className={`mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            Skills & Expertise
            <span className="ml-2 h-1 w-40 bg-purple-500 hidden sm:block"></span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            I've developed a diverse skill set as a beginner UI/UX designer and frontend developer.
          </p>
        </div>
        
        <div 
          className={`flex flex-wrap justify-end gap-2 mb-8 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-all flex items-center gap-2 ${
                activeCategory === category.value
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-800 text-white/80 hover:bg-gray-700 border border-gray-700'
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
              className="bg-gray-900 p-5 rounded-lg border border-gray-800 relative overflow-hidden"
            >
              <div className="mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${skill.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </div>
                  <span className="px-3 py-1 text-xs bg-gray-800 text-white rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full mb-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    skill.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
                  }`}
                  style={{ 
                    width: isInView ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>Proficiency</span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              
              <p className="text-sm text-gray-400 mt-3">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
