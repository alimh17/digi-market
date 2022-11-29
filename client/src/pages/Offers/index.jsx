import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  offersSortByCheapest,
  sortOffersBySell,
  sortOffersByViwe,
  offersSortByExpensive,
} from "../../actions/offerAction";
import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";
import OffersProducts from "./OffersProducts";
import OffersSidebar from "./OffersSidebar";

const Offers = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/offers">تخفیف ها</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <OffersSidebar />
          <OffersProducts />
          <DeviceOrdering
            sell={sortOffersBySell}
            view={sortOffersByViwe}
            cheapest={offersSortByCheapest}
            expensive={offersSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default Offers;
