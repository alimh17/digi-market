import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import { news } from "data/news";

import style from "./style.module.css";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className=" mt-5 rounded-lg ">
      <div className=" md:m-3">
        <h2 className="md:p-5 md:text-2xl md:font-bold text-lg p-2">
          اخبار تکنولوژی
        </h2>
      </div>
      <div className="bg-orange-300 ">
        <Swiper
          className={` bg-white ${style.swiper_news}`}
          modules={[Pagination, Navigation, Autoplay]}
          rewind={true}
          tag="div"
          slidesPerView={1}
          spaceBetween={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide
              key={index}
              className={` bg-white flex flex-col rounded-lg border-2 `}
              onClick={() => {
                navigate(`/news/${item.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={item.img}
                alt="best selling product"
                className="h-2/3 w-full"
              />
              <p className="text-sm h-1/3 text-center text-gray-500 p-2 md:text-xl border-b-2 ">
                {item.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
