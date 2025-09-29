import React, { useState } from "react";

const skills = [
  { name: "React", level: "Advanced", tools: ["Redux", "Router", "Tailwind"], color: "from-blue-400 to-blue-600", icon: "⚛️" },
  { name: "Node.js", level: "Advanced", tools: ["Express", "Socket.IO", "JWT"], color: "from-green-400 to-green-600", icon: "🟢" },
  { name: "MySQL", level: "Intermediate", tools: ["Sequelize", "Queries", "Optimization"], color: "from-indigo-400 to-indigo-600", icon: "🗄️" },
  { name: "MongoDB", level: "Intermediate", tools: ["Mongoose", "Aggregation", "Indexes"], color: "from-green-300 to-green-500", icon: "🍃" },
  { name: "JavaScript", level: "Advanced", tools: ["ES6+", "Async/Await", "DOM Manipulation"], color: "from-yellow-400 to-yellow-500", icon: "📜" },
  { name: "Docker", level: "Beginner", tools: ["Containers", "Docker Compose"], color: "from-blue-300 to-blue-500", icon: "🐳" },
  { name: "Git", level: "Advanced", tools: ["GitHub", "Branching", "Merging"], color: "from-red-400 to-red-600", icon: "🔧" },
  { name: "REST API", level: "Advanced", tools: ["Express", "Postman", "JWT"], color: "from-purple-400 to-purple-600", icon: "🌐" },
];

export default function Skills() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">💡 My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const isFlipped = flipped === index;
          return (
            <div
              key={index}
              className="relative w-full h-52 cursor-pointer perspective transform transition-transform duration-300 hover:scale-105"
              onClick={() => setFlipped(isFlipped ? null : index)}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
              >
                {/* Front */}
                <div className={`absolute w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center p-4 bg-gradient-to-br ${skill.color} backface-hidden`}>
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <p className="mt-1 text-xs">Click to view</p>
                </div>

                {/* Back */}
                <div className={`absolute w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center p-4 bg-gray-800 backface-hidden rotate-y-180 border border-white/20`}>
                  <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                  <p className="mb-1 text-sm">Proficiency: <span className="font-semibold">{skill.level}</span></p>
                  <p className="text-xs text-gray-300 text-center">
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
        .transform-style { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
}
