/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./NavTop.css"; // Import a separate CSS file for styling
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const NavTop = () => {
  const texts = [
    "A good outfit makes everything better. Even your 9 to 5.",
    "Shape up your denim with our new Way-High® Curve Jean.",
    "Get early access on launches and offers.",
    "New markdowns just added: Now up to 70% off.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start the slide-out transition
      setSlideIn(false);

      // Change the text index after the slide-out transition completes
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        // Start the slide-in transition
        setSlideIn(true);
      }, 500);
    }, 5000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const currentText = texts[currentTextIndex];

  return (
    <div className="nav-top-container py-2 px-3 text-xs md:text-md bg-gray-950 flex justify-between sticky top-0 left-0 right-0">
      <div className="hidden md:flex"></div>
      <div
        className={`text-container w-full ${
          slideIn ? "slide-in" : "slide-out"
        } flex justify-center items-center`}
      >
        <p>{currentText}</p>
        <Link to={`/shop`} className="flex justify-center items-center gap-2">
          <p>shop</p>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="hidden md:flex gap-2 md:justify-end items-center">
        <a href="https://www.instagram.com/abu_0_rayhan/">
          <FaInstagram className="hidden md:block" />
        </a>
        <span>|</span>
        <a href="https://abu-0-rayhan.netlify.app/">
          <FaYoutube className="hidden md:block" />
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/abu-0-rayhan/">
          <FaLinkedinIn className="" />
        </a>
        <span>|</span>
        <a href="https://github.com/Abu-0-RayhaN">
          <FaGithub className="" />
        </a>
      </div>
    </div>
  );
};

export default NavTop;
