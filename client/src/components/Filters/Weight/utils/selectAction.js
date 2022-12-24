import { laptopsSortByWeight } from "actions/laptopsAction"
import { mobileSortByWeight } from "actions/mobilesActions"
import { smartwatchsSortByWeight } from "actions/smartwatchAction"
import { tabletSortByWeight } from "actions/tabletsAction"


export const selectAction = (path, selectedWeight) => {
    switch (path) {
        case '/mobiles': return mobileSortByWeight(selectedWeight)
        case '/laptops': return laptopsSortByWeight(selectedWeight)
        case '/tablets': return tabletSortByWeight(selectedWeight)
        case '/smartwatchs': return smartwatchsSortByWeight(selectedWeight)
        default: return null
    }
}