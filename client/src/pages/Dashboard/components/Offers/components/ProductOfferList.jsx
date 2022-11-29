import React from "react";
import { BsStar, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { replacePrice } from "../../../../../utils/replacePrice";
import config from "../../../../../config/config.json";
import { deleteOfferProductAction } from "../../../../../actions/offerAction";

const ProductOfferList = () => {
  const offProuduct = useSelector((state) => state.offers.allOffer);
  const dispatch = useDispatch();

  const { URL } = config;

  return (
    <>
      {offProuduct &&
        offProuduct.map((product, i) => (
          <div
            key={i}
            className="flex flex-colmd:flex md:flex-col md:items-center border md:justify-around border-b border-gray-300 my-2 article min-h-96 cursor-pointer rounded-md relative shadow-md transition-all duration-150 card"
          >
            <div className="flex  justify-center items-center w-full realtive">
              <img
                alt=""
                src={URL + product.mainImage}
                style={{ height: "10rem", backgroundSize: "cover" }}
              />
            </div>
            <div className="w-2/3 mx-3 flex flex-col justify-around items-center md:w-full ">
              <p className="p-3 w-full text-xs  font-sans text-gray-500 font-bold">
                {product.name}
              </p>
              <div className="w-full text-left p-3 flex items-center justify-between text-xs   md:text-base">
                <p className="text-gray-400 ">موجود در انبار</p>
                <span className="flex items-center ">
                  {product.rate}
                  <BsStar className="mx-2 text-yellow-500" />
                </span>
              </div>
              <div className="w-full text-center p-3  ">
                <span className="line-through">
                  {replacePrice(product.price)} تومان
                </span>
                <span className="mx-2"></span>
              </div>
              <div className="w-full text-center p-3  ">
                {replacePrice(product.offer)}
                <span className="mx-2">تومان</span>
              </div>
              <span
                className="absolute left-1 bottom-1 text-rose-500"
                onClick={() => {
                  dispatch(deleteOfferProductAction(product));
                }}
              >
                <BsTrash />
              </span>
              <span className="absolute right-1 top-1 bg-rose-500 text-white rounded-full p-1">
                {product.off}%
              </span>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductOfferList;
