import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { showLoadingAction } from "../../actions/loadingAction";

const BestSelling = () => {
  const [bestSell, setBestSell] = useState([]);
  let products = useSelector((state) => state.allProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeState = () => {
    const compare = (a, b) => {
      if (b.sell < a.sell) {
        return -1;
      }
      if (b.sell > a.sell) {
        return 1;
      }
      return 0;
    };
    products = _.flattenDeep(products);
    const sorted = products.sort(compare);
    setBestSell(sorted);
  };

  useEffect(() => {
    handleChangeState();
  }, []);

  return (
    <div className="flex justify-center mt-32 relative font-sans">
      <div className="bg-indigo-500 absolute h-32 w-3/4 mx-auto rounded-b-lg flex justify-center items-start">
        <h2 className="text-2xl md:text-3xl text-white my-5 font-bold ">
          پر فروش ترین محصولات
        </h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 g-2 mx-auto w-full mt-28 bg-white ">
        {bestSell &&
          bestSell.map((item) => (
            <div
              key={item._id}
              onClick={() => {
                dispatch(showLoadingAction());
                setTimeout(() => {
                  window.scrollTo(0, 0);
                  navigate(`/${item.category}s/${item._id}`);
                }, 1800);
              }}
            >
              <Card item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSelling;
