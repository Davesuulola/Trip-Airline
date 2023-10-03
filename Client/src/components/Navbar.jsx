import Logo from "../assets/Logo.png";
import Button from "./Button";
import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
const Navbar = () => {

let [open, setOpen] = useState(false)
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-16 px-7">
          <div className="cursor-pointer flex items-center">
            <img src={Logo} className="w-20 pt-2 mr-1" alt="" />
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}    `}>
            <li className="md:ml-8  text-l md:my-0 my-7">
              <Link to={"/"} className="text-gray-800 ben hover:text-gray-400 duration-500">HOME</Link>
            </li>
            <li className="md:ml-8 text-l font-thin md:my-0 my-7">
              <Link to={"/Destination"} className="text-gray-800 hover:text-gray-400 duration-500">WHERE WE FLY</Link>
            </li>   
            <li className="md:ml-8 text-l  md:my-0 my-7">
              <Link to={"/Booking"} className="text-gray-800 hover:text-gray-400 duration-500">BOOK</Link>
            </li>
            <li className="md:ml-8  textl md:my-0 my-7">
              <Link to={"/About"} className="text-gray-800 hover:text-gray-400 duration-500">ABOUT US</Link>
            </li>

            <li className="md:ml-8  textl md:my-0 my-7">
              <Link to={"/test"} className="text-gray-800 hover:text-gray-400 duration-500"></Link>
            </li>

            <Button>
               <Link to={"/Login"}>Login</Link>
            </Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
