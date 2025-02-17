import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/icon.png";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
export default function Navbar2() {
  
  const [open,setOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto">
       <div className="flex justify-between">
      {/* logo */}
      <div className="">
        <img className='absolute h-[15%] md:h-[20%] lg:h-auto z-20' src={logo} alt="" />
      </div>

      {/* menu bar */}
      <div onClick={()=>setOpen(!open)} className="lg:hidden text-3xl cursor-pointer my-2">
      {
        open? <IoClose />: <IoMdMenu />
      }
      
      </div>

      {/* nav items */}
      <div className={`lg:my-8 bg-white absolute md:absolute lg:static lg:min-h-fit right-0  md:right-0 min-h-[60vh] md:min-h-[65vh] w-full md:w-full lg:w-auto flex md:items-center transition-all duration-500 z-[-1]  lg:z-auto ease-in ${open?'top-[13%] z-10' : 'top-[-100%]'}`}>
        <ul className="flex flex-col md:flex-col lg:flex-row items-center gap-[7vh]">
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/solutions">Solutions</NavLink>
          </li>
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="text-xl font-semibold text-[#253237]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
   
  );
}
