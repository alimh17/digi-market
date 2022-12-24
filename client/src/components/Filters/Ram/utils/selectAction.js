import { laptopSortByRam } from "actions/laptopsAction"
import { mobileSortByRam } from "actions/mobilesActions"
import { tabletsSortByRam } from "actions/tabletsAction"


export const selectAction = (path, selectedColors) => {
    switch (path) {
        case "/mobiles": return mobileSortByRam(selectedColors)
        case "/laptops": return laptopSortByRam(selectedColors)
        case "/tablets": return tabletsSortByRam(selectedColors)
        default: return null
    }
}