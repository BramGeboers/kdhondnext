import React from "react";
import { werken } from "@/constants";

const WorkCard = ({ index, titel, beschrijving, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className="w-[100%] max-w-[615px] lg:w-[45%] bg-[#3F3F44] mx-4 mb-8 bg-cover h-[200px] flex items-end overflow-hidden"
      key={index}
    >
      <div className=" bg-[#8CC540] bg-opacity-90 cursor-pointer xxs:translate-y-[130px] xs:translate-y-[105px] s:translate-y-[82px] translate-y-[100px] ease-in-out duration-500 hover:translate-y-0">
        <h3 className="text-l md:text-xl uppercase px-4 py-2 pointer-events-none flex flex-row items-center">
          {titel}
        </h3>
        <p className="block opacity-100 pointer-events-none px-4 pb-2">
          {beschrijving}
        </p>
      </div>
    </div>
  );
};

const Tuinaanleg = () => {
  return (
    <div className="py-20 max-w-[1140px] mx-auto" id="tuinaanleg">
      <div className="max-w-[750px] lg:mx-0 mx-auto px-10">
        <h2 className="text-5xl pb-12 font-semibold">Tuinaanleg</h2>
        <p>
          Wij zorgen voor de aanleg van uw tuin aan de hand van ons eigen
          ontwerp of wij voeren het plan uit dat reeds in uw bezit is. Bij de
          aanleg van uw tuin ziet u deze in verschillende stappen werkelijkheid
          worden. Door ons eigen machinepark en onze ervaring is het namelijk
          mogelijk om de onderstaande werkzaamheden uit te voeren:
        </p>
      </div>

      <div className="flex flex-wrap flex-row pt-20 justify-center">
        {werken.map((werk, index) => (
          <WorkCard key={werk.titel} index={index} {...werk} />
        ))}
      </div>
    </div>
  );
};

export default Tuinaanleg;
