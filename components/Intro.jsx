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
          Bij Tuinaanleg Kevin Dhond staan we voor kwaliteit en vakmanschap. Wij
          zijn gespecialiseerd in het ontwerpen, aanleggen en onderhouden van
          prachtige tuinen die perfect aansluiten bij uw wensen. Ons team van
          ervaren tuinarchitecten en hoveniers zorgt voor een oase van rust en
          schoonheid. Van sierbestrating en vijvers tot tuinverlichting en
          beplanting, wij bieden een totaaloplossing. Onze aanpak is persoonlijk
          en duurzaam, zodat u jarenlang kunt genieten van een prachtige tuin.
          Kies voor Tuinaanleg Kevin Dhond en ervaar de meerwaarde van een
          professioneel aangelegde tuin.
        </p>
        <h2 className="text-xl pb-4 font-semibold">Onze Diensten</h2>
        <p className="pb-8 max-w-[380px]">
          Wij bieden diverse tuinservices, van ontwerp en renovatie tot
          onderhoud. Onze hoveniers werken met passie en precisie om uw tuin tot
          in de puntjes te verzorgen. Of u nu een moderne stadstuin, een
          weelderige landelijke tuin of een gezinstuin wilt, wij staan voor u
          klaar.
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
