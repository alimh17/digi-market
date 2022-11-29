import { createContext } from "react";


export const PorductManagmentContext = createContext({
    product: [],
    handleChangeProductState: () => { },
})