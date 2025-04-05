
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Hello badge */}
            <div className="inline-block mb-4 relative">
              <div className="relative border-2 border-blue-500 px-5 py-1">
                <div className="absolute w-2 h-2 bg-blue-500 -top-1 -left-1"></div>
                <div className="absolute w-2 h-2 bg-blue-500 -top-1 -right-1"></div>
                <div className="absolute w-2 h-2 bg-blue-500 -bottom-1 -left-1"></div>
                <div className="absolute w-2 h-2 bg-blue-500 -bottom-1 -right-1"></div>
                <span className="text-gray-800 font-medium">Hello !</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">I'm </span>
              <span className="text-blue-500 relative">
                <span className="relative z-10">Amar Akram</span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-500/30 z-0"></span>
              </span>
              <span className="block text-gray-900 mt-2">Web Designer &</span>
              <span className="block text-gray-900">Developer Enthusiast</span>
            </h1>
            
            <p className="text-gray-500 max-w-lg mb-8">
              Innovative Digital Marketer with Expertise in Driving Online Growth Through Strategic Campaigns.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105"
              >
                Hire Me
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-500 transition-all transform hover:scale-105"
              >
                Whatsapp
              </a>
            </div>
          </div>
          
          {/* Right column - Image with floating elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main image with blue blob background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500 rounded-blob z-0"></div>
              <img 
                src="/lovable-uploads/eb1558eb-8430-4dad-a795-016589b1618c.png" 
                alt="Amar Akram - Web Designer and Developer" 
                className="relative z-10 mx-auto"
              />
              
              {/* Floating badge - Web Designer */}
              <div className="absolute top-10 right-5 md:right-10 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg animate-float z-20">
                <span className="font-medium whitespace-nowrap">WEB Designer</span>
              </div>
              
              {/* Floating badge - UI/UX Designer */}
              <div className="absolute bottom-10 md:bottom-20 right-5 md:right-0 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg animate-float animation-delay-1000 z-20">
                <span className="font-medium whitespace-nowrap">UI/UX Designer</span>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-1/4 left-0 w-8 h-8 text-blue-500 animate-spin-slow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 22M17 5L7 19M19 12H5M7 5L17 19"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white py-4 overflow-hidden">
        <div className="flex justify-around items-center text-center">
          <div className="flex items-center">
            <span className="font-medium text-sm md:text-base">Digital Marketing</span>
            <span className="mx-4 text-white text-2xl">★</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-sm md:text-base">Website Development</span>
            <span className="mx-4 text-white text-2xl">★</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-sm md:text-base">UI/UX Design</span>
            <span className="mx-4 text-white text-2xl">★</span>
          </div>
          <div className="hidden md:block">
            <span className="font-medium text-sm md:text-base">Email Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
