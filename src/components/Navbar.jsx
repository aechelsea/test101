import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white hover:cursor-pointer mx-6">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">APIWAT</h1>
        <ul className="hidden md:flex">
          <li className="p-4 text-[#00df9a]">Home</li>
          <li className="p-4 hover:text-[#00df9a]">Educations</li>
          <li className="p-4 hover:text-[#00df9a]">Experience</li>
          <li className="p-4 hover:text-[#00df9a]">Skills</li>
          <li className="p-4 hover:text-[#00df9a]">Projects</li>
          <li className="p-4 hover:text-[#00df9a]">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            RESUME
          </h1>
          <li className="p-4 hover:text-[#00df9a]">Home</li>
          <li className="p-4 hover:text-[#00df9a]">Educations</li>
          <li className="p-4 hover:text-[#00df9a]">Experience</li>
          <li className="p-4 hover:text-[#00df9a]">Skills</li>
          <li className="p-4 hover:text-[#00df9a]">Projects</li>
          <li className="p-4 hover:text-[#00df9a]">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
