import React from "react";
import { Link } from "react-router-dom";

const TabletNavigation = ({ item }) => {
  return (
    <span className="flex m-4 font-sans font-bold text-xl text-gray-400">
      <Link className="mx-2  text-sm" to="/">
        دیجی مارکت
      </Link>
      /
      <Link className="mx-2  text-sm" to="/tablets">
        تبلت
      </Link>
      /
      <Link className="mx-2  text-sm" to={`/tablets/${item.id}`}>
        {item.name}
      </Link>
    </span>
  );
};

export default TabletNavigation;
