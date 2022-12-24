import React from "react";
import { useSelector } from "react-redux";

import Brand from "components/Filters/Brands";
import Color from "components/Filters/Color";
import Ram from "components/Filters/Ram";
import RangePrice from "components/Filters/RangePrice";
import Weight from "components/Filters/Weight";
import CpuSeries from "components/Filters/CpuSeries";
import Screen from "components/Filters/Screen";
import RamType from "components/Filters/RamType";

const LaptopSidebar = React.memo(() => {
  const selectedBrand = useSelector((state) => state.laptops);
  const { brands } = selectedBrand;
  return (
    <div className="hidden md:flex md:w-1/3 h-2/3 overflow-y-auto font-sans ">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand brands={brands} />
        <Color />
        <Ram />
        <RangePrice min={0} max={200000000} />
        <Weight min={0.5} max={4} />
        <CpuSeries />
        <Screen />
        <RamType />
      </div>
    </div>
  );
});

export default LaptopSidebar;
