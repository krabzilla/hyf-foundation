function getFullName(firstName, lastName, useFormalName = false, gender) {
  if (firstName === "" || lastName === "") {
    return "Name is missing";
  }
  if (useFormalName) {
    if (gender === "female") {
      return `Lady ${firstName} ${lastName}`;
    }
    return `Lord ${firstName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}
const fullName1 = getFullName("Benjamin", "Hughes", true, "male");
const fullName2 = getFullName("Marie", "Doe", true, "female");
console.log(fullName1);
console.log(fullName2);
