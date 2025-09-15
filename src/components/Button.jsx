import React from "react";

const Button=({text,href})=>{
    return(
      <a href={href} className="inline-block px-6 py-3 bg-red-500 text-white font-semibold text-sm rounded-full hover:bg-red-600 transition-colors duration-300">
        {text}</a>
    )
}

export default Button