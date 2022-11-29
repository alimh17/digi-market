import React from "react";

const LaptopSpecifications = ({ item }) => {
  return (
    <div className="md:m-3">
      <h2 className="p-3 border-b-2 border-b-rose-600 inline-block font-sans  text-xl ">
        مشخصات
      </h2>
      <div className="flex ">
        <h3 className=" m-3 text-base md:hidden hidden font-sans bg-blue-300 ">
          مشخصات
        </h3>
        <ul className=" md:w-full w-full flex flex-col md:grid md:grid-row-3 md:grid-cols-3">
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
            <span className="text-gray-500 font-sans ">سری پردازنده: </span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.cpu_series}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">سازنده پردازنده :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.cpu_maker}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">مدل پردازنده :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.cpu_model}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">
              سازنده پردازنده گرافیکی :
            </span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.gpu_maker}
            </span>
          </li>

          <li className="m-3 flex   flex-col md:grid md:col-span-full">
            <span className="text-gray-500 font-sans">توضیحات :</span>
            <span className="py-2 font-sans text-gray-400">{item.detail}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LaptopSpecifications;
