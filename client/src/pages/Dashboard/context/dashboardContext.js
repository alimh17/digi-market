import { createContext } from "react";



const DashboardContext = createContext({
    loading: false,
    setLoading: () => { }
})



export default DashboardContext