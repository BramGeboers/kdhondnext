import React from "react";
import image1 from "../public/images/ontwerp/Rectangle12.png";
import image2 from "../public/images/ontwerp/image6.png";
import image3 from "../public/images/ontwerp/image7.png";
import Image from "next/image";


const Tuinontwerp = () => {
  return (
    <div>
      {" "}
      <div
        id="tuinontwerp"
        className="bg-[#3F3F44] py-20 text-white overflow-hidden"
      >
        <div className="max-w-[1140px] mx-auto px-8 flex flex-col">
          <h2 className="pb-12 text-5xl font-bold max-w-[480px] md:mx-0 mx-auto">
            Tuinontwerp
          </h2>
          <div className="flex pb-16 items-center md:flex-row flex-col md:justify-between">
            <p className="md:pr-16 md:px-0 md:pb-0 pb-8  md:w-[50%] max-w-[480px]">
              Alles begint met een goed gesprek waarbij uw wensen en verlangens
              onze prioriteit zijn, zowel op tuingebied als op financieel vlak.
              De ideale tuin ziet er voor iedereen namelijk anders uit. Daarom
              komen wij langs voor een vrijblijvend gesprek.
            </p>
            <div className="md:w-[50%] md:pl-4">
              <span className="md:text-[300px] text-[200px]  font-semibold absolute opacity-80 md:-translate-y-52 -translate-y-20 md:translate-x-56 lg:translate-x-72">
                1
              </span>
              <Image
                src={image1}
                alt=""
                className="object-contain h-[100%] w-[100%]"
              />
            </div>
          </div>
          <div className="flex pb-16 items-center md:flex-row flex-col md:justify-between">
            <div className="md:w-[50%] md:pr-4">
              <span className="md:text-[300px] text-[200px] font-semibold opacity-80 text-[#CCEABB] md:-translate-y-40 lg:translate-y-0 md:block absolute hidden">
                2
              </span>
              <Image
                src={image2}
                alt=""
                className="h-[100%] w-[100%] md:block hidden"
              />
            </div>
            <p className="md :w-[50%] max-w-[480px] md:pl-16 md:px-0 md:pb-0 pb-8">
              Bij het maken van een tuinontwerp gaan we in eerste instantie na
              in welke toestand het perceel zich op dat moment bevindt. Het kan
              gaan van een braakliggend perceel tot een tuin die aan renovatie
              toe is. De focus kan hierbij liggen op een moderne, klassieke of
              onderhoudsvriendelijke tuin. Door onze jarenlange ervaring in de
              tuinsector kunnen wij een goede inschatting maken van de situatie
              en u vakkundig adviseren bij de aanleg van uw tuin, maar evenzeer
              toekomstgericht bijvoorbeeld inzake onderhoud.
            </p>
            <div className="md:hidden">
              <span className="text-[200px] font-semibold opacity-80 text-[#CCEABB] -translate-y-16 -translate-x-8 absolute">
                2
              </span>
              <Image src={image2} alt="" className="h-[100%] w-[100%]" />
            </div>
          </div>
          <div className="flex items-center md:flex-row flex-col md:justify-between">
            <div className="flex flex-col justify-center md:w-[50%] max-w-[480px] md:pr-16 md:px-0">
              <p className="pb-8">
                Bij een volgende afspraak wordt het tuinontwerp met u
                doorgenomen en eventueel aangepast aan uw wensen. Volgens de
                wens van u als klant, kan voor minder uitgebreide werkzaamheden
                eventueel ook een schets volstaan. Het ontwerp is pas afgerond
                als u zich volledig kunt vinden in wat er wordt voorgesteld, ook
                op financieel gebied. De tevredenheid van onze klanten staat
                namelijk bij ons voorop!
              </p>
              <p className="md:block hidden pb-8">
                Indien gewenst, kunnen wij ook voor een 3D-plan van uw tuin
                zorgen. U kunt ons steeds vrijblijvend contacteren voor een
                tuinrenovatie of de aanleg van een nieuwe tuin.
              </p>
              <a
                href="/contact"
                className="font-semibold bg-[#8CC540] w-[217px] h-[55px] items-center justify-center text-lg mb-20 md:mb-0 md:flex hidden text-black hover:bg-white border-[#8CC540] border-4 ease-in-out duration-200"
              >
                Contacteer ons
              </a>
            </div>
            <div className="md:w-[50%] md:pl-4 pb-16">
              <span className="md:text-[300px] text-[200px] font-semibold absolute opacity-80 text-[#8CC540] -translate-y-12 -translate-x-4 md:translate-x-40 lg:translate-x-72">
                3
              </span>
              <Image src={image3} alt="" className="h-[100%] w-[100%] " />
            </div>
            <div className="max-w-[480px] md:pr-16 md:px-0 md:pb-0 md:hidden">
              <p className=" pb-8">
                Indien gewenst, kunnen wij ook voor een 3D-plan van uw tuin
                zorgen. U kunt ons steeds vrijblijvend contacteren voor een
                tuinrenovatie of de aanleg van een nieuwe tuin.
              </p>
              <a
                href="/contact"
                className="font-semibold bg-[#8CC540] w-[217px] h-[55px] flex items-center justify-center text-lg mb-20 md:mb-0 text-black hover:bg-white border-[#8CC540] border-4 ease-in-out duration-200"
              >
                Contacteer ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuinontwerp;
