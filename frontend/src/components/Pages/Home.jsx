import { setTitle } from "../../features/titleSlice";
import { useDispatch } from "react-redux";
import { cover } from "../../assets/images";
import { FaShoppingBag } from "react-icons/fa";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Home"));
  return (
    <div className="py-12 xl:px-28 px-4 bg-gray-300">
      <div className="py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-28 px-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            you can explore and shop many different collection from various
            brands here.
          </p>
          <button className="bg-gray-900 hover:bg-orange-500 px6 py-2 text-white font-semibold rounded-md p-5 inline-flex items-center gap-2">
            <FaShoppingBag />
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={cover} alt="Cover Image" className="h-92" />
        </div>
      </div>
    </div>
  );
};

export default Home;
