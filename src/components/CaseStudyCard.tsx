
import { useState } from 'react';
import { ArrowRight, X, ExternalLink, ChevronRight, Award, Users, Lightbulb, CheckCircle } from 'lucide-react';

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

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        className="group rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-100"
        onClick={openModal}
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video w-full">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full">
              <span className="text-white text-sm font-medium flex items-center">
                View Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="text-xs font-medium text-blue-500 mb-2 bg-blue-50 inline-block px-2 py-1 rounded">{project.category}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors">{project.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-100 backdrop-blur-md bg-white/90">
              <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-500">Case Study</span>
                <ChevronRight size={12} className="text-gray-300" />
                <h3 className="text-xl font-bold text-blue-500">{project.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-0">
              <div className="relative h-[40vh] group">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="text-sm font-medium bg-blue-500 px-3 py-1 rounded-full inline-block mb-3">{project.category}</span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-gray-200 max-w-xl">{project.description}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-semibold mb-2 text-blue-500 text-sm">Project Category</h4>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 col-span-2">
                    <h4 className="font-semibold mb-2 text-blue-500 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs rounded-full bg-white text-gray-700 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="w-10 h-10 inline-flex items-center justify-center bg-red-100 text-red-500 rounded-full mr-3">
                        <Lightbulb size={20} />
                      </span>
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="w-10 h-10 inline-flex items-center justify-center bg-blue-100 text-blue-500 rounded-full mr-3">
                        <Users size={20} />
                      </span>
                      Process & Approach
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{project.process}</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="w-10 h-10 inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full mr-3">
                        <Award size={20} />
                      </span>
                      Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="w-10 h-10 inline-flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                        <CheckCircle size={20} />
                      </span>
                      Results & Impact
                    </h4>
                    <ul className="space-y-3 mt-4">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <span className="text-blue-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <button 
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center font-medium"
                  >
                    Back to Portfolio
                  </button>
                  
                  <a 
                    href="#"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
