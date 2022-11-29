import React, { useEffect, useState } from "react";
import { news } from "../../data/news";
import { useLocation } from "react-router-dom";

const News = () => {
  const [selectedNews, setSelectedNews] = useState({});
  const location = useLocation();

  const handleSetState = () => {
    setSelectedNews(news[location.pathname.split("/")[2]]);
  };

  useEffect(() => {
    handleSetState();
  }, []);

  return (
    <div className="mt-32 flex flex-col items-center justify-center font-sans p-5">
      {selectedNews && (
        <div>
          <article className="flex flex-col">
            <img alt="news_image" src={selectedNews.img} />
            <h2 className="mt-5 text-3xl font-bold text-center p-3">
              {selectedNews.title}
            </h2>
            <div className="my-5 p-4">
              <p className="font-sans text-2xl">{selectedNews.description}</p>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default News;
