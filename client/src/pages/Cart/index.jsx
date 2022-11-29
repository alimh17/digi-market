import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { replaceNumberToPersian } from "../../utils/replacePrice";
import { sumPricesForCart } from "../../utils/sumPricesforCart";

import config from "../../config/config.json";
import { removeProductFromCartAction } from "../../actions/cartActions";
const { URL } = config;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-32 content-around border font-sans">
      <ul className="my-3 mx-2">
        <li className="border-b-2 border-b-rose-600 rounded-b-sm inline py-1">
          سبد خرید
        </li>
      </ul>

      {cart.length > 0 ? (
        <section className="w-full ">
          <h2 className="p-3">سبد خرید شما</h2>
          <p className="text-gray-500 p-2">{cart.length} کالا</p>
          <div className="w-full flex justify-center">
            <table className="w-2/3 ">
              <tbody>
                {cart.map((item) => (
                  <tr
                    className="border flex flex-col md:flex-row p-3 w-full items-center"
                    key={item._id}
                  >
                    <td className="md:w-2/4 flex  items-center">
                      <img
                        alt="product_img"
                        src={URL + item.mainImage}
                        className="md:w-32 w-44 md:h-32 h-44"
                      />
                      <p className="text-gray-400 font-bold">{item.name}</p>
                    </td>
                    <td className="flex  justify-center items-center md:w-1/4 p-4 md:p-0">
                      <AiOutlineSafety className="text-2xl mx-3 text-green-500" />
                      گارانتی {replaceNumberToPersian(18)} ماهه
                    </td>
                    <td className="flex  justify-center items-center md:w-1/4 text-gray-400 p-4 md:p-0">
                      {replaceNumberToPersian(item.price)} تومان
                    </td>
                    <td>
                      <BsTrash
                        className="text-rose-500 cursor-pointer"
                        onClick={() =>
                          dispatch(removeProductFromCartAction(item))
                        }
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className=" text-xl p-3  flex border">
                    <span className="w-1/2">قیمت نهایی</span>
                    <span className="w-1/2 text-left ml-10">
                      {replaceNumberToPersian(sumPricesForCart(cart))} تومان
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            style={{
              borderRadius: "55% 45% 55% 45% / 50% 58% 42% 50%  ",
            }}
            alt="empty_cart"
            className="md:w-96 md:h-80 w-64 h-52"
            src={process.env.PUBLIC_URL + "/images/cart/empty_cart.jpg"}
          />
          <h2 className="text-xl md:text-2xl py-3">
            سبد خرید شما خالی می باشد
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
