import React from "react";
import OffersValue from "./components/OffersValue";

const OffersSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-fit overflow-y-scroll  font-sans Sidebar sticky top-32">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <OffersValue />
      </div>
    </div>
  );
};

export default OffersSidebar;
