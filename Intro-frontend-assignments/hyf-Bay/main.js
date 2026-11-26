console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const productList = document.querySelector("#productList");
  console.log(productList);
  for (const product of products) {
    const productLi = document.createElement("li");
    productLi.textContent = `${product.name} - Price: DKK${product.price.toFixed(2)} - Rating: ${product.rating}`;
    productList.appendChild(productLi);
  }
}

renderProducts(products);
