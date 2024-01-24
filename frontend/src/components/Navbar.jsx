//    Icons Imports Starts
import { FaBars, FaShoppingCart, FaTimes, FaUserCheck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
//   Icons Imports Ends
import { getToken } from "../services/LocalStorageService";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "./Pages/Cart";
const Navbar = () => {
  const { access_token } = getToken();
  const [MenuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 9.99, quantity: 3 },
  ];
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const handleCartClick = (e) => {
    e.preventDefault();
    toggleCart();
  };
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const navItems = [
    { title: "Jewelry & Accessories", path: "/shop" },
    { title: "Clothing & Shoes", path: "/shop" },
    { title: "Wedding & Party", path: "/shop" },
    { title: "Home & Living", path: "/shop" },
    { title: "Toy & Entertainment", path: "/shop" },
    { title: "Art & Collectibles", path: "/shop" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl xl:px-28 px-4 ">
        <nav className="container flex justify-between items-center mx-auto pt-6 pb-3">
          <div>
            <Link to={`/shop`}>
              <FaShoppingCart className="text-black w-5 h-5 cursor-pointer hidden md:block" />
            </Link>
          </div>
          <a href="/">
            <span className="font-bold text-3xl">
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
          </a>
          <div className="text-lg text-black flex items-center gap-4">
            <NavLink
              to={"/dashboard"}
              className="flex items-center gap-0 smd:gap-2 hover:text-red-500"
            >
              {" "}
              {access_token ? (
                <FaUserCheck className="w-5 h5" />
              ) : (
                <FaUser className="w-5 h5" />
              )}
              {access_token ? (
                <span className="pl-2 hidden md:flex">Dashboard</span>
              ) : (
                <span className="pl-2 hidden md:flex">Login</span>
              )}
            </NavLink>
            <NavLink
              to="/cart"
              className="flex items-center gap-2 hover:text-red-500"
              onClick={handleCartClick}
            >
              <FaShoppingBag className="w-5 h-5" />
              <span className="md:flex hidden">Cart</span>
            </NavLink>
            {/* navbar for small device */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {MenuOpen ? (
                  <FaTimes className="w-8 h-8 text-black mt-3" />
                ) : (
                  <FaBars className="w-8 h-8 text-black mt-3" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Items Categories  */}
        <div className="pt-4">
          <ul className="md:flex items-center justify-between text-black hidden">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-orange-500">
                <NavLink to={`${path}`}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Only mobile menu item  */}
        <div className="pt-4">
          <ul
            className={`bg-black text-white px-4 py-2 rounded ${
              MenuOpen ? "" : "hidden"
            }`}
          >
            {navItems.map(({ title, path }) => (
              <li
                key={title}
                className="hover:text-orange-500 my-3 cursor-pointer"
              >
                <NavLink to={`${path}`}>{title}</NavLink>
              </li>
            ))}
          </ul>
          <Cart
            isOpen={showCart}
            onClose={toggleCart}
            isLoggedIn={!!access_token}
            cartItems={cartItems}
            setIsOpen={setShowCart}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;

// const muiNavbar = ()={
//   return(
//     <Box sx={{ flexGrow: 1 }} />
//       <AppBar position="static" color="secondary">
//         <Toolbar>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//             Geek-Shop
//           </Typography>
//           <Button
//             component={NavLink}
//             to="/"
//             sx={{ color: "white", textTransform: "none" }}
//             style={({ isActive }) => {
//               return { backgroundColor: isActive ? "#6d1b7b" : "" };
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             component={NavLink}
//             to="/contact"
//             sx={{ color: "white", textTransform: "none" }}
//             style={({ isActive }) => {
//               return { backgroundColor: isActive ? "#6d1b7b" : "" };
//             }}
//           >
//             Contact
//           </Button>
//           {access_token ? (
//             <Button
//               component={NavLink}
//               to="/dashboard"
//               sx={{ color: "white", textTransform: "none" }}
//               style={({ isActive }) => {
//                 return { backgroundColor: isActive ? "#6d1b7b" : "" };
//               }}
//             >
//               Dashboard
//             </Button>
//           ) : (
//             <Button
//               component={NavLink}
//               to="/login"
//               sx={{ color: "white", textTransform: "none" }}
//               style={({ isActive }) => {
//                 return { backgroundColor: isActive ? "#6d1b7b" : "" };
//               }}
//             >
//               Login/Registration
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>

//   )
// }
