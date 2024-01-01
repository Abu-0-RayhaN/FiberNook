import { useParams } from "react-router-dom";
import { products } from "../../../../constants";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
        Product not found
      </div>
    );
  }

  const { title, category, price, image } = product;

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{category}</p>
          <p className="text-lg mb-4">${price.toFixed(2)}</p>
          <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            asperiores ullam provident aliquam et, amet vel. Minima, nostrum
            corporis, tenetur amet officiis deserunt optio, sunt beatae autem
            cupiditate voluptatibus fugit!
          </p>
          <label htmlFor="" className="font-semibold">
            Quantity
          </label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={1}
            required
            className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4"
          />
          <button className="p-3 rounded-lg text-white bg-red-500 font-serif font-bold flex gap-2 justify-center items-center hover:bg-red-400  transition-all duration-200">
            Add to Cart <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
