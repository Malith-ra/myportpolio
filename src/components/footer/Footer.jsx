import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FaAngellist } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Malith Ranasinghe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/malith-ranasinghe-2119521b6/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Malith-ra" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        {/* <a
          href="https://angel.co/u/meri-gogichashvili"
          target="_blank"
          rel="noreferrer"
        >
          <FaAngellist />
        </a> */}
      </div>
      <div className="footer__copyright">
        <small>&copy; Malith 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
