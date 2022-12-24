import React from "react";

const Wave = () => {
  return (
    <div className="mt-5">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 100.19138755980862,221.01435406698565 200.38277511961724,242.0287081339713 294,257 C 387.61722488038276,271.9712918660287 474.6602870813397,280.8995215311005 562,254 C 649.3397129186603,227.1004784688995 736.976076555024,164.3732057416268 844,138 C 951.023923444976,111.62679425837321 1077.4354066985645,121.60765550239236 1180,138 C 1282.5645933014355,154.39234449760764 1361.2822966507179,177.1961722488038 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="#d2d9df88"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 119.24401913875596,427.9138755980861 238.48803827751192,455.82775119617224 316,457 C 393.5119617224881,458.17224880382776 429.2918660287082,432.60287081339715 526,404 C 622.7081339712918,375.39712918660285 780.3444976076555,343.76076555023917 881,364 C 981.6555023923445,384.23923444976083 1025.3301435406697,456.354066985646 1109,471 C 1192.6698564593303,485.645933014354 1316.3349282296651,442.822966507177 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="#d2d9dfff"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
