const init = {
  allProduct: [],
  brands: [],
  colors: [],
  cpuSeries: [],
  priceRange: [0, 200000000],
  screen: [12, 18],
  ramType: [],
  ram: [],
  weight: [0.5, 4.0]
};

export const laptopsReducer = (state = init, action) => {
  switch (action.type) {
    case "INITIAL_LAPTOPS":
      return action.payload;
    case "SORT_BY_SELL_LAPTOPS":
      return action.payload;
    case "SORT_BY_VIEW_LAPTOPS":
      return action.payload;
    case "SORT_BY_CHEAPSET_LAPTOPS":
      return action.payload;
    case "SORT_BY_EXPENSIVE_LAPTOPs":
      return action.payload;
    case "SORT_BY_BRANDS_LAPTOPS":
      return action.payload;
    case "SORT_BY_COLORS_LAPTOPS":
      return action.payload;
    case "SORT_BY_PRICE_RANGE_LAPTOPS":
      return action.payload;
    case "SORT_BY_CPU_SERIES_LAPTOPS":
      return action.payload;
    case "SORT_BY_WEIGHT_LAPTOPS":
      return action.payload;
    case "SORT_BY_SCREEN_LAPTOPS":
      return action.payload;
    case "SORT_BY_RAM_LAPTOPS":
      return action.payload;
    case "ADD_OFFERS_FIELD_LAPTOP":
      return action.payload;
    default:
      return state;
  }
};
