import React, { useRef, useEffect, useState } from "react";

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
    const speed = 2;
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
    <section className="relative min-h-screen bg-gray-900 text-white py-12 px-6 overflow-hidden">
      {/* Subtle dev background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.1)_0%,transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 animate-grid"></div>

      <h2 className="text-3xl font-bold text-center mb-10 relative z-10">💻 My Projects</h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-12 pb-6 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...projects, ...projects].map((project, index) => (
          <div key={index} className="flex-shrink-0 w-96 cursor-pointer group">
            <div className="relative mx-auto">
              {/* Laptop screen */}
              <div className="bg-gray-950 rounded-t-xl border-4 border-gray-700 shadow-lg w-full h-52 flex flex-col justify-center items-center p-4">
                <h3 className="text-lg font-bold text-green-400">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center mt-2">{project.description}</p>
              </div>

              {/* Laptop body */}
              <div className="bg-gray-800 rounded-b-xl border-x-4 border-b-4 border-gray-700 w-full h-32 p-3 flex flex-col justify-between shadow-md">
                {/* Tech tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Fake keyboard rows */}
                <div className="space-y-1">
                  {[10, 9, 7].map((keys, rowIdx) => (
                    <div key={rowIdx} className="flex justify-center gap-1">
                      {Array.from({ length: keys }).map((_, i) => (
                        <div
                          key={i}
                          className="h-3 w-6 bg-gray-600 rounded-sm animate-pulse"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "2s",
                          }}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Laptop trackpad / base */}
              <div className="w-[90%] mx-auto h-3 bg-gray-700 rounded-b-md shadow-inner"></div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes gridMove {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 60px 60px, 60px 60px; }
          }
          .animate-grid {
            animation: gridMove 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
