import React from 'react';
import { FaRocketchat } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const ContactCard = (props) => {
    const {logo,title, desc, btnText} = props;
    return (
        <div className='border rounded p-8 w-80 md:w-96 lg:w-80 space-y-2 bg-yellow-200 mb-10'>
            <div className='mb-4 text-2xl'>{logo}</div>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <h4>{desc}</h4>
            <button className='btn btn-outline btn-success'>{btnText}</button>
        </div>
    );
};

export default ContactCard;