const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const indexNo = names.indexOf(nameToRemove); // Write some code here
console.log(indexNo);
if (indexNo !== -1) {
  names.splice(indexNo, 1);
} // Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']
