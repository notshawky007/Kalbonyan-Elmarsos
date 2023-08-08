// function sayHello(name) {
//   console.log('Hi ' + name);
// }
// sayHello('Shawky');

// 1
// declare a function called sayHello that takes a parameter called name
const sayHello = (name) => {
  // print Hi and the value of the name parameter
  console.log("Hi " + name);
};
// call the sayHello function and pass in the value of "shawky"
sayHello("shawky");

// 2
// Define a function with two parameters: greet and name
const sayHello2 = (greet, name) => {
  // Display the values of greet and name
  console.log(greet + " " + name);
};
// Call the function with two arguments: "Hi" and "Shawky"
sayHello2("Hi", "Shawky");

// 1. Create a function called sayHello
const sayHello3 = () => {
  // 2. Inside of the function, log "Hi Mostafa" to the console
  console.log("Hi Mostafa");
};
// 3. Call the sayHello function
sayHello3();

// Create a function that will print "Hi Mo" to the console
const sayHello4 = (name) => "HI" + name;
// Call the function
console.log(sayHello4("Mo"));

// 3
let defaultGreet = "Hi";
const sayHello5 = (name, greet = defaultGreet) => {
  console.log(greet + " " + name);
};
sayHello5("Shawky");
sayHello5("Hi", "Shawky");

// 4
// 1 - Define a function named checkInput() that accepts two parameters: cb and ...strings
function checkInput(cb, ...strings) {
  // 2 - Assign a variable named hasEmptyText to hold a Boolean value
  let hasEmptyText = false;
  // 3 - Loop through the strings array using a for...of loop
  for (const text of strings) {
    // 4 - If the current text is an empty string...
    if (!text) {
      // 5 - Set hasEmptyText to true
      hasEmptyText = true;
      // 6 - Exit the loop
      break;
    }
  }
  // 7 - If hasEmptyText is false...
  if (!hasEmptyText) {
    // 8 - Call cb()
    cb();
  }
}

// STEP 1: Create a function that takes a callback and any number of strings
checkInput(
  // STEP 2: Pass in the callback function
  () => {
    console.log("All not empty!");
  },
  // STEP 3: Pass in the strings
  "Hello",
  "Hi",
  "How are you?"
);
