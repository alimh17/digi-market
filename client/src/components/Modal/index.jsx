import React from "react";

const ModalComponent = (props) => {
  return (
    <div className="fixed flex top-0 right-0 z-40 w-full h-screen bg-gray-600 bg-opacity-75 justify-center items-center">
      <div className="bg-white w-full md:w-2/3 h-2/3 flex justify-center items-center rounded-lg">
        {props.children}
      </div>
    </div>
  );
};

export default ModalComponent;
