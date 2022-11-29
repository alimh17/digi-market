import React from "react";
import { BsTruck, BsCalendar2Week } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";

const Services = () => {
  return (
    <section className="flex justify-center  md:mt-6 mt-6 md:py-10">
      <figure className="hidden md:flex">
        <div className="container  gap-5  md:grid grid-cols-2 grid-rows-2   ">
          <div className=" flex justify-center items-center bg-gray-100 border  rounded-lg ">
            <p className="text-base text-gray-500">تحویل سریع و ارزان</p>
            <span className="mx-3">
              <BsTruck className="text-5xl text-rose-500" />
            </span>
            <span className="h-full  relative top-auto left-12 p-2">
              <BsTruck className="h-full md:text-8xl text-5xl  opacity-20 text-rose-300" />
            </span>
          </div>
          <div className=" flex justify-center items-center bg-gray-100 border  rounded-lg ">
            <p className="text-base  text-gray-500">پرداخت درب منزل</p>
            <span className="mx-3">
              <MdPayment className="text-5xl text-rose-500" />
            </span>
            <span className="h-full  relative top-auto left-12 p-2">
              <MdPayment className="h-full md:text-8xl text-5xl  opacity-20 text-rose-300" />
            </span>
          </div>
          <div className=" flex justify-center items-center bg-gray-100 border  rounded-lg ">
            <p className="text-bas text-gray-500">پشتیبانی 24/7</p>
            <span className="mx-3">
              <Ri24HoursFill className="text-5xl text-rose-500" />
            </span>
            <span className="h-full  relative top-auto left-12 p-2">
              <Ri24HoursFill className="h-full md:text-8xl text-5xl  opacity-20 text-rose-300" />
            </span>
          </div>
          <div className=" flex justify-center items-center bg-gray-100 border  rounded-lg ">
            <p className=" text-gray-500">ضمانت 3 روز بازگشت کالا</p>
            <span className="mx-3">
              <BsCalendar2Week className="text-5xl text-rose-500" />
            </span>
            <span className="h-full  relative top-auto left-12 p-2">
              <BsCalendar2Week className="h-full md:text-8xl text-5xl  opacity-20 text-rose-300" />
            </span>
          </div>
        </div>
      </figure>
      <figure className="flex  md:hidden gap-3">
        <div className=" flex justify-between items-center h-24  flex-col p-5">
          <span className="">
            <BsTruck className="text-3xl text-violet-300" />
          </span>
          <p className="text-xs text-gray-500">تحویل سریع </p>
        </div>
        <div className=" flex justify-between items-center h-24  flex-col p-5">
          <span className="">
            <MdPayment className="text-3xl text-violet-300" />
          </span>
          <p className="text-xs text-gray-500">پرداخت در محل</p>
        </div>
        <div className=" flex justify-between items-center h-24  flex-col p-5">
          <span className="">
            <Ri24HoursFill className="text-3xl text-violet-300" />
          </span>
          <p className="text-xs text-gray-500">گارانتی بازگشت</p>
        </div>
        {/* <div className=" flex justify-center items-center flex-col   rounded-lg p-5 w-1/3 ">
            <span className="mx-3">
              <MdPayment className="text-md text-rose-500" />
            </span>
            <p className="text-xs text-gray-500">پرداخت در محل</p>
          </div>
          <div className=" flex justify-center items-center flex-col   rounded-lg p-5 w-1/3 ">
            <span className="mx-3">
              <Ri24HoursFill className="text-md text-rose-500" />
            </span>
            <p className="text-xs text-gray-500">پشتیبانی 24/7</p>
          </div>
        </div> */}
      </figure>
    </section>
  );
};

export default Services;
