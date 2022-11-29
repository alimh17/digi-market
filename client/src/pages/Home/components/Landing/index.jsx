import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const Landing = () => {
  return (
    <div
      className="hidden lg:flex w-full font-sans"
      style={{ height: "50rem" }}
    >
      <div className="w-1/2 flex flex-col items-center justify-evenly">
        <div className="w-3/4 break-words text-center">
          <h2 className="text-3xl font-semibold block">
            خریدی امن و مطمئن از
            <span className="text-rose-500 font-bold text-4xl block">
              دیجی مارکت
            </span>
          </h2>
          <div className="mt-8">
            <p className="mt-2">
              با ثبت بیش از <span className="text-rose-500">+2000</span> نظر
              مثبت
            </p>
            <p className="mt-2">
              رضایت <span className="text-rose-500">90</span> درصدی از ارسال
              مرسوله های پستی
            </p>
          </div>
        </div>
        <div className="">
          <Link to="/shop">
            <button className="bg-rose-500 px-4 py-2 mx-4 rounded-lg text-white w-32">
              فروشگاه
            </button>
          </Link>
          <Link to="/offers">
            <button className="border  px-4 py-2 mx-4 rounded-lg w-32">
              تخفیف ها
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex items-end  relative">
        <p
          className={`absolute text-6xl font-bold  bottom-2/4 right-1/3 text-gray-200 -rotate-90 -z-10 `}
        >
          MARKET
        </p>
        <p
          className={`absolute text-6xl font-bold right-0 bottom-0 text-gray-200  -z-10 ${style.digi}`}
        >
          DIGI
        </p>
        <div
          className={`block bg-rose-500 rounded-full ${style.fillCircle}`}
        ></div>
        <div
          className={`border rounded-full absolute -bottom-10 -right-10 ${style.strokCircle}`}
        ></div>
        <img
          alt="langin_image"
          src={
            process.env.PUBLIC_URL +
            "/images/half-length-shot-optimistic-man-holds-smartphone-with-mock-up-screen__2_-removebg-preview.png"
          }
          className={`absolute bottom-0 -right-10 ${style.manHolds}`}
        />
        <div
          className={`w-1/2 h-1/2 absolute top-1/3 left-2/4 -z-10 ${style.arrow}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="600"
            fill="none"
            viewBox="0 0 690 694"
          >
            <path
              fill="#333333"
              d="M.894.858.858 13.106l12.248.036.036-12.248L.894.858Zm688.17 690.084-681-685-2.128 2.116 681 685 2.128-2.116Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
