import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
        {children}
      </div>
    </section>
  );
};

export default Layout;
