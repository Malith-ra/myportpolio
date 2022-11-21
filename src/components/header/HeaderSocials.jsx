import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/malith-ranasinghe-2119521b6/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com/Malith-ra" target="_blank" rel="noreferrer">
        <FaGithub size={30} />
      </a>
      {/* <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a> */}
    </div>
  );
};

export default HeaderSocials;
