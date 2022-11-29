import React from "react";
import { BsPhone } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { offerProductAction } from "../../../../../actions/offerAction";
import Button from "../../../../../components/Button";

const OfferForm = ({
  setSearch,
  selectedProduct,
  setSelectProduct,
  setOffer,
  offer,
  offerInput,
  nameProductInput,
}) => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const handleChangeProduct = (e) => {
    let findProduct = allProducts.filter((p) =>
      p.name.includes(e.target.value)
    );

    if (e.target.value === "") {
      findProduct = [];
    }

    setSearch(findProduct);
  };

  const handleSetOffer = (e) => {
    if (Object.keys(selectedProduct).length !== 0) {
      setOffer(selectedProduct.price);
      let result = (selectedProduct.price * +e.target.value) / 100;
      result = selectedProduct.price - result;
      setOffer(result);
    }
  };

  const handleSubmitForm = (e) => {
    dispatch(
      offerProductAction(selectedProduct, offer, offerInput.current.value)
    );
    setSelectProduct({});
    setSearch([]);
    nameProductInput.current.value = "";
    offerInput.current.value = "";
  };

  return (
    <form className="flex flex-col md:flex-row items-center w-full md:justify-around">
      <div className="flex justify-center items-center g-3">
        <input
          type="text"
          placeholder="نام محصول"
          className="p-3 bg-gray-200 rounded-r-md text-gray-800"
          onChange={handleChangeProduct}
          ref={nameProductInput}
        />
        <span className="p-3 text-2xl bg-indigo-500 rounded-l-md text-white">
          <BsPhone />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="number"
          placeholder=" تخفیف"
          className="p-3 bg-gray-200 rounded-r-md text-gray-800"
          max={2}
          onChange={handleSetOffer}
          ref={offerInput}
        />
        <span className="p-3 text-2xl bg-indigo-500 rounded-l-md text-white">
          <FaPercentage />
        </span>
      </div>
      <div>
        <Button
          title="اعمال تخفیف"
          type="button"
          primary={true}
          click={handleSubmitForm}
          disable={Object.keys(selectedProduct).length === 0 ? true : false}
        />
      </div>
    </form>
  );
};

export default OfferForm;
