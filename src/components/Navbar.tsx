import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
  
  // Rearranged navigation links in the requested order
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
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

          {/* Mobile Navigation Toggle - Increased z-index */}
          <div className="md:hidden">
            <button 
              className={`p-2 rounded-md fixed top-4 right-4 z-[999999] transition-all duration-300 focus:outline-none ${
                isMenuOpen ? 'text-blue-500' : (scrolled ? 'text-gray-800' : 'text-gray-800')
              }`}
              onClick={() => toggleMenu()} 
              aria-label="Toggle Menu"
            >
              <div className="w-7 h-5 relative flex items-center justify-center">
                {/* Simplified hamburger icon */}
                <span 
                  className={`absolute h-[2px] bg-current transition-all duration-300 ease-out ${
                    isMenuOpen ? 'w-7 top-2 -rotate-45' : 'w-7 top-0'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[2px] w-7 bg-current top-2 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-0 transform scale-x-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`absolute h-[2px] bg-current transition-all duration-300 ease-out ${
                    isMenuOpen ? 'w-7 top-2 rotate-45' : 'w-7 top-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full-screen overlay */}
      {isMenuOpen && (
        <div 
          className="fixed top-0 left-0 w-screen h-screen bg-white z-[999998]"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            overflowY: 'auto'
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
            {/* Remove the circular close button and rely only on the hamburger toggle */}
            
            <div className="w-16 h-1 bg-blue-500/20 rounded-full mb-12 mt-16"></div>
            
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`text-xl font-medium py-3 px-6 rounded-md w-full max-w-xs text-center transition-all duration-300 
                  ${activeSection === link.href.substring(1)
                    ? 'text-white bg-blue-500 shadow-lg shadow-blue-500/20'
                    : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector(link.href);
                  if (targetElement) {
                    setTimeout(() => {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                      toggleMenu();
                      document.body.style.overflow = 'auto';
                    }, 100);
                  }
                }}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 w-full max-w-xs"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                setTimeout(() => {
                  window.scrollTo({
                    top: document.getElementById('contact')?.offsetTop || 0,
                    behavior: 'smooth'
                  });
                }, 300);
              }}
              style={{
                transitionDelay: isMenuOpen ? `${navLinks.length * 100 + 100}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Contact me
              <ChevronDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
