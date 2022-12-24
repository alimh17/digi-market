export const selectCategory = (path) => {
    switch (path) {
        case "/mobiles": return 'mobiles'
        case '/laptops': return 'laptops'
        case '/tablets': return 'tablets'
        case '/consoles': return 'consoles'
        case '/smartwatchs': return 'smartwatchs'
        default: return null
    }
}