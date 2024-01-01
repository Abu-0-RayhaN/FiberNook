import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { logo } from "../../assets/images";

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
        <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-start">
          <div className="flex flex-col md:w-2/5 w-full gap-5 text-center md:text-start">
            <div className="flex justify-center md:justify-start">
              <img src={logo} alt="" className="text-center" />
            </div>
            <p className="md:mr-20 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus ea vero necessitatibus unde libero asperiores? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cum, magnam!
            </p>
            <div className="flex gap-10 text-2xl justify-center md:justify-start">
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
            </div>
          </div>
          <div className="flex md:w-1/5 w-full flex-col gap-3">
            <h4 className="text-lg text-black uppercase">catalog</h4>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Neckless</li>
              <li>Hoodies</li>
              <li>Jewelry Box</li>
              <li>T-Shirt</li>
              <li>Jacket</li>
            </ul>
          </div>
          <div className="flex md:w-1/5 w-full flex-col gap-3">
            <h4 className="text-lg text-black uppercase">About us</h4>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Our Producers</li>
              <li>Sitemap</li>
              <li>faq</li>
              <li>About us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/5 w-full gap-3">
            <h4 className="text-lg text-black uppercase">customer services</h4>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Contact us</li>
              <li>track your order</li>
              <li>product care & repair</li>
              <li>book an appointment</li>
              <li>shipping & returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
