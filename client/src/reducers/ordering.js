export const orderingReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ORDERING":
      return action.payload;
    case "HIDE_ORDERING":
      return action.payload;
    default:
      return state;
  }
};
