import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoadingAction } from "../../../actions/loadingAction";
import Ordering from "../../../components/Ordering";

import { setPorductAction } from "../../../actions/setProductAction";
import Card from "../../../components/Card";
import {
  smartwatchSortBySell,
  smartwatchSortByView,
  smartwatchSortByCheapest,
  smartwatchSortByExpensive,
} from "../../../actions/smartwatchAction";

const SmartWatchProducts = () => {
  const [active, setActive] = useState([]);

  const dispatch = useDispatch();
  const smartwatch = useSelector((state) => state.smartwatchs);

  const navigate = useNavigate();

  return (
    <section className={`w-full md:w-2/3`}>
      <Ordering
        active={active}
        setActive={setActive}
        product={smartwatch}
        sell={smartwatchSortBySell}
        view={smartwatchSortByView}
        cheapest={smartwatchSortByCheapest}
        expensive={smartwatchSortByExpensive}
      />
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-rows-4 xl:grid-cols-4 md:mt-20 gap-3 ">
        <div className="flex md:hidden w-full py-3 border-b justify-between">
          <span className="text-gray-400 mx-3">همه کالاها</span>
          <span className="flex items-center mx-3 text-gray-400">
            <p className="mx-2 ">کالا</p>
          </span>
        </div>
        {smartwatch.allProduct.map((item) => (
          <div
            className="container px-1"
            key={item._id}
            onClick={(e) => {
              dispatch(setPorductAction(item));
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigate(`/smartwatchs/${item._id}`);
                window.scrollTo(0, 0);
              }, 1800);
              localStorage.setItem("product", JSON.stringify(item));
            }}
          >
            <Card item={item} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default SmartWatchProducts;
