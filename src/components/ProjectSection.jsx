import React from "react";
const projects = [
  {
    id: 1,
    title: "Compiler Scanner and Parser",
    description:
      "a tiny language scanner and parser that does lexical anaylsis and transforms tokens to tree using EBNF rules",
    image: "/projects/parser.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Kemogaber/Tiny-Language-Scanner-and-Parser",
  },
  {
    id: 2,
    title: "Frozen Lake RL DQN",
    description:
      "A reinforcment learning DQN environment that solves frozen lake using Q-Learning",
    image: "/projects/DQN.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    githubUrl: "https://github.com/Kemogaber/Q-Learning",
  },
  {
    id: 3,
    title: "Frozen Lake RL DQN",
    description:
      "A reinforcment learning DQN environment that solves frozen lake using Q-Learning",
    image: "/projects/DQN.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    githubUrl: "https://github.com/Kemogaber/Q-Learning",
  }
];

const ProjectSection = () => {
  return (
    <section id="#projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
      </div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
