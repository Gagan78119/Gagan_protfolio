
import { useState, useEffect, useRef } from 'react';
import CaseStudyCard, { CaseStudy } from './CaseStudyCard';

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Sample portfolio data
  const projects: CaseStudy[] = [
    {
      id: 1,
      title: "E-commerce Redesign",
      category: "UX/UI Design",
      thumbnail: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete redesign of an e-commerce platform to improve user experience and increase conversions.",
      challenge: "The client was struggling with high cart abandonment rates and low mobile conversion. The existing interface was cluttered and the checkout process was complicated.",
      process: "I started with extensive user research and competitive analysis. Created user personas and journey maps to identify pain points. Developed wireframes and interactive prototypes that were tested with real users in multiple iterations.",
      solution: "Designed a clean, intuitive interface with simplified navigation, improved product filtering, and a streamlined 3-step checkout process. Implemented responsive design principles for optimal mobile experience.",
      results: [
        "28% increase in conversion rate",
        "42% reduction in cart abandonment",
        "65% improvement in mobile sales",
        "User satisfaction score improved from 3.2/5 to 4.7/5"
      ],
      tags: ["E-commerce", "UX Research", "Wireframing", "Prototyping", "Figma"]
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "Frontend Development",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "Interactive dashboard for financial data visualization and analysis.",
      challenge: "The client needed a way to visualize complex financial data for their customers. The existing solution was static and difficult to understand.",
      process: "Collaborated with data analysts to understand key metrics. Created information architecture and data visualization sketches. Developed interactive prototypes and tested with target users.",
      solution: "Built a responsive dashboard using React with interactive charts, customizable views, and real-time data updates. Implemented filters and comparison features for deeper analysis.",
      results: [
        "90% of users reported better understanding of their financial data",
        "User engagement time increased by 230%",
        "Featured in industry publication for innovative financial tool design"
      ],
      tags: ["React", "Data Visualization", "Dashboard", "JavaScript", "Recharts"]
    },
    {
      id: 3,
      title: "Health & Wellness App",
      category: "Mobile App",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      description: "Mobile application for tracking fitness activities, nutrition, and wellness metrics.",
      challenge: "Create an intuitive mobile app that helps users track multiple health metrics while making the experience engaging and encouraging consistent use.",
      process: "Conducted user interviews to understand pain points with existing health apps. Created user flows, wireframes and interactive prototypes. Performed usability testing across different user groups.",
      solution: "Designed a clean, gamified interface with progress visualization, custom goal setting, and social sharing features. Implemented subtle animations and micro-interactions to create an engaging experience.",
      results: [
        "85% user retention after 3 months (industry average is 35%)",
        "Average 4.8/5 stars in app stores",
        "Featured in App Store's 'Apps We Love' collection"
      ],
      tags: ["Mobile Design", "iOS", "Android", "Gamification", "Health Tech"]
    },
    {
      id: 4,
      title: "Corporate Brand Refresh",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete brand identity refresh for a technology consulting firm.",
      challenge: "The client's brand was outdated and inconsistent across channels. They needed a modern identity that reflected their innovative approach while maintaining brand recognition.",
      process: "Conducted stakeholder interviews and brand workshops. Researched industry trends and competitor positioning. Developed multiple concept directions before refining the selected approach.",
      solution: "Created a comprehensive brand system including new logo, color palette, typography, and visual language. Developed detailed brand guidelines and templates for various applications.",
      results: [
        "92% of clients reported the new brand better represented the company's values",
        "Brand recognition increased by 34% in market research",
        "Won regional design award for corporate rebrand"
      ],
      tags: ["Branding", "Logo Design", "Style Guide", "Corporate Identity"]
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
      <div 
        className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title">My Work</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
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
              className="transition-all duration-500"
            >
              <CaseStudyCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70">No projects found in this category.</p>
            <button
              className="mt-4 btn-primary"
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
