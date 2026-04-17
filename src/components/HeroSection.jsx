import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="opacity-0 animate-fade-in block">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1 block">
            Kareem
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 block">
            Halaby
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
          Engineering intelligent systems from ingestion to interface. I develop
          robust ML backends and Agentic systems, then deploy them as
          responsive, production-ready web experiences.
        </p>
        <div className="pt-8 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" onClick={scrollToProjects} className="cosmic-button inline-flex items-center gap-2">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
