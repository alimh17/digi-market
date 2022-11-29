import React from "react";
import { BsTrash } from "react-icons/bs";
import config from "../../../../../config/config.json";
import { replacePrice } from "../../../../../utils/replacePrice";
const { URL } = config;

const OfferTable = ({
  selectedProduct,
  setSelectProduct,
  offer,
  setSearchProducts,
  offerInput,
  nameProductInput,
}) => {
  return (
    <table className="mt-5 border ">
      <thead className="border">
        <tr className="">
          <td className="font-bold p-5 w-1/3 text-center">تصویر محصول</td>
          <td className="font-bold p-5 w-1/3 text-center">نام محصول</td>
          <td className="font-bold p-5 w-1/3 text-center">
            قیمت با اعمال تخفیف
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-5 flex justify-center ">
            <img
              className="w-20 h-20"
              alt="product_img"
              src={URL + selectedProduct.mainImage}
            />
          </td>
          <td className="p-5 w-1/3 text-center  ">{selectedProduct.name}</td>
          <td className="p-5 w-1/3 text-center  ">
            تومان {offer && replacePrice(offer)}
          </td>
          <td className="p-5 w-1/3 text-center text-rose-500 ">
            <BsTrash
              onClick={() => {
                setSelectProduct({});
                setSearchProducts([]);
                offerInput.current.value = "";
                nameProductInput.current.value = "";
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OfferTable;
