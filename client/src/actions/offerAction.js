import {
  delOfferProduct,
  getOfferProduct,
  sendOfferProduct,
} from "../server/OffersRequests";
import { addOfferFieldConsoleAction } from "./consolesAction";
import { addOfferFieldLaptopAction } from "./laptopsAction";
import { addOfferFieldAction } from "./mobilesActions";
import { addOfferFieldTabletAction } from "./tabletsAction";

export const initOfferProductAction = () => async (dispatch, getState) => {
  try {
    let copyState = { ...getState().offers };
    const res = await getOfferProduct();
    copyState.allOffer = res.data[0].offers;
    dispatch({ type: "INIT_OFFER_PRODUCT", payload: copyState });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "INIT_OFFER_PRODUCT",
      payload: { allOffer: [], off: [] },
    });
  }
};

export const offerProductAction =
  (product, offer, off) => async (dispatch, getState) => {
    if (Object.keys(product).length !== 0 && off !== "") {
      const offerProduct = [...getState().offers.allOffer];
      const cpProduct = { ...product, offer, off };
      const findIndex = offerProduct.findIndex(
        (f) => f.name === cpProduct.name
      );

      if (findIndex !== -1) {
        offerProduct[findIndex] = cpProduct;
      } else {
        offerProduct.push(cpProduct);
      }
      dispatch({
        type: "SET_OFFER_PRODUCT",
        payload: { allOffer: offerProduct },
      });

      try {
        await sendOfferProduct(offerProduct, cpProduct);
      } catch (err) {
        console.log(err);
      }
    }
  };

export const deleteOfferProductAction =
  (product) => async (dispatch, getState) => {
    const offerProduct = [...getState().offers.allOffer];
    if (offerProduct.length > 0) {
      const filter = offerProduct.filter((f) => f.name !== product.name);

      dispatch({
        type: "DELETE_OFFER_PRODUCT_OF_LIST",
        payload: { allOffer: filter, off: [] },
      });
      addOfferFieldAction();
      addOfferFieldLaptopAction();
      addOfferFieldTabletAction();
      addOfferFieldConsoleAction();
      try {
        await delOfferProduct(filter, product);
      } catch (err) {
        console.log(err);
      }
    }
  };

//! -------------------------------------------------------------------------------------------------

export const sortOffersBySell = () => (dispatch, getState) => {
  const copyState = {
    ...getState().offers,
  };

  let { allOffer } = copyState;

  const compare = (a, b) => {
    if (b.sell < a.sell) {
      return -1;
    }
    if (b.sell > a.sell) {
      return 1;
    }
    return 0;
  };
  const sorted = allOffer.sort(compare);
  allOffer = sorted;

  dispatch({ type: "SORT_OFFERS_BY_SELL", payload: copyState });
};
export const sortOffersByViwe = () => (dispatch, getState) => {
  const copyState = { ...getState().offers };
  let { allOffer } = copyState;

  const compare = (a, b) => {
    if (b.view < a.view) {
      return -1;
    }
    if (b.view > a.view) {
      return 1;
    }
    return 0;
  };

  const sorted = allOffer.sort(compare);
  allOffer = sorted;

  dispatch({ type: "SORT_OFFERS_BY_VIEW", payload: copyState });
};

export const offersSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().offers };
  let { allOffer } = copyState;

  const compare = (a, b) => {
    if (Number(a.price) < Number(b.price)) {
      return -1;
    }
    if (Number(a.price) > Number(b.price)) {
      return 1;
    }
    return 0;
  };

  const sorted = allOffer.sort(compare);
  allOffer = sorted;
  dispatch({ type: "SORT_OFFERS_BY_CHEAPEST", payload: copyState });
};

export const offersSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().offers };
  let { allOffer } = copyState;

  const compare = (a, b) => {
    if (Number(b.price) < Number(a.price)) {
      return -1;
    }
    if (Number(b.price) > Number(a.price)) {
      return 1;
    }
    return 0;
  };
  const sorted = allOffer.sort(compare);
  allOffer = sorted;

  dispatch({ type: "SORT_OFFERS_BY_EXPENSIVE", payload: copyState });
};

export const offersSortByOffers = (offer) => (dispatch, getState) => {
  let cpState = { ...getState().offers };
  let { allOffer, off } = cpState;

  if (offer[0] === "بیشترین تخفیف") {
    const compare = (a, b) => {
      if (Number(b.off) < Number(a.off)) {
        return -1;
      }
      if (Number(b.off) > Number(a.off)) {
        return 1;
      }
      return 0;
    };
    const sorted = allOffer.sort(compare);
    off = offer;
    allOffer = sorted;

    cpState = { allOffer, off };
    dispatch({ type: "SORT_OFFERS_BY_HIGHT_OFF", payload: cpState });
  } else {
    const compare = (a, b) => {
      if (Number(b.off) > Number(a.off)) {
        return -1;
      }
      if (Number(b.off) < Number(a.off)) {
        return 1;
      }
      return 0;
    };
    const sorted = allOffer.sort(compare);
    off = offer;
    allOffer = sorted;

    cpState = { allOffer, off };
    dispatch({ type: "SORT_OFFERS_BY_LESS_OFF", payload: cpState });
  }
};
