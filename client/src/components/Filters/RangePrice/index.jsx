import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";

import { replacePrice } from "utils/replacePrice";
import { useLocation } from "react-router-dom";
import { selectCategory } from "utils/selectCategory";
import { selectAction } from "./utils/selectAction";

const RangePrice = ({min , max}) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const categorys = selectCategory(pathname);
  const range = useSelector((state) => state[categorys]?.priceRange);

  const handleChange = (e, newValue) => {
    dispatch(selectAction(pathname, newValue));
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <section className="flex flex-col  py-5 border-b">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h2 className="mx-5 text-xl">محدوده قیمت</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all ease-in duration-150 text-gray-400 ${
            show && "rotate-180"
          }`}
        />
      </div>
      <article
        className={`flex flex-col ${
          !show && "hidden"
        } justify-center items-center`}
      >
        <div
          dir="ltr"
          className="font-sans flex w-1/3 justify-center items-center my-5 "
        ></div>
        <div className="w-full  flex">
          <div className=" w-1/3 flex justify-center flex-col items-center p-3 text-sm text-center text-gray-400">
            <span>تا</span>
            <span>{replacePrice(range[1])}</span>
            <span>تومان</span>
          </div>
          <div className=" w-2/3 flex justify-center items-center">
            <Slider
              getAriaLabel={() => "Temperature range"}
              min={min}
              max={max}
              value={range}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="primary"
            />
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center p-3 text-sm text-center text-gray-400">
            <span>از</span>
            <span>{replacePrice(range[0])}</span>
            <span>تومان</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RangePrice;
