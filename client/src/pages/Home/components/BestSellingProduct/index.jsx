import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaArrowCircleLeft, FaHotjar } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";
import { useSelector } from "react-redux";
import Card from "components/Card";

const BestSellingProduct = () => {
  const [collectionProduct, setCollectionProduct] = useState([]);
  let allProduct = useSelector((state) => state.allProducts);
  const navigation = useNavigate();

  const handleChangeState = () => {
    const compare = (a, b) => {
      if (b.sell < a.sell) {
        return -1;
      }
      if (b.sell > a.sell) {
        return 1;
      }
      return 0;
    };

    allProduct = _.flattenDeep(allProduct);

    const sorted = allProduct.sort(compare);

    setCollectionProduct(sorted);
  };

  useEffect(() => {
    handleChangeState();
  }, [allProduct]);

  return (
    <section
      id="BestSellingProduct"
      className="flex flex-col mt-6 w-full  px-5"
    >
      <div className="border  rounded-lg">
        <div className="w-full flex justify-right  items-center my-3">
          <FaHotjar className="text-orange-500 mx-3 text-xl md:text-3xl " />
          <h1 className="text-sm md:text-xl">پرفروش ترین کالاها</h1>
          <Link
            to="best-selling"
            className="absolute left-5 md:left-8 text-sm md:text-base flex justify-center items-center text-sky-400"
            onClick={() => window.scrollTo(0, 0)}
          >
            مشاهده همه
            <RiArrowLeftSLine />
          </Link>
        </div>

        <Splide
          className=""
          options={{
            height: "30rem",
            direction: "rtl",
            perPage: 4,
            perMove: 1,
            gap: 3,

            breakpoints: {
              768: {
                perPage: 1,
                arrows: false,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
        >
          {collectionProduct.length > 0 &&
            collectionProduct.slice(0, 12).map((item) => (
              <SplideSlide
                key={item._id}
                className="h-full"
                onClick={() => {
                  navigation(`/${item.category}s/${item._id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <Card item={item} />
              </SplideSlide>
            ))}

          <SplideSlide
            className="cursor-pointer flex justify-center items-center font-sans"
            onClick={() => {
              navigation("/best-selling");
              window.scrollTo(0, 0);
            }}
          >
            <div
              style={{ width: "80%", height: "90%" }}
              className="flex flex-col justify-center items-center w/50  mx-0.5 bg-white rounded-lg"
            >
              <span className="flex text-white items-center my-3">
                <FaArrowCircleLeft className="mx-2 text-violet-800 text-6xl" />
              </span>
              <h2>مشاهده همه</h2>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default BestSellingProduct;
