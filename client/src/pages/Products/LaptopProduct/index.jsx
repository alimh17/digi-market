import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { switchColor } from "utils/switchColor";
import { colorList, colorObject } from "utils/colorLists";
import { replaceNumberToPersian } from "utils/replacePrice";
import { generateRandomNumber } from "utils/generateRandomNumber";
import LaptopDevice from "./components/LaptopDevice";

import "./style.css";

const LaptopProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState();
  const [color, setColor] = useState("");

  const [feedback, setFeedback] = useState(Number);

  const laptop = useSelector((state) => state.laptops);

  const handleSetFeedback = () => {
    setFeedback(replaceNumberToPersian(generateRandomNumber()));
  };

  useEffect(() => {
    handleSetFeedback();
  }, []);

  let productColor = [];

  useEffect(() => {
    const newProduct = laptop.allProduct.filter((p) => p._id === params.id);
    setProduct(newProduct);
    newProduct.forEach((item) => {
      setColors(item.color);
      setColor(item.color[0]);
    });
  }, [params]);

  if (colors) {
    colors.map((c) => {
      const value = Object.entries(colorObject).forEach((key) => {
        if (key[0] === c) {
          const obj = { c: key[1] };
          productColor.push(obj);
          return obj;
        }
      });
      return value;
    });
  }

  const handleColorState = (e) => {
    const selectedColor = colorList.filter(
      (c) => c === e.target.style.backgroundColor
    );

    const value = switchColor(selectedColor[0]);
    setColor(value);
  };

  return (
    <section className="mobile-product mt-20">
      <div className="font-sans">
        {product.map((item) => (
          <div key={item._id} className="my-3">
            <LaptopDevice
              item={item}
              colors={colors}
              color={color}
              handle={handleColorState}
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

export default LaptopProduct;
