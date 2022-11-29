import React from "react";

const BestSellign = React.memo(({ active }) => {
  return <div className={`${active[4] ? "flex" : "hidden"}`}>BestSellign</div>;
});

export default BestSellign;
