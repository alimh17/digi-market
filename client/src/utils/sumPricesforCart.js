export const sumPricesForCart = (cart) => {
  let result = 0;

  cart.forEach((item) => {
    result += +item.price;
  });

  return result;
};
