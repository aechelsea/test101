import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <div className="justify-center text-blue-800">
        <div className="text-center">
            
          <h1 className="text-3xl font-bold">Contact Me</h1>  
          <BiPhone size={30}/>
          <i className="uil uil-airplay"></i>
          <span className="">099-90780859</span>
        </div>
        
      <div className="flex justify-between md:w-[15%] my-2 hover:cursor-pointer">
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
        <FaDribbbleSquare size={30} />
      </div>
      <footer>
        <p className="text-center copyright">Power by : APIWAT KASAHMA © 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
