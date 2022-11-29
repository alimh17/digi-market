import React from "react";
import { BsStar } from "react-icons/bs";
import config from "../../../../../config/config.json";
import { replacePrice } from "../../../../../utils/replacePrice";

const SearchResult = ({ searchProducts, setSelectProduct }) => {
  const { URL } = config;
  return (
    <>
      {searchProducts.map((product, i) => (
        <div
          key={i}
          className="flex flex-colmd:flex md:flex-col md:items-center border md:justify-around border-b border-gray-300 my-2 article min-h-96 cursor-pointer rounded-md relative shadow-md transition-all duration-150 card"
          onClick={() => setSelectProduct(product)}
        >
          <div className="flex  justify-center items-center w-full ">
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
              {replacePrice(product.price)}
              <span className="mx-2">تومان</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResult;
