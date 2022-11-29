import React from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
  EffectFade,
} from "swiper";
import { getAllBanners } from "server/BannerRequests";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import config from "config/config.json";
import "./style.css";

const Banner = () => {
  //! ------------ fetch banners ---------------------
  const { data, isLoading, isError } = useQuery("banners", getAllBanners);

  return (
    <div className="lg:hidden">
      {isLoading ? null : isError ? null : data ? (
        <Swiper
          modules={[
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            Scrollbar,
            EffectFade,
          ]}
          slidesPerView={1}
          autoHeight={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation
          effect="fade"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <img
                src={config.URL + item.path}
                alt={item.name}
                className="swiper-slide"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Banner;
