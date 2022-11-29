import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";

import { replaceNumberToPersian } from "../../../../utils/replacePrice";
import CartButton from "./CartButton";
import ImageZoom from "./ImageZoom";
import LeftInformation from "./LeftInformation";
import ConsoleNavigation from "./ConsoleNavigation";
import LaptopOption from "./ConsoleOption";
import ConsoleSimilar from "./ConsoleSimilar";
import ConsoleSpecifications from "./ConsoleSpecifications";
import ConsoleTitle from "./ConsoleTitle";
import RightInforamtion from "./RightInformation";

import config from "../../../../config/config.json";
const { URL } = config;

const ConsoleDevice = ({
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
        <ConsoleTitle
          item={item}
          feedback={feedback}
          setFeedback={setFeedback}
        />
        <div className="flex items-center h-20 border-b font-sans">
          <AiOutlineSafety className="text-2xl mx-3" />
          گارانتی {replaceNumberToPersian(18)} ماهه
        </div>
        <LaptopOption item={item} />
        <ConsoleSpecifications item={item} />
        <ConsoleSimilar />
        <CartButton item={item} />
      </div>

      <div className="mt-32 hidden md:flex md:flex-col">
        <ConsoleNavigation item={item} />
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
          <ConsoleSpecifications item={item} />
        </section>
        <ConsoleSimilar />
      </div>
    </>
  );
};

export default ConsoleDevice;
