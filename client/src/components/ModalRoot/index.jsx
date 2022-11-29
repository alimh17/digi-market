import React from "react";
import { useSelector } from "react-redux";
import EmptyModal from "./EmptyModal";
import FillModal from "./FillModal";

const ModalRoot = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div
      style={{ width: "30rem" }}
      className="absolute left-1 bg-white invisible group-hover:visible rounded-md shadow-xl border"
    >
      {cart.length > 0 ? <FillModal cart={cart} /> : <EmptyModal />}
    </div>
  );
};

export default ModalRoot;
