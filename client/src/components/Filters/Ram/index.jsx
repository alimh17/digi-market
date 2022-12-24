import React, { createRef, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectCategory } from "utils/selectCategory";

import { changeCheckbox, ramSort } from "./utils/checkboxAndSort";
import { switchRam } from "./utils/switchRam";
import { selectAction } from "./utils/selectAction";
import { selectRamList, selectRamListByTitle } from "./utils/ramLists";

import style from "./style.module.css";

const Ram = React.memo(() => {
  const [ramShow, setRamShow] = useState(false);

  const ramRef = useRef([]);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const categorys = selectCategory(pathname);

  const category = useSelector((state) => state[categorys]);
  const { ram } = category;

  ramRef.current = selectRamList(pathname)?.map(
    (_, i) => ramRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getRam = ramSort(ram, item);
    ramRef.current.forEach((item, i) => {
      if (item.current.checked === false) {
        dispatch(selectAction(pathname, getRam));
      }
    });
    changeCheckbox(ramRef, switchRam(item));
  };

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
            {selectRamListByTitle(pathname)?.map((n, i) => (
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
});

export default Ram;
