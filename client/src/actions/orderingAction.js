export const orderingAction = () => (dispatch) => {
  dispatch({ type: "SHOW_ORDERING", payload: true });
};

export const hideOrdering = () => (dispatch) => {
  dispatch({ type: "HIDE_ORDERING", payload: false });
};
