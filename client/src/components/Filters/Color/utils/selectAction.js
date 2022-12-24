import { sortLaptopsByColor } from "actions/laptopsAction"
import { sortMobilesByColor } from "actions/mobilesActions"
import { sortSmartwatchsByColor } from "actions/smartwatchAction"
import { sortTabletsByColor } from "actions/tabletsAction"

export const selectAction = (path, selectedColors) => {
    switch (path) {
        case "/mobiles": return sortMobilesByColor(selectedColors)
        case "/laptops": return sortLaptopsByColor(selectedColors)
        case "/tablets": return sortTabletsByColor(selectedColors)
        case "/smartwatchs": return sortSmartwatchsByColor(selectedColors)
        default: return null
    }
}