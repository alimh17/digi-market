import React from "react";
import { BiLike, BiStar } from "react-icons/bi";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";
import MobileColor from "./MobileColor";
import MobileColors from "./MobileColors";
import MobileOptions from "./MobileOptions";

const RightInforamtion = ({ item, feedback, color, colors, handle }) => {
  return (
    <div className="w-1/2 flex flex-col font-sans">
      <h3 className=" text-gray-400 p-3 text-base font-bold">{item.name}</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="flex items-center ">
            <BiStar className="text-yellow-400 mx-1" />
            {item.rate}
            <p className="text-gray-400 mx-1">
              ({replaceNumberToPersian(1186)})
            </p>
          </span>
        </div>
      </div>
      <span className="flex items-center my-2">
        <BiLike className="text-green-500 mx-1" />
        <p className="text-gray-400 text-sm">
          {feedback} نفر از خریداران این کالا را پیشنهاد کرده اند
        </p>
      </span>
      <MobileColor item={item} color={color} />
      <MobileColors colors={colors} click={handle} />
      <MobileOptions item={item} className="border-none" />
    </div>
  );
};

export default RightInforamtion;
