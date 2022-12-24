import { sortLaptopsByBrand } from "actions/laptopsAction"
import { sortMobilesByBrand } from "actions/mobilesActions"
import { sortTabletsByBrand } from "actions/tabletsAction"
import { sortSmartwatchByBrand } from 'actions/smartwatchAction'

export const selectAction = (path, selectedBrands) => {
    switch (path) {
        case '/mobiles': return sortMobilesByBrand(selectedBrands)
        case '/laptops': return sortLaptopsByBrand(selectedBrands)
        case '/tablets': return sortTabletsByBrand(selectedBrands)
        case '/smartwatchs': return sortSmartwatchByBrand(selectedBrands)
        default: return null
    }
}