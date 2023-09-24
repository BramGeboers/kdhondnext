import React from "react";
import image1 from "../public/images/diensten/3d.png";
import image2 from "../public/images/diensten/onderhoud.png";
import image3 from "../public/images/diensten/tuinaanleg.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Head from 'next/head'
import Image from "next/image";


const Diensten = () => {
  return (
    
    <div className="bg-[#3F3F44]">
      <div>
      <Head>
        <title>Diensten</title>
      </Head>
    </div>
      <div className=" text-white py-20 max-w-[1140px]  mx-auto ">
        <h2 className="font-bold text-5xl pb-16 mx-8">Onze Diensten</h2>
        <div className="flex pb-16 justify-between flex-col md:flex-row mx-8 items-center">
          <div className="md:py-8 py-0 pb-8 pr-12 md:w-[45%] flex justify-center flex-col">
            <h3 className="pb-4 text-2xl font-semibold">Tuinontwerp</h3>
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
              erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
              dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
              malesuada eleifend pretium.
            </p>
            <Link
              href={"/diensten#tuinontwerp"}
              className="text-[#8CC540] font-semibold flex flex-row items-center"
            >
              Ontdek meer ‎ <FaArrowRight />
            </Link>
          </div>
          <Image src={image1} alt="" className="md:w-[55%] h-[100%]" />
        </div>
        <div className="flex pb-16 justify-between flex-col md:flex-row mx-8 items-center">
          <Image
            src={image3}
            alt=""
            className="hidden md:block w-[55%] pr-12 h-[100%]"
          />
          <div className="md:py-8 py-0 pb-8 md:w-[45%] flex justify-center flex-col">
            <h3 className="pb-4 text-2xl font-semibold">Tuinaanleg</h3>
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
              erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
              dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
              malesuada eleifend pretium.
            </p>
            <Link
              href={"/diensten#tuinaanleg"}
              className="text-[#8CC540] font-semibold flex flex-row items-center"
            >
              Ontdek meer ‎ <FaArrowRight />
            </Link>
          </div>
          <Image src={image3} alt="" className="block md:hidden" />
        </div>
        <div className="flex justify-between flex-col md:flex-row mx-8 items-center">
          <div className="md:py-8 py-0 pb-8 pr-12 md:w-[45%] flex justify-center flex-col">
            <h3 className="pb-4 text-2xl font-semibold">Onderhoud</h3>
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
              erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
              dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
              malesuada eleifend pretium.
            </p>
            <Link
              href={"/diensten#onderhoud"}
              className="text-[#8CC540] font-semibold flex flex-row items-center"
            >
              Ontdek meer ‎ <FaArrowRight />
            </Link>
          </div>
          <Image src={image2} alt="" className="md:w-[55%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Diensten;
