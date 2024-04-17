import React from "react";
import ContactCard from "./ContactCard";
import { FaRocketchat } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="my-4">
        <h1 className="text-center font-bold text-2xl md:text-5xl phil">GET IN TOUCH</h1>
        <h1 className="mb-6 text-xl jul font-semibold text-gray-500 mt-2 text-center">Ready to get services from us? Let's Chat how we can help you.</h1>
        <div className="flex flex-col lg:flex-row gap-32 justify-evenly items-center mx-auto w-full">
          <ContactCard
            className=""
            logo={<FaRocketchat />}
            title="Chat to Sales"
            desc="Speak to our agents"
            btnText="Chat to sales"
          />
          <ContactCard
            className=""
            logo={<FaWhatsapp />}
            title="Chat to Support"
            desc="Were here to help"
            btnText="Chat to support"
          />
          <ContactCard
            className=""
            logo={<CiLocationOn />}
            title="Visit us"
            desc="Visit our offices"
            btnText="Get Directions"
          />
          <ContactCard
            className=""
            logo={<IoIosCall />}
            title="Call Us"
            desc="Sun-Thu from 9am to 6pm"
            btnText="Call or team"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
