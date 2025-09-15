import React, { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    project: "RMC Portal",
    description: "Developed backend APIs handling authentication, cart, and order management.",
    tools: ["Node.js", "MongoDB", "JWT"],
    date: "Jan 2022 - Apr 2022",
  },
  {
    project: "JCH",
    description: "Managed multiple components and backend services for JCH project.",
    tools: ["Node.js", "Express", "MySQL"],
    date: "May 2022 - Aug 2022",
  },
  {
    project: "Task Manager",
    description: "Full-stack task management app with Node.js backend and MySQL integration.",
    tools: ["Node.js", "Express", "MySQL"],
    date: "Sep 2022 - Dec 2022",
  },
];

export default function Experience() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => [...new Set([...prev, Number(index)])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-16 px-6 overflow-hidden">
      {/* === Full Screen Horizontal Matrix Background === */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 flex flex-col space-y-2 opacity-20 pointer-events-none">
          {Array.from({ length: 30 }).map((_, row) => (
            <div
              key={row}
              className="flex space-x-1 whitespace-nowrap animate-matrix-horizontal"
            >
              {Array.from({ length: 100 }).map((_, col) => (
                <span
                  key={col}
                  className="text-green-500 font-mono text-xs"
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* === Foreground Content === */}
      <h2 className="text-3xl font-bold text-center mb-12 relative z-10">My Experience</h2>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-red-500"></div>

        <div className="space-y-16">
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Connector circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-red-500 w-6 h-6 rounded-full z-10"></div>

                {/* Card */}
                <div
                  className={`relative bg-gray-800 bg-opacity-90 border border-gray-700 rounded-2xl p-6 shadow-2xl w-80 transition-transform duration-700 ease-out
                    ${isLeft ? "ml-0 mr-auto" : "mr-0 ml-auto"}
                    ${isVisible ? "translate-x-0 opacity-100" : isLeft ? "-translate-x-20 opacity-0" : "translate-x-20 opacity-0"}
                    hover:scale-105 z-10`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-10 blur-xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">{exp.project}</h3>
                    <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                    <p className="text-gray-400 text-xs mb-2">{exp.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes matrixScrollHorizontal {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-matrix-horizontal {
            animation: matrixScrollHorizontal 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
