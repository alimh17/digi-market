import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoadingAction } from "../../../actions/loadingAction";
import Ordering from "../../../components/Ordering";

import { setPorductAction } from "../../../actions/setProductAction";
import Card from "../../../components/Card";
import {
  addOfferFieldAction,
  mobileSortByCheapest,
  mobileSortByExpensive,
  mobileSortBySell,
  mobileSortByView,
} from "../../../actions/mobilesActions";
import { useEffect } from "react";

const MobileProducts = () => {
  const [active, setActive] = useState([]);

  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobiles);
  const navigate = useNavigate();

  const handleDispatch = () => {
    dispatch(addOfferFieldAction());
  };

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <section className={`w-full md:w-2/3`}>
      <Ordering
        active={active}
        setActive={setActive}
        product={mobile}
        sell={mobileSortBySell}
        view={mobileSortByView}
        cheapest={mobileSortByCheapest}
        expensive={mobileSortByExpensive}
      />
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-rows-4 xl:grid-cols-4 md:mt-20 gap-3 ">
        <div className="flex md:hidden w-full py-3 border-b justify-between">
          <span className="text-gray-400 mx-3">همه کالاها</span>
          <span className="flex items-center mx-3 text-gray-400">
            <p className="mx-2 ">کالا</p>
          </span>
        </div>
        {mobile &&
          mobile.allProduct.map((item) => (
            <div
              className="container px-1 "
              key={item._id}
              onClick={(e) => {
                dispatch(setPorductAction(item));
                dispatch(showLoadingAction());
                setTimeout(() => {
                  navigate(`/mobiles/${item._id}`);
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

export default MobileProducts;
