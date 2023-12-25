import { setTitle } from "../../../features/titleSlice";
import { useDispatch } from "react-redux";
import Cover from "./Cover";
import Brands from "./Brands";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Home"));
  return (
    <div className="">
      <div className="bg-gray-300">
        <Cover />
      </div>
      <Brands />
    </div>
  );
};

export default Home;
