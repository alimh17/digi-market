import React from "react";

const ConsoleOption = ({ item }) => {
  return (
    <div className="border-b pb-3">
      <h3 className="m-3 text-xl font-sans text-gray-500">ویژگی ها</h3>
      <ul className="mx-3 options">
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm"> فناوری ارتباطی :</span>{" "}
          :<p className="text-sm"> {item.connection} </p>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">تعداد دسته : </span>
          <p className="text-sm">{item.joyStick}</p>
        </li>
        <li className="font-sans">
          <span className="text-gray-400 md:text-sm">ظرفیت حافظه : </span>
          <p className="text-sm">{item.ram_space}</p>
        </li>
      </ul>
    </div>
  );
};

export default ConsoleOption;
