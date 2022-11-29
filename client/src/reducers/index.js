import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";
import { cartReducer } from "./cart";
import { mobilesReducer } from "./mobiles";
import { laptopsReducer } from "./laptops";
import { tabletsReducer } from "./tablets";
import { loading } from "./loading";
import { orderingReducer } from "./ordering";
import { product } from "./product";
import { productSort } from "./productSort";
import { consoleReducer } from "./consoles";
import { offerProductsReducer } from "./offerProductReducer";
import { smartwatchReducer } from "./smartwatch";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  product,
  ordering: orderingReducer,
  mobiles: mobilesReducer,
  laptops: laptopsReducer,
  consoles: consoleReducer,
  tablets: tabletsReducer,
  smartwatchs: smartwatchReducer,
  cart: cartReducer,
  offers: offerProductsReducer,
  loading,
  productSort,
});

export default rootReducer;
