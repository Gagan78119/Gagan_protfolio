
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-20 top-40 w-96 h-96 rounded-full bg-blue-500/5"></div>
        <div className="absolute left-10 bottom-20 w-72 h-72 rounded-full bg-blue-500/5"></div>
        <div className="hidden md:block absolute right-1/4 top-1/4 w-6 h-6 bg-blue-500 rounded-full"></div>
        <div className="hidden md:block absolute left-1/3 bottom-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="hidden md:block absolute right-1/3 bottom-1/4 w-4 h-4 border-2 border-blue-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div 
            className={`transition-all duration-1000 ease-out md:w-1/2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Hello box */}
            <div className="mb-6 border-2 border-blue-500 inline-flex items-center px-4 py-2 max-w-fit">
              <div className="w-3 h-3 bg-blue-500 mr-2"></div>
              <span className="font-medium">Hello !</span>
              <div className="w-3 h-3 bg-blue-500 ml-2"></div>
            </div>
            
            <h1 className="font-bold mb-4 leading-tight text-left">
              <span className="block text-gray-900 text-4xl md:text-5xl">I'm <span className="text-blue-500">Amar Akram</span>,</span>
              <span className="block text-3xl md:text-4xl mt-3 text-gray-900">
                Web Designer & <br/>Developer Enthusiast
              </span>
            </h1>
            
            <p className="text-lg max-w-2xl mb-8 text-gray-500 text-left">
              Innovative Digital Marketer with Expertise in Driving Online Growth Through Strategic Campaigns.
            </p>
            
            <div className="flex flex-row gap-4 justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Hire Me
              </a>
              <a 
                href="#" 
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Hero image with floating badges */}
          <div 
            className={`transition-all duration-1000 delay-300 ease-out md:w-1/2 flex justify-center relative ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Main image with blue blob background */}
              <div className="relative z-10">
                <div className="absolute -z-10 rounded-full bg-blue-500 w-[80%] h-[90%] top-[5%] right-[5%]"></div>
                <img 
                  src="public/lovable-uploads/33c01e1a-2f25-416b-ab30-1a9b7c9b084e.png"
                  alt="Professional portrait"
                  className="relative z-10 h-auto max-w-md object-contain"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 md:left-0 z-20 bg-blue-500 text-white px-4 py-2 rounded-full transform rotate-6 shadow-lg">
                <span className="text-sm font-medium">WEB Designer</span>
              </div>
              
              <div className="absolute bottom-20 right-0 z-20 bg-blue-500 text-white px-4 py-2 rounded-full transform -rotate-3 shadow-lg">
                <span className="text-sm font-medium">UI/UX Designer</span>
              </div>
              
              <div className="absolute right-0 top-1/2 w-20 h-20 border-2 border-blue-500 border-dashed rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services banner at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white py-4 flex justify-around items-center">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center space-x-2 py-1">
            <span className="text-xl font-medium">Digital Marketing</span>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-6 h-6 text-white opacity-80">✦</div>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <span className="text-xl font-medium">Website Development</span>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-6 h-6 text-white opacity-80">✦</div>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <span className="text-xl font-medium">UI/UX Design</span>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-6 h-6 text-white opacity-80">✦</div>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <span className="text-xl font-medium">Email Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
