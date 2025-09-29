import React from "react";
import Layout from "./Layout";

const AboutText = `I am a passionate Backend Developer with hands-on experience in designing and building scalable APIs, managing relational and non-relational databases (MySQL, PostgreSQL, MongoDB), and deploying applications on cloud platforms like AWS. Skilled in Node.js, Sequelize, and system integrations, I enjoy transforming complex requirements into efficient, reliable solutions.

A collaborative team player with a continuous learning mindset, I aim to contribute to impactful projects by combining technical proficiency with problem-solving and innovative thinking.`;

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "ACS College of Engineering",
    year: "2018 - 2022",
    details: "8.5 CGPA",
  },
  {
    degree: "PUC in Science",
    school: "KBC PU College",
    year: "2016 - 2018",
    details: "79.4%",
  },
  {
    degree: "High School",
    school: "St. Philomena's High School",
    year: "2015 - 2016",
    details: "83.41%",
  },
];

const HandwritingText = ({ text, speed = 40 }) => {
  const [displayed, setDisplayed] = React.useState("");
  const [typing, setTyping] = React.useState(true);
  const indexRef = React.useRef(0);

  React.useEffect(() => {
    setDisplayed("");
    indexRef.current = 0;
    setTyping(true);

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, indexRef.current + 1));
      indexRef.current += 1;
      if (indexRef.current === text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="font-[Dancing Script,cursive] text-gray-300 text-lg whitespace-pre-wrap">
      {displayed}
      {typing && <span className="animate-blink ml-1">|</span>}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </p>
  );
};

const EducationBook = () => {
  return (
    <Layout>
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16">
        <div className="flex flex-col items-center my-12 px-4">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">
            📚 About & Education
          </h1>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
            {/* About Section */}
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg border border-gray-700 overflow-auto">
              <h2 className="text-2xl font-bold text-red-600 mb-4">About Me</h2>
              <HandwritingText text={AboutText} speed={30} />
            </div>

            {/* Education Section */}
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg border border-gray-700 overflow-auto">
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                🎓 Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="mb-6">
                  <HandwritingText
                    text={`Degree: ${edu.degree}\nSchool: ${edu.school}\nYear: ${edu.year}\nDetails: ${edu.details}\n`}
                    speed={25}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationBook;
