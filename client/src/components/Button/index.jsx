import React from "react";

const Button = ({ title, type, primary, click, width, disable }) => {
  return (
    <button
      onClick={(e) => click(e)}
      disabled={disable && disable}
      type={type}
      className={`${
        primary ? "bg-indigo-800 text-white hover:bg-indigo-500" : "bg-gray-400"
      } p-3 m-3 rounded-lg transition-all ease-in duration-150 text-xl cursor-pointer ${
        width && "w-1/2"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
