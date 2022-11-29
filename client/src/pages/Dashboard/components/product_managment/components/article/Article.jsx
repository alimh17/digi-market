import React from "react";

const Article = ({ product, click, name, path }) => {
  return (
    <article
      className={`flex flex-col justify-center items-center w-2/3 md:w-auto border-2 rounded-lg p-4  m-3 cursor-pointer   ${
        product && " border-indigo-800 shadow-2xl"
      }  `}
      onClick={click}
    >
      <div className="w-full text-right">
        <p className="md:text-xl   bg-rose-500 text-white  text-right inline p-3 rounded-lg relative z-30">
          {name}
        </p>
      </div>
      <img
        className="w-32 h-42 md:w-48  md:h-52"
        alt="product"
        src={`/images/${path}`}
      />
    </article>
  );
};

export default Article;
