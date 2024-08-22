const distanceConverter = (km) => {
  return km * 1000;
};
const input = Number(prompt("enter the kilometer"));
console.log(distanceConverter(input));
