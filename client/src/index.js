import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import "./index.css";
import "swiper/css";
import "swiper/css/bundle";
import "@splidejs/splide/dist/css/splide.min.css";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
