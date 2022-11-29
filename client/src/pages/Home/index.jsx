import React from "react";

//! components
import Banner from "./components/Banner";
import BestSellingProduct from "./components/BestSellingProduct";
import Brands from "./components/Brands";
import Offers from "./components/Offers";
import News from "./components/News";
import Services from "./components/Services";
import CenterBanner from "./components/CenterBaner";
import Landing from "./components/Landing";

const Home = () => {
  return (
    <div className="mt-32 lg:mt-0">
      <Landing />
      <Banner />
      <Offers />
      <CenterBanner />
      <Services />
      <BestSellingProduct />
      <Brands />
      <News />
    </div>
  );
};

export default Home;
