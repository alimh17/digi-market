import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { brandConvertToPersian } from "utils/brnadConverToPersian";
import { showLoadingAction } from "actions/loadingAction";
import Card from "components/Card";

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  let products = useSelector((state) => state.allProducts);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChangeState = () => {
    products = _.flattenDeep(products);
    const brand = brandConvertToPersian(location.pathname.split("/")[2]);
    products = products.filter((f) => f.brand === brand);

    setSelectedBrand(products);
  };

  useEffect(() => {
    handleChangeState();
  }, []);

  return (
    <div className="flex justify-center mt-32 relative font-sans">
      <div className="bg-indigo-500 absolute h-32 w-3/4 mx-auto rounded-b-lg flex justify-center items-start">
        <h2 className="text-2xl md:text-3xl text-white my-5 font-bold">
          محصولات برند {location.pathname.split("/")[2]}
        </h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 g-2 mx-auto w-full mt-28 bg-white ">
        {selectedBrand &&
          selectedBrand.map((item) => (
            <div
              key={item._id}
              className="my-5"
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

export default Brands;
