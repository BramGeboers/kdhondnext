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
          <Image src={image1} alt="" className="md:w-[50%] md:pl-8" />
        </div>
      </div>
    </div>
  );
};

export default Onderhoud;
