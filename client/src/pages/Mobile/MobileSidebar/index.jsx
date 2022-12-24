import React from "react";

import Brand from "components/Filters/Brands";
import Color from "components/Filters/Color";
import Network from "components/Filters/Network";
import Ram from "components/Filters/Ram";
import RangePrice from "components/Filters/RangePrice";
import Weight from "components/Filters/Weight";

import { useSelector } from "react-redux";

const MobileSidebar = () => {
  const selectedBrand = useSelector((state) => state.mobiles);
  const { brands } = selectedBrand;

  return (
    <div className="hidden md:flex md:w-1/3 h-fit overflow-y-scroll  font-sans Sidebar ">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand brands={brands} />
        <Color />
        <Network />
        <Ram />
        <RangePrice min={0} max={50000000} />
        <Weight min={100} max={450} />
      </div>
    </div>
  );
};

export default MobileSidebar;
