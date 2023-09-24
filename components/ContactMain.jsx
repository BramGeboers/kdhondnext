"use client";
import React, { useRef } from "react";
import image1 from "../public/images/contactpage/Ellipse1.png";
import image2 from "../public/images/slider/project02_05.jpg";
import emailjs from "@emailjs/browser";
import Image from "next/image";


const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sv6ftfg",
        "template_k2gxeta",
        form.current,
        "oIccSDcDnCr0lSzE9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("bericht verzonden");
          e.target.reset();
          alert("Uw bericht werd verzonden");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
          alert("Er is een fout opgetreden");
        }
      );
  };

  return (
    <div>
      <div className="pt-20 mx-auto max-w-[1140px] flex justify-center px-8">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="w-[350px] pb-20 flex justify-center">
            <Image src={image1} alt="" className="max-w-[150px]  flex-col" />
          </div>
          <ul className="w-[350px] flex justify-center flex-col pb-20 items-center">
            <li className="font-semibold">Kevin Dhond</li>
            <li>+32 496 30 60 92</li>
            <li>info@kevindhond.be</li>
          </ul>
          <ul className="w-[350px] flex justify-center flex-col pb-20 items-center">
            <li className="font-semibold">Adres</li>
            <li>Sint-Bernardusstraat 51</li>
            <li>3920 Lommel</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#3F3F44]">
        <div className=" flex max-w-[1140px] justify-center py-20 px-8 mx-auto">
          <Image
            src={image2}
            alt=""
            className="md:block hidden w-1/2  max-w-[600px] pr-20 object-cover"
          />
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-row flex-wrap md:w-1/2 max-w-[600px] justify-between"
          >
            <label htmlFor="" className="pb-2 text-white">
              Naam
            </label>
            <input
              required
              type="text"
              name="user_name"
              className="w-[100%] bg-[#D9D9D9] p-1 mb-1 focus:outline-none"
            />
            <label className="pb-2 pt-4 text-white">E-mail</label>
            <input
              required
              type="email"
              name="user_email"
              className="w-[100%] bg-[#D9D9D9] p-1 mb-1 focus:outline-none"
            />
            {/* <label className="pb-2 pt-4 text-white">Telefoon</label>
            <input
              required
              type="text"
              name="user_phone"
              className="w-[100%] bg-[#D9D9D9] p-1 mb-1 focus:outline-none"
            /> */}
            <label className="pb-2 pt-4 text-white">Bericht</label>
            <textarea
              required
              name="message"
              id=""
              cols="30"
              rows="8"
              className="w-[100%] bg-[#D9D9D9] p-1 mb-1 focus:outline-none"
            ></textarea>
            <input
              type="submit"
              value="Verzend"
              className="mt-8 font-semibold bg-[#8CC540] w-[150px] h-[55px] flex items-center justify-center text-lg mb-20 md:mb-0 hover:bg-white border-[#8CC540] border-4 ease-in-out duration-200 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
