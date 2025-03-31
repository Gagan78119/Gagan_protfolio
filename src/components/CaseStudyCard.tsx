
import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

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
        className="group rounded-xl overflow-hidden card-hover cursor-pointer bg-card h-full flex flex-col"
        onClick={openModal}
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-muted w-full">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm font-medium">View Case Study</span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="text-xs font-medium text-primary mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-muted text-foreground/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-foreground/70">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-card border-b">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full rounded-lg object-cover max-h-[40vh]"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Category</h4>
                  <p>{project.category}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg col-span-2">
                  <h4 className="font-semibold mb-2 text-primary">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-background text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">The Challenge</h4>
                  <p>{project.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Process & Approach</h4>
                  <p>{project.process}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">Results & Impact</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <button 
                  onClick={closeModal}
                  className="btn-primary inline-flex items-center"
                >
                  Back to Portfolio
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
