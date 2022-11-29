import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Scroll = () => {
  return (
    <div
      className="fixed bottom-20 right-4 flex justify-center items-center rounded-full h-12 w-12 bg-rose-500 text-white z-30 cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      <MdOutlineKeyboardArrowUp className="text-5xl" />
    </div>
  );
};

export default Scroll;
