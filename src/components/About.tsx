
import { useEffect, useState, useRef } from 'react';

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
      description: "Started exploring UI/UX design principles and tools"
    },
    {
      year: "2019",
      title: "First Client Project",
      description: "Redesigned an e-commerce platform increasing conversions by 24%"
    },
    {
      year: "2020",
      title: "Expanded to Development",
      description: "Learned React and began creating full-stack projects"
    },
    {
      year: "2021",
      title: "Agency Experience",
      description: "Joined a digital agency and worked on 15+ client projects"
    },
    {
      year: "Present",
      title: "Freelance & Personal Projects",
      description: "Creating innovative digital experiences for select clients"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="container-section"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div 
          className={`transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="section-title">About Me</h2>
          
          <p className="mb-4">
            I'm a UI/UX designer and frontend developer with a passion for creating beautiful, functional, and accessible digital experiences.
          </p>
          
          <p className="mb-4">
            My approach combines aesthetic sensibility with technical expertise, allowing me to not only design engaging interfaces but also implement them with clean, efficient code.
          </p>
          
          <p className="mb-6">
            I believe that great design tells a story and creates emotional connections. Whether it's a product, website, or application, I focus on designing meaningful interactions that resonate with users and achieve business goals.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="text-primary font-semibold mb-1">Design Philosophy</h4>
              <p className="text-sm">User-centered, accessible, and purposeful</p>
            </div>
            
            <div className="p-4 bg-secondary/5 rounded-lg">
              <h4 className="text-secondary font-semibold mb-1">Development Approach</h4>
              <p className="text-sm">Clean, maintainable, and performant</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">My Journey</h3>
          
          <div className="relative border-l-2 border-primary/30 pl-6 pb-2 space-y-6">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 delay-${index * 100}`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="mb-1 text-sm text-accent font-semibold">{event.year}</div>
                <h4 className="text-lg font-semibold">{event.title}</h4>
                <p className="text-foreground/70">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
