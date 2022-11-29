import React from "react";
import { FaTimes } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./navbar.css";

const MobileMenu = ({ show, hidden }) => {
  const handleHiddenMenu = () => {
    hidden(false);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`${
        show ? "show" : "hiden"
      } bg-blue-300 h-screen fixed top-0 opacity-100`}
      style={{ zIndex: "15" }}
    >
      <ul className="w-full bg-white">
        <div className="w-full flex justify-center items-center py-10 ">
          <h1
            className="brand text-red-500 text-2xl"
            onClick={handleHiddenMenu}
          >
            <Link to="/">Digi Market</Link>
          </h1>
        </div>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full border-b"
          onClick={handleHiddenMenu}
        >
          <Link to="mobiles" className="flex justify-between w-full text-xl">
            موبایل
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full border-b"
          onClick={handleHiddenMenu}
        >
          <Link to="laptops" className="flex justify-between w-full text-xl">
            لپ تاپ
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className="t px-5 my-5 text-gray-400 flex justify-between w-full border-b"
          onClick={handleHiddenMenu}
        >
          <Link to="tablets" className="flex justify-between w-full text-xl">
            تبلت
            <RiArrowLeftSLine />
          </Link>
        </li>
        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full border-b"
          onClick={handleHiddenMenu}
        >
          <Link to="consoles" className="flex justify-between w-full text-xl">
            کنسول بازی
            <RiArrowLeftSLine />
          </Link>
        </li>

        <li
          className=" px-5 my-5 text-gray-400 flex justify-between w-full border-b"
          onClick={handleHiddenMenu}
        >
          <Link
            to="smartwatchs"
            className="flex justify-between w-full text-xl"
          >
            ساعت هوشمند
            <RiArrowLeftSLine />
          </Link>
        </li>
        <div className="flex justify-center items-center mt-20 relative -bottom-20">
          <p
            className={`absolute text-2xl font-bold  text-gray-200 -rotate-90 left-0 top-10`}
          >
            MARKET
          </p>
          <p
            className={`absolute text-2xl font-bold left-3/4 bottom-0 text-gray-200  digi`}
          >
            DIGI
          </p>
          <div className={`block bg-rose-500 rounded-full fillCircle`}></div>
          <div
            className={`border rounded-full absolute -bottom-10  strokCircle`}
          ></div>
          <img
            alt="langin_image"
            src={
              process.env.PUBLIC_URL +
              "/images/half-length-shot-optimistic-man-holds-smartphone-with-mock-up-screen__2_-removebg-preview.png"
            }
            className={`absolute bottom-0  manHolds`}
          />
        </div>
      </ul>

      <FaTimes
        className="absolute m-5 top-0 left-0 text-xl text-red-500"
        onClick={() => hidden(false)}
      />
    </div>
  );
};

export default MobileMenu;
