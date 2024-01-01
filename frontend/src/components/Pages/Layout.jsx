import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { CssBaseline } from "@mui/material";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
