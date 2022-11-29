import React from "react";

const News = React.memo(({ active }) => {
  return <div className={`${active[6] ? "flex" : "hidden"}`}>News</div>;
});

export default News;
