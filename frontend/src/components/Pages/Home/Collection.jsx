import { background, zara } from "../../../assets/images";
import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <div
      className="bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${background})`, height: "580px" }}
    >
      <div className="max-w-screen-2xl container text-white flex flex-col md:flex-row items-center justify-center">
        <div className="w-0 md:w-1/2"></div>
        <div className="w-full md:w-1/2 md:mt-40 md:ml-28 flex flex-col md:justify-center md:items-start items-center justify-start pt-24 md:pt-0 px-4 md:px-0">
          <img src={zara} alt="" className="w-48 h-22" />
          <p className="text-lg my-8 md:w-2/3 leading-[32px] capitalize text-center md:text-start">
            Lustrous Yet Understated. The new Evening Wear Collection
            Exclusively Offered At The Reopened Giorgio Armani Boutique In Los
            Angeles.
          </p>
          <button className="px-6 py-2 bg-white rounded-sm text-black text-lg inline-block font-Protest">
            <Link to={`/shop`}>See Collections</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
