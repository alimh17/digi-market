import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddAndDeleteBanners = ({
  show,
  delIcon,
  showIcon,
  selectedDel,
  ImgRef,
  IconRef,
}) => {
  return (
    <div className="flex col-span-full gap-3">
      <div
        className="w-full bg-gray-300 h-44 md:h-58 flex justify-center items-center rounded-lg hover:bg-gray-400 cursor-pointer"
        onClick={() => show(true)}
      >
        <FaPlus className="text-5xl text-indigo-800" />
      </div>
      <div
        className="w-full bg-gray-300 h-44 md:h-58 flex justify-center items-center hover:bg-gray-400 rounded-lg cursor-pointer"
        onClick={() => {
          delIcon(!showIcon);
          !showIcon && selectedDel({});
          ImgRef.current.map((select) =>
            select.current.classList.replace("opacity-40", "opacity-100")
          );
        }}
      >
        <FaMinus className="text-5xl text-rose-800" />
      </div>
    </div>
  );
};

export default AddAndDeleteBanners;
