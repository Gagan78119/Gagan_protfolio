
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold grad-text"
            >
              Design<span className="text-accent">Narrative</span>
            </a>
            <p className="mt-2 text-foreground/70 max-w-md">
              Crafting meaningful digital experiences through thoughtful design and development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
            
            <p className="text-sm text-foreground/70">
              &copy; {new Date().getFullYear()} Design Narrative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
