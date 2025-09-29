import React, { useState } from "react";
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
    <div className="font-[Dancing Script,cursive] text-gray-800 text-lg whitespace-pre-wrap relative">
      {displayed}
      {typing && (
        <span className="inline-block w-1 h-6 bg-red-600 animate-blink align-bottom ml-1"></span>
      )}
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
    </div>
  );
};

const EducationBook = () => {
  const [opened, setOpened] = useState(false);

  const pageBackground = "bg-[#fffef0]";
  const linedBackground = {
    backgroundImage:
      "repeating-linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 28px)",
  };

  return (
    <Layout>
      <div className="flex justify-center items-center my-12 px-4">
        <div
          className={`relative cursor-pointer transition-all duration-700 w-full max-w-[900px] ${
            opened ? "h-[80vh]" : "h-[200px] sm:h-[300px]"
          }`}
          onClick={() => setOpened(!opened)}
        >
          {/* Closed book */}
         {!opened && (
  <div
    className="flex justify-center items-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-xl shadow-2xl border-2 border-gray-400 p-6"
    style={{
      width: "100%",   // fill the parent container
      height: "100%",
      minWidth: "300px", // ensure book width
      minHeight: "450px", // ensure book height
    }}
  >
    <h1 className="text-3xl sm:text-4xl font-extrabold text-red-700 tracking-wide text-center">
      About & Education
    </h1>
  </div>
)}


          {/* Opened book */}
          {opened && (
            <div className="flex flex-col sm:flex-row h-full gap-4">
              {/* Left Page */}
              <div
                className={`flex-1 ${pageBackground} rounded-xl shadow-inner border border-gray-300 p-6 overflow-auto`}
                style={linedBackground}
              >
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                  About Me
                </h1>
                <HandwritingText text={AboutText} speed={30} />
              </div>

              {/* Right Page */}
              <div
                className={`flex-1 ${pageBackground} rounded-xl shadow-inner border border-gray-300 p-6 overflow-auto`}
                style={linedBackground}
              >
                <h1 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  🎓 Education
                </h1>
                {educationData.map((edu, idx) => (
                  <HandwritingText
                    key={idx}
                    text={`Degree: ${edu.degree}\nSchool: ${edu.school}\nYear: ${edu.year}\nDetails: ${edu.details}\n\n`}
                    speed={25}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EducationBook;
