import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const Support = () => {
  return (
    <div className="flex border-t my-5 justify-between">
      <div className="flex flex-col my-3 w-2/3 justify-between">
        <h3 className="text-2xl md:text-5xl text-red-500 my-3 mx-3">
          دیجی مارکت
        </h3>
        <ul className="flex">
          <li className="md:text-2xl mx-3">
            تلفن پشتیبانی <span dir="rtl">021-6193000</span>
          </li>
          <span className="mx-3 md:text-2xl">|</span>
          <li className="md:text-2xl">
            7 روز هفته، 24 ساعته پاسخگوی شما هستیم
          </li>
        </ul>
      </div>
      <span className="w-32 h-10 flex justify-center items-center m-5 border rounded cursor-pointer">
        <h3>بازگشت به بالا</h3>
        <RiArrowDropUpLine className="text-3xl mx-1" />
      </span>
    </div>
  );
};

export default Support;
