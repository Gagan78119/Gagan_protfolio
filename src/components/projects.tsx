import { useState, useEffect, useRef } from 'react';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: string[];
  link: string;
}

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Akross AI Website',
      subtitle: 'Corporate AI Solutions',
      thumbnail: '/project-imgs/akrossai.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://akrossai.com/'
    },
    {
      id: 2,
      title: 'HyFind Platform',
      subtitle: 'AI-Powered SaaS',
      thumbnail: '/project-imgs/hyfind.png',
      tags: ['React', 'TS', 'React Query'],
      link: 'https://hyfind.ai/'
    },
    {
      id: 3,
      title: 'ManaCLG App',
      subtitle: 'Student Platform',
      thumbnail: '/project-imgs/manaclg.png',
      tags: ['UI/UX', 'React', 'Responsive'],
      link: 'https://manaclg.com/'
    },
    {
      id: 4,
      title: 'Fake Job Detection',
      subtitle: 'Fraud Detection',
      thumbnail: '/project-imgs/fakejobdetection2.png',
      tags: ['React', 'Flask', 'Python'],
      link: 'https://fake-job-detection.vercel.app/'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#FAFAFA] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8F8EE] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#EEF9F1] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F2FAF4] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none opacity-40" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-serif italic text-gray-500 mb-4 text-base md:text-lg">
            / Selected Projects
          </p>
          <h2 className="text-4xl md:text-[56px] font-serif text-gray-900 tracking-[-0.02em] font-medium">
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-3 sm:p-4 rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
              }}
            >
              {/* Image Frame Setup */}
              <div className="relative aspect-video w-full rounded-[24px] overflow-hidden bg-gray-50 mb-5 border border-gray-100/50 p-2 sm:p-4">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] bg-white group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle hover overlay for the image */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Overlay Inner Content (Positioned absolute over the padding container) */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex justify-end pointer-events-none">
                  {/* View Live Animating Pill */}
                  <div className="bg-white/95 backdrop-blur-md text-gray-900 px-5 py-2.5 rounded-full text-[13px] md:text-sm font-semibold flex items-center justify-center gap-1.5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg sm:flex-shrink-0 pointer-events-auto">
                    View Live
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title & Tags */}
              <div className="flex flex-col gap-4 px-2 pb-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-bold text-gray-900 tracking-tight leading-none mb-1.5 focus:outline-none">
                      {project.title}
                    </h3>
                    <p className="text-[15px] font-medium text-gray-500">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded-full text-[11px] md:text-[12px] font-semibold tracking-wide uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
