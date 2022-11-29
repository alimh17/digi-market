import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  smartwatchSortBySell,
  smartwatchSortByView,
  smartwatchSortByCheapest,
  smartwatchSortByExpensive,
} from "../../actions/smartwatchAction";
import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";
import SmartWatchProducts from "./SmartWatchProducts";
import SmartWatchSidebar from "./SmartWatchSidebar";

const SmartWatch = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> /
          <Link to="/smartwatchs">ساعت هوشمند</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <SmartWatchSidebar />
          <SmartWatchProducts />
          <DeviceOrdering
            sell={smartwatchSortBySell}
            view={smartwatchSortByView}
            cheapest={smartwatchSortByCheapest}
            expensive={smartwatchSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default SmartWatch;
