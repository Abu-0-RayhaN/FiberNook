import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavTop from "../NavTop/NavTop";
import { CssBaseline } from "@mui/material";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <NavTop />
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
