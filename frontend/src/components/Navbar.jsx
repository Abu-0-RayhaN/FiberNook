// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
// import { getToken } from "../services/LocalStorageService";
//    Icons Imports Starts
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
//   Icons Imports Ends
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { useState } from "react";
const Navbar = () => {
  // const { access_token } = getToken();
  const [MenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Toy & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl xl:px-28 px-4 ">
        <nav className="container flex justify-between items-center mx-auto pt-6 pb-3">
          <div>
            <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="text-lg text-black flex items-center gap-4">
            <a href="/" className="flex items-center gap-0 smd:gap-2">
              {" "}
              <FaUser /> <span className="hidden md:flex">Accounts</span>
            </a>
            <a href="/" className="flex items-center gap-2">
              {" "}
              <FaShoppingBag /> <span className="md:flex hidden">Shopping</span>
            </a>
          </div>
          {/* navbar for small device */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {MenuOpen ? (
                <FaTimes className="w-5 h-5 text-black" />
              ) : (
                <FaBars className="w-5 h-5 text-black" />
              )}
            </button>
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
