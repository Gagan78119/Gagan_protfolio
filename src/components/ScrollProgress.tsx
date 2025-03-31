
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-gradient-to-r from-theme-electricBlue via-theme-neonPurple to-theme-neonPink transition-all duration-100 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
      
      {/* Progress indicator */}
      <div 
        className="absolute top-0 h-6 w-6 rounded-full bg-gradient-to-r from-theme-electricBlue to-theme-neonPurple shadow-neon flex items-center justify-center text-[10px] font-bold -mt-2 transform transition-all duration-100 ease-out text-white"
        style={{ 
          left: `${scrollPercentage}%`, 
          transform: 'translateX(-50%)',
          opacity: scrollPercentage > 2 ? 1 : 0
        }}
      >
        {Math.round(scrollPercentage)}%
      </div>
    </div>
  );
};

export default ScrollProgress;
