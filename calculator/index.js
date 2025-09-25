// -------- ES6 MODULES --------

// import { PI, getArea, getCircumference, getVolume } from "./mathUtil.js";

// console.log("PI is: " + PI);

// console.log("The area of a circle with radius 5 is: " + getArea(5));

// console.log(
//   "The circumference of a circle with radius 5 is: " + getCircumference(5)
// );

// console.log("The volume of a sphere with radius 5 is: " + getVolume(5));

// // siiiiick. This is how imports basically work. you need to export it if you want
// // to access it from another file.

// ---------- ASYNCHRONOUS JS ----------

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 1000);
// }
// // just note that the function in setTimeout is where you put the callback, you can't put it after the 1000.

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);

// need to learn await.

// ---------- ERROR OBJECTS ----------

// an object is created to signal a problem.

// console.lag("Hello!");
// this is a type error.

// console.log(x);
// this is a reference error.

// you can handle these errors.

// try {
//   console.lag("Hello!");
// } catch (error) {
//   console.error(error);
//   // this flags the error in red.
// } finally {
//   // usually used to close connections, or clean up resources.
//   console.log("Cleaning up...");
//   console.log("This will always run");
// }

// nice. so we still reach the end. This is the same as try catch in java.

const display = document.getElementById("display");

// cool, we have display.

// function for append,
// function for calculate
// function for display

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  // let's put something malicious in display.
  try {
    display.value = eval(display.value);
    // duuuuuude that's a crazy built in function.
    // eval takes a string and evaluates it as code.
    // and you can run malicious stuff?
  } catch (error) {
    display.value = "Error";
  }
}
