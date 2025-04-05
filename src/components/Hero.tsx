
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      
      {/* Interactive glow based on mouse position */}
      <div 
        className="absolute w-[30vw] h-[30vw] rounded-full bg-white/5 pointer-events-none blur-3xl"
        style={{ 
          left: `${mousePosition.x * 100}%`, 
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div 
            className={`transition-all duration-1000 ease-out md:w-1/2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-3 text-white/80 text-sm md:text-base">
              Hello! 👋
            </div>
            
            <h1 className="font-bold mb-6 leading-tight text-left text-white">
              <span className="block text-4xl md:text-5xl lg:text-6xl">I'm <span className="text-blue-200 font-bold">John Doe</span>,</span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl">
                Web Designer & <br/>Developer Enthusiast
              </span>
            </h1>
            
            <p className="text-lg max-w-2xl mb-10 text-white/80 text-left">
              A passionate UI/UX designer and frontend developer creating engaging digital experiences that blend aesthetics with intuitive functionality.
            </p>
            
            <div className="flex flex-row gap-4 justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Hire Me
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>WhatsApp</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="border-t border-white/20 pt-4 min-w-[110px]">
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Digital Marketing
                </a>
              </div>
              <div className="border-t border-white/20 pt-4 min-w-[110px]">
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Website Development
                </a>
              </div>
              <div className="border-t border-white/20 pt-4 min-w-[110px]">
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  UI/UX Design
                </a>
              </div>
              <div className="border-t border-white/20 pt-4 min-w-[110px]">
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Email Marketing
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div 
            className={`transition-all duration-1000 delay-300 ease-out md:w-1/2 flex justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-blue-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
                  alt="Professional portrait of John Doe"
                  className="w-full h-auto max-w-md object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/10"></div>
              </div>
              
              {/* Blue decorative shape */}
              <div className="absolute -right-5 -bottom-5 w-full h-full border-4 border-blue-400/30 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section" className="block p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ArrowDown size={24} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
