import React, { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "JCH",
    description:
      "A full-stack project management application designed to handle project components, including task assignments, tracking, and resource management, powered by a Node.js backend and MySQL database.",
    technologies: ["Node.js", "Express", "MySQL"],
  },
  {
    title: "RMC Portal",
    description:
      "A centralized portal for managing repair, maintenance, and calibration activities, featuring role-based access, workflow automation, and data-driven insights.",
    technologies: ["Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Meeting Manager",
    description:
      "A smart scheduling system with recurring events and real-time notifications.",
    technologies: ["React", "Node.js", "MySQL", "Socket.IO"],
  },
];

export default function Project() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1.5;
    let animationFrame;

    const scroll = () => {
      if (!container || isPaused) {
        animationFrame = requestAnimationFrame(scroll);
        return;
      }

      scrollAmount += speed;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-16 px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 relative z-10">
        🚀 My Projects
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-8 relative z-10 pb-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
          >
            <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-300 text-sm">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-600/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
