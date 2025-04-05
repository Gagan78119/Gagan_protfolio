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
      name: "JavaScript",
      level: 85,
      category: "Development",
      description: "Building interactive web applications with modern JavaScript (ES6+).",
      color: 'blue'
    },
    {
      name: "TypeScript",
      level: 80,
      category: "Development",
      description: "Developing type-safe applications with TypeScript for better maintainability.",
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

  const getSkillIcon = (name: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'UI Design': (
        <i className="fa-solid fa-wand-magic-sparkles text-2xl text-purple-600"></i>
      ),
      'UX Research': (
        <i className="fa-solid fa-magnifying-glass-chart text-2xl text-blue-600"></i>
      ),
      'Wireframing': (
        <i className="fa-solid fa-object-group text-2xl text-indigo-600"></i>
      ),
      'React': (
        <i className="fa-brands fa-react text-2xl text-cyan-500"></i>
      ),
      'JavaScript': (
        <i className="fa-brands fa-square-js text-2xl text-yellow-400"></i>
      ),
      'TypeScript': (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12v12h24V0H0v12zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012.011.98z" fill="#007ACC"/>
        </svg>
      ),
      'TailwindCSS': (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      ),
      'Figma': (
        <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
          </g>
        </svg>
      ),
      'Accessibility': (
        <i className="fa-solid fa-universal-access text-2xl text-green-600"></i>
      )
    };
    return iconMap[name] || <i className="fa-solid fa-lightbulb text-2xl text-gray-400"></i>;
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="container-section bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] opacity-5"></div>
      
      <div className="relative z-10">
        <div className={`mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-blue-500 rounded-full mb-6"></div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
                ${activeCategory === category.value 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getSkillIcon(skill.name)}
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                  {skill.category}
                </span>
              </div>

              <div className="relative h-2 bg-gray-100 rounded-full mb-2">
                <div 
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                  style={{ width: isInView ? `${skill.level}%` : '0%' }}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>Proficiency</span>
                <span className="font-medium">{skill.level}%</span>
              </div>

              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
