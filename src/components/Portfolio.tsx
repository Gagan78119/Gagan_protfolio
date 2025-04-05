
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
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
      title: "Beauty Product - E-commerce Mobile App Solution",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1471&auto=format&fit=crop",
      description: "E-commerce mobile application for beauty products with modern UI and optimized checkout flow.",
      link: "#"
    },
    {
      id: 2,
      title: "Travel Booking Platform - Responsive Web Design",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop",
      description: "A responsive travel booking website with interactive maps and booking system.",
      link: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard - Data Visualization",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "Interactive financial dashboard with real-time data visualization and reporting tools.",
      link: "#"
    },
    {
      id: 4,
      title: "Health & Wellness App - Fitness Tracking",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      description: "Mobile fitness application with workout tracking, nutrition planning, and progress analytics.",
      link: "#"
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web Design', value: 'Web Design' },
    { label: 'Mobile App', value: 'Mobile App' },
    { label: 'Dashboard', value: 'Dashboard' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <div className="text-sm text-blue-600 mb-2">— Projects</div>
              <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    activeFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)'
                }}
                className="transition-all duration-500 group"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex gap-2">
                        <a 
                          href="#" 
                          className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors"
                        >
                          View
                        </a>
                        <a 
                          href="#" 
                          className="px-3 py-1 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          Details
                        </a>
                        <a 
                          href="#" 
                          className="px-3 py-1 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs text-blue-600 mb-2">{project.category}</div>
                    <h3 className="font-semibold mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-blue-600 text-sm"
                    >
                      <span>View Project</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects found in this category.</p>
              <button
                className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setActiveFilter('all')}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
