import { FaShoppingBag } from "react-icons/fa";
import { cover } from "../../../assets/images";
import { Link } from "react-router-dom";
const Cover = () => {
  return (
    <div className="py-12 xl:px-12 px-4 ">
      <div className=" max-w-screen-2xl py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-28 px-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5 font-Protest">Collections</h1>
          <p className="text-xl mb-7 font-Kdam">
            you can explore and shop many different collection from various
            brands here.
          </p>
          <Link
            to={`/shop`}
            className="bg-black hover:bg-orange-500 px6 py-2 text-white font-semibold rounded-md p-5 inline-flex items-center gap-2"
          >
            <FaShoppingBag />
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={cover} alt="Cover Image" className="h-92" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
