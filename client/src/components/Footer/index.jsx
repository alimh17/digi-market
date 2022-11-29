import React from "react";
import Application from "./components/Application";
import SocialContact from "./components/SocialContact";
import WayContact from "./components/WayContact";

//styleSheet
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer
      className="flex flex-col font-sans relative overflow-hidden mb-5"
      style={{ backgroundColor: "#d2d9dfff" }}
    >
      <Application style={style} />
      <WayContact />
      <SocialContact />
      <div className="text-center">
        <p className="md:text-xl">
          تمامی حقوق مادی و معنوی متعلق به سایت دیجی مارکت می باشد©️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
