const init = {
    allProduct: [],
    brands: [],
    colors: [],
    priceRange: [0, 50000000],
    weight: [0, 500],
};

export const smartwatchReducer = (state = init, action) => {
    switch (action.type) {
        case "INITIAL_SMARTWATCH":
            return action.payload;
        case "SORT_BY_SELL_SMARTWATCH":
            return action.payload;
        case "SORT_BY_VIEW_SMARTWATCH":
            return action.payload;
        case "SORT_BY_CHEAPEST_SMARTWATCH":
            return action.payload;
        case "SORT_BY_EXPENSIVE_SMARTWATCH":
            return action.payload;
        case "SORT_BY_BRANDS_SMARTWATCH":
            return action.payload;
        case "SORT_BY_COLORS_SMARTWATCH":
            return action.payload;
        case "SORT_BY_PRICE_RANGE_SMARTWATCH":
            return action.payload;
        case "SORT_BY_WEIGHT_SMARTWATCH":
            return action.payload;
        case "ADD_OFFERS_FIELD_SMARTWATCH":
            return action.payload;
        default:
            return state;
    }
};
