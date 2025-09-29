import React from "react";
import{ FaLinkedin, FaGithub,FaInstagram} from "react-icons/fa";

const icons = [
  { href:"https://www.linkedin.com/in/unnathi-hm-407144205/?trk=opento_sprofile_topcard",
    components:<FaLinkedin className="text-2xl text-black-600 hover:text-black-800 transition-colors duration-300" />
  },
  { href:"https://github.com/unnathi19",
    components:<FaGithub className="text-2xl text-black-600 hover:text-black-800 transition-colors duration-300" />
  },
  // { href:"#",
  //   components:<FaInstagram className="text-2xl text-black-600 hover:black-blue-800 transition-colors duration-300" />
  // },
]
const SocialIcons=()=>{
    return(
        <div className="flex justify-center md:justify-start space-x-4 mt-6 sm:mb-6">
            {icons.map((icon, index) => (
                <a key={index} href={icon.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black-300 hover:text-black transition hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                    {icon.components} </a >
            ))}
        </div>
    )
}

export default SocialIcons