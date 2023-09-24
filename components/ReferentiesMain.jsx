import React from "react";
import image1 from "../public/images/slider/project01_04.jpg";
import image2 from "../public/images/slider/project01_03.jpg";
import image3 from "../public/images/slider/project02_05.jpg";
import { referenties } from "@/constants";
import Image from "next/image";


const ImageCard = ({ index, image, tall, wide }) => {
  return (
    <div
      key={index}
      className={
        wide && tall
          ? "flex justify-center max-w-[calc(100vw-64px)] md:max-w-[900px] items-center col-span-2 row-span-2"
          : wide
          ? "flex justify-center max-w-[calc(100vw-64px)] md:max-w-[900px] items-center col-span-2"
          : tall
          ? "flex justify-center max-w-[calc(100vw-64px)] md:max-w-[900px] items-center row-span-2"
          : "flex justify-center max-w-[calc(100vw-64px)] md:max-w-[900px] items-center"
      }
    >
      <Image
        src={image}
        alt=""
        className="w-[100%] h-[100%] object-cover border-r-5"
      />
    </div>
  );
};

const ReferentiesMain = () => {
  return (
    <div>
      <div className="py-20 px-8 max-w-[1140px] mx-auto">
        <h2 className="pb-20 text-4xl font-semibold">
          Ontdek hier verschillende soorten afgeronde projecten
        </h2>

        <div className="flex flex-row flex-wrap justify-center uppercase font-semibold text-2xl">
          <a
            href="/referenties#type1"
            className="flex flex-col m-8 min-w-[180px] h-[200px]"
          >
            <Image
              src={image1}
              alt=""
              className="pb-4 w-[100%] h-[100%] object-cover"
            />
            <p>Type 1</p>
          </a>
          <a
            href="/referenties#type2"
            className="flex flex-col jutify-center m-8 min-w-[180px] h-[200px]"
          >
            <Image
              src={image2}
              alt=""
              className="pb-4 w-[100%] h-[100%] object-cover"
            />
            <p>Type 2</p>
          </a>
          <a
            href="/referenties#type3"
            className="flex flex-col jutify-center m-8 min-w-[180px] h-[200px]"
          >
            <Image
              src={image3}
              alt=""
              className="pb-4 w-[100%] h-[100%] object-cover"
            />
            <p>Type 3</p>
          </a>
        </div>
      </div>

      <div className="bg-[#3F3F44] py-20 px-8" id="type1">
        <h3 className="pb-16 text-5xl font-semibold text-white">Type1</h3>
        <div className="grid gap-2.5 grid-cols-template auto-rows-[300px] grid-flow-dense">
          {referenties.map((referentie, index) => (
            <ImageCard key={index} index={index} {...referentie} />
          ))}
        </div>
      </div>

      <div className="py-20 px-8" id="type2">
        <h3 className="pb-16 text-5xl font-semibold">Type2</h3>
        <div className="grid gap-2.5 grid-cols-template auto-rows-[300px] grid-flow-dense">
          {referenties.map((referentie, index) => (
            <ImageCard key={index} index={index} {...referentie} />
          ))}
        </div>
      </div>

      <div className="bg-[#3F3F44] py-20 px-8" id="type3">
        <h3 className="pb-16 text-5xl font-semibold text-white">Type3</h3>
        <div className="grid gap-2.5 grid-cols-template auto-rows-[300px] grid-flow-dense">
          {referenties.map((referentie, index) => (
            <ImageCard key={index} index={index} {...referentie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferentiesMain;
