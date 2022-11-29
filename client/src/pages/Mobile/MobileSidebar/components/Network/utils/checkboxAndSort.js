import _ from "lodash";

export const networkSort = (network, item) => {
  if (_.isEmpty(network)) {
    const b = [...network];
    b.push(item);
    return b;
  } else if (network.includes(item)) {
    const filter = network.filter((f) => f !== item);
    return filter;
  } else {
    const b = [...network];
    b.push(item);
    return b;
  }
};

export const changeCheckbox = (networkRef, item) => {
  if (networkRef) {
    networkRef.current.map((el, i) => {
      if (el.current.classList.contains(item)) {
        el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
    });
  }
};
