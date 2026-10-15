const boughtCandyPrices = [];

function getCandyPrice(candyType) {
  if (candyType) {
    if (candyType === "Sweet") {
      return 0.5;
    } else if (candyType === "Chocolate") {
      return 0.7;
    } else if (candyType === "Toffee") {
      return 1.1;
    } else if (candyType === "Chewing-Gum") {
      return 0.03;
    } else {
      console.log("Unknown candy type");
      return 0;
    }
  }
}

function addCandy(candyType, weight) {
  if (weight <= 0) {
    console.log("Weight must be a positive number");
    return;
  }
  const pricePerGram = getCandyPrice(candyType);
  const totalPrice = pricePerGram * weight;
  boughtCandyPrices.push(totalPrice);
}

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  let totalSpent = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent = totalSpent + boughtCandyPrices[i];
  }
  return totalSpent < amountToSpend;
}
addCandy("Toffee", 20);
addCandy("Chewing-Gum", 30);
console.log(boughtCandyPrices);
console.log(`Amount to spend: ${amountToSpend.toFixed(2)}`);
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
