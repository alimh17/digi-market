export const brandConvertToPersian = (brand) => {
  switch (brand) {
    case "Samsung":
      return "سامسونگ";
    case "Xiaomi":
      return "شیائومی";
    case "Apple":
      return "اپل";
    case "Nokia":
      return "نوکیا";
    case "Huawei":
      return "هوآوی";
    case "GPlus":
      return "جی پلاس";
    case "Sony":
      return "سونی";
    case "HTC":
      return "اچ تی سی";
    default:
      return "";
  }
};
export const brandConvert = (brand) => {
  switch (brand) {
    case "سامسونگ":
      return "Samsung";
    case "شیائومی":
      return "Xiaomi";
    case "اپل":
      return "Apple";
    case "نوکیا":
      return "Nokia";
    case "هوآوی":
      return "Huawei";
    case "جی پلاس":
      return "GPlus";
    case "سونی":
      return "Sony";
    case "اچ تی سی":
      return "HTC";
    default:
      return "";
  }
};


export const brands = [
  "سامسونگ",
  "شیائومی",
  "اپل",
  "نوکیا",
  "هوآوی",
  "پلاس",
  "سونی",
  "اچ تی سی"
]


export const laptopBrands = [
  "ایسوس",
  "لنوو",
  "اپل",
  "اچ پی",
  "هوآوی",
  "دل",
  "ایسر",
  "ام اس آی",
  "مایکروسافت",
  "ریزر",
  "سونی"
]

export const laptopBrandsEn = [
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

export const laptopBrandConvertToPersian = (brand) => {
  switch (brand) {
    case "Asus":
      return "ایسوس";
    case "Lenove":
      return "لنوو";
    case "Apple":
      return "اپل";
    case "HP":
      return "اچ پی";
    case "Huawei":
      return "هوآوی";
    case "Dell":
      return "دل";
    case "Acer":
      return "ایسر";
    case "MSI":
      return "ام اس آی";
    case "Microsoft":
      return "مایکروسافت";
    case "Razer":
      return "ریزر";
    case "Sony":
      return "سونی";
    default:
      return "";
  }
};
export const tabletBrands = [
  "سامسونگ",
  "اپل",
  "لنوو",
  "مایکروسافت",
  "سن دیسک",
  "شیائومی",
  "هیوندای",
  "آمازون",
  "ویکومن",
  "ای دیتا",
  "باسئوس",
  "سونی"
]

export const tabletBrandConvertToPersian = (brand) => {
  switch (brand) {
    case "Samsung":
      return "سامسونگ";
    case "Lenove":
      return "لنوو";
    case "Apple":
      return "اپل";
    case "Huawei":
      return "هوآوی";
    case "Microsoft":
      return "مایکروسافت";
    case "Sony":
      return "سونی";
    case "Nokia":
      return "نوکیا";
    case "GPlus":
      return "جی پلاس";
    default:
      return "";
  }
};

export const smartWatchBrand = [
  "سامسونگ",
  "اپل",
  "شیائومی",
  "هوآوی",
  "امیزفیت",
  "اسمارت",
  "آنر",
  "لنوو",
  "کینگ ویر",
  "فیت بیت",
  "تن فیفتن",
]


export const smartWatchBrandConvertToPersian = (brand) => {
  switch (brand) {
    case "Samsung":
      return "سامسونگ";
    case "Apple":
      return "اپل";
    case "Xiaomi":
      return "شیائومی";
    case "Huawei":
      return "هوآوی";
    case "Amazfit":
      return "امیزفیت";
    case "Smart":
      return "اسمارت";
    case "Lenove":
      return "لنوو";
    case "Kingwear":
      return "کینگ ویر";
    case "Honor":
      return "آنر";
    case "Fitbit":
      return "فیت بیت";
    case "Tenfifteen":
      return "تن فیفتن";
    default:
      return "";
  }
};


export const allBrandsConvert = (brand) => {
  switch (brand) {
    case "اپل": return "Apple"
    case "سامسونگ": return "Samsung"
    case "شیائومی": return "Xiaomi"
    case "ایسوس": return "Asus"
    case "لنوو": return "Lenove"
    case "هوآوی": return "Huawei"
    case "اچ پی": return "HP"
    case "ام اس آی": return "MSI"
    case "مایکروسافت": return "Microsoft"
    default: return undefined
  }
}


export const convertAllBrands = (brand) => {
  switch (brand) {
    case "Apple": return "اپل"
    case "Samsung": return "سامسونگ"
    case "Asus": return "ایسوس"
    case "HP": return "اچ پی"
    case "Huawei": return "هوآوی"
    case "Lenove": return "لنوو"
    case "Microsoft": return "مایکروسافت"
    case "MSI": return "ام اس آی"
    case "Xiaomi": return "شیائومی"
    default: return undefined
  }
}