
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Award, Users, Lightbulb, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // In a real application, you would fetch the project data based on the projectId
  // For this example, we'll use hardcoded data
  const projects = {
    'ecommerce-redesign': {
      title: "E-commerce Redesign",
      category: "UX/UI Design",
      thumbnail: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete redesign of an e-commerce platform to improve user experience and increase conversions.",
      challenge: "The client was struggling with high cart abandonment rates and low mobile conversion. The existing interface was cluttered and the checkout process was complicated.",
      process: "I started with extensive user research and competitive analysis. Created user personas and journey maps to identify pain points. Developed wireframes and interactive prototypes that were tested with real users in multiple iterations.",
      solution: "Designed a clean, intuitive interface with simplified navigation, improved product filtering, and a streamlined 3-step checkout process. Implemented responsive design principles for optimal mobile experience.",
      results: [
        "28% increase in conversion rate",
        "42% reduction in cart abandonment",
        "65% improvement in mobile sales",
        "User satisfaction score improved from 3.2/5 to 4.7/5"
      ],
      tags: ["E-commerce", "UX Research", "Wireframing", "Prototyping", "Figma"]
    },    'learning-system-dashboard': {
      title: "Learning System Dashboard",
      category: "Frontend Development",
      thumbnail: "/lovable-uploads/learning system dashboard.png",
      description: "A web-based learning tracker built with HTML, CSS, Tailwind CSS, and JavaScript to help users monitor their progress in learning programming languages.",
      challenge: "Create an intuitive system for users to track their progress in learning programming languages, with visual feedback and persistence of data.",
      process: "Identified key metrics for learning progress. Designed a user-friendly interface with clear visual indicators. Implemented data persistence using local storage to ensure user data is saved between sessions.",
      solution: "Built a responsive dashboard that allows users to set deadlines, track overall and sub-topic progress, and visualize learning milestones with interactive UI updates. The system ensures data persistence using local storage and provides a responsive, user-friendly experience.",
      results: [
        "Users reported 40% better adherence to learning schedules",
        "Interactive visualization helped users identify knowledge gaps",
        "95% of test users reported the system was intuitive to use",
        "Data persistence ensured continuity across multiple learning sessions"
      ],
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Local Storage", "Responsive Design"]
    },    'fake-job-detection': {
      title: "Fake Job Detection",
      category: "Data Science",
      thumbnail: "/lovable-uploads/Screenshot 2025-05-12 191256.png",
      description: "An intelligent system that helps users identify fraudulent job postings to protect job seekers from scams.",
      challenge: "Develop a reliable system to detect fraudulent job postings in online platforms, helping job seekers avoid scams that can lead to identity theft, financial loss, or wasted time.",
      process: "Collected and analyzed thousands of legitimate and fraudulent job postings. Applied natural language processing techniques to identify patterns and warning signs. Developed and trained a machine learning model using Python to classify job listings.",
      solution: "Created a data-driven detection system that analyzes job descriptions, company information, and posting patterns to identify potential scams. Implemented a user-friendly interface where users can paste job descriptions for immediate analysis.",
      results: [
        "93% accuracy in detecting fraudulent job postings",
        "Protected over 500 users from potential scams during initial testing",
        "Reduced average detection time from hours of manual research to seconds",
        "Successfully identified new scam patterns not present in training data"
      ],
      tags: ["Python", "Machine Learning", "Data Analysis", "Web Scraping", "NLP"]
    },
  };
  
  const project = projects[projectId as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/#portfolio" 
            className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Portfolio
          </Link>
          
          <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-8">
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

          <div className="space-y-8 mb-12">
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
          </div>          <div className="flex justify-between items-center mb-12">
            <Link 
              to="/#portfolio"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center font-medium"
            >
              <ChevronLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <a 
              href={
                projectId === 'learning-system-dashboard' 
                  ? 'https://skill-flow.netlify.app/' 
                  : projectId === 'fake-job-detection'
                  ? 'https://fake-job-detection.vercel.app/'
                  : '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center font-medium"
            >
              <span>Visit Live Project</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
