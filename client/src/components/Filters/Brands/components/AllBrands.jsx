import React, { createRef, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";

import { brandConvertToPersian } from "utils/brnadConverToPersian";
import { categoryBrand } from "../utils/brands";
import { brandSort, changeCheckbox } from "../utils/checkboxAndSort";
import { selectCategory } from "utils/selectCategory";
import { selectAction } from "../utils/selectAction";

// styleSheet
import style from "./style.module.css";

const AllBrands = React.memo(({ show }) => {
  const brandRef = useRef([]);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const categorys = selectCategory(pathname);

  const category = useSelector((state) => state[categorys]);
  const { brands } = category;

  brandRef.current = categoryBrand(pathname)?.map(
    (_, i) => brandRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getBrands = brandSort(brands, item);
    dispatch(selectAction(pathname, getBrands));

    changeCheckbox(brandRef, item);
  };

  return (
    <>
      <div className={`w-full ${!show && "hidden"}`}>
        {categoryBrand(pathname)?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b cursor-pointer"
            onClick={(e) => handleCheckbox(e, item)}
          >
            <span className=" p-3 flex items-center">
              <input
                type="checkbox"
                className={`w-5 h-5 rounded-lg  ${item} checked:bg-slate-400 ${style.checkbox}`}
                defaultChecked={
                  brands && brands !== 0 && brands.includes(item)
                    ? "checked"
                    : null
                }
                ref={brandRef.current[index]}
                onClick={(e) =>
                  e.target.checked
                    ? (e.target.checked = false)
                    : (e.target.checked = true)
                }
              />
              <TiTick className={` ${style.tick} text-4xl`} />
              <span className={`${style.replace}`}></span>
              <p className="p-3 md:text-base font-bold lg:text-lg text-gray-500">
                {brandConvertToPersian(item)}
              </p>
            </span>
            <h2 className="my-auto mx-3 text-gray-400 md:text-md">{item}</h2>
          </div>
        ))}
      </div>
    </>
  );
});

export default AllBrands;
