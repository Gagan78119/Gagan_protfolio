import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      ref={sectionRef}
      className="relative bg-[#F8F9FA] py-24 md:py-32 overflow-hidden" 
    >
      {/* Optional faint noise/grain texture like the image has a slight paper texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1100px]">
        {/* Header */}
        <div className={`flex flex-col items-center mb-16 md:mb-20 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 
            className="text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-[#1A1F2C] mb-5"
            style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
          >
            Crafting User Experiences
          </h2>
          <div className="w-56 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>

        {/* Main Grid container */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,340px)] gap-12 lg:gap-16 transition-all duration-700 delay-200 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Column Area */}
          <div className="flex flex-col gap-10 lg:gap-12">
            
            {/* Top row of left area: Image + Philosophy text */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-stretch">
              
              {/* Portrait Image */}
              <div className="relative shrink-0 mx-auto md:mx-0 w-[240px] md:w-[260px]">
                <img
                  src="/lovable-uploads/gaganimg.jpg"
                  alt="Gagan Dileep"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Central Philosophy Text */}
              <div className="flex flex-col justify-center gap-6 text-[#475569] max-w-[40ch]">
                <h3 
                  className="text-2xl md:text-[28px] text-[#1E293B] leading-[1.3] font-normal"
                  style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
                >
                  I build digital products from idea to production.
                </h3>
                
                <p className="text-[17px] leading-[1.6]">
                  With experience designing and shipping AI-powered SaaS platforms, 
                  I combine UX strategy with scalable frontend systems.
                </p>
                
                <div className="pt-1">
                  <p className="text-[17px] leading-[1.6] mb-4 text-[#334155]">My approach is simple:</p>
                  <ul className="space-y-3.5">
                    {['Design with clarity.', 'Build with structure.', 'Ship with ownership.'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0"></div>
                        <span className="text-[17px] text-[#475569]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom duplicated paragraph snippet */}
            <div className="text-[17px] leading-[1.6] text-[#475569] max-w-[65ch]">
              <p className="mb-2">
                I build digital products from idea to production.
              </p>
              <p>
                With experience designing and shipping AI-powered SaaS platforms, 
                I combine UX strategy with scalable frontend systems.
              </p>
            </div>
            
          </div>

          {/* Right Column Area (Strengths + Metrics) */}
          <div className="lg:pl-12 lg:border-l border-[#E2E8F0] flex flex-col pt-8 lg:pt-2 border-t lg:border-t-0 mt-4 lg:mt-0">
            
            {/* Selected Strengths */}
            <div className="mb-12">
              <h4 className="text-[13px] tracking-[0.15em] uppercase text-[#64748B] font-semibold mb-6">
                Selected Strengths
              </h4>
              <ul className="space-y-4">
                {[
                  'End-to-end product builder',
                  'AI SaaS experience',
                  'React & TypeScript systems',
                  'UX-driven engineering'
                ].map((strength, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0 opacity-80"></div>
                    <span className="text-[16px] text-[#334155]">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horizontal Divider */}
            <div className="h-[1px] w-full bg-[#E2E8F0] mb-12"></div>

            {/* Impact Highlights */}
            <div>
              <h4 className="text-[13px] tracking-[0.15em] uppercase text-[#64748B] font-semibold mb-8">
                Impact Highlights
              </h4>
              <div className="space-y-8">
                {/* Metric 1 */}
                <div className="flex items-center gap-4">
                  <span 
                    className="text-4xl lg:text-[40px] font-normal text-[#1E293B] leading-none"
                    style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
                  >
                    10k+
                  </span>
                  <span className="text-[16px] text-[#475569] pt-1 leading-snug">Users served</span>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center">
                  <span className="text-[16px] text-[#475569] leading-snug">
                    AI SaaS shipped to production
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-4">
                  <span 
                    className="text-4xl lg:text-[40px] font-normal text-[#1E293B] leading-none"
                    style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
                  >
                    150+
                  </span>
                  <span className="text-[16px] text-[#475569] pt-1 leading-snug">Students mentored</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
