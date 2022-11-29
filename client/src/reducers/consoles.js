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

export const consoleReducer = (state = init, action) => {
    switch (action.type) {
        case "INITIAL_CONSOLE":
            return action.payload;
        case "SORT_BY_SELL_CONSOLE":
            return action.payload;
        case "SORT_BY_VIEW_CONSOLE":
            return action.payload;
        case "SORT_BY_CHEAPSET_CONSOLE":
            return action.payload;
        case "SORT_BY_EXPENSIVE_CONSOLE":
            return action.payload;
        case "SORT_BY_BRANDS_CONSOLE":
            return action.payload;
        case "SORT_BY_COLORS_CONSOLE":
            return action.payload;
        case "SORT_BY_PRICE_RANGE_CONSOLE":
            return action.payload;
        case "SORT_BY_WEIGHT_CONSOLE":
            return action.payload;
        case "SORT_BY_RAM_CONSOLE":
            return action.payload;
        case "ADD_OFFERS_FIELD_CONSOLE":
            return action.payload;
        default:
            return state;
    }
};
