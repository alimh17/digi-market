import React from "react";

const NewProducts = React.memo(({ active }) => {
  return <div className={`${active[3] ? "flex" : "hidden"}`}>NewProducts</div>;
});

export default NewProducts;
