const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogAge = dogYearFuture - dogYearOfBirth;
const humanYear = dogAge * 7;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${humanYear} human years old in ${dogYearFuture}`);
}
