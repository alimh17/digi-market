import React from "react";
import RangePrice from "./components/RangePrice";

const ConsoleSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-2/3 overflow-y-auto font-sans sticky top-32">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <RangePrice />
      </div>
    </div>
  );
};

export default ConsoleSidebar;
