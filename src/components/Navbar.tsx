
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Track which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        // Cast the section to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-sm py-3 shadow-md'
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-blue-500 flex items-center">
            <span className="text-blue-500 text-3xl font-bold">Gagan</span>
            <span className="ml-1 text-gray-800 font-semibold hidden sm:inline">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-blue-500 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>Contact me</span>
              <ChevronDown size={16} className={`transform transition-transform ${activeSection === 'contact' ? 'rotate-180' : ''}`} />
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              className={`p-2 rounded-md ${scrolled || isMenuOpen ? 'text-gray-800' : 'text-blue-500'}`} 
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
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden transition-all duration-500 flex flex-col ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`text-xl font-medium py-2 px-4 rounded-md ${
                activeSection === link.href.substring(1)
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
              onClick={() => {
                toggleMenu();
                document.body.style.overflow = 'auto';
              }}
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => {
              toggleMenu();
              document.body.style.overflow = 'auto';
            }}
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
