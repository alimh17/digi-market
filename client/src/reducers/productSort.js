export const productSort = (state = {}, action) => {
  switch (action.type) {
    case "SORT_MOBILE_BRAND":
      return action.payload;
    default:
      return state;
  }
};
