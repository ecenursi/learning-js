// Variables
let fruit = "Apple";

fruit = "Orange";

console.log("The fruit is ", fruit);

// Math task #1
console.log("new age", 26 + 3);

// Math task #2
console.log(new Date().getFullYear() - 1969);

// Math task #3
console.log(65 / 240);

// Math task #4
console.log(0.2708 * 100);

// String functions task #1
console.log("ecenur".toUpperCase());

// String functions task #2
console.log("    Remove whitespace   ".trim());

// String functions task #4
const theString = "How many characters long is this string?";
console.log(theString);
console.log("Answer: ", theString.length);

// Conditional statements
const carSpeed = 85;

function isTooFast(speed) {
  if (speed >= 100) {
    console.log("Slow down, you are going too fast! 🙀");
  } else {
    console.log("Carry on 😎");
  }
}

isTooFast(240);
isTooFast(80);

// Booleans task #1
const wordCount = 0;
if (wordCount === 0) {
  console.log("Get writing! 👺");
}

// Booleans task #2
const currentTemperature = 15;
const goneForARun = false;
if (currentTemperature > 10 && goneForARun === false) {
  console.log("You should go for a run! 💨");
}

// Booleans task #3
const name = "Mary";
if (name.length > 10) {
  console.log("You have a long name!");
} else if (name.length < 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium length name!");
}

// Functions
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};

// Functions task #1
console.log(printCurrentTime());

// Functions task #2
function sayMyName() {
  console.log("Master Yoda 🐸");
}
sayMyName();
sayMyName();

// Functions task #3
function printGreeting(name) {
  console.log(`Hello ${name}`);
}
printGreeting("Bob");
printGreeting("Sue");

// Functions task #4
function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}
const first = multiply(2, 2);
console.log(first);

const second = multiply(100, 4);
console.log(second);

// Functions task #5
function warmEnough(currTemp) {
  if (currTemp > 10) {
    return true;
  }
  return false;
}

if (warmEnough(15)) {
  console.log("Go for a run! 🏃");
}
