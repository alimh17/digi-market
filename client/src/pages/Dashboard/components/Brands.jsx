import React from "react";

const Brands = React.memo(({ active }) => {
  return <div className={`${active[5] ? "flex" : "hidden"}`}>Brands</div>;
});

export default Brands;
