export const handleRouts = (path) => {
  switch (path) {
    case "/":
      return true;
    case "/mobiles":
      return true;
    case `/mobiles/${path.split("/")[2]}`:
      return true;
    case '/laptops':
      return true;
    case `/laptops/${path.split("/")[2]}`:
      return true;
    case "/tablets":
      return true;
    case `/tablets/${path.split("/")[2]}`:
      return true;
    case "/consoles":
      return true;
    case `/consoles/${path.split("/")[2]}`:
      return true;
    case "/smartwatchs":
      return true;
    case `/smartwatchs/${path.split("/")[2]}`:
      return true;
    case `/news/${path.split("/")[2]}`:
      return true;
    case `/brands/${path.split("/")[2]}`:
      return true;
    case "/best-selling":
      return true;
    case "/login":
      return true;
    case "/shop":
      return true;
    case "/cart":
      return true;
    case "/offers":
      return true;
    default:
      return false;
  }
};
