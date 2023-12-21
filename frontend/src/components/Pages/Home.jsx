import { setTitle } from "../../features/titleSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Home"));
  return (
    <div className="">
      {/* Home Page */}
      <hr />
    </div>
  );
};

export default Home;
