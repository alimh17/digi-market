import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiArrowBack, BiStar, BiStoreAlt, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeProductFromCartAction } from "../../../actions/cartActions";
import {
  replaceNumberToPersian,
  replacePrice,
} from "../../../utils/replacePrice";
import { sumPricesForCart } from "../../../utils/sumPricesforCart";

import config from "../../../config/config.json";
import style from "./style.module.css";

const FillModal = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <p className="text-gray-500 m-3 text-sm w-12">{cart.length} کالا</p>
        <Link
          to="/cart"
          className="text-left w-full p-3 text-cyan-500 tex-sm flex items-center justify-end"
        >
          مشاهده سبد خرید
          <BiArrowBack className="mx-1" />
        </Link>
      </div>
      <div
        className={`overflow-y-scroll ${style.fillModal}`}
        style={{ height: "25rem" }}
      >
        {cart.map((item, index) => (
          <figure className="border-b flex p-3 " key={index}>
            <div className="w-1/3 h-full">
              <Link to={`/mobiles/${item.id}`}>
                <img alt="product_img" src={config.URL + item.mainImage} />
              </Link>
              <ul className="flex w-full justify-around items-center py-3 border my-2 rounded-md">
                <li className="text-rose-500">+</li>
                <li>1 حداکثر</li>
                <li>
                  <BiTrash
                    className="text-red-500 text-xl cursor-pointer"
                    onClick={() => dispatch(removeProductFromCartAction(item))}
                  />
                </li>
              </ul>
            </div>
            <div className="w-2/3 flex flex-col">
              <p className="text-sm font-normal">{item.title}</p>
              <span className="flex mt-2  text-gray-500">
                <AiOutlineSafety className="text-2xl mx-3 " />
                گارانتی {replaceNumberToPersian(18)} ماهه
              </span>
              <span className="flex my-1 items-center text-gray-500">
                <BiStar className="text-yellow-500 mx-3" />
                {replaceNumberToPersian(item.rate)}
              </span>
              <span className="flex my-1 items-center text-gray-500">
                <BiStoreAlt className="mx-3 text-xl" />
                موجود در انبار
              </span>
              <p className=" mx-3 text-gray">
                {replacePrice(item.price)}
                <span className="text-sm mx-3">تومان</span>
              </p>
            </div>
          </figure>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="flex flex-col justify-center items-center">
          <p className="text-gray-500 text-sm">مبلغ قابل پرداخت</p>
          <p className="mx-4">
            {replacePrice(sumPricesForCart(cart))}
            <span className="font-thin mx-3">تومان</span>
          </p>
        </span>
        <button
          className="border-0 outline-none bg-rose-600 p-3 m-2 rounded-xl text-white w-1/2"
          onClick={() => navigate("/cart")}
        >
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default FillModal;
