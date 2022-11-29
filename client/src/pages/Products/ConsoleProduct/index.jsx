import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { replaceNumberToPersian } from "utils/replacePrice";
import { generateRandomNumber } from "utils/generateRandomNumber";
import ConsoleDevice from "./components/consoleDevice";

import "./style.css";

const ConsoleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  const [feedback, setFeedback] = useState(Number);

  const console = useSelector((state) => state.consoles);

  const handleSetFeedback = () => {
    setFeedback(replaceNumberToPersian(generateRandomNumber()));
  };

  useEffect(() => {
    handleSetFeedback();
  }, []);

  let productColor = [];

  useEffect(() => {
    const newProduct = console.allProduct.filter((p) => p._id === params.id);
    setProduct(newProduct);
  }, [params]);

  return (
    <section className="mobile-product mt-20">
      <div className="font-sans">
        {product.map((item) => (
          <div key={item._id} className="my-3">
            <ConsoleDevice
              item={item}
              feedback={feedback}
              setFeedback={setFeedback}
            />
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default ConsoleProduct;
