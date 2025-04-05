
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Palette, Code, BarChart, Mail, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
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

  const services = [
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive, visually appealing interfaces with solid design principles."
    },
    {
      icon: <Globe size={24} />,
      title: "Website Design & Development",
      description: "Building responsive, modern websites optimized for performance and search engines."
    },
    {
      icon: <Code size={24} />,
      title: "Content Writing",
      description: "Crafting engaging, SEO-friendly content that connects with your target audience."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Application Development",
      description: "Developing custom applications that solve real-world problems."
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing",
      description: "Creating effective email campaigns that drive engagement and conversions."
    },
    {
      icon: <BarChart size={24} />,
      title: "Social Media Marketing",
      description: "Building your brand presence across major social media platforms."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-sm text-blue-500 mb-2">— Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Provide</h2>
          <p className="text-gray-600">
            I offer a wide range of services to help businesses and individuals establish their online presence and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-5">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-500 text-sm group-hover:text-blue-600"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <span>See More</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
