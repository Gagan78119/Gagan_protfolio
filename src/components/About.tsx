
import { useEffect, useState, useRef } from 'react';
import { Download } from 'lucide-react';

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

  // Academic and professional journey
  const education = [
    {
      period: "2018 - 2022",
      degree: "BACHELOR OF COMPUTER SCIENCE",
      institution: "STATE UNIVERSITY OF NEW YORK"
    },
    {
      period: "2016 - 2018",
      degree: "ASSOCIATE DEGREE IN WEB DESIGN",
      institution: "COMMUNITY COLLEGE OF DENVER"
    }
  ];

  const experience = [
    {
      period: "2022 - PRESENT",
      position: "SENIOR FRONTEND DEVELOPER",
      company: "TECH SOLUTIONS INC."
    },
    {
      period: "2020 - 2022",
      position: "UI/UX DESIGNER",
      company: "CREATIVE AGENCY CO."
    },
    {
      period: "2018 - 2020",
      position: "WEB DEVELOPER INTERN",
      company: "STARTUP INNOVATIONS LLC"
    }
  ];

  const stats = [
    { value: "600+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "8+", label: "Years of Experience" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div 
            className={`transition-all duration-700 delay-100 lg:w-5/12 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8">
              <div className="text-sm text-blue-600 mb-2">— About Me</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who is John Doe?</h2>
              
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                  alt="John Doe portrait" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              
              <p className="text-gray-600 mb-6">
                John Doe is a Canadian-based freelance UI/UX designer and frontend developer with a passion for creating beautiful, functional websites and applications. With over 8 years of experience, John has worked with clients from various industries to deliver exceptional digital experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Download CV</span>
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 lg:w-7/12 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-sm text-blue-600 mb-2">— Education & Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My Academic and Professional Journey</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    📚
                  </div>
                  Work Experience
                </h3>
                
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4 py-1">
                      <div className="text-xs text-gray-500">{job.period}</div>
                      <div className="font-semibold">{job.position}</div>
                      <div className="text-sm text-gray-600">{job.company}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    🎓
                  </div>
                  Education
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4 py-1">
                      <div className="text-xs text-gray-500">{edu.period}</div>
                      <div className="font-semibold">{edu.degree}</div>
                      <div className="text-sm text-gray-600">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
