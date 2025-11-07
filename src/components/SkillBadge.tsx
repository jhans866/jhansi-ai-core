import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  index: number;
}

export const SkillBadge = ({ name, icon: Icon, index }: SkillBadgeProps) => {
  return (
    <div
      className="group relative px-4 py-3 bg-card border border-border rounded-lg hover-lift hover:border-accent transition-all duration-300"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
    </div>
  );
};
