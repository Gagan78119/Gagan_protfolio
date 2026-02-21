import { useEffect, useRef, useState } from 'react';

interface BentoSkill {
  name: string;
  icon: React.ReactNode;
}

interface BentoCard {
  id: string;
  title: string;
  subtitle?: string;
  skills: BentoSkill[];
  colSpan?: number; // 1-2 cols
  rowSpan?: number; // 1-2 rows
}

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const bentoCards: BentoCard[] = [
    {
      id: 'presentation',
      title: 'Presentation Layer',
      subtitle: 'User interface & interactivity',
      colSpan: 2,
      rowSpan: 1,
      skills: [
        { name: 'React', icon: <img src="/icons/react-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Next.js', icon: <img src="/icons/next-js-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'TypeScript', icon: <img src="/icons/typescript-logo-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'HTML5', icon: <img src="/icons/html-5-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'CSS3', icon: <img src="/icons/css-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Tailwind CSS', icon: <img src="/icons/tailwind-css-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'JavaScript', icon: <img src="/icons/js-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'shadcn/ui', icon: <img src="/icons/shadcn-ui-seeklogo.svg" alt="" className="w-8 h-8" /> },
      ],
    },
    {
      id: 'application-integration',
      title: 'Application & Integration',
      subtitle: 'Backend services & API connectivity',
      colSpan: 2,
      rowSpan: 1,
      skills: [
        { name: 'Node.js', icon: <img src="/icons/nodejs-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Express.js', icon: <img src="/icons/express-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Python', icon: <img src="/icons/python-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'FastAPI', icon: <img src="/icons/FastAPI.svg" alt="" className="w-8 h-8" /> },
        { name: 'REST APIs', icon: <img src="/icons/api-interface-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Axios', icon: <img src="/icons/axios.svg" alt="" className="w-8 h-8" /> },
        { name: 'React Query', icon: <img src="/icons/ReactQueryIcon.svg" alt="" className="w-8 h-8" /> },
        { name: 'Postman', icon: <img src="/icons/postman-icon-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
      ],
    },
    {
      id: 'data',
      title: 'Data & Persistence',
      subtitle: 'Storage & databases',
      colSpan: 1,
      rowSpan: 1,
      skills: [
        { name: 'PostgreSQL', icon: <img src="/icons/pgsql-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'MongoDB', icon: <img src="/icons/mongo-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'MySQL', icon: <img src="/icons/mysql-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Supabase', icon: <img src="/icons/supabase-logo-icon.svg" alt="" className="w-8 h-8" /> },
      ],
    },
    {
      id: 'devops',
      title: 'Infrastructure & Workflow',
      subtitle: 'Cloud deployment & collaboration',
      colSpan: 2, // Check layout later
      rowSpan: 1,
      skills: [
        { name: 'Firebase', icon: <img src="/icons/firebase-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Vercel', icon: <img src="/icons/vercel-icon-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Git', icon: <img src="/icons/git-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'GitHub', icon: <img src="/icons/github-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'Jira', icon: <img src="/icons/jira-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
        { name: 'ClickUp', icon: <img src="/icons/clickup.svg" alt="" className="w-8 h-8" /> },
      ],
    },
    {
      id: 'ai',
      title: 'AI & Intelligence',
      subtitle: 'Emerging capabilities & LLM integration',
      colSpan: 1, // Check layout later
      rowSpan: 1,
      skills: [
        { name: 'Prompt Engineering', icon: <img src="/icons/prompt-engineering-logo.png" alt="" className="w-8 h-8" /> },
        { name: 'AI Tools', icon: <img src="/icons/chatgpt-6.svg" alt="" className="w-8 h-8" /> },
        { name: 'API Integration', icon: <img src="/icons/api-interface-svgrepo-com.svg" alt="" className="w-8 h-8" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={containerRef}>
        {/* Page Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-600 font-semibold">
            Tech Stack Architecture
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 leading-[1.1] tracking-[-0.02em]">
            Production Systems
          </h2>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            A modern, layered tech stack for building reliable, scalable applications.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Row 1: Presentation Layer (spans 2 cols, left) */}
          <article
            className={`md:col-span-2 group relative rounded-2xl p-6 md:p-8 border-2 border-blue-100/60 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-cyan-50/40 hover:border-cyan-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.01] ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? '0ms' : '0ms',
            }}
          >
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-cyan-500/3 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Card Header */}
              <header className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {bentoCards[0].title}
                </h3>
                {bentoCards[0].subtitle && (
                  <p className="text-xs md:text-sm text-gray-600 mt-1.5">
                    {bentoCards[0].subtitle}
                  </p>
                )}
              </header>

              {/* Skills Grid */}
              <div className="flex-1 flex flex-col justify-start">
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {bentoCards[0].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center group/skill cursor-default transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: isInView ? `${skillIndex * 40}ms` : '0ms',
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover/skill:from-cyan-200 group-hover/skill:to-cyan-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs md:text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover/skill:text-cyan-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>

          {/* Row 1: Application & Integration Layer (spans 2 cols, right) */}
          <article
            className={`md:col-span-2 group relative rounded-2xl p-6 md:p-8 border-2 border-blue-100/60 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-emerald-50/40 hover:border-emerald-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.01] ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? '100ms' : '0ms',
            }}
          >
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-emerald-500/3 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Card Header */}
              <header className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {bentoCards[1].title}
                </h3>
                {bentoCards[1].subtitle && (
                  <p className="text-xs md:text-sm text-gray-600 mt-1.5">
                    {bentoCards[1].subtitle}
                  </p>
                )}
              </header>

              {/* Skills Grid */}
              <div className="flex-1 flex flex-col justify-start">
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {bentoCards[1].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center group/skill cursor-default transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: isInView ? `${100 + skillIndex * 40}ms` : '0ms',
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover/skill:from-emerald-200 group-hover/skill:to-emerald-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs md:text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover/skill:text-emerald-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>

          {/* Row 2: Data & Persistence (col 1) */}
          <article
            className={`group relative rounded-2xl p-6 md:p-8 border-2 border-blue-100/60 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-orange-50/40 hover:border-orange-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.01] ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? '150ms' : '0ms',
            }}
          >
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-orange-500/3 group-hover:from-orange-500/5 group-hover:to-orange-500/5 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Card Header */}
              <header className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {bentoCards[2].title}
                </h3>
                {bentoCards[2].subtitle && (
                  <p className="text-xs md:text-sm text-gray-600 mt-1.5">
                    {bentoCards[2].subtitle}
                  </p>
                )}
              </header>

              {/* Skills Grid */}
              <div className="flex-1 flex flex-col justify-start">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {bentoCards[2].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center group/skill cursor-default transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: isInView ? `${150 + skillIndex * 40}ms` : '0ms',
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover/skill:from-orange-200 group-hover/skill:to-orange-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs md:text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover/skill:text-orange-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>

          {/* Row 2: Infrastructure & Workflow (spans 2 cols, center) */}
          <article
            className={`md:col-span-2 group relative rounded-2xl p-6 md:p-8 border-2 border-blue-100/60 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-violet-50/40 hover:border-violet-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.01] ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? '300ms' : '0ms',
            }}
          >
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-transparent to-violet-500/3 group-hover:from-violet-500/5 group-hover:to-violet-500/5 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Card Header */}
              <header className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {bentoCards[3].title}
                </h3>
                {bentoCards[3].subtitle && (
                  <p className="text-xs md:text-sm text-gray-600 mt-1.5">
                    {bentoCards[3].subtitle}
                  </p>
                )}
              </header>

              {/* Skills Grid */}
              <div className="flex-1 flex flex-col justify-start">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {bentoCards[3].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center group/skill cursor-default transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: isInView ? `${300 + skillIndex * 40}ms` : '0ms',
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover/skill:from-violet-200 group-hover/skill:to-violet-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs md:text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover/skill:text-violet-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>

          {/* Row 2: AI & Intelligence (col 4) */}
          <article
            className={`group relative rounded-2xl p-6 md:p-8 border-2 border-blue-100/60 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-amber-50/40 hover:border-amber-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.01] ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? '400ms' : '0ms',
            }}
          >
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-transparent to-amber-500/3 group-hover:from-amber-500/5 group-hover:to-amber-500/5 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Card Header */}
              <header className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {bentoCards[4].title}
                </h3>
                {bentoCards[4].subtitle && (
                  <p className="text-xs md:text-sm text-gray-600 mt-1.5">
                    {bentoCards[4].subtitle}
                  </p>
                )}
              </header>

              {/* Skills Grid */}
              <div className="flex-1 flex flex-col justify-start">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {bentoCards[4].skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center group/skill cursor-default transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: isInView ? `${400 + skillIndex * 40}ms` : '0ms',
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover/skill:from-amber-200 group-hover/skill:to-amber-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs md:text-sm font-semibold text-gray-900 text-center line-clamp-2 group-hover/skill:text-amber-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        </div>

        {/* Footer Philosophy */}
        <div className="mt-16 pt-10 border-t-2 border-blue-200 text-center">
          <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-900">Modern Web Architecture</span> — Built for performance, scalability, and developer experience.
            From interactive frontends with React & Next.js, to powerful backends with Node.js & Python, to managed databases and APIsâ€”
            designed for production reliability at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
