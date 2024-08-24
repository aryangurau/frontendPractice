// const units = ["km", "m", "cm"];
// const distanceConverter = (units) => {
//   const meter = Number(units) * 1000;
// };
// // const input = Number(prompt("enter the kilometer"));
// console.log(distanceConverter(2));

// km to m= *1000
// m to km = /1000

// Function to get the conversion factor based on the unit
// function getConversionFactor(unit) {
//   switch (unit) {
//     case "km":
//       return 0.001;
//     case "m":
//       return 1;
//     case "cm":
//       return 100;
//     case "mm":
//       return 1000;
//     default:
//       return 1; // Default to meters if the unit is not recognized
//   }
// }

// // Function to convert distance
// function convertDistance(value, fromUnit, toUnit) {
//   const fromFactor = getConversionFactor(fromUnit);
//   const toFactor = getConversionFactor(toUnit);
//   return (value * toFactor) / fromFactor;
// }

// // Example usage
// const value = 1; // value to convert
// const fromUnit = "mm"; // original unit
// const toUnit = "m"; // target unit

// const result = convertDistance(value, fromUnit, toUnit);
// console.log(`${value} ${fromUnit} is equal to ${result} ${toUnit}`);

const converter = () => {
  const firstValue = document.getElementById("enterValue").value ?? 0;
  const secondValue = document.getElementById("converted").value ?? 0;

  const firstMeasurement = document.getElementById("firstDropdown").value;
  const secondMeasurement = document.getElementById("secondDropdown").value;

  let result = "";
  if (firstMeasurement == secondMeasurement) {
    return firstValue;
  }
  if (firstMeasurement === "kilometer" && secondMeasurement === "meter") {
    result = firstValue * 1000;
  }
  if (firstMeasurement === "meter" && secondMeasurement === "kilometer") {
    result = firstValue / 1000;
  }
  document.getElementById("converted").value = result;
};
