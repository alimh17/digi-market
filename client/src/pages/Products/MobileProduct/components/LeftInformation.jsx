import React from "react";
import { AiOutlineSafety, AiOutlineShop } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductToCartAction } from "../../../../actions/cartActions";
import {
  replaceNumberToPersian,
  replacePrice,
} from "../../../../utils/replacePrice";

const LeftInformation = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 border rounded-md mx-1 flex flex-col font-sans">
      <h4 className="m-2 font-thin">فروشنده</h4>
      <span className="p-2 border-b">
        <p className="text-xs">دیجی مارکت</p>
        <p className="text-xs m-3">
          <span className="text-green-500">89.4%</span> درصد رضایت از کالا |
          عملکرد <span className="text-green-500">عالی</span>
        </p>
      </span>
      <span className="flex items-center text-xs p-4 border-b">
        <AiOutlineSafety className="text-md mx-1 text-green-400" />
        گارانتی {replaceNumberToPersian(18)} ماهه
      </span>
      <span className="flex items-center text-xs p-4 border-b">
        <AiOutlineShop className="text-2xl px-1 text-sky-500" />
        <p>موجود در انبار دیجی مارکت</p>
      </span>
      <span className="flex items-center text-xs p-4 border-b">
        <BsCoin className="text-2xl px-1 text-yellow-500" />
        <p>150 امتیاز دیجی مارکت</p>
      </span>
      <span className="flex flex-col justify-center items-end text-xs p-4  w-full">
        <p className="text-left text-xl">{replacePrice(item.price)} تومان</p>
        <button
          onClick={() => dispatch(addProductToCartAction(item))}
          className="bg-rose-500 p-2 rounded-md text-white my-5 w-full"
        >
          افزودن به سبد خرید
        </button>
      </span>
    </div>
  );
};

export default LeftInformation;
