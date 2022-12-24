import { mobileSortByNetwork } from "actions/mobilesActions"
import { tabletSortByNetwork } from "actions/tabletsAction"


export const selectAction = (path, selectNetwork) => {
    switch (path) {
        case "/mobiles": return mobileSortByNetwork(selectNetwork)
        case "/tablets": return tabletSortByNetwork(selectNetwork)
        default: return null
    }
}