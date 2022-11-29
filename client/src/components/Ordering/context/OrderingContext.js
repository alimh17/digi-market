import { createContext } from "react";

export const OrderingContext = createContext({
    grouping: "",
    setGrouping: () => { },
});
