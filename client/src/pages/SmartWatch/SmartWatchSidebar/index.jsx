import React from "react";
import { useSelector } from "react-redux";

import Brand from "components/Filters/Brands";
import Color from "components/Filters/Color";
import RangePrice from "components/Filters/RangePrice";
import Weight from "components/Filters/Weight";

const SmartWatchSidebar = () => {
  const selectedBrand = useSelector((state) => state.smartwatchs);
  const { brands } = selectedBrand;
  return (
    <div className="hidden md:flex md:w-1/3 h-fit overflow-y-scroll  font-sans Sidebar ">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand brands={brands} />
        <Color />
        <RangePrice min={0} max={20000000} />
        <Weight min={0} max={500} />
      </div>
    </div>
  );
};

export default SmartWatchSidebar;
