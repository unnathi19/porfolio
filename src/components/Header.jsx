import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// const navList = [
//   { id: 1, data: "Home", path: "/" },
//   { id: 2, data: "About", path: "/about" },
//   { id: 3, data: "Project", path: "/project" },
//   { id: 4, data: "Skills", path: "/skills" },
//   { id: 5, data: "Experience", path: "/experience" },
//   { id: 6, data: "Interests", path: "/interests" },
//   { id: 7, data: "Education", path: "/education" },
// ];
const navList = [
  { id: 1, data: "Home", path: "#home" },
  { id: 2, data: "About", path: "#about" },
  { id: 3, data: "Projects", path: "#projects" },
  { id: 4, data: "Skills", path: "#skills" },
  { id: 5, data: "Experience", path: "#experience" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-4 py-3 h-14">
        {/* Logo */}
        {/* Small screens: click to expand */}
        <div
          className="md:hidden border-2 border-black text-black font-bold text-sm h-10 transition-all duration-300 ease-in-out rounded-full flex items-center overflow-hidden whitespace-nowrap cursor-pointer"
          style={{ width: logoOpen ? "10rem" : "2.5rem" }}
          onClick={() => setLogoOpen(!logoOpen)}
        >
          {logoOpen ? (
            <span className="pl-2">Unnathi H M</span>
          ) : (
            <span className="text-xl mx-auto">U</span>
          )}
        </div>

        {/* Medium+ screens: hover to expand */}
        <div className="hidden md:flex group relative items-center justify-start">
          <div className="border-2 border-black text-black font-bold text-sm h-10 w-10 group-hover:w-40 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden whitespace-nowrap">
            <span className="text-xl group-hover:hidden">U</span>
            <span className="hidden group-hover:inline-block pl-2">Unnathi H M</span>
          </div>
        </div>

        {/* Hamburger for small screens */}
        <div
          className="md:hidden cursor-pointer flex flex-col justify-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex gap-6 pl-4">
          {navList.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `text-black font-medium border-b-2 pb-1 ${
                  isActive ? "border-red-500 text-red-500" : "border-transparent hover:text-red-500 hover:border-red-500"
                }`
              }
              onClick={() => setMenuOpen(false)} // close menu if open (for safety)
            >
              {item.data}
            </NavLink>
          ))}
        </nav> */}
        <nav className="hidden md:flex gap-6 pl-4">
  {navList.map((item) => (
    <a
      key={item.id}
      href={item.path}
      className="text-black font-medium border-b-2 pb-1 hover:text-red-500 hover:border-red-500"
      onClick={() => setMenuOpen(false)}
    >
      {item.data}
    </a>
  ))}
</nav>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm shadow-md px-4 py-3 flex flex-col gap-2">
          {navList.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `block text-black font-medium py-2 border-b border-gray-600 last:border-none ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`
              }
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item.data}
            </NavLink>
          ))} */}
        {/* </div> */}
        {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm shadow-md px-4 py-3 flex flex-col gap-2">
    {navList.map((item) => (
      <a
        key={item.id}
        href={item.path}
        className="block text-black font-medium py-2 border-b border-gray-600 last:border-none hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        {item.data}
      </a>
    ))}
  </div>
)}

    </header>
  );
};

export default Header;
