import React from "react";

const TabletOption = ({ item }) => {
  return (
    <div className="border-b pb-3 font-sans">
      <h3 className="m-3 text-xl font-sans text-gray-500">ویژگی ها</h3>
      <ul className="mx-3 options">
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">حافظه داخلی</span> :
          <pre className="text-sm">  {item.ram}  </pre>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">
            بازه اندازه صفحه نمایش
          </span>{" "}
          : <pre className="text-sm">  {item.screen}  </pre>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">شبکه های ارتباطی</span> :
          <pre className="text-sm">  {item.network}  </pre>
        </li>
      </ul>
    </div>
  );
};

export default TabletOption;
