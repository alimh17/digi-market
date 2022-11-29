import React from "react";

const MobileOptions = ({ item }) => {
  return (
    <div className="border-b pb-3 font-sans">
      <h3 className="m-3 text-xl font-sans text-gray-500">ویژگی ها</h3>
      <ul className="mx-3 options">
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">کاربرد</span> :
          <pre className="text-sm"> {item.Application} </pre>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">فرم صفحه </span>:{" "}
          <pre className="text-sm"> {item.screenForm} </pre>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">جنس بند</span> :
          <pre className="text-sm"> {item.strapMaterial} </pre>
        </li>
      </ul>
    </div>
  );
};

export default MobileOptions;
