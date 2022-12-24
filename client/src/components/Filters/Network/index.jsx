import React, { createRef, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { changeCheckbox, networkSort } from "./utils/checkboxAndSort";
import { selectCategory } from "utils/selectCategory";
import { selectAction } from "./utils/selectAction";

import style from "./style.module.css";

const Network = () => {
  const [networkShow, setNetworkShow] = useState(false);

  const networkRef = useRef([]);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const categorys = selectCategory(pathname);

  const category = useSelector((state) => state[categorys]);
  const { network } = category;

  networkRef.current = ["2G", "3G", "4G", "5G"].map(
    (_, i) => networkRef.current[i] ?? createRef()
  );

  const handleCheckbox = (e, item) => {
    const getNetwork = networkSort(network, item);
    networkRef.current.forEach((item) => {
      if (item.current.checked === false) {
        dispatch(selectAction(pathname, getNetwork));
      }
    });

    changeCheckbox(networkRef, item);
  };

  useEffect(() => {
    network.forEach((n) => {
      if (networkRef) {
        networkRef.current.forEach((el) => {
          if (el.current.classList.contains(n)) {
            el.current.checked
              ? (el.current.checked = false)
              : (el.current.checked = true);
          }
        });
      }
    });
  }, []);

  return (
    <section className="flex flex-col py-5 border-b">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setNetworkShow(!networkShow)}
      >
        <h2 className="mx-5 text-xl">شبکه</h2>
        <BsChevronUp
          className={`mx-5 text-xl transition-all duration-150 ease-in text-gray-400 ${
            networkShow && "rotate-180"
          }`}
        />
      </div>
      <article className={`${networkShow ? "flex" : "hidden"} flex-col `}>
        <div>
          <ul>
            {["2G", "3G", "4G", "5G"].map((n, i) => (
              <li
                key={i}
                className="p-2 m-3 flex justify-between cursor-pointer"
                onClick={(e) => handleCheckbox(e, n)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`mx-3 ${n} ${style.networkCheckbox}`}
                    ref={networkRef.current[i]}
                    onClick={(e) =>
                      e.target.checked
                        ? (e.target.checked = true)
                        : (e.target.checked = false)
                    }
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

export default Network;
