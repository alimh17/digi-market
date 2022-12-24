
export const categoryBrand = (path) => {
  switch (path) {
    case "/mobiles": return mobileBrnads
    case "/laptops": return laptopBrands
    case "/tablets": return tabletBrands
    case '/smartwatchs': return smartwatchBrands
    default: return null
  }
}

export const mobileBrnads = [
  "Samsung",
  "Xiaomi",
  "Apple",
  "Nokia",
  "Huawei",
  "GPlus",
  "Sony",
  "HTC",
];

export const laptopBrands = [
  "Asus",
  "Lenove",
  "Apple",
  "HP",
  "Huawei",
  "Dell",
  "Acer",
  "MSI",
  "Microsoft",
  "Razer",
  "Sony",
]

export const tabletBrands = [
  "Samsung",
  "Lenove",
  "Apple",
  "Huawei",
  "Microsoft",
  "Nokia",
  "GPlus",
  "Sony",
]

export const smartwatchBrands = [
  "Samsung",
  "Lenove",
  "Apple",
  "Huawei",
  "Xiaomi",
  "Amazfit",
  "Smart",
  "Kingwear",
  "Honor",
  "Fitbit",
  "Tenfifteen",
]









