// @ts-nocheck
import React, { useState } from "react";
import Button from "../Header/Button";
import "../Header/Header.css";

const Header = () => {
  const links = [
    { name: "Home", url: "/home" },
    { name: "Product", url: "/Product" },
    { name: "Shop", url: "/Shop" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ];

  const button = [
    { register: "Register", url: "/register" },
    // { signUp: "Sign Up", url: "/" },
    // { logIn: "Log In", url: "/" },
    { getStarted: "Get Started", url: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" header md:z-0 max-sm:z-0  shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7">
        {/* for logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 hover:text-indigo-800 none">
          Ema-Jhon
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 opacity-100 " : "top-[-490px]"
          } md:opacity-100 opacity-100`}
        >
          {links.map((link) => (
            <li key={link.url} className="md:ml-8 text-xl md:my-0 my-5">
              <a
                href={link.url}
                className="text-gray-800 hover:text-indigo-800 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {button.map((btn) => (
            <Button btn={btn}></Button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
