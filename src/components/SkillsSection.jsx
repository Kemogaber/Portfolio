import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // AI & Data Science
  { name: "Python", level: 95, category: "ai_data" },
  { name: "PyTorch & TensorFlow", level: 90, category: "ai_data" },
  { name: "RAG & Ollama", level: 90, category: "ai_data" },
  { name: "Scikit-learn & XGBoost", level: 85, category: "ai_data" },
  { name: "OpenCV & YOLO", level: 80, category: "ai_data" },

  // Software Engineering & Backend
  { name: "C/C++", level: 90, category: "backend" },
  { name: "Java", level: 85, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "SQL & MongoDB", level: 85, category: "backend" },

  // Frontend
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },

  // Tools & Infrastructure
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Linux / Bash", level: 85, category: "tools" },
  { name: "Docker & Podman", level: 80, category: "tools" },
  { name: "ROS2", level: 75, category: "tools" },
];

// Mapped the categories to values and readable labels
const categories = [
  { value: "all", label: "All" },
  { value: "ai_data", label: "AI & Data" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "tools", label: "Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Buttons now sit inside the container */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 font-medium",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid now sits inside the container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
