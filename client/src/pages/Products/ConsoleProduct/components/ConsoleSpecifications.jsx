import React from "react";

const ConsoleSpecifications = ({ item }) => {
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
            <span className="text-gray-500 font-sans">فناوری ارتباطی :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.connection}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans ">تعداد دسته: </span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.joyStick}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">انواع حافظه :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.ram}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b">
            <span className="text-gray-500 font-sans">ظرفیت هارد دیسک :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.ram_space}
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

export default ConsoleSpecifications;
