import React, { createRef, useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { changeCheckbox, ramSort } from "./utils/checkboxAndSort";
import { mobileSortByRam } from "actions/mobilesActions";
import { switchRam } from "./utils/switchRam";

import style from "./style.module.css";

const Ram = () => {
  const [ramShow, setRamShow] = useState(false);

  const ramRef = useRef([]);
  const dispatch = useDispatch();

  const mobiles = useSelector((state) => state.mobiles);
  const { ram } = mobiles;

  ramRef.current = ["8", "16", "32", "64", "128", "256", "500"].map(
    (_, i) => ramRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getRam = ramSort(ram, item);
    ramRef.current.forEach((item, i) => {
      if (item.current.checked === false) {
        dispatch(mobileSortByRam(getRam));
      }
    });
    changeCheckbox(ramRef, switchRam(item));
  };

  const handleSetRamRef = () => {
    ram.forEach((r) => {
      if (ramRef) {
        ramRef.current.forEach((el) => {
          if (el.current.classList.contains(switchRam(r))) {
            el.current.checked
              ? (el.current.checked = false)
              : (el.current.checked = true);
          }
        });
      }
    });
  };

  useEffect(() => {
    handleSetRamRef();
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setRamShow(!ramShow)}
      >
        <h2 className="mx-5 text-xl">ظرفیت حافظه</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            ramShow && "rotate-180"
          }`}
        />
      </div>
      <article className={`${ramShow ? "flex" : "hidden"} flex-col `}>
        <div>
          <ul>
            {[
              "8 گیگابایت",
              "16 گیگابایت",
              "32 گیگابایت",
              "64 گیگابایت",
              "128 گیگابایت",
              "256 گیگابایت",
              "500 گیگابایت",
            ].map((n, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, n)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${switchRam(n)} ${style.ramCheckbox}`}
                    ref={ramRef.current[i]}
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

export default Ram;
