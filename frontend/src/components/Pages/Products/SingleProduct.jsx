import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  useCreateCartMutation,
  useProductsListQuery,
} from "../../../services/shopApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../features/titleSlice";
import { getToken } from "../../../services/LocalStorageService";
import { CircularProgress } from "@mui/material";
import CustomerReview from "./CustomerReview";
const SingleProduct = () => {
  //title setup
  const dispatch = useDispatch();
  dispatch(setTitle("FiberNook | Product "));

  //navigation and access token
  const navigate = useNavigate();
  const { access_token } = getToken();
  const [createCart, { isLoading: isCartLoading }] = useCreateCartMutation();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: products, error, isLoading } = useProductsListQuery();

  //initial scrollto top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //product initial Loading handling
  if (isLoading) {
    return <div className="text-center text-3xl">Loading.... </div>;
  }
  if (error || !products || products.length === 0) {
    return <div className="text-center">Error or Product not found</div>;
  }
  const product = products.find((item) => item.id === parseInt(id, 10));
  if (!product) {
    return <div className="text-center">Product not found</div>;
  }
  const { title, price, image, description } = product;

  //Handling quantity change
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  //Adding Cart Object
  const handleAddToCart = async (e) => {
    e.preventDefault();
    //check whether the user is Logged in or not
    if (access_token) {
      const data = {
        product: parseInt(id, 10),
        quantity: quantity,
      };
      const res = await createCart({ data, access_token });

      if (res.error) {
        navigate("/login");
        // console.error("Error creating cart:", res.error);
        // Handle specific error cases or show an error message to the user
      } else if (res.data) {
        navigate("/cart");
        // console.log("Cart created successfully:", res.data);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      <Link
        to={`/`}
        className="text-gray-800 font-Roboto text-right hover:text-red-500"
      >
        Home /
      </Link>
      <Link to={`shop`} className="hover:text-red-500 font-Roboto">
        {" "}
        Shop /
      </Link>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 mx-1">
          <h1 className="text-3xl font-bold mb-4 font-Cute">{title}</h1>
          <p className="text-lg mb-4 font-Roboto">${price}</p>
          <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4 font-Kanit">
            {description}
          </p>
          <label htmlFor="" className="font-semibold">
            Quantity
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleQuantityChange}
            value={quantity}
            required
            className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4"
          />
          <button
            onClick={handleAddToCart}
            className="p-3 rounded-lg text-white bg-red-500 flex gap-2 justify-center items-center hover:bg-red-400  transition-all duration-200 font-Roboto"
          >
            {isCartLoading ? <CircularProgress /> : " Add to Cart"}{" "}
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      {/* Customer Review Section  */}
      <div>
        <CustomerReview />
      </div>
    </div>
  );
};

export default SingleProduct;
