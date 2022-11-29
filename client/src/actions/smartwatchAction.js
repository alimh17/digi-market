import _ from "lodash";
import { getAllSmartWatch } from "../server/SmartWatchRequests";
import { smartWatchBrandConvertToPersian } from "../utils/brnadConverToPersian";
import { replacePersianNumber } from "../utils/replacePrice";
import { switchColor } from "../utils/switchColor";

export const smartwatchInit = () => async (dispatch, getState) => {
  const copyState = { ...getState().smartwatchs };
  const smartwatchs = await getAllSmartWatch();
  copyState.allProduct = smartwatchs;
  dispatch({
    type: "INITIAL_SMARTWATCH",
    payload: copyState,
  });
};

export const smartwatchSortBySell = () => (dispatch, getState) => {
  const copyState = { ...getState().smartwatchs };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (b.sell < a.sell) {
      return -1;
    }
    if (b.sell > a.sell) {
      return 1;
    }
    return 0;
  };
  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_SELL_SMARTWATCH", payload: copyState });
};

export const smartwatchSortByView = () => (dispatch, getState) => {
  const copyState = { ...getState().smartwatchs };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (b.view < a.view) {
      return -1;
    }
    if (b.view > a.view) {
      return 1;
    }
    return 0;
  };

  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_VIEW_SMARTWATCH", payload: copyState });
};

export const smartwatchSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().smartwatchs };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (Number(a.price) < Number(b.price)) {
      return -1;
    }
    if (Number(a.price) > Number(b.price)) {
      return 1;
    }
    return 0;
  };

  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;
  dispatch({ type: "SORT_BY_CHEAPEST_SMARTWATCH", payload: copyState });
};

export const smartwatchSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().smartwatchs };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (Number(b.price) < Number(a.price)) {
      return -1;
    }
    if (Number(b.price) > Number(a.price)) {
      return 1;
    }
    return 0;
  };
  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_EXPENSIVE_SMARTWATCH", payload: copyState });
};

// //! --------------------------------------------------------------------------

export const sortSmartwatchByBrand = (brand) => async (dispatch, getState) => {
  let smartwatchs = { ...getState().smartwatchs };
  smartwatchs.brands = brand;

  const convert = smartwatchs.brands.map((b) =>
    smartWatchBrandConvertToPersian(b)
  );

  const allSmartwatchs = await getAllSmartWatch();

  let filtered = allSmartwatchs.map((m, i) => {
    return convert.includes(m.brand) && m;
  });
  filtered = filtered.filter((f) => f !== false);
  const copyFiltered = [...filtered];
  smartwatchs.allProduct = copyFiltered;

  dispatch({ type: "SORT_BY_BRANDS_SMARTWATCH", payload: smartwatchs });

  if (smartwatchs.brands.length === 0 && smartwatchs.colors.length === 0) {
    const copyState = { ...getState().smartwatchs };
    const smartwatchs = await getAllSmartWatch();
    copyState.allProduct = smartwatchs;
    dispatch({
      type: "INITIAL_SMARTWATCH",
      payload: copyState,
    });
  } else if (smartwatchs.brands.length === 0 && smartwatchs.colors.length > 0) {
    dispatch(sortSmartwatchsByColor(smartwatchs.colors));
  }
};

export const sortSmartwatchsByColor = (color) => async (dispatch, getState) => {
  let smartwatchs = { ...getState().smartwatchs };
  const { allProduct } = smartwatchs;
  const CopyColors = color;
  smartwatchs.colors = CopyColors;
  const convert = smartwatchs.colors.map((b) => switchColor(b));

  const allSmartwatchs = await getAllSmartWatch();

  if (_.isEmpty(smartwatchs.brands)) {
    let filtered = allSmartwatchs.map((m, i) => {
      const result = m.color.map((c) => {
        return convert.includes(c) && m;
      });
      return result.filter((f) => f !== false);
    });
    filtered = _.flattenDeep(filtered);
    filtered = _.uniq(filtered);
    const copyFiltered = [...filtered];
    smartwatchs.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_SMARTWATCH", payload: smartwatchs });
  } else {
    let filtered = allProduct.map((m, i) => {
      const result = m.color.map((c) => {
        return convert.includes(c) && m;
      });
      return result.filter((f) => f !== false);
    });
    filtered = _.flattenDeep(filtered);
    filtered = _.uniq(filtered);
    const copyFiltered = [...filtered];
    smartwatchs.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_SMARTWATCH", payload: smartwatchs });
  }

  if (smartwatchs.brands.length === 0 && smartwatchs.colors.length === 0) {
    const copyState = { ...getState().smartwatchs };
    const smartwatchs = await getAllSmartWatch();
    copyState.allProduct = smartwatchs;
    dispatch({
      type: "INITIAL_SMARTWATCH",
      payload: copyState,
    });
  } else if (smartwatchs.colors.length === 0 && smartwatchs.brands.length > 0) {
    dispatch(sortSmartwatchByBrand(smartwatchs.brands));
  }
};

export const sortSmartwatchsByPriceRange =
  (value) => async (dispatch, getState) => {
    const copyState = { ...getState().smartwatchs };
    const smartwatchs = await getAllSmartWatch();
    copyState.priceRange = value;
    dispatch({ type: "SORT_BY_PRICE_RANGE_SMARTWATCH", payload: copyState });

    const result = smartwatchs.map((item) => {
      if (
        +item.price > copyState.priceRange[0] &&
        +item.price < copyState.priceRange[1]
      ) {
        return item;
      } else {
        return false;
      }
    });
    const filter = result.filter((f) => f !== false);
    copyState.allProduct = filter;
    return dispatch({
      type: "SORT_BY_PRICE_RANGE_SMARTWATCH",
      payload: copyState,
    });
  };

export const smartwatchsSortByWeight =
  (range) => async (dispatch, getState) => {
    const copyState = { ...getState().smartwatchs };
    copyState.weight = range;

    const smartwatchs = await getAllSmartWatch();

    const weight = smartwatchs.map((item) => {
      let val = item.weight.replace("گرم", "");
      val = replacePersianNumber(val);
      if (range[0] < val && range[1] > val) {
        return item;
      } else {
        return false;
      }
    });
    const filter = weight.filter((f) => f !== false);
    copyState.allProduct = filter;
    return dispatch({ type: "SORT_BY_WEIGHT_SMARTWATCH", payload: copyState });
  };

export const addOfferFieldSmartwatchAction =
  () => async (dispatch, getState) => {
    const smartwatchs = { ...getState().smartwatchs };
    const offers = [...getState().offers.allOffer];
    let { allProduct } = smartwatchs;

    let filter = offers.filter((item) => {
      return allProduct.some((item2) => {
        return item._id === item2._id;
      });
    });

    const updatedProduct = allProduct.map((product) => {
      filter.map((f) => {
        if (f._id === product._id) {
          product = f;
          return product;
        }
        return product;
      });
      return product;
    });
    smartwatchs.allProduct = updatedProduct;

    dispatch({ type: "ADD_OFFERS_FIELD_SMARTWATCH", payload: smartwatchs });
  };
