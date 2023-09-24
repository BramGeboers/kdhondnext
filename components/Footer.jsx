import React from "react";
import logo from "../public/images/logo/menu_img.jpg";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="max-w-[1140px] mx-auto flex md:flex-row flex-wrap py-20 justify-center">
      <div className="w-[320px] sm:w-1/3 pb-8 sm:pb-0 flex justify-center">
        <a href="/">
          <Image src={logo} alt="" className="w-[115px] object-contain" />
        </a>
      </div>
      <div className="w-[320px] sm:w-1/3 pb-8 sm:pb-0 flex justify-center">
        <ul>
          <li>
            <a href="/diensten">Diensten</a>
          </li>
          <li>
            <a href="/referenties">Referenties</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-[320px] sm:w-1/3 flex justify-center">
        <ul>
          <li>Neem contact op</li>
          <li>+32 496 30 60 92</li>
          <li>info@kevindhond.be</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
