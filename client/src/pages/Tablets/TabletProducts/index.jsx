import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPorductAction } from "../../../actions/setProductAction";
import { showLoadingAction } from "../../../actions/loadingAction";
import Card from "../../../components/Card";
import Ordering from "../../../components/Ordering";
import {
  addOfferFieldTabletAction,
  tabletSortByCheapest,
  tabletSortByExpensive,
  tabletSortBySell,
  tabletSortByView,
} from "../../../actions/tabletsAction";
import { useEffect } from "react";

const TabletProducts = () => {
  const [active, setActive] = useState([]);

  const dispatch = useDispatch();
  const tablets = useSelector((state) => state.tablets);
  const navigate = useNavigate();

  const handleDispatch = () => {
    dispatch(addOfferFieldTabletAction());
  };

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <section className={`w-full md:w-2/3`}>
      <Ordering
        active={active}
        setActive={setActive}
        product={tablets}
        sell={tabletSortBySell}
        view={tabletSortByView}
        cheapest={tabletSortByCheapest}
        expensive={tabletSortByExpensive}
      />
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-rows-4 xl:grid-cols-4 md:mt-20 gap-3 ">
        <div className="flex md:hidden w-full py-3 border-b justify-between">
          <span className="text-gray-400 mx-3">همه کالاها</span>
          <span className="flex items-center mx-3 text-gray-400">
            <p className="mx-2 ">کالا</p>
          </span>
        </div>
        {tablets.allProduct.map((item) => (
          <div
            className="container px-1"
            key={item._id}
            onClick={(e) => {
              dispatch(setPorductAction(item));
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigate(`/tablets/${item._id}`);
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

export default TabletProducts;
