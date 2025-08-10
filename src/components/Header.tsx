import { useState } from "react";
import { ASSETS } from "../assets";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-[#F4F4F2] w-full flex items-center justify-between px-6 shadow-sm fixed top-0 left-0 z-50 md:h-20">
        {/* Logo */}
        <Link to="/" onClick={() => setDrawerOpen(false)}>
          <img src={ASSETS.LOGO} alt="Logo" className="cursor-pointer max-md:h-15" />
        </Link>

        {/* Desktop Nav */}
        <nav className="text-[#7D6855] hidden md:flex items-center gap-8">
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

        {/* Hamburger Icon for mobile */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="md:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6 text-[#7D6855]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#F4F4F2] z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg flex flex-col px-6 pt-16`}
      >
        {/* Close button */}
        <button
          onClick={() => setDrawerOpen(false)}
          className="self-end mb-6 focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6 text-[#7D6855]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <nav className="flex flex-col gap-6 text-[#7D6855]">
          {!isHomePage && (
            <Link to="/" onClick={() => setDrawerOpen(false)} className="text-lg font-medium">
              Home
            </Link>
          )}
          <Link to="/about" onClick={() => setDrawerOpen(false)} className="text-lg font-medium">
            About Us
          </Link>
          <Link to="/services" onClick={() => setDrawerOpen(false)} className="text-lg font-medium">
            Services
          </Link>
          <Link to="/gallery" onClick={() => setDrawerOpen(false)} className="text-lg font-medium">
            Gallery
          </Link>
          <Link to="/contact" onClick={() => setDrawerOpen(false)} className="text-lg font-medium">
            Contact
          </Link>
          <Link
            to="/booking"
            onClick={() => setDrawerOpen(false)}
            className="bg-transparent border border-[#7D6855] text-[#7D6855] hover:bg-[#7D6855] hover:text-[#F4F4F2] px-5 py-2 rounded-full transition text-center"
          >
            Book Now
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Header;
