export const SwitchProduct = (product) => {

    if (product[0]) {
        return "موبایل"
    } else if (product[1]) {
        return "لپ تاپ"
    } else if (product[2]) {
        return "تبلت"
    } else if (product[3]) {
        return "کنسول"
    } else if (product[4]) {
        return "ساعت هوشمند"
    } else if (product[5]) {
        return "لوازم جانبی"
    }

}