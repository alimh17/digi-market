import _ from "lodash";
import { getAllLaptops } from "../server/LaptopRequests";
import { laptopBrandConvertToPersian } from "../utils/brnadConverToPersian";
import { replacePersianNumber } from "../utils/replacePrice";
import { switchColor } from "../utils/switchColor";

export const laptopsInit = () => async (dispatch, getState) => {
  const copyState = { ...getState().laptops };
  const laptops = await getAllLaptops();
  copyState.allProduct = laptops[0];
  dispatch({
    type: "INITIAL_LAPTOPS",
    payload: copyState,
  });
};

export const laptopSortBySell = () => (dispatch, getState) => {
  const copyState = { ...getState().laptops };
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

  dispatch({ type: "SORT_BY_SELL_LAPTOPS", payload: copyState });
};

export const laptopSortByView = () => (dispatch, getState) => {
  const copyState = { ...getState().laptops };
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

  dispatch({ type: "SORT_BY_VIEW_LAPTOPS", payload: copyState });
};

export const laptopSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().laptops };
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
  dispatch({ type: "SORT_BY_CHEAPSET_LAPTOPS", payload: copyState });
};

export const laptopSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().laptops };
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

  dispatch({ type: "SORT_BY_EXPENSIVE_LAPTOPS", payload: copyState });
};

// ----------------------------------------------------------------------

export const sortLaptopsByBrand = (brand) => async (dispatch, getState) => {
  let laptops = { ...getState().laptops };
  laptops.brands = brand;

  const convert = laptops.brands.map((b) => laptopBrandConvertToPersian(b));

  const allLaptops = await getAllLaptops();

  let filtered = allLaptops[0].map((m, i) => {
    return convert.includes(m.brand) && m;
  });
  filtered = filtered.filter((f) => f !== false);
  const copyFiltered = [...filtered];
  laptops.allProduct = copyFiltered;

  dispatch({ type: "SORT_BY_BRANDS_LAPTOPS", payload: laptops });

  if (laptops.brands.length === 0 && laptops.colors.length === 0) {
    const copyState = { ...getState().laptops };
    const laptops = await getAllLaptops();
    copyState.allProduct = laptops[0];
    dispatch({
      type: "INITIAL_LAPTOPS",
      payload: copyState,
    });
  } else if (laptops.brands.length === 0 && laptops.colors.length > 0) {
    dispatch(sortLaptopsByColor(laptops.colors));
  }
};

export const sortLaptopsByColor = (color) => async (dispatch, getState) => {
  let laptops = { ...getState().laptops };
  const { allProduct } = laptops;
  const CopyColors = color;
  laptops.colors = CopyColors;
  const convert = laptops.colors.map((b) => switchColor(b));

  const allLaptops = await getAllLaptops();

  if (_.isEmpty(laptops.colors)) {
    let filtered = allLaptops[0].map((m, i) => {
      const result = m.color.map((c) => {
        return convert.includes(c) && m;
      });
      return result.filter((f) => f !== false);
    });
    filtered = _.flattenDeep(filtered);
    filtered = _.uniq(filtered);
    const copyFiltered = [...filtered];
    laptops.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_LAPTOPS", payload: laptops });
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
    laptops.allProduct = copyFiltered;

    dispatch({ type: "SORT_BY_COLORS_LAPTOPS", payload: laptops });
  }

  if (laptops.brands.length === 0 && laptops.colors.length === 0) {
    const copyState = { ...getState().laptops };
    const laptops = await getAllLaptops();
    copyState.allProduct = laptops[0];
    dispatch({
      type: "INITIAL_LAPTOPS",
      payload: copyState,
    });
  } else if (laptops.colors.length === 0 && laptops.brands.length > 0) {
    dispatch(sortLaptopsByBrand(laptops.brands));
  }
};

export const sortLaptopsByPriceRange =
  (value) => async (dispatch, getState) => {
    const copyState = { ...getState().laptops };
    const laptops = await getAllLaptops();
    copyState.priceRange = value;
    dispatch({ type: "SORT_BY_PRICE_RANGE_LAPTOPS", payload: copyState });

    const result = laptops[0].map((item) => {
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
      type: "SORT_BY_PRICE_RANGE_LAPTOPS",
      payload: copyState,
    });
  };

