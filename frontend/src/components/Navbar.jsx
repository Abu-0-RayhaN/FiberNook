// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
// import { getToken } from "../services/LocalStorageService";
//    Icons Imports Starts
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
//   Icons Imports Ends
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
const Navbar = () => {
  // const { access_token } = getToken();
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
            <img src={logo} alt="" />
          </a>
          <div className="text-lg text-black sm:flex items-center gap-4 hidden">
            <a href="/" className="flex items-center gap-2">
              {" "}
              <FaUser /> Accounts
            </a>
            <a href="/" className="flex items-center gap-2">
              {" "}
              <FaShoppingBag /> Shopping
            </a>
          </div>
          {/* navbar for small device */}
          {/* <div>
            <button>
              <FaBars />
            </button>
          </div> */}
        </nav>
        <hr />

        {/* Items Categories  */}
        <div className="pt-4">
          <ul className="lg:flex items-center justify-between text-black hidden">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-orange-500">
                <NavLink to={`/${path}`}>{title}</NavLink>
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
