//    Icons Imports Starts
import {
  FaArrowAltCircleRight,
  FaBars,
  FaTimes,
  FaUserCheck,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
//   Icons Imports Ends
import { getToken } from "../../services/LocalStorageService";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import {
  navImage,
  navImage2,
  topProduct8,
  topProduct9,
} from "../../assets/images";
const Navbar = () => {
  const { access_token } = getToken();
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <>
      <header className=" xl:px-0 px-4 sticky bg-white z-50 top-0 left-0 right-0">
        <div className="max-w-screen-2xl mx-auto">
          <nav className="container flex justify-between items-center mx-auto pt-3 pb-3">
            <div className="hidden md:flex gap-2 font-Kanit font-semibold">
              <Link
                to={`/shop`}
                className=" p-2 hover:bg-gray-100 rounded-md font-Roboto text-lg"
              >
                About
              </Link>
              <Link
                to={`/shop`}
                className=" p-2 hover:bg-gray-950 bg-black text-white  font-Kdam"
              >
                FiberNook Stories
              </Link>
            </div>
            <Link to={"/"} className="font-Rubik">
              <span className="font-bold text-3xl sm:text-4xl">
                <span className="text-blue-500">F</span>
                <span className="text-yellow-500">i</span>
                <span className="text-green-500">b</span>
                <span className="text-red-500">e</span>
                <span className="text-purple-500">r</span>
                <span className="text-orange-500">N</span>
                <span className="text-pink-500">o</span>
                <span className="text-indigo-500">o</span>
                <span className="text-khaki-500">k</span>
              </span>
            </Link>
            <div className="text-lg text-black flex items-center gap-4">
              <NavLink
                to={"/dashboard"}
                className="flex items-center gap-0 smd:gap-2 hover:text-red-500"
              >
                {" "}
                {access_token ? (
                  <FaUserCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <FaUser className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
                {access_token ? (
                  <span className="pl-2 hidden md:flex font-Protest">
                    Dashboard
                  </span>
                ) : (
                  <span className="pl-2 hidden md:flex font-Protest">
                    Login
                  </span>
                )}
              </NavLink>
              <NavLink
                to="/cart"
                className="flex items-center gap-2 hover:text-red-500 "
              >
                <FaShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="md:flex hidden font-Protest">Cart</span>
              </NavLink>
              {/* navbar for small device */}
              <div className="md:hidden">
                <button onClick={toggleMenu}>
                  {MenuOpen ? (
                    <FaTimes className="w-6 h-6 sm:w-8 sm:h-8 text-black mt-3" />
                  ) : (
                    <FaBars className="w-6 h-6 sm:w-8 sm:h-8 text-black mt-3" />
                  )}
                </button>
              </div>
            </div>
          </nav>
          <hr className="hidden md:flex" />
          {/* Items Categories  */}
          <div className="hidden md:block pt-4 md:px-6">
            <ul className="md:flex items-center justify-center text-black hidden font-Roboto text-center gap-10">
              {/* Manually code each list item */}
              <li className="hover:text-orange-500 ">
                <NavLink to="/shop">New Arrivals</NavLink>
                <div className="dropdown  text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Stylish T-shirts</li>
                      <li>Elegant Dresses</li>
                      <li>Latest Jeans Collection</li>
                      <li>Unique Accessories</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Comfortable Sneakers</li>
                      <li>Trendy Hats</li>
                      <li>Chic Handbags</li>
                      <li>Modern Jackets</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="flex justify-center items-start">
                        <img
                          src={navImage}
                          alt="navImage"
                          className="w-40 h-34"
                        />
                      </li>
                      <li className="flex justify-center items-center gap-2">
                        Explore Now{" "}
                        <FaArrowAltCircleRight className="h-4 w-4" />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="">
                  Best-Sellers
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Top-rated T-shirts</li>
                      <li>Bestselling Dresses</li>
                      <li>Customer-favorite Jeans</li>
                      <li>Popular Accessories</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Must-Have Sneakers</li>
                      <li>Hot-selling Hats</li>
                      <li>In-Demand Handbags</li>
                      <li>Latest Jackets</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="flex justify-center items-start">
                        <img
                          src={navImage2}
                          alt="navImage"
                          className="w-40 h-34"
                        />
                      </li>
                      <li className="flex justify-center items-center gap-2">
                        Explore Now{" "}
                        <FaArrowAltCircleRight className="h-4 w-4" />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Clothing
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Stylish Dresses</li>
                      <li>Trendy T-shirts</li>
                      <li>Comfortable Jeans</li>
                      <li>Chic Tops</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Fashionable Jackets</li>
                      <li>Elegant Skirts</li>
                      <li>Casual Shirts</li>
                      <li>Active Wear</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="flex justify-center items-start">
                        <img
                          src={topProduct8}
                          alt="navImage"
                          className="w-40 h-34"
                        />
                      </li>
                      <li className="flex justify-center items-center gap-2">
                        Explore Now{" "}
                        <FaArrowAltCircleRight className="h-4 w-4" />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Sweaters
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Warm Wool Sweater</li>
                      <li>Cozy Turtleneck</li>
                      <li>Stylish Cardigan</li>
                      <li>Festive Holiday Sweater</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Chunky Knit Pullover</li>
                      <li>Luxurious Cashmere Sweater</li>
                      <li>Colorful Patterned Sweater</li>
                      <li>Lightweight V-Neck Sweater</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="flex justify-center items-start">
                        <img
                          src={topProduct9}
                          alt="navImage"
                          className="w-40 h-34"
                        />
                      </li>
                      <li className="flex justify-center items-center gap-2">
                        Explore Now{" "}
                        <FaArrowAltCircleRight className="h-4 w-4" />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Jeans & Denim
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Skinny Fit Jeans</li>
                      <li>Classic Blue Denim</li>
                      <li>Distressed Jeans</li>
                      <li>High-Waisted Denim</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Bootcut Jeans</li>
                      <li>Wide-Leg Denim</li>
                      <li>Embroidered Jeans</li>
                      <li>Black Denim</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Flare Jeans</li>
                      <li>Boyfriend Fit Denim</li>
                      <li>White Denim</li>
                      <li>Raw Hem Jeans</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Dresses
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Summer Sundress</li>
                      <li>Elegant Evening Gown</li>
                      <li>Floral Maxi Dress</li>
                      <li>Casual Shirt Dress</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Cocktail Party Dress</li>
                      <li>Little Black Dress</li>
                      <li>Bohemian Midi Dress</li>
                      <li>Formal Ball Gown</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="flex flex-col gap-6">
                      <li>Wrap Dress</li>
                      <li>Strapless Prom Dress</li>
                      <li>Printed Shift Dress</li>
                      <li>Knitted Sweater Dress</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Shoes, Bags, & Accessories
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Comfortable Sneakers</li>
                      <li>Stylish Boots</li>
                      <li>Classic Heels</li>
                      <li>Casual Flats</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Trendy Backpacks</li>
                      <li>Chic Handbags</li>
                      <li>Leather Totes</li>
                      <li>Crossbody Bags</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="flex flex-col gap-5">
                      <li>Statement Necklaces</li>
                      <li>Designer Watches</li>
                      <li>Stylish Sunglasses</li>
                      <li>Unique Hats</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop" className="text-black cursor-pointer">
                  Sale
                </NavLink>
                <div className="dropdown text-black cursor-pointer">
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Clearance Dresses</li>
                      <li>Discounted Shoes</li>
                      <li>Reduced-price Bags</li>
                      <li>On-Sale Accessories</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className=" flex flex-col gap-6">
                      <li>Markdowns on Tops</li>
                      <li>Special Deals on Bottoms</li>
                      <li>Flash Sale Items</li>
                      <li>Last Chance Offers</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="flex flex-col gap-5">
                      <li>Seasonal Discounts</li>
                      <li>Limited-Time Promotions</li>
                      <li>Exclusive Sale Items</li>
                      <li>Discounted Fashion</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Only mobile menu item  */}
          <div className="pt-4">
            <ul
              className={`bg-black text-white px-4 py-2 rounded font-Roboto flex flex-col gap-3 ${
                MenuOpen ? "" : "hidden"
              }`}
            >
              <li className="hover:text-orange-500">
                <NavLink to="/shop">New Arrivals</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Best-Sellers</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Clothing</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Sweaters</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Jeans & Denim</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Dresses</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Shoes, Bags, & Accessories</NavLink>
              </li>
              <li className="hover:text-orange-500">
                <NavLink to="/shop">Sale</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
