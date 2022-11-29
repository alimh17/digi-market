import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const WayContact = () => {
  return (
    <section className="w-full  md:h-full ">
      <p className="text-base text-center text-gray-500 mt-3 md:text-xl md:p-5">
        ساعت پاسخگویی : شنبه تا چهارشنبه8:30 الی 21 - پنجشنبه 9 الی 21
      </p>
      <div className="container flex flex-col items-center md:flex-row md:items-center  justify-around w-full ">
        <div className="flex  justify-center items-center w-1/2 text-base md:text-xl md:p-10">
          <span className="flex items-center p-5">
            <AiFillPhone className="text-lg text-gray-500 md:text-3xl md:mx-3" />
            <p className="p-1">010-111111</p>
          </span>
          <span className="flex items-center p-5">
            <AiFillPhone className="text-lg text-gray-500 md:text-3xl md:mx-3" />
            <p className="p-1">020-222222</p>
          </span>
        </div>
        <div className="flex justify-center items-center  text-base md:text-xl ">
          <MdOutlineMailOutline className="text-lg text-gray-500 md:mx-3 md:text-3xl" />
          <p>amohamadi17@gamil.com</p>
        </div>
      </div>
    </section>
  );
};

export default WayContact;
