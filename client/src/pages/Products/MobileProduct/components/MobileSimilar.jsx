import React from "react";
import { BiStar } from "react-icons/bi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoadingAction } from "../../../../actions/loadingAction";

import config from "../../../../config/config.json";
const { URL } = config;

const MobileSimilar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let mobiles = useSelector((state) => state.mobiles.allProduct);
  const filter = mobiles.filter(
    (f) => f._id !== location.pathname.split("/")[2]
  );

  return (
    <section className="font-sans">
      <h2 className="m-3 font-bold border-b border-red-500 text-sm inline-block py-2">
        کالاهای مشابه
      </h2>
      <Splide
        options={{
          perMove: 1,
          perPage: 4,
          gap: 5,
          autoplay: true,
          pagination: false,
          direction: "rtl",
          type: "loop",
          breakpoints: {
            1000: {
              perPage: 3,
            },

            768: {
              perPage: 2,
            },

            600: {
              perPage: 1,
              arrows: false,
            },
          },
        }}
      >
        {filter.map((item) => (
          <SplideSlide
            key={item._id}
            className="flex justify-center items-center flex-col  rounded-lg h-96 border-2 cursor-pointer "
            onClick={() => {
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigate(`/mobiles/${item._id}`);
              }, 1800);
            }}
          >
            <img
              alt=""
              src={URL + item.mainImage}
              className="w-2/3 h-2/3 md:w-64 md:h-3/4"
            />
            <p className="text-sm p-2 leading-normal  font-sans  text-gray-400">
              {item.name}
            </p>
            <div className="flex w-full justify-around text-gray-400 py-2">
              <span>موجود در انبار</span>
              <div className="flex items-center ">
                <BiStar className="text-yellow-500 mx-3 " />
                <span>{item.rate}</span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MobileSimilar;
