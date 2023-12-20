import { setTitle } from "../../features/titleSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Home"));
  return (
    <div className="bg-green-900 rounded-md h-56">
      Home Page
      <hr />
      <p className="bg-green-500 text-2xl mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        beatae! Maxime pariatur reiciendis dolorem minima fuga, cum molestias,
        mollitia porro iste aut sit a? Saepe dolore incidunt nesciunt ullam
        facere, laboriosam eaque beatae adipisci praesentium maiores! Magnam
        saepe voluptatem quae? Esse voluptatum sunt facilis facere. Culpa
        aspernatur architecto consequuntur totam. Cum fugit itaque, voluptate
        quis, eligendi neque nam autem culpa reiciendis enim excepturi adipisci
        harum! Maxime harum similique odit saepe perferendis nemo pariatur enim
        exercitationem at ipsum qui blanditiis rem tempore doloremque quisquam,
        quod consectetur ut quos quidem natus earum beatae omnis voluptate!
        Dolorum ullam provident alias, odio porro suscipit?
      </p>
    </div>
  );
};

export default Home;
