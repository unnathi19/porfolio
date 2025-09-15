// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import About from "./components/About";
// import Header from "./components/header";

// function App() {
//   return (
//     <Router>
//       <div className=" text-Black min-h-screen">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.jsx
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="text-black bg-black scroll-smooth">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        {/* later add Project, Skills, Experience... */}
      </main>
    </div>
  );
}

export default App;
