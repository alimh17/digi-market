import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  consoleSortByCheapest,
  consoleSortByExpensive,
  consoleSortBySell,
  consoleSortByView,
} from "../../actions/consolesAction";

import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";
import ConsoleProduct from "./ConsoleProduct";
import ConsoleSidebar from "./ConsoleSidebar";

const Console = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans`}>
      <div className="w-full px-10 text-base">
        <h3 className="  my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/consoles">کنسول</Link>
        </h3>
      </div>
      <div className="w-full flex">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <ConsoleSidebar />
          <ConsoleProduct />
          <DeviceOrdering
            sell={consoleSortBySell}
            view={consoleSortByView}
            cheapest={consoleSortByCheapest}
            expensive={consoleSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default Console;
