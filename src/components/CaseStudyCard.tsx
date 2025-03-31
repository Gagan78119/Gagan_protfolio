
import { useState } from 'react';
import { ArrowRight, X, ExternalLink, ChevronRight, Check, ArrowUpRight } from 'lucide-react';

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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-theme-deepBlack via-theme-deepBlack/40 to-transparent opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-theme-electricBlue bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-theme-electricBlue transition-colors">{project.title}</h3>
            <p className="text-foreground/70 text-sm line-clamp-2 mb-4">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
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
          
          <div className="flex items-center text-theme-electricBlue text-sm font-medium">
            <span>View Case Study</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <div 
            className="bg-gradient-to-br from-theme-deepBlack/95 to-theme-deepBlack/90 rounded-xl shadow-neon max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-fade-in border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-white/10 backdrop-blur-md bg-theme-deepBlack/70">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 bg-theme-electricBlue rounded-full"></span>
                <h3 className="text-xl font-bold grad-text">{project.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {/* Hero image with overlay */}
              <div className="mb-8 relative h-[40vh] rounded-xl overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-deepBlack via-theme-deepBlack/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="px-3 py-1 rounded-full bg-theme-electricBlue/20 text-theme-electricBlue text-xs font-medium border border-theme-electricBlue/30">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-2">{project.title}</h2>
                  <p className="text-white/80 max-w-2xl">{project.description}</p>
                </div>
              </div>

              {/* Project details */}
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

              {/* Case study content */}
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-theme-electricBlue/30 transition-colors">
                  <h4 className="text-xl font-semibold mb-4 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-3 text-sm">01</span>
                    The Challenge
                  </h4>
                  <p className="leading-relaxed">{project.challenge}</p>
                </div>

                <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-theme-neonPurple/30 transition-colors">
                  <h4 className="text-xl font-semibold mb-4 text-theme-neonPurple flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-neonPurple/20 rounded-full mr-3 text-sm">02</span>
                    Process & Approach
                  </h4>
                  <p className="leading-relaxed">{project.process}</p>
                </div>

                <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-theme-electricBlue/30 transition-colors">
                  <h4 className="text-xl font-semibold mb-4 text-theme-electricBlue flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-electricBlue/20 rounded-full mr-3 text-sm">03</span>
                    Solution
                  </h4>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>

                <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-theme-neonPurple/30 transition-colors">
                  <h4 className="text-xl font-semibold mb-4 text-theme-neonPurple flex items-center">
                    <span className="w-8 h-8 inline-flex items-center justify-center bg-theme-neonPurple/20 rounded-full mr-3 text-sm">04</span>
                    Results & Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start p-3 bg-white/5 rounded-lg">
                        <span className="text-theme-electricBlue mr-2 mt-0.5">
                          <Check size={16} />
                        </span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button 
                  onClick={closeModal}
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Back to Portfolio
                  <ArrowRight size={16} />
                </button>
                
                <a 
                  href="#"
                  className="flex items-center justify-center gap-2 text-theme-electricBlue hover:underline w-full sm:w-auto px-4 py-2 bg-white/5 rounded-lg border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Live Project</span>
                  <ArrowUpRight size={16} />
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
