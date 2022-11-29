import React from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoadingAction } from "../../actions/loadingAction";
import Card from "../../components/Card";

const Shop = () => {
  //   const [shop, setBestSell] = useState([]);
  let products = useSelector((state) => state.allProducts);
  products = _.flattenDeep(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-32 relative font-sans">
      <div className="bg-indigo-500 absolute h-32 w-3/4 mx-auto rounded-b-lg flex justify-center items-start">
        <h2 className="text-2xl md:text-3xl text-white my-5 font-bold ">
          فروشگاه
        </h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 g-2 mx-auto w-full mt-28 bg-white ">
        {products &&
          products.map((item) => (
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

export default Shop;
