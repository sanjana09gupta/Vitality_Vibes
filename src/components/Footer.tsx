import { Link } from "react-router-dom";
import { ASSETS } from "../assets";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 w-full">

        {/* Links: stack on mobile, horizontal on md+ */}
        <div className="flex flex-col md:flex-row items-center text-[#7D6855] justify-center gap-4 md:gap-20 mb-6 md:mb-0">
          <Link to="/about" className="hover:underline cursor-pointer">About Us</Link>
          <Link to="/privacy-policy" className="hover:underline cursor-pointer">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline cursor-pointer">Terms of Service</Link>
        </div>

        {/* Social icons: horizontal, centered */}
        <div className="flex gap-6">
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
