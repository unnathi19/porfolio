import React, { useRef, useEffect, useState } from "react";

const skills = [
  { name: "React", level: "Advanced", tools: ["Redux", "Router", "Tailwind"] },
  { name: "Node.js", level: "Advanced", tools: ["Express", "Socket.IO", "JWT"] },
  { name: "MySQL", level: "Intermediate", tools: ["Sequelize", "Queries", "Optimization"] },
  { name: "MongoDB", level: "Intermediate", tools: ["Mongoose", "Aggregation", "Indexes"] },
  { name: "JavaScript", level: "Advanced", tools: ["ES6+", "Async/Await", "DOM Manipulation"] },
  { name: "Docker", level: "Beginner", tools: ["Containers", "Docker Compose"] },
  { name: "Git", level: "Advanced", tools: ["GitHub", "Branching", "Merging"] },
  { name: "REST API", level: "Advanced", tools: ["Express", "Postman", "JWT"] },
];

export default function Skills() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Adjust speed based on screen size
  const speed = window.innerWidth < 768 ? 0.004 : 0.01; 
  const radiusX = 300; 
  const radiusZ = 200;

  useEffect(() => {
    let angle = 0;
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isPaused && flippedIndex === null) {
        angle += speed;
        const children = container.children;
        const total = children.length;

        for (let i = 0; i < total; i++) {
          const theta = (i / total) * Math.PI * 2 + angle;
          const x = radiusX * Math.cos(theta);
          const z = radiusZ * Math.sin(theta);
          const scale = 0.5 + 0.5 * (1 - Math.sin(theta));
          children[i].style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`;
          children[i].style.zIndex = `${Math.floor(scale * 100)}`;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [isPaused, flippedIndex, speed]);

  const handleFlip = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
      setIsPaused(false);
    } else {
      setFlippedIndex(index);
      setIsPaused(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-12 px-6 overflow-hidden perspective-1000">
      <h2 className="text-4xl font-bold mb-12 text-white relative z-10 text-center">
        My Skills
      </h2>

      <div
        ref={containerRef}
        className="relative w-full h-[400px] flex items-center justify-center z-10"
      >
        {skills.map((skill, i) => {
          const isFlipped = flippedIndex === i;
          return (
            <div
              key={i}
              className="absolute w-32 h-40 perspective cursor-pointer"
              onClick={() => handleFlip(i)}
              onMouseEnter={() => window.innerWidth >= 768 && setIsPaused(true)}
              onMouseLeave={() => window.innerWidth >= 768 && !isFlipped && setIsPaused(false)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-xl flex items-center justify-center font-bold text-lg backface-hidden">
                  {skill.name}
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center font-semibold text-sm backface-hidden rotate-y-180 p-3">
                  <p className="mb-1">Proficiency: {skill.level}</p>
                  <p className="text-xs text-gray-100 text-center">
                    Tools: {skill.tools.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .perspective { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
}
