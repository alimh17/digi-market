import React from "react";

const TabletSpecifications = ({ item }) => {
  return (
    <div className="md:m-3">
      <h2 className=" p-3 border-b-2 border-b-rose-600 inline-block font-sans  text-xl">
        مشخصات
      </h2>
      <div className="flex">
        <ul className=" w-full flex flex-col md:grid md:grid-row-3 md:grid-cols-3 gap-2">
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">ابعاد :</span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {" "}
              {item.dimensions}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">وزن :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.weight}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans ">توضیحات سیم کارت: </span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.simcart}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b col-span-full">
            <span className="text-gray-500 font-sans">ساختار بدنه :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.body}
            </span>
          </li>
          <li className="m-3 flex  flex-col col-span-full">
            <span className="text-gray-500 font-sans">ویژگی های خاص :</span>
            <span className="py-2 font-sans text-gray-400">
              {item.features}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabletSpecifications;
