import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { hideLoadingAction } from "../actions/loadingAction";
import Wave from "./components/Wave";
import { useLocation } from "react-router-dom";
import { handleRouts } from "./utils/handleRoutes";
import Scroll from "../components/Scroll";
import { ToastProvider } from "react-toast-notifications";

const Layout = (props) => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if (loading) {
    setTimeout(() => {
      dispatch(hideLoadingAction());
    }, 2000);
  }

  return (
    <ToastProvider placement="top-right">
      <div>
        {handleRouts(pathname) ? <Navbar /> : null}
        {props.children}
        {loading ? (
          <div className="w-full h-full  fixed top-0 z-10 bg-gray-400 opacity-75 flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          ""
        )}
        {handleRouts(pathname) ? <Wave /> : null}
        {handleRouts(pathname) ? <Footer /> : null}
        {handleRouts(pathname) ? <Scroll /> : null}
      </div>
    </ToastProvider>
  );
};
export default Layout;
