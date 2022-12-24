import RangePrice from "components/Filters/RangePrice";
import React from "react";

const ConsoleSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-2/3 overflow-y-auto font-sans sticky top-32">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <RangePrice min={0} max={30000000} />
      </div>
    </div>
  );
};

export default ConsoleSidebar;
