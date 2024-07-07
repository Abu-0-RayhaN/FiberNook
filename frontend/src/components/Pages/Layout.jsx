import { Outlet } from "react-router-dom";
import NavTop from "../NavTop/NavTop";
import { CssBaseline } from "@mui/material";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "../Navbar/Navbar";
const Layout = () => {
  return (
    <div>
      <CssBaseline />
      <NavTop />
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <Outlet />
        <ScrollToTop />
        <Footer />
      </div>
      <FooterBottom />
    </div>
  );
};

export default Layout;
