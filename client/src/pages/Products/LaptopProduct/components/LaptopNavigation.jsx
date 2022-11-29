import React from "react";
import { Link } from "react-router-dom";

const LaptopNavigation = ({ item }) => {
  return (
    <span className="flex m-4 font-sans font-bold text-xl text-gray-400">
      <Link className="mx-2   text-sm" to="/">
        دیجی مارکت
      </Link>
      /
      <Link className="mx-2   text-sm" to="/laptops">
        لپ تاپ
      </Link>
      /
      <Link className="mx-2   text-sm" to={`/laptops/${item._id}`}>
        {item.name}
      </Link>
    </span>
  );
};

export default LaptopNavigation;
