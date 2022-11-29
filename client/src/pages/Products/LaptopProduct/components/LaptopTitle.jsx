import React from "react";
import { BiLike, BiStar } from "react-icons/bi";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";

const LaptopTitle = ({ item, feedback, setFeedback }) => {
  return (
    <div className="border-b  py-3 font-sans">
      <div className="flex flex-col">
        <span className="px-2 text-base m-3 text-gray-500">{item.name}</span>
      </div>
      <span className="flex items-center mx-5 text-sm">
        <BiStar className="text-yellow-500 mx-3 " />
        <p className="text-gray-400 mx-3 ">({replaceNumberToPersian(1186)})</p>
      </span>
      <span className="flex items-center mx-5">
        <BiLike className="text-green-500 mx-3" />
        <p className="text-gray-400 text-sm py-2">
          {feedback} نفر از خریداران این کالا را پیشنهاد کرده اند
        </p>
      </span>
    </div>
  );
};

export default LaptopTitle;
