import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { colorList, colorObject } from "utils/colorLists";
import { switchColor } from "utils/switchColor";
import { replaceNumberToPersian } from "utils/replacePrice";
import { generateRandomNumber } from "utils/generateRandomNumber";
import TabletDevice from "./components/TabletDevice";

import "./style.css";

const TabletProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState();
  const [color, setColor] = useState("");

  const [feedback, setFeedback] = useState(Number);
  const tablet = useSelector((state) => state.tablets);

  const handleSetFeedback = () => {
    setFeedback(replaceNumberToPersian(generateRandomNumber()));
  };

  useEffect(() => {
    handleSetFeedback();
  }, []);

  let productColor = [];

  useEffect(() => {
    const newProduct = tablet.allProduct.filter((p) => p._id === params.id);
    setProduct(newProduct);
    newProduct.map((item) => {
      setColor(item.color[0]);
      return setColors(item.color);
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
            <TabletDevice
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

export default TabletProduct;
