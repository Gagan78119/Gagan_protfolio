
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
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold"
          >
            <span className="text-blue-600">JD</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#hero" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
              <a href="#about" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>About me</a>
              <a href="#services" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Services</a>
              <a href="#portfolio" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Projects</a>
              <a href="#contact" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
            </div>

            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className={`${scrolled || isMenuOpen ? 'text-gray-800' : 'text-white'} p-2`}
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
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#hero" 
            className="text-gray-800 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-800 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            About me
          </a>
          <a 
            href="#services" 
            className="text-gray-800 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="text-gray-800 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
