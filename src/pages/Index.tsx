import { Mail, Linkedin, Github, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import {
  Database,
  Server,
  Cloud,
  GitBranch,
  Cpu,
  Layers,
  Code2,
  Zap,
  Box,
  Workflow,
  Search,
  Shield,
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const skills = [
    { name: "Java", icon: Code2 },
    { name: "Spring Boot", icon: Layers },
    { name: "Microservices", icon: Box },
    { name: "WebFlux", icon: Zap },
    { name: "Kafka", icon: Workflow },
    { name: "MongoDB", icon: Database },
    { name: "Snowflake", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Kubernetes", icon: Server },
    { name: "Jenkins", icon: GitBranch },
    { name: "ElasticSearch", icon: Search },
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "GCP", icon: Cloud },
    { name: "GenAI", icon: Sparkles },
    { name: "CI/CD", icon: Shield },
  ];

  const experiences = [
    {
      company: "Sephora",
      period: "2025 – Present",
      achievements: [
        "Designed Pushlite, reducing campaign push times and improving performance by 99.99%",
        "Integrated Next Beauty Offer (NBO) and Next Best Content (NBC) using ML, boosting personalized revenue by 30%",
        "Built GenAI-based automation tools for regression testing and query validation",
      ],
    },
    {
      company: "PetValu",
      period: "2024 – 2025",
      achievements: [
        "Migrated e-commerce microservices from AWS to GCP, improving speed by 30%",
        "Refactored legacy SpringBoot 1.x to 5.x codebases and introduced Java 21 modernization",
      ],
    },
    {
      company: "Gap Inc.",
      period: "2023 – 2024",
      achievements: [
        "Enhanced BR-Home and Shopify-integrated platform; streamlined order and returns by 30%",
        "Improved backend message efficiency by 25% using async services",
      ],
    },
    {
      company: "Starbucks",
      period: "2022 – 2023",
      achievements: [
        "Architected iHub Event System, automating product inventory tracking with 80% test coverage",
      ],
    },
    {
      company: "Gap Inc.",
      period: "2010 – 2022",
      achievements: [
        "Built BEST Tool, replacing legacy mainframe job monitoring systems",
        "Migrated legacy apps to Azure Cloud and improved efficiency by 75%",
      ],
    },
  ];

  const projects = [
    {
      title: "Pushlite System",
      description:
        "Real-time content delivery platform with 99.99% uptime, enabling instant campaign updates for Sephora.",
      link: "https://github.com/jhans866",
    },
    {
      title: "BEST Tool",
      description:
        "Modernized job monitoring system replacing legacy mainframes, improving operational efficiency at Gap Inc.",
      link: "https://github.com/jhans866",
    },
    {
      title: "iHub Events Tracker",
      description:
        "End-to-end inventory visibility system for Starbucks with comprehensive event tracking and automation.",
      link: "https://github.com/jhans866",
    },
    {
      title: "E-commerce GCP Migration",
      description:
        "Led AWS to GCP transformation for PetValu, achieving 30% performance improvement and modernized architecture.",
      link: "https://github.com/jhans866",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero animate-gradient"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(26, 188, 156, 0.95) 100%), url(${heroBackground})`,
            backgroundSize: "200% 200%, cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Building Scalable, Smart, and Beautiful Systems
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Lead Fullstack Java Backend Developer | AI Generalist | Cloud Innovator
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <a href="https://www.linkedin.com/in/jhansi-bendi-a0bb0a117/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                View LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30" asChild>
              <a href="https://github.com/jhans866" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-white/30" asChild>
              <a href="mailto:jhans.1986@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I'm <span className="font-semibold text-secondary">Jhansi Bendi</span>, a Lead Fullstack Java Backend Developer with over{" "}
              <span className="font-semibold">17 years of experience</span> designing, developing, and scaling enterprise-grade APIs and microservices.
            </p>
            <p>
              My expertise spans across <span className="font-semibold">Spring Boot, Microservices, WebFlux, Kafka, MongoDB, Snowflake, AWS, Azure, and GCP</span>. 
              I'm passionate about building distributed systems that perform beautifully, scale efficiently, and empower people to do more.
            </p>
            <p>
              I love mentoring teams, modernizing architectures, and integrating AI to automate processes — because technology should simplify complexity, not amplify it.
            </p>
          </div>
          <div className="mt-12 p-6 bg-gradient-subtle rounded-2xl border border-border shadow-elegant">
            <div className="flex gap-4">
              <Quote className="w-8 h-8 text-accent flex-shrink-0" />
              <p className="text-xl italic text-foreground">
                Innovation meets empathy in every line of code I write.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30" id="experience">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Experience Highlights</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background" id="skills">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden" id="leadership">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-foreground">Leadership & Mentorship</h2>
            <p className="text-2xl md:text-3xl text-primary-foreground/95 italic leading-relaxed">
              I lead with empathy, structure, and clarity — helping teams grow, collaborate, and deliver scalable systems with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background" id="projects">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30" id="contact">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's build something scalable and human together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to collaborate on your next big project? Reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow" asChild>
              <a href="mailto:jhans.1986@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                jhans.1986@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2" asChild>
              <a href="https://www.linkedin.com/in/jhansi-bendi-a0bb0a117/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2" asChild>
              <a href="https://github.com/jhans866" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2025 Jhansi Bendi — Crafted with ❤️, logic, and coffee.</p>
          <p className="text-sm opacity-80">Fueled by curiosity. Guided by clarity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
