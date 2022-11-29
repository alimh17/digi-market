import React, { createRef, useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { changeCheckbox, offSort } from "./utils/checkboxAndSort";
import { switchOff } from "./utils/switchOff";
import { offersSortByOffers } from "actions/offerAction";

import style from "./style.module.css";

const OfferValue = () => {
  const [offShow, setOffShow] = useState(false);

  const offRef = useRef([]);
  const dispatch = useDispatch();

  const offers = useSelector((state) => state.offers);

  offRef.current = ["بیشترین تخفیف", "کم ترین تخفیف"].map(
    (_, i) => offRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getOff = offSort(offers.off, item);
    offRef.current.forEach((item, i) => {
      if (item.current.checked === false) {
        dispatch(offersSortByOffers(getOff));
      }
    });
    changeCheckbox(offRef, switchOff(item));
  };

  const handleChangeOffRef = () => {
    offers.off &&
      offers.off.forEach((r) => {
        if (offRef) {
          offRef.current.forEach((el) => {
            if (el.current.classList.contains(switchOff(r))) {
              el.current.checked
                ? (el.current.checked = false)
                : (el.current.checked = true);
            }
          });
        }
      });
  };

  useEffect(() => {
    handleChangeOffRef();
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setOffShow(!offShow)}
      >
        <h2 className="mx-5 text-xl">تخفیف</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            offShow && "rotate-180"
          }`}
        />
      </div>
      <article className={`${offShow ? "flex" : "hidden"} flex-col `}>
        <div>
          <ul>
            {["بیشترین تخفیف", "کم ترین تخفیف"].map((n, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, n)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${switchOff(n)} ${style.ramCheckbox}`}
                    ref={offRef.current[i]}
                    onClick={(e) => {
                      e.target.checked
                        ? (e.target.checked = true)
                        : (e.target.checked = false);
                    }}
                  />
                  <TiTick className={` ${style.tick} text-4xl`} />
                  <span className={`${style.replace}`}></span>
                  <p className="font-bold text-xl text-gray-400">{n}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default OfferValue;
