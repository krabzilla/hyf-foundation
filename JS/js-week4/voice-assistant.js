let name;
const todos = [];

function timerDone() {
  console.log("Timer done");
}

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

  // Command C "Adding and removing from my todo"
  if (command.includes("to my todo")) {
    const todo = command.replace("Add ", "").replace(" to my todo", "");
    todos.push(todo);
    return `${todo} added to your todo`;
  }
  if (command.includes("from my todo")) {
    const todo = command.replace("Remove ", "").replace(" from my todo", "");
    const index = todos.indexOf(todo);
    if (index === -1) {
      return `${todo} is not on your todo.`;
    }
    todos.splice(index, 1);
    return `${todo} removed from your todo.`;
  }
  if (command.toLowerCase().includes("what is on my todo")) {
    if (todos.length > 0) {
      return `You have ${todos.length} todos - ${todos}`;
    }
    return `Your todo list is empty`;
  }
  if (command.toLowerCase().includes("what day is it today?")) {
    const today = new Date();
    return `Today is ${today}.`;
  }
  // Command D "Numerical Questions"
  if (command.toLowerCase().includes("what is")) {
    const words = command.replace("?", "").split(" "); // using replace because ? is giving me NaN.
    const first = Number(words[2]);
    const operator = words[3];
    const second = Number(words[4]);

    if (operator === "+") {
      return first + second;
    }

    if (operator === "-") {
      return first - second;
    }

    if (operator === "*") {
      return first * second;
    }

    if (operator === "/") {
      return first / second;
    }
  }
  // Command E "Setting Timer"
  if (command.toLowerCase().includes("set a timer for")) {
    const words = command.split(" ");
    const minutes = Number(words[4]);
    setTimeout(timerDone, minutes * 60 * 1000);
    return `Timer set for ${minutes} minutes`;
  }
  return "Sorry, I don't understand";
}

console.log(getReply("What is my name?")); // "I don't know your name yet"
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("Hello my name is Benjamin")); // "I already know you, Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("blah blah")); // "Sorry, I don't understand"
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("What is on my todo?")); // "You have 2 todos - fishing and singing in the shower"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("Remove dancing from my todo")); // "dancing is not on your todo."
console.log(getReply("What is on my todo?")); // "You have 1 todos - singing in the shower"
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("Set a timer for 1 minutes"));
