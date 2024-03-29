import { setTitle } from "../../../features/titleSlice";
import { useDispatch } from "react-redux";
import Cover from "./Cover";
import Brands from "./Brands";
import HotCategory from "./HotCategory";
import Products from "../Products/HomeProducts";
import Collection from "./Collection";
import BestSeller from "./BestSeller";
import NewsLetters from "./NewsLetters";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("FiberNook | Home"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="bg-gray-300">
        <Cover />
      </div>
      <Brands />
      <HotCategory />
      <Products />
      <Collection />
      <BestSeller />
      <NewsLetters />
    </div>
  );
};

export default Home;
