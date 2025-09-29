import React from "react";
import homeImage from "../assets/main.jpg";
import resume from "../assets/UnnathiHM.pdf";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./icons";
import Layout from "./Layout";
import Button from "./Button";

const Home = () => {
  return (
    <Layout>
      <section className="w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-4">

          {/* Left: Image with animations */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
            <div className="relative group">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-black-500 via-red-500 to-green-500 animate-spin-slow"></div>

              {/* Image */}
              <img
                src={homeImage}
                alt="Unnathi"
                className="relative rounded-full w-40 sm:w-52 md:w-80 lg:w-[320px] xl:w-[350px] shadow-lg 
                  group-hover:scale-110 transition duration-500 ease-in-out animate-float"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 justify-center text-center md:text-left px-2 md:px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
              Hey, It`s
              <span className="text-red-500"> UNNATHI</span>
            </h1>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
              I'm a{" "}
              <span className="text-red-500">
                <TypeAnimation
                  sequence={["Software Engineer", 1000, "Backend Developer", 1000]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h3>

            <p 
              className="relative text-sm sm:text-base md:text-lg text-gray-300 max-w-[95%] md:max-w-[80%] leading-relaxed 
              px-3 py-3 border-l-4 border-red-500 shadow-sm bg-black/30 rounded-md animate-fadeIn mb-4"
            >
              Backend developer with <span className="text-red-400 font-semibold">3 years</span> 
              of experience designing RESTful services and data-driven applications using 
              <span className="text-yellow-400 font-semibold"> Node.js</span> and 
              <span className="text-yellow-400 font-semibold"> MySQL</span>. Proficient in writing 
              optimized SQL, handling server-side logic, and debugging code effectively in 
              <span className="text-blue-400 font-semibold"> VS Code</span>. Strong understanding 
              of asynchronous programming and backend architecture patterns!
            </p>
            <div className="mt-3 space-y-2 text-gray-300 text-sm sm:text-base">
  <p>
    📧 Email:{" "}
    <a
      href="mailto:unnathimaruthi55@gmail.com"
      className="text-red-400 hover:underline"
    >
      unnathimaruthi55@gmail.com
    </a>
  </p>
  <p>
    📱 Phone:{" "}
    <a
      href="tel:+919876543210"
      className="text-red-400 hover:underline"
    >
      +91 7676727948
    </a>
  </p>
</div>
            {/* Button + Social Icons in one line */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button text="Unlock My CV" href={resume} />
              <SocialIcons />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Home;
