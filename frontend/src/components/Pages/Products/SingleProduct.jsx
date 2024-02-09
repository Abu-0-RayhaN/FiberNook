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
import { FaStar, FaShippingFast, FaUndo, FaGift } from "react-icons/fa";
import { MdOutlineAutorenew } from "react-icons/md";
import { TbVacuumCleaner } from "react-icons/tb";
import { DiMaterializecss } from "react-icons/di";

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
      <div className="pb-5">
        <Link
          to={`/`}
          className="text-gray-800 font-Roboto text-right hover:text-red-500"
        >
          Home /
        </Link>
        <Link to={`/shop`} className="hover:text-red-500 font-Roboto">
          {" "}
          Shop /
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:ml-8 md:mt-0 mx-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-4 font-Cute">{title}</h1>
          <p className="text-lg mb-4 font-Roboto">${price}</p>
          {/* Rating Star */}
          <div className="flex items-center mb-4">
            {Array.from({ length: Math.floor(Math.random() * 2) + 3 }).map(
              (_, index) => (
                <FaStar key={index} className="text-black h-5 w-5" />
              )
            )}
          </div>
          <p className="mt-3 text-gray-600 text-sm leading-6 text-justify sm:text-left sm:mt-4 font-Kdam ">
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
            className="p-3 text-white bg-black flex gap-2 justify-center items-center hover:bg-slate-900  transition-all duration-200 font-Roboto"
          >
            {isCartLoading ? (
              <CircularProgress className="w-6 h-6" />
            ) : (
              " Add to Cart"
            )}{" "}
            <FaArrowAltCircleRight className="h-6 w-6" />
          </button>
          <div className="flex flex-col justify-between mt-3 gap-5">
            <div className="flex items-center gap-3">
              <FaShippingFast className="text-black h-10 w-10 mr-2 h" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Shipping Discount</span>
                <span className="text-sm">
                  Reduced rate express shipping on orders over ৳17400.
                  <br />
                  <a href="" className="hover:text-blue-400 underline">
                    Learn more
                  </a>
                  .
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <FaUndo className="text-black h-10 w-10 mr-2 h" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Easy Returns</span>
                <span className="text-sm">
                  Return within 45 days of purchase Duties & taxes are
                  non-refundable.
                  <br />
                  <a href="" className="hover:text-blue-400 underline">
                    Returns Details
                  </a>
                  .
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <FaGift className="text-black h-10 w-10 mr-2 h" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Send It As A Gift</span>
                <span className="text-sm">
                  Add a free personalized note during checkout.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-5 gap-3">
            <h4 className=" text-lg font-bold">Sustainability</h4>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <MdOutlineAutorenew className="h-6 w-6" />
                <p className="uppercase text-sm">Renewed Materials</p>
              </div>
              <div className="flex gap-2">
                <TbVacuumCleaner className="h-6 w-6" />
                <p className="uppercase text-sm">cleaner cotton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Review Section  */}
      <div>
        <CustomerReview />
      </div>
      <div className="flex flex-col">
        <h4>Transparent Pricing</h4>
        <p>
          We publish what it costs us to make every one of our products. There
          are a lot of costs we can not neatly account for - like design,
          fittings, wear testing, rent on office and retail space - but we
          believe you deserve to know what goes into making the products you
          love.
        </p>
        <div className="flex">
          <div className="flex flex-col justify-center">
            <DiMaterializecss />
            <p>Materials</p>
            <p>${price * 0.2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
