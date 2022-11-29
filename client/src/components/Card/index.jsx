import React from "react";
import { BiStar } from "react-icons/bi";
import config from "../../config/config.json";
import { replacePrice } from "../../utils/replacePrice";
import AvalibleColor from "../AvalibleColor";

const Card = ({ item }) => {
  const { URL } = config;

  return (
    <article
      className="flex  md:flex-col md:items-center border md:justify-around border-b bg-white border-gray-300 my-2 article min-h-96 cursor-pointer rounded-md relative shadow-md transition-all duration-150 card p-5 h-3/6 md:h-full"
      key={item._id}
    >
      <AvalibleColor item={item} />
      <div className="flex  justify-center items-center w-full">
        <img
          alt="product_image"
          src={URL + item.mainImage}
          style={{ width: "10rem", height: "10rem" }}
        />
      </div>
      <div className="w-2/3 mx-3 flex flex-col justify-around items-center md:w-full ">
        <p className="p-3 w-full text-xs md:text-sm font-sans text-gray-500 font-bold">
          {item.name}
        </p>
        <div className="w-full text-left p-3 flex items-center justify-between text-xs   md:text-base">
          <p className="text-gray-400 ">موجود در انبار</p>
          <span className="flex items-center ">
            {item.rate}
            <BiStar className="mx-2 text-yellow-500" />
          </span>
        </div>
        {item.offer ? (
          <div className="flex flex-col">
            <span className="my-2 line-through">
              {replacePrice(item.price)} تومان
            </span>
            <span>{replacePrice(item.offer)} تومان</span>
            <span className="absolute right-1 top-1 bg-rose-500 text-white rounded-full p-2">
              {item.off}%
            </span>
          </div>
        ) : (
          <div className="flex flex-col">
            <span>{replacePrice(item.price)} تومان</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