export const laptopsSortByWeight = (range) => async (dispatch, getState) => {
  const copyState = { ...getState().laptops };
  copyState.weight = range;
  const laptops = await getAllLaptops();

  const weight = laptops[0].map((item) => {
    let val = item.weight.replace("گرم", "");
    val = replacePersianNumber(val);
    val = val.replace("کیلو", "");
    if (range[0] < +val && range[1] > +val) {
      return item;
    } else {
      return false;
    }
  });
  const filter = weight.filter((f) => f !== false);
  copyState.allProduct = filter;
  return dispatch({ type: "SORT_BY_WEIGHT_LAPTOPS", payload: copyState });
};

export const sortLaptopsByCpuSeries = (cpu) => async (dispatch, getState) => {
  let laptops = { ...getState().laptops };
  const { allProduct } = laptops;
  const copyCpuSeries = cpu;
  laptops.cpuSeries = copyCpuSeries;

  const allLaptops = await getAllLaptops();

  if (_.isEmpty(laptops.cpuSeries)) {
    laptops.allProduct = allLaptops[0];
    dispatch({ type: "SORT_BY_CPU_SERIES_LAPTOPS", payload: laptops });
  } else {
    let filtered = allProduct.map((item) => {
      return copyCpuSeries.includes(item.cpu_series) ? item : false;
    });
    filtered = filtered.filter((f) => f !== false);
    laptops.allProduct = filtered;
    dispatch({ type: "SORT_BY_CPU_SERIES_LAPTOPS", payload: laptops });
  }

  if (laptops.brands.length === 0 && laptops.colors.length === 0) {
    dispatch({
      type: "INITIAL_LAPTOPS",
      payload: laptops,
    });
  }
};

export const laptopsSortByScreen = (range) => async (dispatch, getState) => {
  const copyState = { ...getState().laptops };
  copyState.screen = range;
  const laptops = await getAllLaptops();

  const weight = laptops[0].map((item) => {
    let val = item.screen.replace("گرم", "");
    val = replacePersianNumber(val);
    val = val.replace("اینچ", "");
    if (range[0] < +val && range[1] > +val) {
      return item;
    } else {
      return false;
    }
  });
  const filter = weight.filter((f) => f !== false);
  copyState.allProduct = filter;
  return dispatch({ type: "SORT_BY_SCREEN_LAPTOPS", payload: copyState });
};

export const sortLaptopsByRam = (ram) => async (dispatch, getState) => {
  let laptops = { ...getState().laptops };
  const { allProduct } = laptops;
  const copyRam = ram;
  laptops.ramType = copyRam;

  const allLaptops = await getAllLaptops();

  if (_.isEmpty(laptops.ramType)) {
    laptops.allProduct = allLaptops[0];
    dispatch({ type: "SORT_BY_RAM_LAPTOPS", payload: laptops });
  } else {
    let filtered = allProduct.map((item) => {
      return copyRam.includes(item.ram_type) ? item : false;
    });
    filtered = filtered.filter((f) => f !== false);
    laptops.allProduct = filtered;
    dispatch({ type: "SORT_BY_RAM_LAPTOPS", payload: laptops });
  }

  if (laptops.brands.length === 0 && laptops.colors.length === 0) {
    dispatch({
      type: "INITIAL_LAPTOPS",
      payload: laptops,
    });
  }
};

export const laptopSortByRam = (ram) => async (dispatch, getState) => {
  const copyState = { ...getState().laptops };
  copyState.ram = ram;
  dispatch({ type: "SORT_BY_RAM_LAPTOPS", payload: copyState });

  const laptops = await getAllLaptops();

  if (copyState.ram.length === 0) {
    copyState.allProduct = laptops[0];
    dispatch({ type: "SORT_BY_RAM_LAPTOPS", payload: copyState });
  } else {
    let foundRamInclude = laptops[0].map((item) => {
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
    dispatch({ type: "SORT_BY_RAM_LAPTOPS", payload: copyState });
  }
};

export const addOfferFieldLaptopAction = () => async (dispatch, getState) => {
  const laptops = { ...getState().laptops };
  const offers = [...getState().offers.allOffer];
  let { allProduct } = laptops;

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
  laptops.allProduct = updatedProduct;

  dispatch({ type: "ADD_OFFERS_FIELD_LAPTOP", payload: laptops });
};
