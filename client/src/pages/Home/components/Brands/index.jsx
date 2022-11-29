import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import _ from "lodash";

import { BiStar } from "react-icons/bi";
// import { brands } from "../../../../data/brands";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { allBrandsConvert } from "../../../../utils/brnadConverToPersian";
import { selectBrandsImages } from "../../../../utils/brands";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  let product = useSelector((state) => state.allProducts);
  const handleSetState = () => {
    if (product.length > 0) {
      product = _.flattenDeep(product);
      let allBrand = [...brands];
      allBrand = product.map((item) => allBrandsConvert(item.brand));
      allBrand = _.uniq(allBrand);
      allBrand = allBrand.filter((f) => typeof f !== "undefined");
      setBrands(allBrand);
    }
  };

  useEffect(() => {
    handleSetState();
  }, [product]);

  return (
    <div className="mx-5 flex flex-col my-10 ">
      <div className="flex justify-center md:justify-start">
        <h1 className="text-2xl mx-3">محبوب ترین برند ها</h1>
        <BiStar className="text-yellow-400 text-2xl" />
      </div>
      <div className="border rounded-md">
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            height: "20rem",
            gap: 3,
            direction: "rtl",
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
        >
          {brands &&
            brands.map((item, i) => (
              <SplideSlide
                className="border flex items-center justify-center "
                key={i}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Link to={`/brands/${item}`}>
                  <img alt="" src={selectBrandsImages(item)} />
                </Link>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default Brands;
