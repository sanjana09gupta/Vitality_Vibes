import { ASSETS } from "../assets";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-[#F4F4F2] w-full flex items-center justify-between px-6 shadow-sm fixed top-0 left-0 z-50 ">

      <Link to="/">
        <img src={ASSETS.LOGO} alt="Logo" className="cursor-pointer" />
      </Link>

     
      {/* <input
        type="search"
        placeholder="Search..."
        className="border border-[#ccc] rounded-full px-4 py-2 outline-none w-1/4 hidden md:block
             hover:border-[#7D6855] focus:border-[#7D6855] transition-colors duration-300"
      /> */}

    
      <nav className="text-[#7D6855] flex items-center gap-8">
        
        {!isHomePage && (
          <Link to="/" className="relative cursor-pointer group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7D6855] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        )}
        <Link to="/about" className="relative cursor-pointer group">
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7D6855] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/services" className="relative cursor-pointer group">
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7D6855] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/gallery" className="relative cursor-pointer group">
          Gallery
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7D6855] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/contact" className="relative cursor-pointer group">
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7D6855] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/booking"
          className="bg-transparent border border-[#7D6855] text-[#7D6855] hover:bg-[#7D6855] hover:text-[#F4F4F2] px-5 py-2 rounded-full transition"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
};

export default Header;
