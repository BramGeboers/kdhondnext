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
            Bij Tuinaanleg Kevin Dhond bieden wij een uitgebreid scala aan
            diensten om uw tuin tot leven te brengen. Of het nu gaat om het
            ontwerpen van een nieuwe tuin, het vakkundig aanleggen van uw
            buitenruimte, of het periodiek onderhouden van uw tuin, wij staan
            voor u klaar. Ons team van experts zorgt ervoor dat uw tuin altijd
            in topconditie is, zodat u kunt genieten van een prachtige en
            verzorgde buitenomgeving.
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
