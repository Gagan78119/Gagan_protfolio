
import { useEffect, useState, useRef } from 'react';
import { Calendar, Star, Code, Layers } from 'lucide-react';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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

  const timelineEvents = [
    {
      year: "2018",
      title: "Began Design Journey",
      description: "Started exploring UI/UX design principles and tools",
      icon: <Calendar size={20} />
    },
    {
      year: "2019",
      title: "First Client Project",
      description: "Redesigned an e-commerce platform increasing conversions by 24%",
      icon: <Star size={20} />
    },
    {
      year: "2020",
      title: "Expanded to Development",
      description: "Learned React and began creating full-stack projects",
      icon: <Code size={20} />
    },
    {
      year: "2021",
      title: "Agency Experience",
      description: "Joined a digital agency and worked on 15+ client projects",
      icon: <Layers size={20} />
    },
    {
      year: "Present",
      title: "Freelance & Personal Projects",
      description: "Creating innovative digital experiences for select clients",
      icon: <Star size={20} />
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="container-section relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-theme-electricBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-theme-neonPurple/5 rounded-full blur-3xl"></div>
      
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        <div 
          className={`transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="section-title mb-8">About Me</h2>
          
          {/* Bio with enhanced design */}
          <div className="glass-card p-6 mb-8 border border-white/10">
            <p className="mb-4 text-lg leading-relaxed">
              I'm a <span className="text-theme-electricBlue font-medium">UI/UX designer</span> and <span className="text-theme-neonPurple font-medium">frontend developer</span> with a passion for creating beautiful, functional, and accessible digital experiences.
            </p>
            
            <p className="mb-4">
              My approach combines aesthetic sensibility with technical expertise, allowing me to not only design engaging interfaces but also implement them with clean, efficient code.
            </p>
            
            <p className="mb-0">
              I believe that great design tells a story and creates emotional connections. Whether it's a product, website, or application, I focus on designing meaningful interactions that resonate with users and achieve business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 glass-card border border-white/10 hover:border-theme-electricBlue/30 transition-colors">
              <h4 className="text-theme-electricBlue font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-theme-electricBlue/10 flex items-center justify-center">
                  <Star size={16} />
                </span>
                Design Philosophy
              </h4>
              <p className="text-sm">User-centered, accessible, and purposeful with attention to every detail</p>
            </div>
            
            <div className="p-5 glass-card border border-white/10 hover:border-theme-neonPurple/30 transition-colors">
              <h4 className="text-theme-neonPurple font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-theme-neonPurple/10 flex items-center justify-center">
                  <Code size={16} />
                </span>
                Development Approach
              </h4>
              <p className="text-sm">Clean, maintainable, and performant code that brings designs to life</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-2 text-theme-electricBlue">My Journey</span>
            <span className="h-px flex-grow bg-gradient-to-r from-theme-electricBlue/50 to-transparent"></span>
          </h3>
          
          <div className="relative border-l-2 border-theme-electricBlue/20 pl-6 pb-2 space-y-8">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="relative"
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                <div className="absolute -left-[41px] mt-1 flex items-center justify-center w-[20px] h-[20px] rounded-full border-2 border-theme-electricBlue bg-background">
                  <div className="w-2 h-2 bg-theme-electricBlue rounded-full"></div>
                </div>
                
                <div className="glass-card p-4 border border-white/10">
                  <div className="mb-1 text-sm font-semibold">
                    <span className="px-2 py-1 rounded-full text-2xs bg-theme-electricBlue/10 text-theme-electricBlue">
                      {event.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {event.icon}
                    {event.title}
                  </h4>
                  <p className="text-sm text-foreground/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
