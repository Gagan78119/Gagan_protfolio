
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          ? 'bg-white/90 backdrop-blur-sm py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold text-blue-500"
          >
            <div className="flex items-center">
              <span className="text-blue-500 text-3xl font-bold">A</span>
              <span className="text-blue-500 font-bold">X</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="#hero" className="text-blue-500 font-medium">Home</a>
              <a href="#services" className="text-gray-500 hover:text-blue-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-500 hover:text-blue-500 transition-colors">About me</a>
              <a href="#portfolio" className="text-gray-500 hover:text-blue-500 transition-colors">Projects</a>
            </div>

            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-blue-500 p-2"
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
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#hero" 
            className="text-blue-500 font-bold"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-gray-700 hover:text-blue-500 transition-colors" 
            onClick={toggleMenu}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-500 transition-colors" 
            onClick={toggleMenu}
          >
            About me
          </a>
          <a 
            href="#portfolio" 
            className="text-gray-700 hover:text-blue-500 transition-colors" 
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-500 text-white rounded-full"
            onClick={toggleMenu}
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
