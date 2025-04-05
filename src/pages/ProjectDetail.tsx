
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
    },
    'financial-dashboard': {
      title: "Financial Dashboard",
      category: "Frontend Development",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "Interactive dashboard for financial data visualization and analysis.",
      challenge: "The client needed a way to visualize complex financial data for their customers. The existing solution was static and difficult to understand.",
      process: "Collaborated with data analysts to understand key metrics. Created information architecture and data visualization sketches. Developed interactive prototypes and tested with target users.",
      solution: "Built a responsive dashboard using React with interactive charts, customizable views, and real-time data updates. Implemented filters and comparison features for deeper analysis.",
      results: [
        "90% of users reported better understanding of their financial data",
        "User engagement time increased by 230%",
        "Featured in industry publication for innovative financial tool design"
      ],
      tags: ["React", "Data Visualization", "Dashboard", "JavaScript", "Recharts"]
    },
    'health-wellness-app': {
      title: "Health & Wellness App",
      category: "Mobile App",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      description: "Mobile application for tracking fitness activities, nutrition, and wellness metrics.",
      challenge: "Create an intuitive mobile app that helps users track multiple health metrics while making the experience engaging and encouraging consistent use.",
      process: "Conducted user interviews to understand pain points with existing health apps. Created user flows, wireframes and interactive prototypes. Performed usability testing across different user groups.",
      solution: "Designed a clean, gamified interface with progress visualization, custom goal setting, and social sharing features. Implemented subtle animations and micro-interactions to create an engaging experience.",
      results: [
        "85% user retention after 3 months (industry average is 35%)",
        "Average 4.8/5 stars in app stores",
        "Featured in App Store's 'Apps We Love' collection"
      ],
      tags: ["Mobile Design", "iOS", "Android", "Gamification", "Health Tech"]
    },
    'corporate-brand-refresh': {
      title: "Corporate Brand Refresh",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1470&auto=format&fit=crop",
      description: "Complete brand identity refresh for a technology consulting firm.",
      challenge: "The client's brand was outdated and inconsistent across channels. They needed a modern identity that reflected their innovative approach while maintaining brand recognition.",
      process: "Conducted stakeholder interviews and brand workshops. Researched industry trends and competitor positioning. Developed multiple concept directions before refining the selected approach.",
      solution: "Created a comprehensive brand system including new logo, color palette, typography, and visual language. Developed detailed brand guidelines and templates for various applications.",
      results: [
        "92% of clients reported the new brand better represented the company's values",
        "Brand recognition increased by 34% in market research",
        "Won regional design award for corporate rebrand"
      ],
      tags: ["Branding", "Logo Design", "Style Guide", "Corporate Identity"]
    }
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
          </div>

          <div className="flex justify-between items-center mb-12">
            <Link 
              to="/#portfolio"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center font-medium"
            >
              <ChevronLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <a 
              href="#"
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
