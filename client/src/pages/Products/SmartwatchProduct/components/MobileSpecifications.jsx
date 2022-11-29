import React from "react";

const MobileSpecifications = ({ item }) => {
  return (
    <div className="md:m-3">
      <h2 className=" p-3 border-b-2 border-b-rose-600 inline-block font-sans  text-xl">
        مشخصات
      </h2>
      <div className="flex">
        <ul className=" w-full flex flex-col md:grid md:grid-row-3 md:grid-cols-3 gap-2">
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">ابعاد صفحه :</span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.FrameComposition}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans">وزن :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.weight}
            </span>
          </li>
          <li className="p-3 flex flex-col border-b">
            <span className="text-gray-500 font-sans ">کاربرد: </span>
            <span className="text-start text-gray-400 py-2 font-sans">
              {item.Appropriate}
            </span>
          </li>
          <li className="m-3 flex  flex-col border-b col-span-full">
            <span className="text-gray-500 font-sans">معرفی :</span>
            <span className=" text-start text-gray-400 py-2 font-sans">
              {item.body}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSpecifications;
