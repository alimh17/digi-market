import React, { useRef, useState } from "react";
import _ from "lodash";
import NavbarUp from "./components/NavbarUp";
import NavbarDown from "./components/NavbarDown";
import MobileMenu from "./components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hideLoadingAction,
  showLoadingAction,
} from "../../actions/loadingAction";
import Card from "../Card";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [searched, setSearched] = useState([]);
  const searchRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let allProduct = useSelector((state) => state.allProducts);
  allProduct = _.flattenDeep(allProduct);

  const handleSearchProduct = (e) => {
    if (e.target.value !== "") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    const include = allProduct.filter((f) => f.name.includes(e.target.value));
    setSearched(include);
  };

  return (
    <>
      <MobileMenu hidden={setMobileMenu} show={mobileMenu} />
      <nav
        className="w-full flex flex-col border-b-2 md:h-32 items-center fixed  top-0 p-3 z-10 bg-white font-sans"
        id="#Nav"
      >
        <NavbarUp
          show={setMobileMenu}
          menu={mobileMenu}
          handle={handleSearchProduct}
          searchRef={searchRef}
        />
        <NavbarDown handle={handleSearchProduct} />
      </nav>
      {showModal && (
        <div className="fixed flex flex-col top-24 md:top-20  w-full h-screen  justify-center  items-center z-10">
          <div className="bg-white w-5/6 md:w-5/6 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-3 rounded-lg overflow-scroll search-scroll">
            {searched.length > 0
              ? searched.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => {
                      dispatch(showLoadingAction());
                      setTimeout(() => {
                        dispatch(hideLoadingAction());
                        navigate(`${item.category}s/${item._id}`);
                        setShowModal(false);
                        searchRef.current.value = "";
                      }, 2000);
                    }}
                  >
                    <Card item={item} />
                  </div>
                ))
              : setShowModal(false)}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
