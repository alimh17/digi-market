import React, { createRef, useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { sortLaptopsByCpuSeries } from "actions/laptopsAction";
import { cpuSeriesList, switchCpu } from "./utils/cpuSeries";
import { changeCheckbox, cpuSort } from "./utils/checkboxAndSort";

import style from "./style.module.css";

const CpuSeries = () => {
  const [showCpuSeries, setCpuSeries] = useState(false);

  const cpuSeriesRef = useRef([]);
  const dispatch = useDispatch();

  const laptopCpuSeries = useSelector((state) => state.laptops);
  const { cpuSeries } = laptopCpuSeries;

  cpuSeriesRef.current = cpuSeriesList.map(
    (_, i) => cpuSeriesRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getCpu = cpuSort(cpuSeries, item);
    dispatch(sortLaptopsByCpuSeries(getCpu));

    changeCheckbox(cpuSeriesRef, switchCpu(item));
  };

  const handleSetCpuSeriesRef = () => {
    cpuSeries.forEach((cpu) => {
      if (cpuSeriesRef) {
        cpuSeriesRef.current.forEach((el, i) => {
          if (el.current.classList.contains(switchCpu(cpu))) {
            el.current.checked
              ? (el.current.checked = false)
              : (el.current.checked = true);
          }
        });
      }
    });
  };

  useEffect(() => {
    handleSetCpuSeriesRef();
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setCpuSeries(!showCpuSeries)}
      >
        <h2 className="mx-5 text-xl">سری پردازنده</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            showCpuSeries && "rotate-180"
          }`}
        />
      </div>
      <article className={`${showCpuSeries ? "flex" : "hidden"} flex-col `}>
        <div
          className={`w-full flex flex-col justify-center items-center relative`}
        >
          <input
            placeholder="جستجو..."
            className="border-2 w-3/4 rounded-md p-3 m-3  outline-none pr-14 "
          />
          <FaSearch className="absolute right-14 lg:right-16 xl:right-20 2xl:right-24 text-2xl text-gray-300" />
        </div>
        <div>
          <ul>
            {cpuSeriesList.map((c, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, c)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${switchCpu(c)} ${style.cpuCheckbox}`}
                    ref={cpuSeriesRef.current[i]}
                    onClick={(e) =>
                      e.target.checked
                        ? (e.target.checked = false)
                        : (e.target.checked = true)
                    }
                  />
                  <TiTick className={` ${style.tick} text-4xl`} />
                  <span className={`${style.replace}`}></span>

                  <p className="font-bold text-xl text-gray-400">{c}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default CpuSeries;
