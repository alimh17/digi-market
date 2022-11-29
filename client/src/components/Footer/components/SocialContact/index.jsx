import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiAparat } from "react-icons/si";

const SocialContact = () => {
  return (
    <article className="flex flex-col  mt-5 md:justify-start items-center ">
      <div className="p-3 border-b-2  md:w-full md:p-10">
        <h4 className="text-gray-500 md:text-3xl md:text-center">
          با ما همراه باشید
        </h4>
      </div>
      <div className="flex flex-wrap p-2">
        <AiOutlineTwitter className="m-2 md:m-4 text-gray-500 text-2xl md:text-5xl" />
        <AiOutlineInstagram className="m-2 md:m-4  text-gray-500 text-2xl md:text-5xl" />
        <FaTelegramPlane className="m-2 md:m-4 text-gray-500 text-2xl md:text-5xl" />
        <FaFacebookSquare className="m-2 md:m-4  text-gray-500 text-2xl md:text-5xl" />
        <BsLinkedin className="m-2 md:m-4 text-gray-500 text-2xl md:text-5xl" />
        <SiAparat className="m-2 md:m-4  text-gray-500 text-2xl md:text-5xl" />
      </div>
    </article>
  );
};

export default SocialContact;
