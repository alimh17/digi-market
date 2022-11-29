import React from "react";

const Promotion = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1  md:grid-cols-2 md:grid-rows-2 gap-2 mx-5 mt-10">
      <div className="flex justify-center item-center w-full  ">
        <img
          alt=""
          className="rounded-lg"
          src={
            process.env.PUBLIC_URL +
            "/images/promotion/7db92864a494be5b5537f9e631ed82277951259e_1641389086.jpg"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex justify-center item-center w-full ">
        <img
          alt=""
          className="rounded-lg"
          src={
            process.env.PUBLIC_URL +
            "/images/promotion/955a3032d80f7128c960d537b1e2603d1216a250_1641389278.jpg"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex justify-center item-center w-full ">
        <img
          alt=""
          className="rounded-lg"
          src={
            process.env.PUBLIC_URL +
            "/images/promotion/873324614994f10425f4d0758c9358e548033518_1641384927.jpg"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex justify-center item-center w-full ">
        <img
          alt=""
          className="rounded-lg"
          src={
            process.env.PUBLIC_URL +
            "/images/promotion/476ed51387f880188382629c5c6cad656cc8fe21_1641389325.jpg"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Promotion;
