import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tags: string[];
  link: string;
}

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Sample portfolio data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Redesign",
      category: "UX/UI Design",
      thumbnail: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete redesign of an e-commerce platform to improve user experience and increase conversions.",
      tags: ["E-commerce", "UX Research", "Wireframing", "Prototyping", "Figma"],
      link: "/projects/ecommerce-redesign"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "Frontend Development",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "Interactive dashboard for financial data visualization and analysis.",
      tags: ["React", "Data Visualization", "Dashboard", "JavaScript", "Recharts"],
      link: "/projects/financial-dashboard"
    },
    {
      id: 3,
      title: "Health & Wellness App",
      category: "Mobile App",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      description: "Mobile application for tracking fitness activities, nutrition, and wellness metrics.",
      tags: ["Mobile Design", "iOS", "Android", "Gamification", "Health Tech"],
      link: "/projects/health-wellness-app"
    },
    {
      id: 4,
      title: "Corporate Brand Refresh",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete brand identity refresh for a technology consulting firm.",
      tags: ["Branding", "Logo Design", "Style Guide", "Corporate Identity"],
      link: "/projects/corporate-brand-refresh"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'UX/UI', value: 'ux/ui' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Branding', value: 'branding' }
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
      id="portfolio" 
      ref={sectionRef}
      className="container-section"
    >
      <div className={`mb-12 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gray-900">My</span>{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>
      </div>
        
      <div className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
              className="transition-all duration-500 group rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video w-full">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full">
                    <span className="text-white text-sm font-medium flex items-center">
                      View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-xs font-medium text-blue-500 mb-2 bg-blue-50 inline-block px-2 py-1 rounded">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No projects found in this category.</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => setActiveFilter('all')}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
