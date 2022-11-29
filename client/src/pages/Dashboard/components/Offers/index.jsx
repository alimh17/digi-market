import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { initOfferProductAction } from "../../../../actions/offerAction";

import OfferForm from "./components/OfferForm";
import OfferTable from "./components/OfferTable";
import ProductOfferList from "./components/ProductOfferList";
import SearchResult from "./components/SearchResult";

const Offers = React.memo(({ active }) => {
  const offerInput = useRef();
  const nameProductInput = useRef();

  const [searchProducts, setSearchProducts] = useState([]);
  const [selectedProduct, setSelectProduct] = useState({});
  const [offer, setOffer] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(selectedProduct).length !== 0) {
      setOffer(selectedProduct.price);
      offerInput.current.value = "";
    }
  }, [selectedProduct]);

  const handleDispatchInitOffer = () => {
    dispatch(initOfferProductAction());
  };

  useEffect(() => {
    handleDispatchInitOffer();
  }, []);

  return (
    <div className={`${active[2] ? "block" : "hidden"}`}>
      <div className="flex  w-full mt-5">
        <OfferForm
          setSearch={setSearchProducts}
          selectedProduct={selectedProduct}
          setSelectProduct={setSelectProduct}
          setOffer={setOffer}
          offer={offer}
          offerInput={offerInput}
          nameProductInput={nameProductInput}
        />
      </div>
      <div>
        <div className="w-full flex justify-center items-center">
          {Object.keys(selectedProduct).length !== 0 && (
            <OfferTable
              selectedProduct={selectedProduct}
              setSelectProduct={setSelectProduct}
              setSearchProducts={setSearchProducts}
              offer={offer}
              offerInput={offerInput}
              nameProductInput={nameProductInput}
            />
          )}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 border-b">
          <SearchResult
            searchProducts={searchProducts}
            setSelectProduct={setSelectProduct}
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
          <ProductOfferList />
        </div>
      </div>
    </div>
  );
});

export default Offers;
