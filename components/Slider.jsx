"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import imagesslider from "../constants/imagesslider";
import Image from "next/image";


const Slider = () => {
  const boxRef = useRef(null);

  return (
    <div className="py-20">
      <h1 className="font-bold text-5xl text-center pb-16 ">
        Afgeronde Projecten
      </h1>

      <div ref={boxRef} className=" p-[10px] flex overflow-x-hidden w-[100%]">
        <motion.div
          className="h-[300px] inline-flex gap-10 px-8"
          drag="x"
          dragConstraints={boxRef}
        >
          {imagesslider.map((image) => {
            return (
              <Image
                key={image}
                src={image}
                alt=""
                className="sm:min-w-[450px] min-w-[380px] h-150 pointer-events-none object-contain"
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
