import React from "react";
import RemoveAndEditConsoles from "./RemoveAndEditConsoles";
import RemoveAndEditLaptops from "./RemoveAndEditLaptops";
import RemoveAndEditMobiles from "./RemoveAndEditMobiles";
import RemoveAndEditSmartWatch from "./RemoveAndEditSmartWatch";
import RemoveAndEditTablets from "./RemoveAndEditTablets";

const RemoveAndEditPorduct = ({ product }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-rows-4 xl:grid-cols-4 lg:grid-rows-3 lg:grid-cols-3 gap-2 w-full ">
      {product[0] && <RemoveAndEditMobiles />}
      {product[1] && <RemoveAndEditLaptops />}
      {product[2] && <RemoveAndEditTablets />}
      {product[3] && <RemoveAndEditConsoles />}
      {product[4] && <RemoveAndEditSmartWatch />}
    </div>
  );
};

export default RemoveAndEditPorduct;
