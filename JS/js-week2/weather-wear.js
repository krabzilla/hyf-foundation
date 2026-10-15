
function getClothesForTemperature(temperature) {
  if (temperature < 0) {
    return "a winter coat, hat and gloves";
  } else if (temperature < 10) {
    return "a warm jacket and long pants";
  } else if (temperature < 18) {
    return "a sweater and jeans";
  } else {
    return "a shorts and a t-shirt";
  }
}
const clothesToWear = getClothesForTemperature(18);
console.log(getClothesForTemperature(-5));
console.log(getClothesForTemperature(5));
console.log(getClothesForTemperature(12));
console.log(getClothesForTemperature(18));
console.log(clothesToWear);
