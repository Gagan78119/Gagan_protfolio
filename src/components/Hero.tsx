
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const headlines = [
    "Designing Seamless Experiences",
    "Engineering Interactive Interfaces",
    "Crafting Digital Narratives"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);
    
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
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate particle positions
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-theme-deepBlack"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 bg-neon-grid bg-[length:50px_50px] opacity-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-theme-neonPurple/40 animate-float"
            style={{ 
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        
        {/* Interactive glow based on mouse position */}
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-theme-neonPurple/20 to-transparent pointer-events-none blur-3xl"
          style={{ 
            left: `${mousePosition.x * 100}%`, 
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-3">
            <Sparkles className="inline-block text-theme-electricBlue animate-pulse-glow h-8 w-8" />
          </div>
          
          <h1 className="font-bold mb-6 leading-tight">
            <span className="block text-theme-pureWhite">Hello, I'm <span className="grad-text font-bold">John Doe</span></span>
            <span 
              key={headlineIndex}
              className="grad-text block mt-2 animate-fade-in"
            >
              {headlines[headlineIndex]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-foreground/80">
            A passionate UI/UX designer and frontend developer creating engaging digital experiences that blend futuristic aesthetics with intuitive functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="glass-card btn-primary flex items-center justify-center gap-2 group"
            >
              <span>View My Work</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors hover-tilt"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section" className="block p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowDown size={24} className="text-theme-electricBlue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
