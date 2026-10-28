let name;
const todos = [];

function getReply(command) {
  if (command.includes("my name is")) {
    if (name !== undefined) {
      return `I already know you, ${name}`;
    }
    const words = command.split(" ");
    name = words[words.length - 1];
    return `Nice to meet you ${name}`;
  } // Command A ends here

  // Command B "what is my name"

  if (command.toLowerCase().includes("what is my name")) {
    if (name === undefined) {
      return "I don't know your name yet";
    }
    return `Your name is ${name}`;
  }
  return "Sorry, I don't understand";
}

console.log(getReply("What is my name?")); // "I don't know your name yet"
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("Hello my name is Benjamin")); // "I already know you, Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("blah blah")); // "Sorry, I don't understand"
