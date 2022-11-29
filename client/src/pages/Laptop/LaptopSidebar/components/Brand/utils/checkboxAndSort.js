import _ from "lodash";

export const brandSort = (brands, item) => {
  if (_.isEmpty(brands)) {
    const b = [...brands];
    b.push(item.name);
    return b;
  } else if (brands.includes(item.name)) {
    const filter = brands.filter((f) => f !== item.name);
    return filter;
  } else {
    const b = [...brands];
    b.push(item.name);
    return b;
  }
};

export const changeCheckbox = (brandRef, item) => {
  if (brandRef) {
    brandRef.current.map((el, i) => {
      if (el.current.classList.contains(item.name)) {
        return el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
      return null
    });
  }
};
