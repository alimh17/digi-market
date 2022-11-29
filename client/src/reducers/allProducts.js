export const allProductReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
