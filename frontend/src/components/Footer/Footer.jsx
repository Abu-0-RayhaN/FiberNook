import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { logo } from "../../assets/images";

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
        <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-start">
          <div className="flex flex-col md:w-2/5 w-full gap-5 text-center md:text-start">
            <div className="flex justify-center md:justify-start font-Rubik">
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
