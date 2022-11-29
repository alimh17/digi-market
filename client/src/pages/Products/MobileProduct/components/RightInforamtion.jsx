import React from "react";
import { BiInfoCircle, BiLike, BiStar } from "react-icons/bi";
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
      <span className="flex items-center">
        <BiInfoCircle className="px-2 text-7xl" />
        <p className="text-xs text-gray-400">
          هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را
          گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود
          فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06 امکان برگشت
          کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول
          است که پلمپ کالا باز نشده باشد.
        </p>
      </span>
    </div>
  );
};

export default RightInforamtion;
