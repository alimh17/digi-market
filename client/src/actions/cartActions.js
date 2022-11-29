export const addProductToCartAction = (item) => (dispatch, getState) => {
  const cart = getState().cart;
  const copyCart = [...cart];
  copyCart.push(item);

  dispatch({ type: "ADD_PRODUCT_TO_CART", payload: copyCart });
};

export const removeProductFromCartAction = (item) => (dispatch, getState) => {
  console.log(item)
  const cart = getState().cart;

  const filtred = cart.filter((c) => c._id !== item._id);

  dispatch({ type: "REMOVE_PRODUCT_TO_CART", payload: filtred });
};
