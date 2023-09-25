import React from "react";
import Tuinontwerp from "../components/Tuinontwerp";
import Tuinaanleg from "../components/Tuinaanleg";
import Onderhoud from "../components/Onderhoud";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../public/images/diensten/image1.png";
import image2 from "../public/images/diensten/image2.png";
import image3 from "../public/images/diensten/image3.png";

const DienstenMain = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto py-20 flex md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col md:pr-16 md:p-0 px-8 mb-10 md:mb-0 md:w-[50%] max-w-[480px] md:max-w-none">
          <h1 className="text-6xl font-semibold pb-12">Diensten</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est
            erat, pulvinar ac sollicitudin non, consectetur eget eros. Aenean
            dolor ante, pulvinar congue imperdiet at, euismod id nulla. In
            malesuada eleifend pretium. Suspendisse euismod, ex dapibus mattis
            rhoncus, arcu metus accumsan arcu, sit amet dapibus leo erat a
            mauris. Phasellus vehicula nisi ipsum. Nulla facilisi. Donec
            placerat lorem sit amet metus mollis, et feugiat elit consequat.
            Aliquam blandit leo a nunc ultricies, ut vehicula dui ultrices.
            Vestibulum lobortis a urna ut sodales.
          </p>
        </div>
        <div className="bg-[#3F3F44] text-white text-4xl overflow-hidden">
          <div
            className="m-4 h-[10vh] bg-cover flex items-center pl-4"
            style={{ backgroundImage: `url(${image1.src})` }}
          >
            <a href="#tuinontwerp" className="pr-4 flex flex-row items-center">
              Tuinontwerp ‎
              <FaArrowRight />
            </a>
          </div>
          <div
            className="m-4 h-[10vh] bg-cover flex items-center pl-4"
            style={{ backgroundImage: `url(${image2.src})` }}
          >
            <a href="#tuinaanleg" className="pr-4 flex flex-row items-center">
              Tuinaanleg ‎
              <FaArrowRight />
            </a>
          </div>
          <div
            className="m-4 h-[10vh] bg-cover flex items-center pl-4"
            style={{ backgroundImage: `url(${image3.src})` }}
          >
            <a href="#onderhoud" className="pr-4 flex flex-row items-center">
              Onderhoud ‎
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      <Tuinontwerp />

      <Tuinaanleg />

      <Onderhoud />
    </div>
  );
};

export default DienstenMain;
