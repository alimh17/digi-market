import React from "react";

import Brand from "./components/Brands";
import Color from "./components/Color";
import Network from "./components/Network";
import Ram from "./components/Ram";
import RangePrice from "./components/RangePrice";
import Weight from "./components/Weight";

const TabletSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-fit overflow-y-scroll  font-sans Sidebar ">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        <Color />
        <RangePrice />
        <Network />
        <Weight />
        <Ram />
      </div>
    </div>
  );
};

export default TabletSidebar;
