"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../public/images/logo/menu_img.jpg";
import Image from "next/image";

const Navbar = () => {
  const [nav, SetNav] = useState(true);

  const handleNav = () => {
    SetNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[90px] max-w-[1140px] mx-auto px-4 text-black">
      <a href="/">
        <Image src={logo} alt="" className="w-[115px]" />
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="/diensten">Diensten</a>
        </li>
        <li className="p-4">
          <a href="/referenties">Referenties</a>
        </li>
        <li className="p-4 text-[#8CC540]">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50"
        }
      >
        <a href="/">
          <Image src={logo} alt="" className="w-[115px] m-4" />
        </a>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-300">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b border-gray-300">
            <a href="/diensten">Diensten</a>
          </li>
          <li className="p-4 border-b border-gray-300">
            <a href="/referenties">Referenties</a>
          </li>
          <li className="p-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
