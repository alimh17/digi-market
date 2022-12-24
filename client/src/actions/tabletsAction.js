import _ from "lodash";
import { getAllTablets } from "../server/TabletsRequests";
import { brandConvertToPersian } from "utils/brnadConverToPersian";
import { replacePersianNumber } from "utils/replacePrice";
import { switchColor } from "utils/switchColor";

export const tabletInit = () => async (dispatch, getState) => {
  const copyState = { ...getState().tablets };
  const tablets = await getAllTablets();
  copyState.allProduct = tablets[0];
  dispatch({
    type: "INITIAL_TABLETS",
    payload: copyState,
  });
};

export const tabletSortBySell = () => (dispatch, getState) => {
  const copyState = { ...getState().tablets };
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

  dispatch({ type: "SORT_BY_SELL_TABLETS", payload: copyState });
};

export const tabletSortByView = () => (dispatch, getState) => {
  const copyState = { ...getState().tablets };
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

  dispatch({ type: "SORT_BY_VIEW_TABLETS", payload: copyState });
};

export const tabletSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().tablets };
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
  dispatch({ type: "SORT_BY_SELL_TABLETS", payload: copyState });
};

export const tabletSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().tablets };
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

  dispatch({ type: "SORT_BY_SELL_TABLETS", payload: copyState });
};

//! --------------------------------------------------------------------------

export const sortTabletsByBrand = (brand) => async (dispatch, getState) => {
  let tablets = { ...getState().tablets };
  tablets.brands = brand;

  const convert = tablets.brands.map((b) => brandConvertToPersian(b));

  const allTablets = await getAllTablets();

  let filtered = allTablets[0].map((m, i) => {
    return convert.includes(m.brand) && m;
  });
  filtered = filtered.filter((f) => f !== false);
  const copyFiltered = [...filtered];
  tablets.allProduct = copyFiltered;

  dispatch({ type: "SORT_BY_BRANDS_TABLETS", payload: tablets });

  if (tablets.brands.length === 0 && tablets.colors.length === 0) {
    const copyState = { ...getState().tablets };
    const tablets = await getAllTablets();
    copyState.allProduct = tablets[0];
    dispatch({
      type: "INITIAL_TABLETS",
      payload: copyState,
    });
  } else if (tablets.brands.length === 0 && tablets.colors.length > 0) {
    dispatch(sortTabletsByColor(tablets.colors));
  }
};

export const sortTabletsByColor = (color) => async (dispatch, getState) => {
  let tablets = { ...getState().tablets };
  const { allProduct } = tablets;
  const CopyColors = color;
  tablets.colors = CopyColors;
  const convert = tablets.colors.map((b) => switchColor(b));

  const allTablets = await getAllTablets();

  if (_.isEmpty(tablets.brands)) {
    let filtered = allTablets[0].map((m, i) => {
      const result = m.color.map((c) => {
        return convert.includes(c) && m;
      });
      return result.filter((f) => f !== false);
    });
    filtered = _.flattenDeep(filtered);
    filtered = _.uniq(filtered);
    const copyFiltered = [...filtered];
    tablets.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_TABLETS", payload: tablets });
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
    tablets.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_TABLETS", payload: tablets });
  }

  if (tablets.brands.length === 0 && tablets.colors.length === 0) {
    const copyState = { ...getState().tablets };
    const tablets = await getAllTablets();
    copyState.allProduct = tablets[0];
    dispatch({
      type: "INITIAL_TABLETS",
      payload: copyState,
    });
  } else if (tablets.colors.length === 0 && tablets.brands.length > 0) {
    dispatch(sortTabletsByBrand(tablets.brands));
  }
};

export const sortTabletsByPriceRange =
  (value) => async (dispatch, getState) => {
    const copyState = { ...getState().tablets };
    const tablets = await getAllTablets();
    copyState.priceRange = value;
    dispatch({ type: "SORT_BY_PRICE_RANGE_TABLETS", payload: copyState });

    const result = tablets[0].map((item) => {
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
      type: "SORT_BY_PRICE_RANGE_TABLETS",
      payload: copyState,
    });
  };

export const tabletSortByNetwork = (network) => async (dispatch, getState) => {
  const copyState = { ...getState().tablets };
  copyState.network = network;
  dispatch({ type: "SORT_BY_NETWORK_TABLETS", payload: copyState });

  const tablets = await getAllTablets();

  if (copyState.network.length === 0) {
    copyState.allProduct = tablets[0];
    dispatch({ type: "SORT_BY_NETWORK_TABLETS", payload: copyState });
  } else {
    let foundNetworkInclude = tablets[0].map((item) => {
      let arr = item.network.split(",");
      arr = _.map(arr, _.trim);
      if (_.intersection(arr, copyState.network).length !== 0) {
        return item;
      } else {
        return false;
      }
    });
    const filter = foundNetworkInclude.filter((f) => f !== false);
    copyState.allProduct = filter;
    dispatch({ type: "SORT_BY_NETWORK_TABLETS", payload: copyState });
  }
};

export const tabletSortByWeight = (range) => async (dispatch, getState) => {
  const copyState = { ...getState().tablets };
  copyState.weight = range;

  const tablets = await getAllTablets();

  const weight = tablets[0].map((item) => {
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
  return dispatch({ type: "SORT_BY_WEIGHT_TABLETS", payload: copyState });
};

export const tabletsSortByRam = (ram) => async (dispatch, getState) => {
  const copyState = { ...getState().tablets };
  copyState.ram = ram;
  dispatch({ type: "SORT_BY_RAM_TABLETS", payload: copyState });

  const tablets = await getAllTablets();

  if (copyState.ram.length === 0) {
    copyState.allProduct = tablets[0];
    dispatch({ type: "SORT_BY_RAM_TABLETS", payload: copyState });
  } else {
    let foundRamInclude = tablets[0].map((item) => {
      let arr = item.ram.split(",");
      arr = _.map(arr, _.trim);
      if (_.intersection(arr, copyState.ram).length !== 0) {
        return item;
      } else {
        return false;
      }
    });
    const filter = foundRamInclude.filter((f) => f !== false);
    copyState.allProduct = filter;
    dispatch({ type: "SORT_BY_RAM_TABLETS", payload: copyState });
  }
};

export const addOfferFieldTabletAction = () => async (dispatch, getState) => {
  const tablets = { ...getState().tablets };
  const offers = [...getState().offers.allOffer];
  let { allProduct } = tablets;

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
  tablets.allProduct = updatedProduct;

  dispatch({ type: "ADD_OFFERS_FIELD_TABLET", payload: tablets });
};
