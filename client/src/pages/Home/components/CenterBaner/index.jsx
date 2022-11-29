import React from "react";
import { useQuery } from "react-query";
import { getMiddBanner } from "../../../../server/BannerRequests";

import config from "../../../../config/config.json";

const CenterBanner = () => {
  const { data } = useQuery("midBanner", getMiddBanner);

  return (
    <section className="flex h-44 md:h-72 justify-center mt-5 w-full">
      <div className="h-full w-full">
        <img
          alt={data && data.name}
          src={data && config.URL + data.path}
          className="h-full rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default CenterBanner;
