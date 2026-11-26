const input = document.querySelector("#inputName");
const button = document.querySelector(".btn");
const result = document.querySelector(".houseResult");
const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
const houseColors = {
  Gryffindor: "#7f0909",
  Slytherin: "#1a472a",
  Ravenclaw: "#0e1a40",
  Hufflepuff: "#ecb939",
};

const getRandomHouse = () => {
  let randomIndex = Math.floor(Math.random() * houses.length);
  const house = houses[randomIndex];
  return house;
};
let previousHouse = "";

button.addEventListener("click", () => {
  let house = getRandomHouse();
  const name = input.value || "Mysterious Wizard";
  while (previousHouse === house) {
    house = getRandomHouse();
  }
  result.textContent = `${name} belongs in ${house}!`;
  previousHouse = house;
  result.style.backgroundColor = houseColors[house];
});
