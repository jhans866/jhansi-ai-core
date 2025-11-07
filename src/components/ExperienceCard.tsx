import { Building2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  company: string;
  period: string;
  achievements: string[];
  index: number;
}

export const ExperienceCard = ({ company, period, achievements, index }: ExperienceCardProps) => {
  return (
    <Card 
      className="p-6 hover-lift bg-card border-border shadow-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
          <Building2 className="w-6 h-6 text-accent-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">{company}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <TrendingUp className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
