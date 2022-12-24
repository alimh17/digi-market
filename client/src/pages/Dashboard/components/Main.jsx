import React, { useState } from "react";
import Aside from "./Aside";
import BannerManagement from "./BannerManagemet";
import BestSellign from "./BestSellign";
import Brands from "./Brands";
import NewProducts from "./NewProducts";
import News from "./News";
import Offers from "./Offers";
// import ProductManagment from "./ProductManagment";
import WayContact from "./WayContact";

const Main = () => {
  const [active, setActive] = useState(new Array(8).fill(false));

  return (
    <main className="flex font-sans">
      <Aside active={active} setActive={setActive} />
      <section className="w-full">
        {/* <ProductManagment active={active} /> */}
        <BannerManagement active={active} />
        <Offers active={active} />
        <NewProducts active={active} />
        <BestSellign active={active} />
        <Brands active={active} />
        <News active={active} />
        <WayContact active={active} />
      </section>
    </main>
  );
};

export default Main;
