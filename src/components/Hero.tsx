import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* Clean Textured Background — matching site blue/white theme */}
      <div 
        className={`fixed md:absolute inset-0 transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'} pointer-events-none z-0 bg-[#F8F9FA]`}
      >
        {/* Base: subtle cool gradient matching About/Skills/Contact sections */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(170deg, #FAFAFA 0%, #F0F4FA 35%, #EBF2FC 60%, #EFF6FF 100%)',
          }}
        />
        
        {/* Subtle dot grid pattern in cool gray-blue */}
        <div 
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBD5E1 0.7px, transparent 0.7px)',
            backgroundSize: '26px 26px',
          }}
        />

        {/* Very soft blue accent glow — center */}
        <div 
          className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[55vh]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(191, 219, 254, 0.25) 0%, rgba(219, 234, 254, 0.12) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Soft bottom-left blue tint — matches footer/contact gradient direction */}
        <div 
          className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[40vh]"
          style={{
            background: 'radial-gradient(ellipse at 30% 80%, rgba(191, 219, 254, 0.18) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Film grain / noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Top fade for navbar readability */}
        <div 
          className="absolute top-0 left-0 w-full h-[12vh] bg-gradient-to-b from-[#FAFAFA] to-transparent" 
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col h-screen pt-24 md:pt-[12vh] z-10">
        
        {/* Top Typography Header */}
        <div className={`text-center z-0 transition-all duration-1000 delay-200 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-tight text-gray-900 leading-none mb-1 md:mb-3">
            Hi I'm Gagan
          </h1>
          <h2 
            className="text-6xl md:text-[110px] lg:text-[140px] xl:text-[160px] font-light italic tracking-tight text-gray-950 leading-[1] md:leading-[0.85] select-none"
            style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
          >
            Product Designer
          </h2>
        </div>

        {/* Central Layout containing Floating elements & Portrait */}
        <div className="relative flex-grow flex w-full">
          
          {/* Left Floating Badge (Availability) */}
          <div className={`absolute left-0 md:left-[2%] lg:left-[5%] top-[15%] md:top-[25%] z-20 transition-all duration-1000 delay-500 hidden sm:block ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-white">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 m-[0px] border border-white"></span>
              </span>
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Available for new opportunities</span>
            </div>
          </div>

          <div className="flex w-full sm:hidden absolute top-[10%] items-center justify-center z-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/50">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                <span className="text-[11px] font-semibold tracking-wide">Available for work</span>
             </div>
          </div>

          {/* Right Floating Text (Bio) */}
          <div className={`absolute right-0 md:right-[2%] lg:right-[5%] top-[25%] md:top-[30%] z-20 max-w-[240px] lg:max-w-[300px] text-right transition-all duration-1000 delay-600 hidden md:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-lg lg:text-xl text-gray-900 font-medium leading-[1.4] tracking-tight">
              passionate about creating intuitive digital experiences that connect users with value.
            </p>
          </div>

          {/* Center Portrait Image */}
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60vh] md:h-[65vh] xl:h-[72vh] flex justify-center items-end z-10 transition-all duration-1000 delay-300 pointer-events-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
             {/* Glow behind portrait for depth */}
             <div 
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 197, 253, 0.18) 0%, rgba(191, 219, 254, 0.1) 40%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
             />
             <img
                src="/lovable-uploads/gaganpro.png"
                alt="Gagan Portfolio Portrait"
                className="relative h-full w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] pointer-events-auto"
                style={{
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
                }}
              />
          </div>

          {/* Lower Floating Elements (Avatars & CTA) */}
          <div className="absolute bottom-6 md:bottom-10 lg:bottom-12 w-full flex flex-col md:flex-row justify-between items-center md:items-end z-20 px-4 md:px-0 gap-6 md:gap-0">
            
            {/* Left: Trusted By */}
            <div className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 transition-all duration-1000 delay-700 w-full md:w-auto justify-center md:justify-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex -space-x-4">
                <img className="w-10 h-10 lg:w-[48px] lg:h-[48px] rounded-full border-[3px] border-[#FAFBFA] object-cover" src="https://i.pravatar.cc/100?img=33" alt="Client 1" />
                <img className="w-10 h-10 lg:w-[48px] lg:h-[48px] rounded-full border-[3px] border-[#FAFBFA] object-cover shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="Client 2" />
                <img className="w-10 h-10 lg:w-[48px] lg:h-[48px] rounded-full border-[3px] border-[#FAFBFA] object-cover shadow-sm" src="https://i.pravatar.cc/100?img=44" alt="Client 3" />
              </div>
              <div className="text-[11px] lg:text-xs text-gray-700 font-medium max-w-[150px] lg:max-w-[180px] leading-tight text-center sm:text-left">
                Trusted by over <strong className="text-gray-900 font-semibold">15+ happy clients</strong> across residential and commercial projects.
              </div>
            </div>

            {/* Right: Get In Touch CTA */}
            <div className={`transition-all duration-1000 delay-800 w-full md:w-auto flex justify-center md:justify-end ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
               <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 lg:px-10 py-3.5 lg:py-4 bg-[#18181B] text-white text-[15px] font-medium rounded-full hover:bg-black transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              >
                <span>Get in Touch</span>
                <svg 
                  className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
