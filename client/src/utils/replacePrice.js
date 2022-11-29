export const replacePrice = (price) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const convertedPrice = price
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return convertedPrice.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export const replaceNumberToPersian = (n) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};


export const replacePersianNumber = (n) => {

  const Num = n.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  return Num
}