// ---------- Math Object ----------

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(z);
// // this rounds to nearest integer
// // lol you forgot that things can do that, you're used to
// // round up or round down.

// z = Math.floor(x);
// // always rounds down
// console.log(z);

// z = Math.ceil(x);
// // always rounds up

// z = Math.trunc(x);
// // just removes the decimal part
// // isn't this the same as floor for positi
// // ve numbers?
// // but different for negative numbers.

// z = Math.pow(y, 3);

// console.log(z);

// z = Math.sqrt(9);

// console.log(z);

// z = Math.abs(-55.5);

// console.log(z);

// z = Math.min(1, 2, 3, -4, -5, 6);

// console.log(z);

// z = Math.max(1, 2, 3, -4, -5, 6);

// z = Math.sin(x);
// console.log(z);
// z = Math.cos(x);
// console.log(z);
// z = Math.tan(x);
// console.log(z);

// z = Math.log(x);

// console.log(z);

// console.log(Math.sign(x));
// // 1 if positive, -1 if negative, 0 if zero

// let max = Math.max(x, y, z);

// console.log(max);

// let min = Math.min(x, y, z);

// console.log(min);

// ---------- RANDOM NUMBER ----------

// let randomNum = Math.random();
// // random number between 0 and 1, not including 1

// console.log(randomNum);

// // now let's say we want to role a 6 sided dice.

// let randomNum2 = Math.floor(randomNum * 6) + 1;

// console.log(randomNum2);

// // smart.

// // random number been a certain range.

// const min = 50;
// const max = 100;

// let randomNum3 = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum3);
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

myButton.onclick = function () {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  myLabel.textContent = randomNum;
};
