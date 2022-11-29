import React from "react";
import Brand from "./components/Brand";
import Color from "./components/Color";
import RangePrice from "./components/RangePrice";
import Weigtht from "./components/Weight";
import CpuSeries from "./components/CpuSeries";
import Screen from "./components/Screen";
import RamType from "./components/RamType";
import Ram from "./components/Ram";

const LaptopSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-2/3 overflow-y-auto font-sans ">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        <RangePrice />
        <Color />
        <Weigtht />
        <CpuSeries />
        <Screen />
        <RamType />
        <Ram />
      </div>
    </div>
  );
};

export default LaptopSidebar;
