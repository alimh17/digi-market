import React from "react";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "react-query";
import { getMiddBanner, sendMidBanner } from "server/BannerRequests";
import config from "config/config.json";

import style from "./style.module.css";

const MiddBanners = () => {
  const { addToast } = useToasts();

  const { data } = useQuery("midBanner", getMiddBanner);

  return (
    <section className="w-full">
      <div className=" p-3 border-b-2 border-rose-800 rounded-t-lg mx-2">
        <h2 className="text-2xl text-gray-500  p-3">بنر میانی</h2>
      </div>
      <div className="mt-2">
        <img src={data && `${config.URL + data.path}`} alt="mid-banner" />
      </div>
      <form className="mt-3">
        <label htmlFor="midd_banner" className={style.middBannerForm}>
          تغییر بنر
        </label>
        <input
          id="midd_banner"
          type="file"
          accept=".jpg , .jpeg , .png"
          style={{ visibility: "hidden" }}
          onChange={(e) => {
            sendMidBanner(e.target.files[0]);
            addToast("بنر میانی تغییر کرد ", {
              appearance: "success",
              autoDismiss: true,
            });
          }}
        />
      </form>
    </section>
  );
};

export default MiddBanners;
