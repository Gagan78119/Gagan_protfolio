
import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';

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
      icon: GraduationCap
    },
    {
      year: "2019",
      title: "First Client Project",
      description: "Redesigned an e-commerce platform increasing conversions by 24%",
      icon: Award
    },
    {
      year: "2020",
      title: "Expanded to Development",
      description: "Learned React and began creating full-stack projects",
      icon: Heart
    },
    {
      year: "2021",
      title: "Agency Experience",
      description: "Joined a digital agency and worked on 15+ client projects",
      icon: Briefcase
    },
    {
      year: "Present",
      title: "Freelance & Personal Projects",
      description: "Creating innovative digital experiences for select clients",
      icon: Award
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="container-section bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 opacity-10 w-96 h-96 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 opacity-10 w-96 h-96 bg-blue-500 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div 
          className={`transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="mb-6">
            <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Bringing Your Digital <span className="text-blue-500">Vision</span> to Life</h2>
          </div>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            I'm a UI/UX designer and frontend developer with a passion for creating beautiful, functional, and accessible digital experiences that make a lasting impression.
          </p>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            My approach combines aesthetic sensibility with technical expertise, allowing me to not only design engaging interfaces but also implement them with clean, efficient code.
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            I believe that great design tells a story and creates emotional connections. Whether it's a product, website, or application, I focus on designing meaningful interactions that resonate with users and achieve business goals.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white shadow-md rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
              <h4 className="text-blue-500 font-semibold mb-1">Design Philosophy</h4>
              <p className="text-sm text-gray-600">User-centered, accessible, and purposeful</p>
            </div>
            
            <div className="p-4 bg-white shadow-md rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
              <h4 className="text-blue-500 font-semibold mb-1">Development Approach</h4>
              <p className="text-sm text-gray-600">Clean, maintainable, and performant</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <span className="bg-blue-100 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <GraduationCap size={20} />
              </span>
              My Journey
            </h3>
            
            <div className="relative border-l-2 border-blue-200 pl-6 pb-2 space-y-8">
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
                  <div className="absolute -left-[15px] mt-1.5 h-7 w-7 rounded-full bg-white shadow border-2 border-blue-300 flex items-center justify-center">
                    <event.icon size={14} className="text-blue-500" />
                  </div>
                  <div className="mb-1 text-sm text-blue-500 font-semibold">{event.year}</div>
                  <h4 className="text-lg font-semibold text-gray-800">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
