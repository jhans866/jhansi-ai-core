import { Code2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  index: number;
}

export const ProjectCard = ({ title, description, link, index }: ProjectCardProps) => {
  return (
    <Card 
      className="p-6 hover-lift bg-card border-border shadow-card h-full flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
        <Code2 className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
      {link && (
        <Button variant="outline" size="sm" className="w-full group" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn More
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      )}
    </Card>
  );
};
