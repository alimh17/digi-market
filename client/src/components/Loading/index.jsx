import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Triangle
      ariaLabel="loading-indicator"
      height={150}
      width={150}
      color="blue"
    />
  );
};

export default Loading;
