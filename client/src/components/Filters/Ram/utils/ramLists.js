export const mobileRam = ["8", "16", "32", "64", "128", "256", "500"]
export const laptopRam = ["4", "8", "16", "32", "64"]
export const tabletRam = ["4", "8", "16", "32"]

export const mobileRamByTitle = [
    "8 گیگابایت",
    "16 گیگابایت",
    "32 گیگابایت",
    "64 گیگابایت",
    "128 گیگابایت",
    "256 گیگابایت",
    "500 گیگابایت",
]

export const laptopRamByTitle = [
    "4 گیگابایت",
    "8 گیگابایت",
    "16 گیگابایت",
    "32 گیگابایت",
    "64 گیگابایت",
]

export const tabletRamByTitle = ["4 گیگابایت", "8 گیگابایت", "16 گیگابایت", "32 گیگابایت"]


export const selectRamList = (path) => {
    switch (path) {
        case '/mobiles': return mobileRam
        case '/laptops': return laptopRam
        case '/tablets': return tabletRam
        default: return null
    }
}

export const selectRamListByTitle = (path) => {
    switch (path) {
        case '/mobiles': return mobileRamByTitle
        case '/laptops': return laptopRamByTitle
        case '/tablets': return tabletRamByTitle
        default: return null
    }
}
