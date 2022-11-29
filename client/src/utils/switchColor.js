export const switchColor = (color) => {
  switch (color) {
    case "black":
      return "مشکی";
    case "white":
      return "سفید";
    case "green":
      return "سبز";
    case "purple":
      return "بنفش";
    case "blue":
      return "آبی";
    case "red":
      return "قرمز";
    case "pink":
      return "صورتی";
    case "gray":
      return "خاکستری";
    case "gold":
      return "طلایی";
    case "silver":
      return "نقره ای";
    default:
      return "مشکی";
  }
};
export const switchColorFa = (color) => {
  switch (color) {
    case "مشکی":
      return "black";
    case "سفید":
      return "white";
    case "سبز":
      return "green";
    case "بنفش":
      return "purple";
    case "آبی":
      return "blue";
    case "قرمز":
      return "red";
    case "صورتی":
      return "pink";
    case "خاکستری":
      return "gray";
    case "طلایی":
      return "gold";
    case "نقره ای":
      return "silver";
    default:
      return "";
  }
};
