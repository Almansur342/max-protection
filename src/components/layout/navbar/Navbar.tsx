import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);
  return (
    <div className="relative w-full z-50 sm:px-[5%] sm:py-7 md:py-0">
      <div className="max-w-screen-xl container">
        {/* navbar for laptop */}
        <div className="relative hidden lg:flex justify-between">
          <div className="">
          <NavLink to="/">
            <img className="absolute" src={logo} alt="" />
          </NavLink>
          </div>
          <nav className="py-6 px-4 ">
            <ul className="flex space-x-9">
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/solutions">Solutions</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* navbar for mobile */}
        <div className="relative lg:hidden flex justify-between z-50 ">
          <NavLink to='/'>
          <img className="absolute h-[140%]" src={logo} alt="" />
          </NavLink>
          <button className="text-3xl p-3 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMenuOpen && (
          <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-white z-0"></div>
        )}
        <div className="lg:hidden relative">
          <nav className={`${
            isMenuOpen ? 'translate-y-0 shadow-md opacity-100':'-translate-y-80 opacity-100'
          } transform transition-all duration-500 ease-in-out absolute top-5 z-10 overflow-x-hidden w-full py-6 `}>
             <ul className="flex flex-col items-center text-center space-y-3">
             <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/solutions">Solutions</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="relative text-xl font-semibold text-[#253237]">
                <NavLink to="/contact">Contact</NavLink>
              </li>
             </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
