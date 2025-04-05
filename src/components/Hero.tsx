import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20">
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
                <span className="relative z-10">Gagan Dileep</span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-500/30 z-0"></span>
              </span>
              <span className="block text-gray-900 mt-2 font-semibold my-[11px] text-5xl">UI/UX Designer &</span>
              <span className="block text-gray-900 font-semibold text-5xl">FrontEnd Developer</span>
            </h1>
            
            <p className="text-gray-500 max-w-lg mb-8 text-lg">
              Creating stunning digital experiences that seamlessly blend aesthetics and functionality.
              Specialized in building interactive websites and intuitive user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 my-0">
              <a href="#contact" className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center">
                Hire Me
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-500 transition-all transform hover:scale-105 flex items-center">
                Whatsapp
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Right column - Image with floating elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main image with blue blob background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500 rounded-blob z-0 animate-pulse-slow"></div>
              <img 
                alt="Gagan Dileep - Web Designer and Developer" 
                src="/lovable-uploads/af7a47d6-b34d-49d7-98d7-381e6005c973.jpg" 
                className="relative z-10 mx-auto rounded-3xl shadow-xl border-4 border-white object-cover w-[80%] h-auto"
              />
              
              {/* Floating badge - Web Designer */}
              <div className="absolute top-5 md:top-10 left-0 bg-white shadow-lg p-3 rounded-xl transform -translate-x-1/4 animate-float z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1h-1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V6H6v3a2 2 0 002 2h2a2 2 0 002-2V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">Web Developer</span>
                </div>
              </div>
              
              {/* Floating badge - UI/UX Designer */}
              <div className="absolute bottom-5 md:bottom-10 right-0 bg-white shadow-lg p-3 rounded-xl transform translate-x-1/4 animate-float animation-delay-1000 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">UI/UX Designer</span>
                </div>
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
      
      {/* Scrolling Service Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 overflow-hidden">
        <div className="relative flex items-center h-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-blue-600 to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8 px-8">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-paint-brush text-blue-200"></i>
                  <span className="font-medium">UI/UX Design</span>
                </div>
                <span className="text-blue-200">★</span>
                
                <div className="flex items-center space-x-2">
                  <i className="fas fa-code text-blue-200"></i>
                  <span className="font-medium">Front-End Development</span>
                </div>
                <span className="text-blue-200">★</span>
                
                <div className="flex items-center space-x-2">
                  <i className="fas fa-mobile-alt text-blue-200"></i>
                  <span className="font-medium">Responsive Design</span>
                </div>
                <span className="text-blue-200">★</span>
                
                <div className="flex items-center space-x-2">
                  <i className="fas fa-layer-group text-blue-200"></i>
                  <span className="font-medium">Interactive Prototyping</span>
                </div>
                <span className="text-blue-200">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
