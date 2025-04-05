import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Briefcase, Award, Heart, Code } from 'lucide-react';

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
      title: "Started UI/UX Journey",
      description: "Began learning design principles and user experience fundamentals",
      icon: GraduationCap
    },
    {
      year: "2022",
      title: "Frontend Development",
      description: "Started learning React, JavaScript, and modern web technologies",
      icon: Code
    },
    {
      year: "2023",
      title: "First Client Project",
      description: "Successfully delivered a full-stack web application with modern UI",
      icon: Award
    },
    {
      year: "Present",
      title: "Continuous Growth",
      description: "Expanding skills in both design and development domains",
      icon: Heart
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="container-section bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className={`transition-all duration-700 delay-100 ${
          isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="mb-6">
            <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium inline-block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Bringing Your Digital
              <span className="text-blue-500 relative ml-2">
                Vision
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 -z-10"></span>
              </span>
              to Life
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              As a UI/UX Designer & Frontend Developer, I combine creative design thinking with technical expertise to create engaging digital experiences that users love.
            </p>
            
            <p className="leading-relaxed">
              With a focus on user-centered design and modern web technologies, I specialize in crafting intuitive interfaces and implementing them with clean, efficient code.
            </p>
            
            <p className="mb-6 leading-relaxed">
              My approach combines design thinking with technical implementation, ensuring both beautiful interfaces and robust functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all group">
              <h4 className="text-blue-500 font-semibold mb-2 group-hover:text-blue-600">Design Skills</h4>
              <p className="text-sm text-gray-600">UI/UX Design, Wireframing, Prototyping</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all group">
              <h4 className="text-blue-500 font-semibold mb-2 group-hover:text-blue-600">Development Skills</h4>
              <p className="text-sm text-gray-600">React, TypeScript, Modern Web Standards</p>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <span className="bg-blue-100 text-blue-500 w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                <GraduationCap size={20} />
              </span>
              My Journey
            </h3>

            <div className="relative">
              <div className="absolute top-0 left-4 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-transparent"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <event.icon size={14} className="text-blue-500" />
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="text-sm font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                      {event.year}
                    </span>
                    <h4 className="font-semibold text-gray-900 mt-2 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
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
