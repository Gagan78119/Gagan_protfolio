
import { useState } from 'react';
import { ArrowRight, X, ExternalLink } from 'lucide-react';

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  challenge: string;
  process: string;
  solution: string;
  results: string[];
  tags: string[];
}

interface CaseStudyCardProps {
  project: CaseStudy;
}

const CaseStudyCard = ({ project }: CaseStudyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className="group rounded-xl overflow-hidden hover-tilt cursor-pointer glass-card h-full flex flex-col border border-white/10"
        onClick={openModal}
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-muted/30 w-full">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-theme-deepBlack/90 via-theme-deepBlack/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full">
              <span className="text-white text-sm font-medium flex items-center">
                View Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="text-xs font-medium text-theme-electricBlue mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-theme-electricBlue transition-colors">{project.title}</h3>
            <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-white/5 text-foreground/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-foreground/70 border border-white/10">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-gradient-to-br from-theme-deepBlack/95 to-theme-deepBlack/80 glass rounded-xl shadow-neon max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-white/10 backdrop-blur-md bg-theme-deepBlack/50">
              <h3 className="text-xl font-bold grad-text">{project.title}</h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-8 group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full rounded-lg object-cover max-h-[40vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-deepBlack/80 to-transparent opacity-70"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-theme-electricBlue">Category</h4>
                  <p>{project.category}</p>
                </div>
                <div className="glass-card p-4 rounded-lg col-span-2">
                  <h4 className="font-semibold mb-2 text-theme-electricBlue">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-foreground/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass-card p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-2">01</span>
                    The Challenge
                  </h4>
                  <p>{project.challenge}</p>
                </div>

                <div className="glass-card p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-2">02</span>
                    Process & Approach
                  </h4>
                  <p>{project.process}</p>
                </div>

                <div className="glass-card p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-2">03</span>
                    Solution
                  </h4>
                  <p>{project.solution}</p>
                </div>

                <div className="glass-card p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-2">04</span>
                    Results & Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-theme-electricBlue mr-2">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <button 
                  onClick={closeModal}
                  className="btn-primary inline-flex items-center"
                >
                  Back to Portfolio
                  <ArrowRight size={16} className="ml-2" />
                </button>
                
                <a 
                  href="#"
                  className="inline-flex items-center text-theme-electricBlue hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Live Project</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
