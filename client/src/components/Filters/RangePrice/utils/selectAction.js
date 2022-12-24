import { sortConsoleByPriceRange } from "actions/consolesAction"
import { sortLaptopsByPriceRange } from "actions/laptopsAction"
import { sortMobilesByPriceRange } from "actions/mobilesActions"
import { sortSmartwatchsByPriceRange } from "actions/smartwatchAction"
import { sortTabletsByPriceRange } from "actions/tabletsAction"


export const selectAction = (path, selectedPriceRange) => {
    switch (path) {
        case '/mobiles': return sortMobilesByPriceRange(selectedPriceRange)
        case '/laptops': return sortLaptopsByPriceRange(selectedPriceRange)
        case '/tablets': return sortTabletsByPriceRange(selectedPriceRange)
        case '/consoles': return sortConsoleByPriceRange(selectedPriceRange)
        case '/smartwatchs': return sortSmartwatchsByPriceRange(selectedPriceRange)
        default: return null
    }
}