import React from "react";
import ConsoleForm from "./ConsoleForm";
import LaptopForm from "./LaptopForm";
import MobileForm from "./MobileForm";
import SmartWatchForm from "./SmartWatchForm";
import TabletForm from "./TabletForm";

const AddProductComponent = ({ product, setPorduct }) => {
  return (
    <>
      {product[0] && <MobileForm />}
      {product[1] && <LaptopForm />}
      {product[2] && <TabletForm />}
      {product[3] && <ConsoleForm />}
      {product[4] && <SmartWatchForm />}
    </>
  );
};

export default AddProductComponent;
