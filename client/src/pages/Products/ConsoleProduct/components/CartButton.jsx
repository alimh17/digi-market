import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductToCartAction,
  removeProductFromCartAction,
} from "../../../../actions/cartActions";
import { replacePrice } from "../../../../utils/replacePrice";

const CartButton = ({ item }) => {
  const product = JSON.parse(localStorage.getItem("product"));
  const { price, id } = product;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [condition, setCondition] = useState(false);

  useEffect(() => {
    cart.map((item, index) => {
      if (cart[index].id === id) {
        setCondition(true);
      } else {
        setCondition(false);
      }
      return null;
    });
  }, [cart, id]);

  return (
    <div className="md:hidden fixed bg-white flex justify-between items-center bottom-0  w-full z-10 border-t-2 font-sans">
      {cart.length !== 0 && condition ? (
        <ul className="flex w-1/2 justify-around items-center py-3 border my-2 rounded-md">
          <li className="text-rose-500">+</li>
          <li className="flex flex-col justify-center items-center">
            حداکثر
            <span>1</span>
          </li>
          <li>
            <BiTrash
              className="text-red-600 text-xl "
              onClick={() => dispatch(removeProductFromCartAction(product))}
            />
          </li>
        </ul>
      ) : (
        <button
          onClick={(e) => {
            dispatch(addProductToCartAction(item));
          }}
          className="bg-rose-600 rounded-md p-3  my-2 text-white"
        >
          افزودن به سبد خرید
        </button>
      )}

      <h3 className="mx-2 my-2 ">{replacePrice(price)} تومان</h3>
    </div>
  );
};

export default CartButton;
