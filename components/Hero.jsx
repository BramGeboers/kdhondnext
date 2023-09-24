"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ontwerp", "aanleg", "onderhoud"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 125,
      backDelay: 600,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full sm:h-[660px] h-[500px] bg-center bg-cover bg-hero-background">
      <div className="flex text-white justify-center items-center flex-col h-full ">
        <div className="mx-8">
          <h1 className="sm:text-8xl text-7xl font-quicksand font-semibold">
            Kevin Dhond
          </h1>
          <h2 className="sm:text-4xl text-3xl font-medium">
            Voor <span ref={el}></span> van uw tuin{" "}
          </h2>
        </div>
      </div>

      <a href="#intro" className="mx-auto flex justify-center opacity-80">
        <div className="flex bottom-32 w-[75px] h-[75px] rounded-full justify-center items-center -translate-y-1/2 bg-[#3F3F44]">
          <FaArrowDown size={30} color="white" />
        </div>
      </a>
    </div>
  );
};

export default Hero;
