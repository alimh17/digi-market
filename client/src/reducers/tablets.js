const init = {
  allProduct: [],
  brands: [],
  colors: [],
  priceRange: [0, 200000000],
  weight: [100, 1000],
  network: [],
  ram: [],
};

export const tabletsReducer = (state = init, action) => {
  switch (action.type) {
    case "INITIAL_TABLETS":
      return action.payload;
    case "SORT_BY_SELL_TABLETS":
      return action.payload;
    case "SORT_BY_VIEW_TABLETS":
      return action.payload;
    case "SORT_BY_CHEAPEST_TABLETS":
      return action.payload;
    case "SORT_BY_BRANDS_TABLETS":
      return action.payload;
    case "SORT_BY_COLORS_TABLETS":
      return action.payload;
    case "SORT_BY_PRICE_RANGE_TABLETS":
      return action.payload;
    case "SORT_BY_NETWORK_TABLETS":
      return action.payload;
    case "SORT_BY_WEIGHT_TABLETS":
      return action.payload;
    case "SORT_BY_RAM_TABLETS":
      return action.payload;
    case "ADD_OFFERS_FIELD_TABLET":
      return action.payload;
    default:
      return state;
  }
};
