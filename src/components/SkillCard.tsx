
import { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  delay: number;
  isInView: boolean;
}

const SkillCard = ({ skill, delay, isInView }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card p-5 card-hover relative overflow-hidden group rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {/* Glowing background effect */}
      <div 
        className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-theme-electricBlue/5 opacity-50 
                   group-hover:w-48 group-hover:h-48 transition-all duration-500 blur-xl"
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${skill.level > 85 ? 'bg-theme-neonPurple' : 'bg-theme-electricBlue'}`}></span>
            <h3 className="font-semibold text-base md:text-lg">{skill.name}</h3>
          </div>
          <span className="text-2xs py-1 px-2 bg-white/5 rounded-full border border-white/10">{skill.category}</span>
        </div>
        
        <div className="h-1.5 bg-muted/30 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isInView ? `${skill.level}%` : '0%',
              background: skill.level > 85 
                ? 'linear-gradient(90deg, rgba(138, 43, 226, 0.7), rgba(212, 0, 255, 1))'
                : 'linear-gradient(90deg, rgba(0, 123, 255, 0.7), rgba(0, 123, 255, 1))'
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'background-pan 1.5s linear infinite'
                 }}
            />
          </div>
        </div>
        
        <div className="flex items-center text-xs text-foreground/60 justify-between">
          <div>Proficiency</div>
          <div className="font-medium">{skill.level}%</div>
        </div>
        
        {skill.description && (
          <div 
            className={`mt-3 text-sm text-foreground/70 transition-all duration-300 flex items-center gap-1 ${
              isHovered ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <ChevronRight size={14} className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
            <p className="line-clamp-2">{skill.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
