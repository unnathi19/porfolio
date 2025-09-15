// import React from "react";
// import Layout from "./Layout";

// const About = () => {
//   return (
//     <Layout>
//    <div className="w-full md:w-4/5 max-w-6xl px-16 py-16 text-white select-none bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-lg mx-auto">
//   <h1 className="text-5xl font-extrabold mb-8 tracking-wide relative inline-block">
//     About Me
//     <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-500 rounded-full animate-pulse"></span>
//   </h1>

//         {/* Two column grid */}
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

//           {/* Left side: personal summary with subtle fade-in */}
//     <div className="space-y-6 text-gray-300 text-lg leading-relaxed animate-fadeInLeft text-left">
//             <p>
//               Hello! I’m <span className="text-red-500 font-semibold">Unnathi</span>,  
//               a passionate <span className="font-semibold text-yellow-400">Software Engineer</span> specializing in building  
//               scalable, maintainable, and performant backend systems.
//             </p>
//             <p>
//               I love crafting efficient APIs, designing robust databases, and solving complex problems  
//               with clean code. My expertise lies primarily in <span className="text-yellow-400 font-semibold">Node.js</span>,  
//               <span className="text-yellow-400 font-semibold"> MySQL</span>, and asynchronous programming.
//             </p>
//             <p>
//               Outside of coding, I enjoy learning about new technologies, UI/UX design principles,  
//               and contributing to open-source projects.
//             </p>
//           </div>

//           {/* Right side: Skills & fun facts card */}
//     <div className="bg-black/30 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-red-600 animate-fadeInRight flex flex-col justify-start text-left min-w-[280px] break-words">
//             <h4 className="text-3xl font-semibold mb-6 text-red-500 border-b border-red-500 pb-2">
//               Skills & Highlights
//             </h4>
//             <ul className="space-y-2 list-disc list-inside text-gray-300 text-lg">
//               <li><strong>Backend Development:</strong> REST APIs, Express.js, Microservices</li>
//               <li><strong>Database:</strong> MySQL, SQL optimization, data modeling</li>
//               <li><strong>Languages:</strong> JavaScript (ES6+), Nodejs</li>
//               <li><strong>Tools:</strong> VS Code, Git, Postman</li>
//               <li><strong>Soft Skills:</strong> Problem-solving, teamwork, communication</li>
//             </ul>

//             <div className="mt-8 border-t border-red-500 pt-6 text-gray-400 italic text-center text-sm">
//               "Striving for clean code and elegant solutions every day."
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default About;

// import React, { useState } from "react";
// import Layout from "./Layout";
// import { percent } from "framer-motion";
// import { details } from "framer-motion/client";

// const AboutText = `I am a passionate Backend Developer with hands-on experience in designing and building scalable APIs, managing relational and non-relational databases (MySQL, PostgreSQL, MongoDB), and deploying applications on cloud platforms like AWS. Skilled in Node.js, Sequelize, and system integrations, I enjoy transforming complex requirements into efficient, reliable solutions.

// A collaborative team player with a continuous learning mindset, I aim to contribute to impactful projects by combining technical proficiency with problem-solving and innovative thinking.`;

// const educationData = [
//   {
//     degree: "Bachelor of Engineering in Computer Science",
//     school: "ACS College of Engineering",
//     year: "2018 - 2022",
//     details: "8.5",
//   },
//   {
//     degree: "PUC in Science",
//     school: "KBC PU College",
//     year: "2016 - 2018",
//     details: "79.4%",
//   },
//   {
//     degree: "High School",
//     school: "St. Philomena's High School",
//     year: "2015 - 2016",
//     details: "83.41%",
//   },
// ];

// const HandwritingText = ({ text, speed = 40, onComplete }) => {
//   const [displayed, setDisplayed] = React.useState("");
//   const indexRef = React.useRef(0);

//   React.useEffect(() => {
//     setDisplayed("");
//     indexRef.current = 0;
//     const interval = setInterval(() => {
//       setDisplayed(text.slice(0, indexRef.current + 1));
//       indexRef.current += 1;
//       if (indexRef.current === text.length) {
//         clearInterval(interval);
//         if (onComplete) onComplete();
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed, onComplete]);

//   return (
//     <div className="font-[‘Dancing Script’, cursive] text-gray-800 text-lg whitespace-pre-wrap relative">
//       {displayed}
//       <span className="inline-block w-1 h-6 bg-red-600 animate-blink align-bottom ml-1"></span>
//       <style>
//         {`
//           @keyframes blink {
//             0%, 50%, 100% { opacity: 1; }
//             25%, 75% { opacity: 0; }
//           }
//           .animate-blink {
//             animation: blink 1s step-start infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const EducationBook = () => {
//   const [opened, setOpened] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [flip, setFlip] = useState(false);

//   const handleBookClick = () => {
//     if (!opened) setOpened(true);
//   };

//   const nextPage = () => {
//     setFlip(true);
//     setTimeout(() => {
//       setCurrentPage((prev) => (prev + 1) % educationData.length);
//       setFlip(false);
//     }, 700);
//   };

//   const pageBackground = "bg-[#fffef0]"; // paper color
//   const linedBackground = {
//     backgroundImage:
//       "repeating-linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 28px)",
//   };

