import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";

import { replaceNumberToPersian } from "../../../../utils/replacePrice";
import CartButton from "./CartButton";
import ImageZoom from "./ImageZoom";
import LeftInformation from "./LeftInformation";
import MobileColor from "./MobileColor";
import MobileColors from "./MobileColors";
import MobileNavigation from "./MobileNavigation";
import MobileOptions from "./MobileOptions";
import MobileSimilar from "./MobileSimilar";
import MobileSpecifications from "./MobileSpecifications";
import MobileTitle from "./MobileTitle";
import RightInforamtion from "./RightInforamtion";

import config from "../../../../config/config.json";
const { URL } = config;

const MobileDevice = ({
  item,
  colors,
  color,
  handle,
  feedback,
  setFeedback,
}) => {
  return (
    <>
      <div className="md:hidden">
        <Splide
          className="md:hidden"
          options={{
            perMove: 1,
            perPage: 1,
            autoplay: true,
            direction: "rtl",
            type: "loop",
            breakpoints: {
              500: {
                arrows: false,
              },
            },
          }}
        >
          {item.images.map((img, i) => (
            <SplideSlide key={i} className="flex items-center justify-center ">
              <img
                alt=""
                src={URL + img}
                data-splide-lazy={img}
                className="h-3/4 w-2/3"
              />
            </SplideSlide>
          ))}
        </Splide>
        <MobileTitle
          item={item}
          feedback={feedback}
          setFeedback={setFeedback}
        />
        <MobileColor item={item} color={color} />
        <MobileColors colors={colors} click={handle} />
        <div className="flex items-center h-20 border-b font-sans">
          <AiOutlineSafety className="text-2xl mx-3" />
          گارانتی {replaceNumberToPersian(18)} ماهه
        </div>
        <MobileOptions item={item} />
        <MobileSpecifications item={item} />
        <MobileSimilar />
        <CartButton item={item} />
      </div>

      <div className="mt-32 hidden md:flex md:flex-col">
        <MobileNavigation item={item} />
        <section className="hidden md:flex">
          <ImageZoom item={item} />
          <div className="w-2/3">
            <p className="py-5">{item.title}</p>
            <div className="flex">
              <RightInforamtion
                feedback={feedback}
                color={color}
                colors={colors}
                handle={handle}
                item={item}
              />
              <LeftInformation item={item} />
            </div>
          </div>
        </section>
        <section>
          <MobileSpecifications item={item} />
        </section>
        <MobileSimilar />
      </div>
    </>
  );
};

export default MobileDevice;
