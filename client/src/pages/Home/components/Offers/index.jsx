import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BiStar } from "react-icons/bi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoadingAction } from "actions/loadingAction";

import { replacePrice } from "utils/replacePrice";
import Card from "components/Card";
import config from "config/config.json";
import AvalibleColor from "components/AvalibleColor";

import "./style.css";

const Offers = () => {
  const offers = useSelector((state) => state.offers.allOffer);
  const dispatch = useDispatch();
  const { URL } = config;

  const navigation = useNavigate();

  return (
    <Splide
      className="bg-violet-800 my-5 mx-5 rounded-lg lg:mt-10"
      options={{
        rewind: true,
        perPage: 5,
        perMove: 1,
        height: "28rem",
        direction: "rtl",
        width: "100%",
        gap: 2,
        breakpoints: {
          1400: {
            perPage: 4,
            arrows: false,
            height: "30rem",
          },
          1204: {
            perPage: 3,
            arrows: false,
            height: "30rem",
          },
          768: {
            perPage: 2,
            arrows: false,
            height: "25rem",
          },
          500: {
            perPage: 1,
            arrows: false,
          },
        },
      }}
    >
      <SplideSlide
        className="cursor-pointer font-sans"
        onClick={() => {
          dispatch(showLoadingAction());
          setTimeout(() => {
            navigation(`/offers`);
            window.scrollTo(0, 0);
          }, 1800);
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <img alt="" width="70%" src={"images/offers/Electronics.png"} />
          <span className="flex text-white items-center">
            مشاهده همه
            <RiArrowLeftSLine className="mx-2" />
          </span>
        </div>
      </SplideSlide>
      {offers.length > 8 &&
        offers.slice(0, 8).map((item) => (
          <SplideSlide
            key={item._id}
            className="flex justify-center items-center  w-1/2 cursor-pointer font-sans relative py-5 "
            onClick={() => {
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigation(`/${item.category}s/${item._id}`);
                window.scrollTo(0, 0);
              }, 1800);
            }}
          >
            <div className="h-full hidden md:flex">
              <Card item={item} />
            </div>
            <article
              className="flex flex-col justify-center items-center border  border-b bg-white border-gray-300 my-2  cursor-pointer rounded-md relative shadow-md transition-all duration-150  p-5 md:hidden w-full h-full"
              key={item._id}
            >
              <AvalibleColor item={item} />
              <div className="flex  justify-center items-center w-full">
                <img
                  alt="offer_image"
                  src={URL + item.mainImage}
                  style={{ width: "10rem", height: "10rem" }}
                />
              </div>
              <div className="w-full mx-3 flex flex-col justify-around items-center md:w-full ">
                <p className="p-3 w-full text-xs  font-sans text-gray-500 font-bold">
                  {item.name}
                </p>
                <div className="w-full text-left p-3 flex items-center justify-between text-xs   md:text-base">
                  <p className="text-gray-400 ">موجود در انبار</p>
                  <span className="flex items-center ">
                    {item.rate}
                    <BiStar className="mx-2 text-yellow-500" />
                  </span>
                </div>
                {item.offer ? (
                  <div className="flex flex-col">
                    <span className="my-2 line-through">
                      {replacePrice(item.price)} تومان
                    </span>
                    <span>{replacePrice(item.offer)} تومان</span>
                    <span className="absolute right-1 top-1 bg-rose-500 text-white rounded-full p-2">
                      {item.off}%
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span>{replacePrice(item.price)} تومان</span>
                  </div>
                )}
              </div>
            </article>
          </SplideSlide>
        ))}
      <SplideSlide
        className="cursor-pointer flex justify-center items-center font-sans "
        onClick={() => {
          navigation("/offers");
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
  );
};

export default Offers;
