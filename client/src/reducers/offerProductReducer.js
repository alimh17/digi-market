const initOffers = {
    allOffer: [],
    off: []
}

export const offerProductsReducer = (state = initOffers, action) => {
    switch (action.type) {
        case "SORT_OFFERS_BY_EXPENSIVE ": return action.payload
        case "SORT_OFFERS_BY_CHEAPEST ": return action.payload
        case "SORT_OFFERS_BY_VIEW": return action.payload
        case "SORT_OFFERS_BY_SELL": return action.payload
        case "SORT_OFFERS_BY_HIGHT_OFF ": return action.payload
        case "SORT_OFFERS_BY_LESS_OFF ": return action.payload
        case "INIT_OFFER_PRODUCT": return action.payload
        case "SET_OFFER_PRODUCT": return action.payload
        case "DELETE_OFFER_PRODUCT_OF_LIST": return action.payload
        default: return state
    }
}