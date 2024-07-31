import React from "react";
import image1 from "../public/images/onderhoud/image1.jpg";
import Image from "next/image";

const Onderhoud = () => {
  return (
    <div>
      <div className="bg-[#3F3F44] px-8 py-20 text-white" id="onderhoud">
        <div className="max-w-[1140px] mx-auto flex flex-row flex-wrap justify-center items-center">
          <div className="md:w-[50%] w-[100%] md:pr-8 pb-8">
            <h2 className="text-5xl pb-12 font-semibold">Onderhoud</h2>
            <p>
              Bij Tuinaanleg Kevin Dhond begrijpen we het belang van een goed
              onderhouden tuin. Ons team biedt uitgebreide onderhoudsdiensten om
              uw tuin er het hele jaar door prachtig uit te laten zien. Van
              snoeien en bemesten tot onkruidbestrijding en seizoensgebonden
              verzorging, wij zorgen ervoor dat uw buitenruimte altijd in
              topconditie is. Met ons vakkundige onderhoud behoudt uw tuin zijn
              schoonheid en vitaliteit, zodat u onbezorgd kunt genieten van een
              groene en verzorgde omgeving.
            </p>
          </div>
          <Image src={image1} alt="" className="md:w-[50%] md:pl-8" />
        </div>
      </div>
    </div>
  );
};

export default Onderhoud;
