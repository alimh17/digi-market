import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";

import { replaceNumberToPersian } from "../../../../utils/replacePrice";

import CartButton from "./CartButton";
import ImageZoom from "./ImageZoom";
import LeftInformation from "./LeftInformation";
import RightInforamtion from "./RightInforamtion";
import TabletTitle from "./TabletTitle";
import TabletColor from "./TabletColor";
import TabletColors from "./TabletColors";
import TabletOptions from "./TabletOptions";
import TabletSpecifications from "./TabletSpecifications";
import TabletSimilar from "./TabletSimilar";
import TabletNavigation from "./TabletNavigation";


import config from "../../../../config/config.json";
const { URL } = config;

const TabletDevice = ({
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
        <TabletTitle
          item={item}
          feedback={feedback}
          setFeedback={setFeedback}
        />
        <TabletColor item={item} color={color} />
        <TabletColors colors={colors} click={handle} />
        <div className="flex items-center h-20 border-b font-sans">
          <AiOutlineSafety className="text-2xl mx-3" />
          گارانتی {replaceNumberToPersian(18)} ماهه
        </div>
        <TabletOptions item={item} />
        <TabletSpecifications item={item} />
        <TabletSimilar />
        <CartButton item={item} />
      </div>

      <div className="mt-32 hidden md:flex md:flex-col">
        <TabletNavigation item={item} />
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
          <TabletSpecifications item={item} />
        </section>
        <TabletSimilar />
      </div>
    </>
  );
};

export default TabletDevice;
