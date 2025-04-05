
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
      year: "2022",
      title: "Began Design Journey",
      description: "Started exploring UI/UX design principles and tools",
      icon: GraduationCap
    },
    {
      year: "2022",
      title: "First Design Project",
      description: "Created my first UI design for a mobile app",
      icon: Award
    },
    {
      year: "2023",
      title: "Learned Frontend Development",
      description: "Started learning HTML, CSS, and JavaScript",
      icon: Heart
    },
    {
      year: "2023",
      title: "First React Project",
      description: "Built my first website using React and TailwindCSS",
      icon: Briefcase
    },
    {
      year: "Present",
      title: "Portfolio Development",
      description: "Working on personal projects to build my portfolio",
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
            I'm a beginner UI/UX designer and frontend developer with a passion for creating beautiful, functional, and accessible digital experiences.
          </p>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Currently in the early stages of my journey, I'm focused on building my skills in design thinking, user research, and frontend development with React and TailwindCSS.
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            I believe that great design solves real problems for users. I'm eager to collaborate on projects that allow me to grow and apply my developing skills in meaningful ways.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white shadow-md rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
              <h4 className="text-blue-500 font-semibold mb-1">Design Focus</h4>
              <p className="text-sm text-gray-600">User-centered, accessible interfaces</p>
            </div>
            
            <div className="p-4 bg-white shadow-md rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
              <h4 className="text-blue-500 font-semibold mb-1">Development Focus</h4>
              <p className="text-sm text-gray-600">React, TailwindCSS, JavaScript</p>
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
            
            <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="relative mb-8 last:mb-0"
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
