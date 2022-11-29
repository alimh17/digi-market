import React from "react";
import { switchColorFa } from "../../utils/switchColor";

const AvalibleColor = ({ item }) => {
  return (
    <div className="absolute flex md:flex-col bottom-2 p-2 md:p-0 md:left-2 md:top-2  w-full items-end">
      {item.color &&
        item.color.map((c, i) => (
          <div key={i}>
            <span
              style={{
                backgroundColor: `${switchColorFa(c)}`,
                width: ".6rem",
                height: ".6rem",
                display: "block",
                marginTop: ".3rem",
              }}
              className={`rounded-full flex flex-col border `}
            ></span>
          </div>
        ))}
    </div>
  );
};

export default AvalibleColor;
