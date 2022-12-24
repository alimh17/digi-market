import _ from "lodash";

export const brandSort = (brands, item) => {
  if (_.isEmpty(brands)) {
    const b = [...brands];
    b.push(item);
    return b;
  } else if (brands.includes(item)) {
    const filter = brands.filter((f) => f !== item);
    return filter;
  } else {
    const b = [...brands];
    b.push(item);
    return b;
  }
};

export const changeCheckbox = (brandRef, item) => {
  if (brandRef) {
    brandRef.current.map((el, i) => {
      if (el.current.classList.contains(item)) {
        return el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
      return null
    });
  }
};
