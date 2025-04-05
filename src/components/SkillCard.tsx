
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

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
      className="glass-card p-5 card-hover relative overflow-hidden group hover:shadow-neon border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-theme-electricBlue/10 opacity-60 group-hover:w-32 group-hover:h-32 transition-all" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Sparkles className="w-4 h-4 text-theme-electricBlue mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-bold text-lg">{skill.name}</h3>
          </div>
          <span className="text-xs py-1 px-2 bg-white/5 rounded-full border border-white/10">{skill.category}</span>
        </div>
        
        <div className="h-2 bg-muted/50 rounded-full mb-3 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out relative"
            style={{ 
              width: isInView ? `${skill.level}%` : '0%',
              background: skill.level > 80 
                ? 'linear-gradient(90deg, rgba(0, 123, 255, 1), rgba(138, 43, 226, 1))'
                : 'linear-gradient(90deg, rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 1))'
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'background-pan 1.5s linear infinite'
                 }}
            />
          </div>
        </div>
        
        <div 
          className={`text-sm text-foreground/80 transition-all duration-300 ${
            isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
