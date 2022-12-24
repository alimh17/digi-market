import _ from "lodash";
import { getAllMobiles } from "../server/MobileRequests";
import { brandConvertToPersian } from "../utils/brnadConverToPersian";
import { replacePersianNumber } from "../utils/replacePrice";
import { switchColor } from "../utils/switchColor";

export const mobileInit = () => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const mobiles = await getAllMobiles()
  copyState.allProduct = mobiles[0];
  dispatch({
    type: "INITIAL_MOBILE",
    payload: copyState,
  });
};

export const mobileSortBySell = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
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

  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

export const mobileSortByView = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
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

  dispatch({ type: "SORT_BY_VIEW", payload: copyState });
};

export const mobileSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
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
  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};


export const mobileSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
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

  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

// --------------------------------------------------------------------------

export const sortMobilesByBrand = (brand) => async (dispatch, getState) => {
  let mobiles = { ...getState().mobiles };
  mobiles.brands = brand

  const convert = mobiles.brands.map(b => brandConvertToPersian(b))

  const allMobiles = await getAllMobiles()

  let filtered = allMobiles[0].map((m, i) => {
    return convert.includes(m.brand) && m
  })
  filtered = filtered.filter(f => f !== false)
  const copyFiltered = [...filtered]
  mobiles.allProduct = copyFiltered


  dispatch({ type: "SORT_BY_BRANDS", payload: mobiles });


  if (mobiles.brands.length === 0 && mobiles.colors.length === 0) {
    const copyState = { ...getState().mobiles };
    const mobiles = await getAllMobiles()
    copyState.allProduct = mobiles[0];
    dispatch({
      type: "INITIAL_MOBILE",
      payload: copyState,
    });
  } else if (mobiles.brands.length === 0 && mobiles.colors.length > 0) {
    dispatch(sortMobilesByColor(mobiles.colors))
  }

};

export const sortMobilesByColor = (color) => async (dispatch, getState) => {
  let mobiles = { ...getState().mobiles };
  const { allProduct } = mobiles;
  const CopyColors = color;
  mobiles.colors = CopyColors;
  const convert = mobiles.colors.map(b => switchColor(b))

  const allMobiles = await getAllMobiles()

  if (_.isEmpty(mobiles.brands)) {
    let filtered = allMobiles[0].map((m, i) => {
      const result = m.color.map(c => {
        return convert.includes(c) && m
      })
      return result.filter(f => f !== false)
    })
    filtered = _.flattenDeep(filtered)
    filtered = _.uniq(filtered)
    const copyFiltered = [...filtered]
    mobiles.allProduct = copyFiltered

    dispatch({ type: "SORT_BY_COLORS", payload: mobiles });

  } else {
    let filtered = allProduct.map((m, i) => {
      const result = m.color.map(c => {
        return convert.includes(c) && m
      })
      return result.filter(f => f !== false)
    })
    filtered = _.flattenDeep(filtered)
    filtered = _.uniq(filtered)
    const copyFiltered = [...filtered]
    mobiles.allProduct = copyFiltered

    dispatch({ type: "SORT_BY_COLORS", payload: mobiles });
  }

  if (mobiles.brands.length === 0 && mobiles.colors.length === 0) {
    const copyState = { ...getState().mobiles };
    const mobiles = await getAllMobiles()
    copyState.allProduct = mobiles[0];
    dispatch({
      type: "INITIAL_MOBILE",
      payload: copyState,
    });
  } else if (mobiles.colors.length === 0 && mobiles.brands.length > 0) {
    dispatch(sortMobilesByBrand(mobiles.brands))
  }

};


export const sortMobilesByPriceRange = (value) => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const mobiles = await getAllMobiles()
  copyState.priceRange = value
  dispatch({ type: "SORT_BY_PRICE_RANGE", payload: copyState })

  const result = mobiles[0].map(item => {
    if (+item.price > copyState.priceRange[0] && +item.price < copyState.priceRange[1]) {
      return item
    } else {
      return false
    }
  })
  const filter = result.filter(f => f !== false)
  copyState.allProduct = filter
  return dispatch({ type: "SORT_BY_PRICE_RANGE", payload: copyState })

}


export const mobileSortByNetwork = (network) => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  copyState.network = network
  dispatch({ type: "SORT_BY_NETWORK", payload: copyState })

  const mobiles = await getAllMobiles()

  if (copyState.network.length === 0) {
    copyState.allProduct = mobiles[0]
    dispatch({ type: "SORT_BY_NETWORK", payload: copyState })
  } else {
    let foundNetworkInclude = mobiles[0].map(item => {
      let arr = item.network.split(",")
      arr = _.map(arr, _.trim)
      if (_.intersection(arr, copyState.network).length !== 0) {
        return item
      } else {
        return false
      }
    })
    const filter = foundNetworkInclude.filter(f => f !== false)
    copyState.allProduct = filter
    dispatch({ type: "SORT_BY_NETWORK", payload: copyState })
  }

}


export const mobileSortByWeight = (range) => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  copyState.weight = range

  const mobiles = await getAllMobiles()

  const weight = mobiles[0].map(item => {
    let val = item.weight.replace("گرم", "")
    val = replacePersianNumber(val)
    if (range[0] < val && range[1] > val) {
      return item
    } else {
      return false
    }
  })
  const filter = weight.filter(f => f !== false)
  copyState.allProduct = filter
  return dispatch({ type: "SORT_BY_WEIGHT", payload: copyState })
}



export const mobileSortByRam = (ram) => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  copyState.ram = ram
  dispatch({ type: "SORT_BY_RAM", payload: copyState })

  const mobiles = await getAllMobiles()

  if (copyState.ram.length === 0) {
    copyState.allProduct = mobiles[0]
    dispatch({ type: "SORT_BY_RAM", payload: copyState })
  } else {
    let foundRamInclude = mobiles[0].map(item => {
      let arr = item.ram.split(",")
      arr = _.map(arr, _.trim)
      if (_.intersection(arr, copyState.ram).length !== 0) {
        return item
      } else {
        return false
      }
    })
    const filter = foundRamInclude.filter(f => f !== false)
    copyState.allProduct = filter
    dispatch({ type: "SORT_BY_RAM", payload: copyState })
  }

}


export const addOfferFieldAction = () => async (dispatch, getState) => {
  const mobiles = { ...getState().mobiles }
  const offers = [...getState().offers.allOffer]
  let { allProduct } = mobiles

  let filter = offers.filter(item => {
    return allProduct.some(item2 => {
      return item._id === item2._id;
    });
  })

  const updatedProduct = allProduct.map(product => {
    filter.map(f => {
      if (f._id === product._id) {
        product = f
        return product
      }
      return product
    })
    return product
  })
  mobiles.allProduct = updatedProduct

  await dispatch({ type: "ADD_OFFERS_FIELD", payload: mobiles })

}