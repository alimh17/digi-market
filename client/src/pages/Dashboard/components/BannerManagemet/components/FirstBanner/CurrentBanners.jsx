import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import config from "../../../../../../config/config.json";

const CurrentBanners = ({ data, IconRef, ImgRef, showDeleteIcon, click }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div key={index} className="transition-all ease duration-200">
            <div className="w-full rounded-lg  flex flex-col justify-center items-center ">
              <span
                ref={IconRef.current[index]}
                className={`${
                  showDeleteIcon ? "block" : "hidden"
                }  relative top-20 text-6xl text-gray-400 transition-all ease-in duration-200 z-10`}
                onClick={(e) => click(e, index, item)}
              >
                <FaTimesCircle className="" />
              </span>
              <img
                alt={item.name}
                ref={ImgRef.current[index]}
                src={config.URL + item.path}
                className="rounded-lg transition-all ease duration-200 opacity-100"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CurrentBanners;
