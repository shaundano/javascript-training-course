// -------- FUNCTIONS --------\

// defining functions
// function happyBirthday(name, age) {
//   // can this be a type?
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log(`Happy Birthday dear ${name}`);
//   console.log("Happy Birthday to you!");
//   console.log(`You are ${age} years old!`);
// }

// let username = window.prompt("What is your name?");
// let age = window.prompt("How old are you?");

// happyBirthday(username, age);
// // why deprecated?

// function add(x, y) {
//   return x + y;
// }

// let result = add(5, 7);
// console.log(result);

// ------- LOCAL AND GLOBAL FUNCTIONS -------

// function function1() {
//   let x = 1;
//   console.log(x);
// }

// function function2() {
//   let x = 2;
//   console.log(x);
// }

// function1();
// function2();

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = (Number(textBox.value) * 9) / 5 + 32;
    result.textContent = `${textBox.value}°C is ${temp}°F`;
  } else if (toCelsius.checked) {
    temp = ((Number(textBox.value) - 32) * 5) / 9;
    result.textContent = `${textBox.value}°F is ${temp}°C`;
  } else {
    result.textContent = "You must select a conversion type.";
  }
}
