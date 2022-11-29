import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import config from "../../../../config/config.json";

const ImageZoom = ({ item }) => {
  return (
    <div className="w-1/3 flex justify-center items-center">
      <InnerImageZoom
        alt="img_product"
        src={config.URL + item.mainImage}
        zoomSrc={config.URL + item.mainImage}
        moveType="pan"
        zoomType="hover"
        fadeDuration={100}
        hideCloseButton={false}
      />
    </div>
  );
};

export default ImageZoom;
