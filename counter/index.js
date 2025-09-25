// -------- LOGGING TO THE CONSOLE --------

// // // console.log("Hello, World!");
// // // // you can use double quotes or single quotes for strings, even backticks but those are weird
// // // console.log("foo");

// // // window.alert("This is an alert box!");
// // // window.alert("double alert");

// // let x;
// // // this is declaration, like private int x; in Java or C
// // // let x;
// // // you can't declare etwo of the same.

// // x = 123;
// // console.log(x);
// // // this makes 100 show up in the log.
// // // there's a few data types.

// // let age = 25;
// // let price = 10.99;

// // console.log(price);

// // let gpa = 2.1;

// // console.log(gpa);

// // console.log(age);

// // console.log(`You are ${age} years old.`);
// // // these quotes allow you to do string interpolation
// // console.log("You are " + age + " years old.");
// // // this is just more inconvenient but it's what you
// // //  do in C++ etc.

// // console.log(`Your gpa is ${gpa}`);

// // console.log(typeof price);
// // console.log(typeof age);
// // console.log(typeof gpa);

// // // despite the decimals, they are all numbers.

// // let firstName = "John";
// // let lastName = "Doe";

// // console.log(firstName);
// // console.log(lastName);

// // console.log(`Hello, ${firstName} ${lastName}`);
// // console.log(typeof firstName);
// // // this outputs string.

// // let online = true;

// // console.log(online);
// // console.log(typeof online);

// // document.getElementById("myH1").textContent = "Hello";
// // document.getElementById("myP").textContent = "This is a paragraph.";

// --------- ARITHMETIC ----------

// let students = 30;

// // students = students + 1;
// students += 1; // this is shorthand for the above

// students /= 2; // this divides students by 2

// // note that it's not an integer, so we get 15.5, not 15.

// // number seems to cover float, double, int, etc.

// students = students % 2;

// console.log(`There are ${students} students in the class.`);

// let username;
// username = window.prompt("Enter your name: ");

// console.log(`Hello, ${username}`);

// the professional way is in the HTML.

// -------- ACCEPTING USER INPUT --------

// let username;

// document.getElementById("mySubmit").onclick = function () {
//   // onclick has to be all lowercase or it won't work lol
//   // turns out that functions in Javascript are SUPER case sensitive
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello, ${username}`;

//   // so document.getElement, then textContext is how you change the name.
// };

// -------- TYPE CONVERSION --------

// let age = window.prompt("How old are you?");

// // here's how to convert to number.
// age = Number(age);

// age += 1;

// // interesting. so if you do age++, it treats it
// // as a number, but if you do age += 1, it treats it as a string.
// // weird.

// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// lol string to number is NaN, not a number
// string to string is still a string
// string to boolean is true, because it's not empty. It's truthy

// but "0" is truthy
// empty string is falsy.

// typecasting a string as a boolean is good to check
// if the user entered something or not.

// if undefined, NaN in number and undefined in string.

// --------- CONSTANTS ----------

// const PI = 3.14159;
// // good principle to use all caps for constants
// // usually only primitives like number & boolean
// // if a string, not typically.

// let radius;
// let circumference;

// // vars that are const can't be changed

// // convert to a number, don't forget prompts are string.

// document.getElementById("mySubmit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);

//   circumference = 2 * PI * radius;
//   document.getElementById(
//     "myH3"
//   ).textContent = `the circumference is ${circumference} cm`;
// };

// why const? Someone else might maliciously change pi.

// --------- FIRST PROJECT ----------

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

// why are these constants? Because we don't want to
// accidentally change what they point to. fair.

let count = 0;

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
  // ah I see it's because we need to change it to a string
  // so if we want to change things in a site, we need to
  // change the textContent property.
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
