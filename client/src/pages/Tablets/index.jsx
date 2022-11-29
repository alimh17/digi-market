import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  tabletSortByCheapest,
  tabletSortByExpensive,
  tabletSortBySell,
  tabletSortByView,
} from "../../actions/tabletsAction";

import DeviceOrdering from "../../components/Ordering/components/DeviceOrdering";
import { OrderingContext } from "../../components/Ordering/context/OrderingContext";
import TabletProducts from "./TabletProducts";
import TabletSidebar from "./TabletSidebar";

const Tablets = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`mt-32 flex flex-col w-full font-sans `}>
      <div className="w-full px-10 text-base ">
        <h4 className="my-6 text-gray-400">
          <Link to="/">دیجی مارکت</Link> / <Link to="/tablets">تبلت</Link>
        </h4>
      </div>
      <div className="w-full flex ">
        <OrderingContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <TabletSidebar />
          <TabletProducts />
          <DeviceOrdering
            sell={tabletSortBySell}
            view={tabletSortByView}
            cheapest={tabletSortByCheapest}
            expensive={tabletSortByExpensive}
          />
        </OrderingContext.Provider>
      </div>
    </div>
  );
};

export default Tablets;
