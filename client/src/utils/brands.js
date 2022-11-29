export const selectBrandsImages = (brand) => {
    switch (brand) {
        case "Samsung": return process.env.PUBLIC_URL + "images/brands/Samsung.jpg"
        case "Apple": return process.env.PUBLIC_URL + "images/brands/Apple.png"
        case "Xiaomi": return process.env.PUBLIC_URL + "images/brands/Xiaomi.png"
        case "Asus": return process.env.PUBLIC_URL + "images/brands/Asus.jpg"
        case "Lenove": return process.env.PUBLIC_URL + "images/brands/Lenovo.png"
        case "Huawei": return process.env.PUBLIC_URL + "images/brands/Huawei.png"
        case "Microsoft": return process.env.PUBLIC_URL + "images/brands/Microsoft.jpg"
        case "MSI": return process.env.PUBLIC_URL + "images/brands/MSI.png"
        case "HP": return process.env.PUBLIC_URL + "images/brands/HP.jpg"
        default: return undefined
    }
}