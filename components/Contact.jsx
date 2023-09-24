import React from "react";

const Contact = () => {
  return (
    <div className="py-20 bg-[#3F3F44] flex justify-center">
      <div className="bg-contact-background md:w-[60%] mx-8">
        <div className="bg-black text-white bg-opacity-50 md:max-w-sm py-36 px-10 md:ml-20">
          <h1 className="font-semibold text-3xl pb-8">
            Wilt u een offerte aanvragen?
          </h1>
          <p className="pb-12">
            Neem contact op met onze medewerkers voor een gepersonaliseerde
            offerte en persoonlijk advies.
          </p>
          <a
            href="/contact"
            className="font-semibold bg-[#8CC540] w-[217px] h-[55px] flex items-center justify-center text-lg text-black hover:bg-white border-[#8CC540] border-4 ease-in-out duration-200"
          >
            Contacteer Ons
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
