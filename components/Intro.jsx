import React from "react";
import photo from "../public/images/intro/image11.png";
import Image from "next/image";


const Intro = () => {
  return (
    <div
      className="py-20 px-12 max-w-[1140px] mx-auto flex flex-col md:flex-row"
      id="intro"
    >
      <div className="md:w-1/2 flex justify-center flex-col md:pr-12 pr-0">
        <h1 className="text-4xl pb-8 font-bold">Tuinaanleg Kevin Dhond</h1>
        <p className="pb-4 md:max-w-[380px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
          erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
          dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
          malesuada eleifend pretium. Suspendisse euismod, ex dapibus mattis
          rhoncus, arcu metus accumsan arcu, sit amet dapibus leo erat a mauris.
          Phasellus vehicula nisi ipsum. Nulla facilisi. Donec placerat lorem
          sit amet metus mollis, et feugiat elit consequat. Aliquam blandit leo
          a nunc ultricies, ut vehicula dui ultrices. Vestibulum lobortis a urna
          ut sodales.
        </p>
        <h2 className="text-xl pb-4 font-semibold">Lorem</h2>
        <p className="pb-8 max-w-[380px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
          erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
          dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
          malesuada eleifend pretium.
        </p>
        <a
          href="/contact"
          className="font-semibold bg-[#8CC540] w-[217px] h-[55px] flex items-center justify-center text-lg mb-20 md:mb-0 hover:bg-white border-[#8CC540] border-4 ease-in-out duration-200"
        >
          Contact Opnemen
        </a>
      </div>
      <div className="md:w-1/2 max-w-[550px]  flex justify-center items-center -z-10">
        <Image src={photo} alt="" className="h-100 w-100" />
      </div>
    </div>
  );
};

export default Intro;
