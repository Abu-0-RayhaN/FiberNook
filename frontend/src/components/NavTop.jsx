/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavTop = () => {
  const texts = [
    "A good outfit makes everything better. Even your 9 to 5.",
    "Shape up your denim with our new Way-High® Curve Jean.",
    "Get early access on launches and offers.",
    "New markdowns just added: Now up to 70% off.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the text index to the next one in the array
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const currentText = texts[currentTextIndex];

  return (
    <div
      className={`w-full bg-gray-950 text-center py-1 px-2 text-sm md:text-md transition-all duration-700 text-white flex justify-center items-center gap-1`}
    >
      {currentText}{" "}
      <Link to={`/shop`} className="flex justify-center items-center gap-2">
        <p>shop</p>
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default NavTop;
