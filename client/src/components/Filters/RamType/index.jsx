import React, { createRef, useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { changeCheckbox, ramSort } from "./utils/checkboxAndSort";
import { sortLaptopsByRam } from "actions/laptopsAction";

import style from "./style.module.css";

const RamType = () => {
  const [RamShow, setRamShow] = useState(false);

  const RamRef = useRef([]);
  const dispatch = useDispatch();

  const laptops = useSelector((state) => state.laptops);
  const { ramType } = laptops;

  RamRef.current = ["DDR2", "DDR3", "DDR4", "DDR5"].map(
    (_, i) => RamRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getRam = ramSort(ramType, item);
    RamRef.current.forEach((item) => {
      if (item.current.checked === false) {
        dispatch(sortLaptopsByRam(getRam));
      }
    });

    changeCheckbox(RamRef, item);
  };

  const handleSetRamType = () => {
    ramType.forEach((ram) => {
      if (RamRef) {
        RamRef.current.forEach((el, i) => {
          if (el.current.classList.contains(ram)) {
            el.current.checked
              ? (el.current.checked = false)
              : (el.current.checked = true);
          }
        });
      }
    });
  };

  useEffect(() => {
    handleSetRamType();
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setRamShow(!RamShow)}
      >
        <h2 className="mx-5 text-xl">نوع حافظه رم</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            RamShow && "rotate-180"
          }`}
        />
      </div>
      <article className={`${RamShow ? "flex" : "hidden"} flex-col `}>
        <div>
          <ul>
            {["DDR2", "DDR3", "DDR4", "DDR5"].map((r, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, r)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${r} ${style.ramCheckbox}`}
                    ref={RamRef.current[i]}
                    onClick={(e) =>
                      e.target.checked
                        ? (e.target.checked = true)
                        : (e.target.checked = false)
                    }
                  />
                  <TiTick className={` ${style.tick} text-4xl`} />
                  <span className={`${style.replace}`}></span>

                  <p className="font-bold text-xl text-gray-400">{r}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default RamType;
