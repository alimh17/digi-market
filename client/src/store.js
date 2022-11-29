import { configureStore } from "@reduxjs/toolkit";
import { allProductInit } from "./actions/allProductAction";
import { consoleInit } from "./actions/consolesAction";

import { laptopsInit } from "./actions/laptopsAction";
import { mobileInit } from "./actions/mobilesActions";
import { initOfferProductAction } from "./actions/offerAction";
import { smartwatchInit } from "./actions/smartwatchAction";
import { tabletInit } from "./actions/tabletsAction";

import rootReducer from "./reducers";


const store = configureStore({
  reducer: rootReducer,
  middleware:
    (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: {
          ignoredPaths: ["/", "mobiles", "laptops", "tablets", "consoles", "offers", "smartwatchs"],
        },
      }),

});


store.dispatch(mobileInit());
store.dispatch(laptopsInit());
store.dispatch(tabletInit());
store.dispatch(consoleInit());
store.dispatch(smartwatchInit());
store.dispatch(initOfferProductAction())
store.dispatch(allProductInit())

export default store;
