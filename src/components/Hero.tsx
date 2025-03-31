
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = [
    "Designing Seamless Experiences",
    "Building Meaningful Interactions",
    "Crafting Digital Narratives"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 animate-pulse-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-secondary/10 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-accent/10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hello, I'm <span className="text-accent">John Doe</span></span>
            <span 
              key={headlineIndex}
              className="grad-text block mt-2 animate-fade-in"
            >
              {headlines[headlineIndex]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-foreground/80">
            A passionate UI/UX designer and frontend developer creating engaging digital experiences that blend aesthetics with functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown size={24} className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
