import React, { useEffect, useRef } from "react";
import { FaProjectDiagram } from "react-icons/fa";

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
      "Full-stack project management system handling tasks, tracking, and resource management with Node.js and MySQL.",
    technologies: ["Node.js", "Express", "MySQL"],
  },
  {
    title: "RMC Portal",
    description:
      "Centralized portal for repair, maintenance, and calibration management with role-based access and workflow automation.",
    technologies: ["Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Meeting Manager",
    description:
      "Scheduling system with recurring events and real-time notifications for seamless collaboration.",
    technologies: ["React", "Node.js", "MySQL", "Socket.IO"],
  },
];

export default function ProjectsPage() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-600">My Projects</h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          A curated list of my work showcasing backend development skills
        </p>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            ref={(el) => (projectRefs.current[index] = el)}
            key={index}
            className="flex flex-col p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-8 hover:bg-gray-800 group"
          >
            <div className="flex items-center mb-4">
              <FaProjectDiagram className="text-cyan-400 mr-3 text-2xl" />
              <h2 className="text-2xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h2>
            </div>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-400">
              <span className="font-medium">Technologies:</span>{" "}
              {project.technologies.join(", ")}
            </p>
            <div className="mt-4 h-[1px] bg-gray-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
