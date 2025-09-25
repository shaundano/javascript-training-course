// --------- ARRAYS ---------

// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits);

// console.log(fruits.indexOf("Banana")); // 1

// fruits.push("Orange"); // adds to end of array

// console.log(fruits);

// fruits.pop(); // removes last

// console.log(fruits);

// fruits.shift(); // removes first item
// // interesting.

// fruits.unshift("Strawberry"); // adds to beginning of array

// console.log(fruits);

//recap:

// indexOf : first occurance of item
// lastIndexOf : last occurance of item

// length: number of items in array
// includes: true/false if item exists in array
// reverse: reverses the order of items in array
// sort: sorts items in array alphabetically or numerically
// join: joins all items of array into string
// concat: combines two or more arrays
// slice: selects a part of an array and returns the new array
// splice: removes items from an array and, if necessary, inserts new items in their place
// toString: converts an array to a string of (comma separated) array values
// push: add to end
// pop: remove from end
// unshift : add to beginning
// shift: remove from beginning

// -------- SPREAD OPERATOR ---------

// ... three dots

// it basically unpacks the elements.

// WOWWWW so cool. Javascript is pretty powerful.

// spread: UNPACKING

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// let maximum = Math.max(...numbers);
// // ah it's kinda like iterating through the array.

// // same as a for loop (i = 0; i < n ; i++)
// // this does not work.

// console.log(maximum);

// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Chris";
// let letters = [...username].join("-");
// // this adds a dash between each letter.
// console.log(letters);

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);
// // what is a shallow copy?
// // different data type, but same data

// let newFruits = [...fruits];
// console.log(newFruits);
// // yep, looks the same.

// let vegetables = ["Carrot", "Lettuce", "Spinach"];
// let food = [...fruits, ...vegetables, "eggs", "milk"];
// // but this does fruits first, then vegetables. it doesn't interleave.
// console.log(food);

// -------- REST OPERATOR ---------

// const food1 = "pizza";
// const food2 = false;
// const food3 = "salad";
// const food4 = 5;

// function openFridge(...foods) {
//   console.log(...foods);
//   // rest then spread
// }

// function getFood(...foods) {
//   return foods;
// }

// openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);
// // this basically allows us to assemble an array.

// // this packs them into an array
// // so rest doesn't really have any syntax. It's basically bundling parameters.
// // also rest can take different types.

// // remember that strings are array of characters and spread can split em up

// // let's sum some numbers together.

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     // notice different syntax compared to other OOP,
//     // normally you see (Number number: numbers)
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 6, 9, 10, 11);

// console.log(`Your total is ${total}`);

// // this works. very cool.

// function avg(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     // notice different syntax compared to other OOP,
//     // normally you see (Number number: numbers)
//     result += number;
//   }
//   return result / numbers.length;
// }

// const average = avg(90, 71, 82, 93, 75);

// console.log(`Your average is ${average}`);

// // sick. Notice that arrays use length rather than size() like other OOP

// function combineString(...strings) {
//   return strings.join(" ");
//   // super cool. joins everything with a " "  in between
// }

// const fullName = combineString("Mr.", "John", "Doe");

// console.log(`Your full name is ${fullName}`);

// alright, you have all the tools to do this yourself.

let dice = document.getElementById("dice");

let number;

function roll() {
  number = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-images/${number}.png`;
}
