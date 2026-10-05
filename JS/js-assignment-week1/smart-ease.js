const yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogAge = dogYearFuture - dogYearOfBirth;
const humanYear = dogAge * 7;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogAge + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture);
}
