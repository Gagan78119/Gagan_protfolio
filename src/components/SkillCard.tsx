
import { useState } from 'react';

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
      className="bg-card rounded-lg p-5 card-hover relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 opacity-60" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">{skill.name}</h3>
          <span className="text-xs py-1 px-2 bg-muted rounded-full">{skill.category}</span>
        </div>
        
        <div className="h-2 bg-muted/50 rounded-full mb-3 overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isInView ? `${skill.level}%` : '0%',
              background: skill.level > 80 
                ? 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)' 
                : undefined
            }}
          />
        </div>
        
        <div 
          className={`text-sm text-foreground/70 transition-all duration-300 ${
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
