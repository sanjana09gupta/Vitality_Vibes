import { Link } from "react-router-dom";
import { ASSETS } from "../assets";

const Footer = () => {
  return (
    <footer className="py-8 ">
      <div className=" flex flex-col justify-between items-center gap-6 w-full">
     
        <div className="flex items-center text-[#7D6855] justify-center gap-20">
          <Link to="/about" className="hover:underline cursor-pointer">About Us</Link>
          <Link to="/privacy-policy" className="hover:underline cursor-pointer">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline cursor-pointer">Terms of Service</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ASSETS.INSTAGRAM} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={ASSETS.FACEBOOK} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={ASSETS.TWITTER} alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
