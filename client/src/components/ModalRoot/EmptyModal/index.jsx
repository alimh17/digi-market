import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const EmptyModal = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        to="/cart"
        className="text-left w-full p-3 text-cyan-500 tex-sm flex items-center justify-end"
      >
        مشاهده سبد خرید
        <BiArrowBack className="mx-1" />
      </Link>
      <img
        alt="empty_cart"
        style={{
          borderRadius: "55% 45% 55% 45% / 50% 58% 42% 50%  ",
        }}
        className="w-2/3 h-1/3 my-3"
        src={process.env.PUBLIC_URL + "/images/cart/empty_cart.jpg"}
      />
      <h3 className="border-b w-full text-center p-3">سبد خرید شما خالی است</h3>
    </div>
  );
};

export default EmptyModal;
