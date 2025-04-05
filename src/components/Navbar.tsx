
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme change logic here if needed
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass border-b border-white/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold grad-text"
          >
            Design<span className="text-theme-electricBlue">Future</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-theme-electricBlue transition-colors hover:scale-105 transform duration-200">About</a>
              <a href="#portfolio" className="hover:text-theme-electricBlue transition-colors hover:scale-105 transform duration-200">Work</a>
              <a href="#skills" className="hover:text-theme-electricBlue transition-colors hover:scale-105 transform duration-200">Skills</a>
              <a href="#contact" className="hover:text-theme-electricBlue transition-colors hover:scale-105 transform duration-200">Contact</a>
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              className="text-foreground p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 glass z-40 md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#hero" 
            className="text-2xl font-bold grad-text"
            onClick={toggleMenu}
          >
            Design<span className="text-theme-electricBlue">Future</span>
          </a>
          <a 
            href="#about" 
            className="hover:text-theme-electricBlue transition-colors transform hover:scale-110" 
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-theme-electricBlue transition-colors transform hover:scale-110" 
            onClick={toggleMenu}
          >
            Work
          </a>
          <a 
            href="#skills" 
            className="hover:text-theme-electricBlue transition-colors transform hover:scale-110" 
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="hover:text-theme-electricBlue transition-colors transform hover:scale-110" 
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
