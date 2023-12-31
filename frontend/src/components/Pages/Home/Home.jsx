import { setTitle } from "../../../features/titleSlice";
import { useDispatch } from "react-redux";
import Cover from "./Cover";
import Brands from "./Brands";
import HotCategory from "./HotCategory";
import Products from "./Products/Products";
import Collection from "./Collection";
import BestSeller from "./BestSeller";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Home"));
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
    </div>
  );
};

export default Home;
