import React from "react";

const WayContact = React.memo(({ active }) => {
  return <div className={`${active[7] ? "flex" : "hidden"}`}>WayContact</div>;
});

export default WayContact;
