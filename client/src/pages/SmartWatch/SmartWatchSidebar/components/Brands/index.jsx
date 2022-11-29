import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import AllBrands from "./components/AllBrands";
import { FaSearch } from "react-icons/fa";
import { tabletBrandConvertToPersian } from "utils/brnadConverToPersian";
import { useSelector } from "react-redux";

const Brand = () => {
  const [showBrand, setShowBrand] = useState(false);

  const selectedBrand = useSelector((state) => state.smartwatchs);
  const { brands } = selectedBrand;

  const handleBrandToggle = () => {
    setShowBrand(!showBrand);
  };

  return (
    <section className=" py-5 border-b">
      <div
        className="flex justify-between cursor-pointer relative"
        onClick={() => handleBrandToggle()}
      >
        <h2 className="mx-5 text-xl">برند</h2>
        {selectedBrand && brands && brands.length !== 0 ? (
          <span
            className={`w-2 h-2 rounded-full bg-sky-300  absolute left-12 top-2 ${
              showBrand && "hidden"
            }`}
          ></span>
        ) : null}
        <BsChevronUp
          className={`mx-5 text-xl transition-all ease-linear duration-150 text-gray-400 ${
            showBrand && "rotate-180"
          }`}
        />
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center relative ${
          !showBrand && "hidden"
        }`}
      >
        <input
          placeholder="جستجو..."
          className="border-2 w-4/5 rounded-md p-3 m-3  outline-none pr-14"
        />
        <FaSearch className="absolute right-14  lg:right-16 2xl:right-20 text-gray-300 text-2xl" />
      </div>
      {brands ? (
        <ul className={`${!showBrand && "hidden"} flex flex-wrap`}>
          {brands.map((brand, index) => (
            <li key={index} className="p-3 border-2 my-1 rounded-lg mx-2">
              {tabletBrandConvertToPersian(brand)}
            </li>
          ))}
        </ul>
      ) : null}
      <AllBrands show={showBrand} />
    </section>
  );
};

export default Brand;
