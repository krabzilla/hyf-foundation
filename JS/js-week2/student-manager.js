const class07Students = [];
function getNumberOfStudents() {
  return class07Students.length;
}
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty name");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }
  class07Students.push(studentName);
}
addStudentToClass("Ali");
addStudentToClass("Sara");
addStudentToClass("John");
addStudentToClass("Mike");
addStudentToClass("Anna");
addStudentToClass("Tom");
addStudentToClass("Peter"); // should say: class is full
addStudentToClass("Ali"); // should say: Ali is already in the class
addStudentToClass("Queen"); // should get in anyway
addStudentToClass(""); // should say: empty name
console.log(getNumberOfStudents()); // should be 7 (6 + the Queen)
