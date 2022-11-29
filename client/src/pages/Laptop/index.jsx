import React, { useState } from "react";
import { Link } from "react-router-dom";
import LaptopProduct from "./LaptopProduct";
import LaptopSidebar from "./LaptopSidebar";
import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import {
  laptopSortByCheapest,
  laptopSortByExpensive,
  laptopSortBySell,
  laptopSortByView,
} from "../../actions/laptopsAction";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";

const Laptops = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans`}>
      <div className="w-full px-10 text-base">
        <h3 className="  my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/laptops">لپ تاپ</Link>
        </h3>
      </div>
      <div className="w-full flex">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <LaptopSidebar />
          <LaptopProduct />
          <DeviceOrdering
            sell={laptopSortBySell}
            view={laptopSortByView}
            cheapest={laptopSortByCheapest}
            expensive={laptopSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default Laptops;
