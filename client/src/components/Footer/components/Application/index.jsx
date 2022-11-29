import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Application = ({ style }) => {
  return (
    <div className={`${style.application}   m-5 rounded-lg`}>
      <h2 className="text-white p-3 border-b-2 md:text-3xl">دانلود اپلیکیشن</h2>
      <div className={` rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 `}>
        <div className="text-white flex justify-center items-center md:text-2xl p-8">
          <span className="mx-3">دریافت از بازار</span>
          <img
            alt="bazar"
            src={process.env.PUBLIC_URL + "/images/footer/bazaar-logo.png"}
            style={{ width: "5rem", height: "3rem" }}
          />
        </div>
        <div className="text-white flex justify-center items-center md:text-2xl  p-8">
          <span className="mx-3">دریافت از استور</span>
          <img
            alt="bazar"
            src={process.env.PUBLIC_URL + "/images/footer/App_Store.png"}
            style={{ width: "5rem", height: "3rem" }}
          />
        </div>
        <div className="text-white flex justify-center items-center md:text-2xl  p-8">
          <span className="mx-3">دانلود مستقیم</span>
          <BsArrowDown className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Application;
