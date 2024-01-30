import { Link } from "react-router-dom";
import { card10 } from "../../../assets/images";
import { card9 } from "../../../assets/images";
import { card8 } from "../../../assets/images";
import { card7 } from "../../../assets/images";
import { card11 } from "../../../assets/images";
const HotCategory = () => {
  return (
    <div className="max-w-screen-2xl py-12 xl:px-12 px-4">
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 ">
        <p className="font-semibold uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm md:-rotate-90">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src={card8}
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src={card7}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={card9}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={card10}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={card11}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCategory;
