import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  mobileSortByCheapest,
  mobileSortByExpensive,
  mobileSortBySell,
  mobileSortByView,
} from "../../actions/mobilesActions";
import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";
import MobileProducts from "./MobileProducts";
import MobileSidebar from "./MobileSidebar";

const Mobile = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/mobiles">موبایل</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <MobileSidebar />
          <MobileProducts />
          <DeviceOrdering
            sell={mobileSortBySell}
            view={mobileSortByView}
            cheapest={mobileSortByCheapest}
            expensive={mobileSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default Mobile;