//   return (
//     <Layout>
//       <div
//         className="flex justify-center items-center my-12 transition-all duration-700"
//         style={{ perspective: "2500px" }}
//       >
//         <div
//           className={`relative cursor-pointer select-none transition-all duration-700 overflow-hidden ${
//             opened ? "w-[900px] h-[600px]" : "w-[350px] h-[450px]"
//           }`}
//           onClick={handleBookClick}
//         >
//           {/* Closed book */}
//           {!opened && (
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-2xl shadow-2xl border-2 border-gray-400 flex flex-col justify-center items-center text-center">
//               <h1 className="text-5xl font-extrabold text-red-700 tracking-wide mb-2">
//                 About & Education
//               </h1>
//               <p className="text-gray-600 italic text-lg">Click to open the notebook</p>
//             </div>
//           )}

//           {/* Opened book */}
//           {opened && (
//             <div className="absolute inset-0 flex z-10">
//               {/* Left Page */}
//               <div
//                 className={`w-1/2 h-full ${pageBackground} rounded-l-3xl shadow-inner border-r border-gray-300 relative overflow-hidden`}
//                 style={linedBackground}
//               >
//                 <div className="p-8 relative z-10">
//                   <h1 className="text-3xl font-bold text-red-600 mb-4">About Me</h1>
//                   <HandwritingText text={AboutText} speed={30} />
//                 </div>
//               </div>

//               {/* Right Page */}
//               <div
//                 className={`w-1/2 h-full ${pageBackground} rounded-r-3xl shadow-inner relative overflow-hidden transform-origin-left transition-transform duration-700 ${
//                   flip ? "rotateY-180" : ""
//                 }`}
//                 style={{ transformStyle: "preserve-3d", ...linedBackground }}
//               >
//                 <div className="p-8 relative z-10 backface-hidden">
//                   <h1 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-gray-600 animate-bounce"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14l9-5-9-5-9 5 9 5z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14l6.16-3.422a12.083 12.083 0 010 6.844L12 14z"
//                       />
//                     </svg>
//                     Education
//                   </h1>
//                   <HandwritingText
//                     text={`Degree: ${educationData[currentPage].degree}\nName: ${educationData[currentPage].school}\nYear: ${educationData[currentPage].year}\nDetails: ${educationData[currentPage].details}`}
//                     speed={35}
//                     onComplete={nextPage}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default EducationBook;


import React, { useState } from "react";
import Layout from "./Layout";

const AboutText = `I am a passionate Backend Developer with hands-on experience in designing and building scalable APIs, managing relational and non-relational databases (MySQL, PostgreSQL, MongoDB), and deploying applications on cloud platforms like AWS. Skilled in Node.js, Sequelize, and system integrations, I enjoy transforming complex requirements into efficient, reliable solutions.

A collaborative team player with a continuous learning mindset, I aim to contribute to impactful projects by combining technical proficiency with problem-solving and innovative thinking.`;

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "ACS College of Engineering",
    year: "2018 - 2022",
    details: "8.5",
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
        setTyping(false); // stop cursor
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="font-[‘Dancing Script’, cursive] text-gray-800 text-lg whitespace-pre-wrap relative">
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

  const handleBookClick = () => {
    if (!opened) setOpened(true);
  };

  const pageBackground = "bg-[#fffef0]"; // paper color
  const linedBackground = {
    backgroundImage:
      "repeating-linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 28px)",
  };

  return (
    <Layout>
      <div
        className="flex justify-center items-center my-12 transition-all duration-700"
        style={{ perspective: "2500px" }}
      >
        <div
          className={`relative cursor-pointer select-none transition-all duration-700 overflow-hidden ${
            opened ? "w-[900px] h-[600px]" : "w-[350px] h-[450px]"
          }`}
          onClick={handleBookClick}
        >
          {/* Closed book */}
          {!opened && (
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-2xl shadow-2xl border-2 border-gray-400 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-extrabold text-red-700 tracking-wide mb-2">
                About & Education
              </h1>
              <p className="text-gray-600 italic text-lg">Click to open the notebook</p>
            </div>
          )}

          {/* Opened book */}
          {opened && (
            <div className="absolute inset-0 flex z-10">
              {/* Left Page */}
              <div
                className={`w-1/2 h-full ${pageBackground} rounded-l-3xl shadow-inner border-r border-gray-300 relative overflow-hidden`}
                style={linedBackground}
              >
                <div className="p-8 relative z-10">
                  <h1 className="text-3xl font-bold text-red-600 mb-4">About Me</h1>
                  <HandwritingText text={AboutText} speed={30} />
                </div>
              </div>

              {/* Right Page */}
              <div
                className={`w-1/2 h-full ${pageBackground} rounded-r-3xl shadow-inner relative overflow-hidden`}
                style={linedBackground}
              >
                <div className="p-8 relative z-10">
                  <h1 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 010 6.844L12 14z"
                      />
                    </svg>
                    Education
                  </h1>

                  {/* Display all education entries on one page */}
                  {educationData.map((edu, idx) => (
                    <HandwritingText
                      key={idx}
                      text={`Degree: ${edu.degree}\nSchool: ${edu.school}\nYear: ${edu.year}\nDetails: ${edu.details}\n\n`}
                      speed={25}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EducationBook;
