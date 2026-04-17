import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Compiler Scanner and Parser",
    description:
      "A tiny language scanner and parser that performs lexical analysis and transforms tokens to AST using EBNF grammar rules",
    image: "/projects/parser.png",
    tags: ["Python", "Tkinter", "Graphviz", "AST"],
    githubUrl: "https://github.com/Kemogaber/Tiny-Language-Scanner-and-Parser",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Frozen Lake RL DQN",
    description:
      "A reinforcement learning environment implementing Deep Q-Networks to solve the frozen lake puzzle using Q-Learning algorithms",
    image: "/projects/DQN.png",
    tags: ["DQN", "Q-Learning", "Reinforcement Learning", "PyTorch"],
    githubUrl: "https://github.com/Kemogaber/Q-Learning",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Quoridor Arena",
    description:
      "An interactive Quoridor board game with multiple AI difficulty levels, featuring undo/redo functionality and adversarial search algorithms",
    image: "/projects/Quoridor_Game.png",
    tags: ["Qt", "Design Patterns", "Adversarial Search", "AI"],
    githubUrl: "https://github.com/Kemogaber/Quoridor-Arena",
    liveUrl: null,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail and performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-xl overflow-hidden shadow-lg card-hover border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <ExternalLink size={16} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ArrowRight size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kemogaber"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
