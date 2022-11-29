import React from "react";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";

const LaptopColor = ({ item, color }) => {
  return (
    <div className="flex justify-between m-3 py-3 font-sans">
      <span className="text-base text-gray-500 ">رنگ : {color} </span>
      <span className="mx-3 text-gray-400 text-sm">
        <span className="mx-2 ">
          {replaceNumberToPersian(item.color.length)}
        </span>
        رنگ
      </span>
    </div>
  );
};

export default LaptopColor;
