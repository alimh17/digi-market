import _ from "lodash";

export const ramSort = (ram, item) => {
  if (_.isEmpty(ram)) {
    const b = [...ram];
    b.push(item);
    return b;
  } else if (ram.includes(item)) {
    const filter = ram.filter((f) => f !== item);
    return filter;
  } else {
    const b = [...ram];
    b.push(item);
    return b;
  }
};

export const changeCheckbox = (ramRef, item) => {
  if (ramRef) {
    ramRef.current.forEach((el, i) => {
      if (el.current.classList.contains(item)) {
        el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
    });
  }
};
