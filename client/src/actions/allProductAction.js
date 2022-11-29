import produce from "immer";
import { getAllConsole } from "../server/ConsoleRequests";
import { getAllLaptops } from "../server/LaptopRequests";
import { getAllMobiles } from "../server/MobileRequests";
import { getAllTablets } from "../server/TabletsRequests";
import { getAllSmartWatchs } from "../server/SmartWatchRequests";

export const allProductInit = () => async (dispatch, getState) => {
  let allProducts = [...getState().allProducts];

  const mobiles = await getAllMobiles();
  const laptops = await getAllLaptops();
  const tablets = await getAllTablets();
  const consoles = await getAllConsole();
  const smartwatchs = await getAllSmartWatchs();

  const nextState = produce(allProducts, (draft) => {
    draft.push(mobiles, laptops, tablets, consoles, smartwatchs);
    draft.flat(draft);
  });

  dispatch({ type: "INIT_ALL_PRODUCTS", payload: nextState });
};
