# JavaScript Tutorial Cheatsheet

This is a comprehensive cheatsheet containing copy-pasteable code chunks from my JavaScript tutorial project.

## Table of Contents

**Basic JavaScript Concepts:**

- [Console Logging](#console-logging)
- [Arithmetic](#arithmetic)
- [User Input](#user-input)
- [Type Conversion](#type-conversion)
- [Constants](#constants)
- [Math Object](#math-object)
- [Random Numbers](#random-numbers)
- [String Methods](#string-methods)
- [Slice Method](#slice-method)
- [Method Chaining](#method-chaining)

**Functions & Scope:**

- [Functions](#functions)
- [Local and Global Functions](#local-and-global-functions)
- [Callbacks](#callbacks)
- [Function Expressions](#function-expressions)
- [Arrow Functions](#arrow-functions)
- [Closures](#closures)

**Data Structures:**

- [Arrays](#arrays)
- [Spread Operator](#spread-operator)
- [Rest Operator](#rest-operator)
- [Objects](#objects)
- [This Keyword](#this-keyword)
- [Constructors](#constructors)
- [Classes](#classes)
- [Static Methods](#static-methods)
- [Inheritance](#inheritance)
- [Super Keyword](#super-keyword)
- [Destructuring](#destructuring)
- [Nested Objects](#nested-objects)
- [Array of Objects](#array-of-objects)

**Array Methods:**

- [ForEach](#foreach)
- [Map](#map)
- [Filter](#filter)
- [Reduce](#reduce)
- [Sort Method](#sort-method)
- [Shuffle Elements](#shuffle-elements)

**Timing & Dates:**

- [Date Object](#date-object)
- [Timers and Intervals](#timers-and-intervals)
- [Digital Clock Example](#digital-clock-example)

**DOM & Events:**

- [DOM Manipulation](#dom-manipulation)
- [DOM Navigation](#dom-navigation)
- [Event Handling](#event-handling)
- [NodeLists vs HTMLCollections](#nodelists-vs-htmlcollections)

**Advanced Topics:**

- [ES6 Modules](#es6-modules)
- [Error Handling](#error-handling)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
- [Fetch API & HTTP Requests](#fetch-api--http-requests)

**Complete Projects:**

- [Image Slider Example](#image-slider-example)
- [Complete Project Examples](#complete-project-examples)

---

## Console Logging

Basic logging and displaying content on web pages.

• Use `console.log()` to output to browser console
• Use `document.getElementById().textContent` to update HTML elements
• String interpolation with backticks and `${variable}` syntax

```javascript
console.log("Hello, World!");

let age = 25;
console.log(`You are ${age} years old.`);
console.log(typeof age); // Shows data type

// Update HTML content
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "This is a paragraph.";
```

---

## Arithmetic

Basic arithmetic operations and assignment operators.

• Use shorthand operators like `+=`, `-=`, `*=`, `/=`, `%=`
• JavaScript handles both integers and decimals as `number` type
• Modulo operator `%` gives remainder after division

```javascript
let students = 30;

students += 1; // Same as: students = students + 1
students /= 2; // Same as: students = students / 2
students = students % 2; // Modulo operation

console.log(`There are ${students} students in the class.`);
```

---

## User Input

Getting input from users through prompts and HTML forms.

• `window.prompt()` creates a popup input dialog
• Better approach is using HTML forms with `onclick` event handlers
• Access input values with `document.getElementById().value`

```javascript
// Prompt method (not professional)
let username = window.prompt("Enter your name: ");

// Professional HTML form method
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello, ${username}`;
};
```

---

## Type Conversion

Converting between different data types.

• `Number()` converts to number (NaN if invalid)
• `String()` converts to string
• `Boolean()` converts to boolean (empty string is falsy, everything else truthy)

```javascript
let age = window.prompt("How old are you?");
age = Number(age); // Convert string to number
age += 1;

let x, y, z;
x = Number(x); // undefined becomes NaN
y = String(y); // undefined becomes "undefined"
z = Boolean(z); // undefined becomes false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

---

## Constants

Declaring unchangeable values.

• Use `const` for values that shouldn't change
• Convention: use ALL_CAPS for constants
• Prevents accidental modification of important values

```javascript
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);

  circumference = 2 * PI * radius;
  document.getElementById(
    "myH3"
  ).textContent = `The circumference is ${circumference} cm`;
};
```

---

## Math Object

Built-in mathematical functions and constants.

• `Math.PI`, `Math.E` for mathematical constants
• Rounding: `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.trunc()`
• Power and roots: `Math.pow()`, `Math.sqrt()`
• Min/max: `Math.min()`, `Math.max()`

```javascript
console.log(Math.PI);
console.log(Math.E);

let x = 3.7;
let z = Math.round(x); // Rounds to nearest integer (4)
z = Math.floor(x); // Always rounds down (3)
z = Math.ceil(x); // Always rounds up (4)
z = Math.trunc(x); // Removes decimal part (3)

z = Math.pow(2, 3); // 2 to the power of 3 = 8
z = Math.sqrt(9); // Square root = 3
z = Math.abs(-55.5); // Absolute value = 55.5

z = Math.min(1, 2, 3, -4, -5, 6); // Returns -5
z = Math.max(1, 2, 3, -4, -5, 6); // Returns 6

console.log(Math.sign(x)); // 1 if positive, -1 if negative, 0 if zero
```

---

## Random Numbers

Generating random numbers within specific ranges.

• `Math.random()` generates number between 0 and 1 (excluding 1)
• Use `Math.floor(Math.random() * range) + min` for integer ranges
• Useful for dice rolls, random selections, games

```javascript
let randomNum = Math.random(); // 0 to 0.999...

// Random dice roll (1-6)
let diceRoll = Math.floor(Math.random() * 6) + 1;

// Random number in a range (50-100)
const min = 50;
const max = 100;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;

// Interactive dice roller
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

myButton.onclick = function () {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  myLabel.textContent = randomNum;
};
```

---

## String Methods

Various methods for manipulating strings.

• Length and character access: `length`, `charAt()`, `indexOf()`, `lastIndexOf()`
• Case conversion: `toUpperCase()`, `toLowerCase()`
• Trimming and padding: `trim()`, `padStart()`, `padEnd()`
• Content checking: `startsWith()`, `endsWith()`, `includes()`

```javascript
let username = "   mcLov inLegend27      ";

console.log(username.charAt(1)); // Get character at index 1
console.log(username.indexOf("L")); // First occurrence of "L"
console.log(username.lastIndexOf("e")); // Last occurrence of "e"
console.log(username.length); // String length

username = username.trim(); // Remove leading/trailing spaces
username = username.toUpperCase(); // Convert to uppercase
username = username.toLowerCase(); // Convert to lowercase
username = username.repeat(3); // Repeat string 3 times

// Check if string starts/ends with spaces
let result = username.startsWith(" ") || username.endsWith(" ");
if (result) {
  console.log("Username can't begin or end with empty space");
}

// Check if string contains spaces
let hasSpaces = username.includes(" ");
if (hasSpaces) {
  console.log("Username can't have spaces");
}

// Replace characters
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");

// Padding
phoneNumber = phoneNumber.padStart(13, "+1 ");
phoneNumber = phoneNumber.padEnd(32, " call for good time");
```

---

## Slice Method

Extracting portions of strings.

• `slice(start, end)` extracts substring from start to end (end not included)
• Negative indices count from the end
• Useful for parsing names, extracting parts of strings

```javascript
const fullName = "Christopher Tardy";

let firstChar = fullName.slice(0, 1); // First character
let lastChar = fullName.slice(-1); // Last character
let secondToLast = fullName.slice(-2, -1); // Second to last character

// Parse first and last name
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName); // "Christopher"
console.log(lastName); // "Tardy"
```

---

## Method Chaining

Combining multiple string methods in sequence.

• Chain methods together with dot notation
• More concise than separate variable assignments
• Each method returns a value that the next method can use

```javascript
let username = window.prompt("Enter username");

// Without method chaining
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
username = username.slice(1);
username = username.toLowerCase();
username = letter + username;

// With method chaining
username =
  username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();

console.log(username);
```

---

## Functions

Defining and calling reusable blocks of code.

• Use `function` keyword to define functions
• Parameters allow passing data to functions
• `return` statement sends data back from function

```javascript
// Function with parameters
function happyBirthday(name, age) {
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday to you!");
  console.log(`Happy Birthday dear ${name}`);
  console.log("Happy Birthday to you!");
  console.log(`You are ${age} years old!`);
}

// Function with return value
function add(x, y) {
  return x + y;
}

let username = "John";
let age = 25;
happyBirthday(username, age);

let result = add(5, 7);
console.log(result); // 12
```

---

## Local and Global Functions

Understanding variable scope in functions.

• Variables declared inside functions are local (only accessible within that function)
• Variables declared outside functions are global
• Each function has its own local scope

```javascript
// Global variable
let globalVar = "I'm global";

function function1() {
  let x = 1; // Local to function1
  console.log(x);
  console.log(globalVar); // Can access global variables
}

function function2() {
  let x = 2; // Different local variable, same name
  console.log(x);
}

function1(); // Prints 1
function2(); // Prints 2
```

---

## Arrays

Working with ordered collections of data.

• Arrays store multiple values in a single variable
• Access elements with bracket notation `array[index]`
• Many built-in methods for manipulation

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.length); // 3

// Adding elements
fruits.push("Orange"); // Add to end
fruits.unshift("Strawberry"); // Add to beginning

// Removing elements
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning

// Other useful methods:
// indexOf(), lastIndexOf(), includes(), reverse(), sort()
// join(), concat(), slice(), splice(), toString()
```

---

## Spread Operator

Unpacking array elements or object properties.

• Use `...` (three dots) to spread/unpack elements
• Useful for function arguments, array copying, combining arrays
• Creates shallow copies of arrays

```javascript
let numbers = [1, 2, 3, 4, 5];

// Use with Math functions
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

// Spread string into array
let username = "Chris";
let letters = [...username].join("-"); // "C-h-r-i-s"

// Copy arrays (shallow copy)
let newNumbers = [...numbers];

// Combine arrays
let fruits = ["Apple", "Banana", "Cherry"];
let vegetables = ["Carrot", "Lettuce", "Spinach"];
let food = [...fruits, ...vegetables, "eggs", "milk"];

console.log(food);
```

---

## Rest Operator

Bundling function parameters into an array.

• Use `...` to collect remaining parameters into an array
• Allows functions to accept variable number of arguments
• Must be the last parameter in function definition

```javascript
// Rest parameters
function openFridge(...foods) {
  console.log(...foods); // Spread them back out
}

function getFood(...foods) {
  return foods; // Return as array
}

// Sum variable number of arguments
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 6, 9, 10, 11);
console.log(`Your total is ${total}`);

// Average function
function avg(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const average = avg(90, 71, 82, 93, 75);
console.log(`Your average is ${average}`);

// Combine strings
function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr.", "John", "Doe");
```

---

## Callbacks

Functions passed as arguments to other functions.

• Callbacks are functions that get called by other functions
• Useful for asynchronous operations and event handling
• Can be named functions or anonymous functions

```javascript
function hello(callback1, callback2) {
  console.log("Hello!");
  callback1();
  callback2();
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}

function wait() {
  console.log("Wait!");
}

hello(wait, goodbye);

// Callback with parameters
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(result) {
  console.log(`Result is ${result}`);
}

sum(display, 2, 6);
```

---

## ForEach

Executing a function for each array element.

• `forEach()` calls a function for each array element
• The callback function receives element, index, and array as parameters
• Does not return a new array (modifies in place or just iterates)

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Peach", "Pear"];

// Simple iteration
numbers.forEach(display);

function display(element) {
  console.log(element);
}

// Using all three parameters
fruits.forEach(upperCase);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

console.log(fruits); // ["APPLE", "PEACH", "PEAR"]
```

---

## Map

Creating a new array by transforming each element.

• `map()` creates a new array with results of calling a function on every element
• Does not modify the original array
• Returns a new array of the same length

```javascript
function square(element) {
  return Math.pow(element, 2);
}

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(squares); // [1, 4, 9, 16, 25]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// Using anonymous function
const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(cubes); // [1, 8, 27, 64, 125]
```

---

## Filter

Creating a new array with elements that pass a test.

• `filter()` creates a new array with elements that pass a test function
• Test function should return true/false
• Does not modify original array

```javascript
function isEven(element) {
  return element % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(isEven);

console.log(evens); // [2, 4, 6, 8, 10]

// Using anonymous function
const odds = numbers.filter(function (element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3, 5, 7, 9]
```

---

## Reduce

Reducing an array to a single value.

• `reduce()` applies a function against an accumulator for each element
• Takes a callback function and an initial value
• Callback receives: accumulator, current element, index, array

```javascript
function sum(total, element) {
  return total + element;
}

const prices = [5.99, 1.99, 3.49, 6.29];
const total = prices.reduce(sum, 0); // 0 is initial value

console.log(total); // 17.76

// Find maximum value
const numbers = [1, 5, 3, 9, 2];
const max = numbers.reduce(function (accumulator, element) {
  return Math.max(accumulator, element);
});

console.log(max); // 9
```

---

## Function Expressions

Alternative way to define functions.

• Function expressions create functions as values
• Can be stored in variables
• Useful for callbacks and event handlers

```javascript
// Regular function declaration
function hello() {
  console.log("hello");
}

// Function expression
const hello2 = function () {
  console.log("hello");
};

hello2();

// Used with setTimeout
setTimeout(function () {
  console.log("Hello");
}, 3000);

// Used with array methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});
```

---

## Arrow Functions

Shorter syntax for writing functions.

• Use `=>` (arrow) instead of `function` keyword
• Implicit return for single expressions
• More concise syntax especially for callbacks

```javascript
// Traditional function
const hello = function () {
  console.log("hello");
};

// Arrow function
const hello2 = () => {
  console.log("hello");
};

// With parameters
const hello3 = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`Your age is ${age}`);
};

// With setTimeout
setTimeout(() => {
  console.log("Hello");
}, 3000);

// With array methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});

// Implicit return (single expression)
const cubes = numbers.map((element) => Math.pow(element, 3));
const evens = numbers.filter((element) => element % 2 === 0);
```

---

## Objects

Creating objects with properties and methods.

• Objects group related data and functions together
• Properties hold data, methods are functions
• Access properties with dot notation or bracket notation

```javascript
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 20,
  sayHello: function (person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  },
  sayBye: function (person) {
    console.log(`Bye, ${person.firstName} ${person.lastName}!`);
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 19,
  sayHello: function (person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  },
  sayBye: function (person) {
    console.log(`Bye, ${person.firstName} ${person.lastName}!`);
  },
};

person1.sayHello(person2);
person2.sayHello(person1);
person1.sayBye(person2);
person2.sayBye(person1);
```

---

## This Keyword

Referring to the current object context.

• `this` refers to the object that owns the function
• Must use `this` to access object properties within methods
• Context can change depending on how function is called

```javascript
const person1 = {
  name: "Spongebob",
  favFood: "Krabby Patty",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
    // Must use 'this' to access object properties
  },
  sayFavFood: function () {
    console.log(`My favorite food is ${this.favFood}`);
  },
};

person1.sayHello(); // "Hello, my name is Spongebob"
person1.sayFavFood(); // "My favorite food is Krabby Patty"
```

---

## Constructors

Creating multiple objects with the same structure.

• Constructor functions create object templates
• Use `new` keyword to create instances
• Convention: capitalize constructor function names

```javascript
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

const beetle = new Car("Volkswagen", "Beetle", 1960, "white");
const racecar = new Car("Redbull", "V1", 2024, "red");

console.log(beetle.make); // "Volkswagen"
console.log(beetle.model); // "Beetle"
console.log(racecar.make); // "Redbull"
console.log(racecar.year); // 2024
```

---

## Classes

Modern way to create object templates.

• Classes provide cleaner syntax than constructor functions
• Use `constructor` method for initialization
• Define methods directly in the class body

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product("Laptop", 999.99);
product1.displayProduct();

const product2 = new Product("Smartphone", 699.99);
const salesTax = 0.05;
const total = product2.calculateTotal(salesTax);
console.log(`Total with tax: $${total.toFixed(2)}`);
```

---

## Static Methods

Methods that belong to the class, not instances.

• Static methods are called on the class itself, not on instances
• Use `static` keyword before method definition
• Useful for utility functions related to the class

```javascript
class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * radius * this.PI;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

// Call static methods on the class, not instances
console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(10)); // 20
console.log(MathUtil.getCircumference(10)); // 62.8318
console.log(MathUtil.getArea(10)); // 314.159
```

---

## Inheritance

Creating classes that inherit from other classes.

• Use `extends` keyword to inherit from a parent class
• Child classes inherit all properties and methods from parent
• Can add their own unique properties and methods

```javascript
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating.`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  hop() {
    console.log(`This ${this.name} is hopping`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive); // true (inherited)
rabbit.eat(); // "This rabbit is eating." (inherited)
rabbit.hop(); // "This rabbit is hopping" (own method)

fish.swim(); // "This fish is swimming" (own method)
fish.sleep(); // "This fish is sleeping." (inherited)
```

---

## Super Keyword

Calling parent class constructor and methods.

• `super()` calls the parent class constructor
• Must call `super()` before using `this` in child constructor
• Allows child classes to extend parent functionality

```javascript
class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
    this.alive = true;
  }
}

class Rabbit extends Animal {
  constructor(age, name, runSpeed) {
    super(age, name); // Call parent constructor
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} runs at ${this.runSpeed} mph`);
  }
}

class Fish extends Animal {
  constructor(age, name, swimSpeed) {
    super(age, name); // Call parent constructor
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`${this.name} swims at ${this.swimSpeed} mph`);
  }
}

const rabbit = new Rabbit(5, "Bunny", 10);
const fish = new Fish(2, "Goldie", 5);

console.log(rabbit.alive); // true (inherited)
console.log(fish.age); // 2 (from parent constructor)
rabbit.run(); // "Bunny runs at 10 mph"
fish.swim(); // "Goldie swims at 5 mph"
```

---

## Destructuring

Extracting values from arrays and objects.

• Use square brackets `[]` for array destructuring
• Use curly brackets `{}` for object destructuring
• Can swap variables, extract array elements, and object properties

```javascript
// Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

// Array destructuring
const colors = ["red", "green", "blue", "yellow", "purple"];
const [first, second, third, ...extraColors] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"
console.log(extraColors); // ["yellow", "purple"]

// Object destructuring
const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const { firstName, lastName, age, job = "Unemployed" } = person;
console.log(firstName); // "Spongebob"
console.log(lastName); // "Squarepants"
console.log(age); // 30
console.log(job); // "Fry Cook"

// Destructuring in function parameters
function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

displayPerson(person);
```

---

## Nested Objects

Objects containing other objects as properties.

• Objects can have other objects as property values
• Access nested properties with dot notation
• Useful for organizing complex data structures

```javascript
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  job: "Fry Cook",
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "123 Ocean Ave",
    city: "Bikini Bottom",
    country: "Int. Waters",
  },
};

console.log(person.fullName); // "Spongebob Squarepants"
console.log(person.hobbies[1]); // "jellyfishing"
console.log(person.address.city); // "Bikini Bottom"

// Using classes for nested objects
class Person {
  constructor(fullName, age, ...address) {
    this.fullName = fullName;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongebob Squarepants",
  30,
  "123 Ocean Ave",
  "Bikini Bottom",
  "Int. Waters"
);

console.log(person1.fullName); // "Spongebob Squarepants"
console.log(person1.address.city); // "Bikini Bottom"
```

---

## Array of Objects

Working with arrays containing objects.

• Arrays can contain objects as elements
• Objects in array don't need to have identical properties
• Use array methods like `forEach`, `map`, `filter` with objects

```javascript
const fruits = [
  { name: "Apple", color: "Red", calories: 95 },
  { name: "Banana", color: "Yellow", calories: 105, sentience: true },
  { name: "Grapes", color: "Purple", calories: 62 },
];

// Access object properties
console.log(fruits[0].name); // "Apple"
console.log(fruits[1].sentience); // true

// Function to display fruit info
function displayFruit(fruit) {
  console.log(
    `Fruit: ${fruit.name}, Color: ${fruit.color}, Calories: ${fruit.calories}`
  );

  if (fruit.sentience) {
    console.log("This fruit is sentient!");
  }
}

// Iterate through array of objects
fruits.forEach(displayFruit);

// Add new object to array
fruits.push({ name: "Orange", color: "Orange", calories: 62 });

// Filter objects based on properties
const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 100);
```

---

## Sort Method

Sorting arrays with custom comparison functions.

• `sort()` method sorts arrays in place
• Default sort is lexicographical (alphabetical)
• Use comparison function for custom sorting logic

```javascript
// String sorting (alphabetical)
let fruits = ["Banana", "Apple", "Grapes", "Orange", "Peach"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Grapes", "Orange", "Peach"]

// Sort by string length
fruits.sort((a, b) => a.length - b.length);
console.log(fruits); // ["Apple", "Peach", "Banana", "Grapes", "Orange"]

// Number sorting
let numbers = [5, 3, 8, 1, 4];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 3, 4, 5, 8]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [8, 5, 4, 3, 1]

// Sorting objects
const people = [
  { name: "Spongebob", age: 20 },
  { name: "Patrick", age: 19 },
  { name: "Squidward", age: 30 },
  { name: "Mr. Krabs", age: 45 },
];

// Sort by name (alphabetical)
people.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

// Sort by age (numerical)
people.sort((a, b) => a.age - b.age);

people.forEach((person) => console.log(`${person.name}: ${person.age}`));
```

---

## Shuffle Elements

Randomly shuffling array elements.

• Fisher-Yates shuffle algorithm for uniform randomization
• Swaps each element with a randomly selected element
• Modifies array in place

```javascript
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    // Swap current element with random element
    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
console.log(cards); // Cards in random order

// Alternative: Create shuffled copy without modifying original
function shuffleCopy(array) {
  const shuffled = [...array]; // Create copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
  }
  return shuffled;
}

const originalCards = ["A", "K", "Q", "J"];
const shuffledCards = shuffleCopy(originalCards);
console.log(originalCards); // Unchanged
console.log(shuffledCards); // Shuffled
```

---

## Date Object

Working with dates and times.

• `Date` constructor creates date objects
• Many methods for getting/setting date components
• Months are 0-indexed (January = 0, December = 11)

```javascript
// Different ways to create dates
const date1 = new Date(); // Current date and time
const date2 = new Date(2024, 0, 1, 2, 30, 0, 0); // Year, month(0-based), day, hour, min, sec, ms
const date3 = new Date("2024-01-01T02:30:00"); // ISO 8601 format
const date4 = new Date(0); // Unix epoch (Jan 1, 1970)

// Getting date components
const year = date2.getFullYear(); // 2024
const month = date2.getMonth(); // 0 (January)
const day = date2.getDate(); // 1
const hours = date2.getHours(); // 2
const minutes = date2.getMinutes(); // 30
const dayOfWeek = date2.getDay(); // 0-6 (Sunday=0)

// Setting date components
date2.setFullYear(2025);
date2.setMonth(11); // December
date2.setDate(25); // Christmas

// Formatting dates
const monthName = date2.toLocaleString("default", { month: "long" });
console.log(monthName); // "December"

// Month names array (alternative)
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(monthNames[month]); // "January"

console.log(date2.toString()); // Full date string
console.log(date2.toDateString()); // Date only
console.log(date2.toTimeString()); // Time only
```

---

## Interactive Examples

Here are some practical interactive examples that combine multiple concepts:

### Counter App

```javascript
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
```

### Temperature Converter

```javascript
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

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
```

### Number Guessing Game

```javascript
let max = 100;
let min = 1;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 5;
let running = true;

while (running) {
  let choice = window.prompt(`Pick a number between ${min} and ${max}`);
  choice = Number(choice);

  if (choice === answer) {
    window.alert("You win!");
    running = false;
  } else if (choice < answer) {
    attempts--;
    window.alert(`Too low! You have ${attempts} attempts left.`);
  } else {
    attempts--;
    window.alert(`Too high! You have ${attempts} attempts left.`);
  }

  if (attempts === 0) {
    window.alert(`Game over! The correct answer was ${answer}.`);
    running = false;
  }
}
```

### Password Generator

```javascript
function generatePassword(
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  length
) {
  let result = "";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let possibleChars = "";

  if (includeLowercase) possibleChars += lowercase;
  if (includeUppercase) possibleChars += uppercase;
  if (includeNumbers) possibleChars += numbers;
  if (includeSymbols) possibleChars += symbols;

  if (possibleChars.length === 0) {
    return "Please select at least one character type.";
  }

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * possibleChars.length);
    result += possibleChars.charAt(random);
  }

  return result;
}

const password = generatePassword(true, true, true, true, 12);
console.log(`Generated password: ${password}`);
```

---

## Closures

Functions that have access to variables from their outer scope.

• Closures allow inner functions to access outer function variables
• Variables persist even after outer function has finished executing
• Useful for creating private variables and function factories

```javascript
function outer() {
  let message = "hello";
  function inner() {
    console.log(message); // Can access outer variable
  }
  inner();
}

outer(); // Prints "hello"

// Creating a counter with closure
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();
counter.increment(); // Count increased to 1
counter.increment(); // Count increased to 2
console.log(counter.getCount()); // 2

// Scoreboard example
function makeScoreboard() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`Score increased to ${score} pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`Score decreased to ${score} pts`);
  }

  function getScore() {
    return score;
  }

  return { getScore, increaseScore, decreaseScore };
}

const scoreboard = makeScoreboard();
scoreboard.increaseScore(10); // Score increased to 10 pts
scoreboard.decreaseScore(5); // Score decreased to 5 pts
console.log(`Final Score: ${scoreboard.getScore()} pts`); // Final Score: 5 pts
```

---

## Timers and Intervals

Executing code after delays or at regular intervals.

• `setTimeout()` executes code once after a delay
• `setInterval()` executes code repeatedly at intervals  
• Both return IDs that can be used to cancel execution

```javascript
// Basic setTimeout
function sayHello() {
  window.alert("Hello!");
}

setTimeout(sayHello, 3000); // Execute after 3 seconds

// setTimeout with anonymous function
setTimeout(function () {
  window.alert("Hello from anonymous function!");
}, 3000);

// setTimeout with arrow function
setTimeout(() => {
  window.alert("Hello from arrow function!");
}, 3000);

// Canceling setTimeout
const timeoutId = setTimeout(() => {
  window.alert("This won't run");
}, 3000);

clearTimeout(timeoutId); // Cancel the timeout

// Controllable timer
let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("Timer finished!");
  }, 3000);
  console.log("Timer started");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Timer cleared");
}

// setInterval for repeating tasks
const intervalId = setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// Clear interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 10000);
```

---

## Digital Clock Example

Real-time clock using intervals and date formatting.

• Combines Date object, intervals, and string formatting
• Updates DOM every second to show current time
• Demonstrates practical use of timers

```javascript
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${meridiem}`;

  document.getElementById("clock").textContent = timeString;
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);
```

---

## DOM Manipulation

Interacting with HTML elements through JavaScript.

• The Document Object Model (DOM) represents HTML as objects
• Select elements using various methods
• Modify content, styles, and attributes dynamically

```javascript
// Element selection methods
const element1 = document.getElementById("myId");
const elements2 = document.getElementsByClassName("myClass");
const elements3 = document.getElementsByTagName("div");
const element4 = document.querySelector(".myClass"); // First match
const elements5 = document.querySelectorAll(".myClass"); // All matches

// Modifying content
element1.textContent = "New text content";
element1.innerHTML = "<strong>Bold text</strong>";

// Modifying styles
element1.style.color = "blue";
element1.style.backgroundColor = "lightgray";
element1.style.fontSize = "20px";

// Working with classes
element1.classList.add("newClass");
element1.classList.remove("oldClass");
element1.classList.toggle("activeClass");
element1.classList.contains("someClass"); // Returns true/false

// Creating new elements
const newElement = document.createElement("div");
newElement.textContent = "I'm a new element!";
newElement.id = "newDiv";
newElement.style.color = "red";

// Adding elements to DOM
document.body.append(newElement); // Add to end
document.body.prepend(newElement); // Add to beginning
element1.appendChild(newElement); // Add as child

// Removing elements
newElement.remove(); // Modern way
// or
const parent = newElement.parentElement;
parent.removeChild(newElement); // Older way
```

---

## DOM Navigation

Moving between related elements in the DOM tree.

• Navigate between parent, child, and sibling elements
• Use properties to traverse the DOM structure
• Useful for dynamic element manipulation

```javascript
const element = document.getElementById("fruits");

// Child navigation
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const allChildren = element.children; // HTMLCollection

// Sibling navigation
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Parent navigation
const parent = element.parentElement;

// Working with lists
const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  // Highlight first child of each ul
  const firstChild = ulElement.children[0];
  firstChild.style.backgroundColor = "yellow";

  // Highlight last child
  const lastChild = ulElement.children[ulElement.children.length - 1];
  lastChild.style.backgroundColor = "pink";

  // Highlight middle child
  const middleIndex = Math.floor(ulElement.children.length / 2);
  const middleChild = ulElement.children[middleIndex];
  middleChild.style.backgroundColor = "lightblue";
});
```

---

## Event Handling

Responding to user interactions and browser events.

• Add event listeners to respond to clicks, key presses, mouse movements
• Event objects provide information about what happened
• Multiple event types available for different interactions

```javascript
const button = document.getElementById("myButton");
const box = document.getElementById("myBox");

// Click events
button.addEventListener("click", function (event) {
  box.style.backgroundColor = "red";
  box.textContent = "Clicked!";
});

// Mouse events
button.addEventListener("mouseover", (event) => {
  box.style.backgroundColor = "lightblue";
  box.textContent = "Hovering...";
});

button.addEventListener("mouseout", (event) => {
  box.style.backgroundColor = "lightgreen";
  box.textContent = "Not hovering";
});

// Keyboard events
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);

  // Arrow key movement
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); // Prevent page scrolling

    let x = 0,
      y = 0;
    const moveAmount = 10;

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    box.style.position = "relative";
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});

// Form events
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  console.log("Form would have been submitted");
});
```

---

## ES6 Modules

Importing and exporting code between files.

• Modules help organize code into separate files
• Export functions, variables, and classes from one file
• Import them into another file where needed

```javascript
// mathUtil.js - Exporting module
export const PI = 3.14159;

function getCircumference(radius) {
  return 2 * PI * radius;
}

function getArea(radius) {
  return PI * radius * radius;
}

function getVolume(radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

// Export multiple items
export { getCircumference, getArea, getVolume };

// index.js - Importing module
import { PI, getArea, getCircumference, getVolume } from "./mathUtil.js";

console.log("PI is: " + PI);
console.log("Area of circle with radius 5: " + getArea(5));
console.log("Circumference with radius 5: " + getCircumference(5));
console.log("Volume of sphere with radius 5: " + getVolume(5));

// Default exports (alternative syntax)
// mathUtil.js
export default function calculate(radius) {
  return {
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
}

// index.js
import calculate from "./mathUtil.js";
const result = calculate(5);
```

---

## Error Handling

Managing and responding to runtime errors.

• Use try-catch blocks to handle potential errors
• `finally` block runs regardless of success or failure
• Useful for graceful error handling and debugging

```javascript
// Basic try-catch
try {
  console.lag("Hello!"); // Typo causes TypeError
} catch (error) {
  console.error("An error occurred:", error);
} finally {
  console.log("This always runs - cleanup code here");
}

// Practical calculator example
const display = document.getElementById("display");

function calculateResult() {
  try {
    display.value = eval(display.value); // Evaluate mathematical expression
  } catch (error) {
    display.value = "Error";
    console.error("Calculation error:", error);
  }
}

// Custom error throwing
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Division error:", error.message);
    return null;
  }
}

// Network request error handling
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}
```

---

## Asynchronous JavaScript

Handling operations that take time to complete.

• Callbacks, Promises, and async/await for managing asynchronous code
• Prevents blocking the main thread during long operations
• Essential for API calls, file operations, and timers

```javascript
// Callback approach
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 1000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
}

func1(func2);

// Promise approach
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("Dog walked successfully");
      } else {
        reject("Failed to walk dog");
      }
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("Kitchen cleaned");
      } else {
        reject("Failed to clean kitchen");
      }
    }, 2500);
  });
}

// Using promises with .then()
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    console.log("All chores completed!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Using async/await (modern approach)
async function doChores() {
  try {
    const walkResult = await walkDog();
    console.log(walkResult);

    const cleanResult = await cleanKitchen();
    console.log(cleanResult);

    console.log("All chores completed!");
  } catch (error) {
    console.error("Error:", error);
  }
}

doChores();
```

---

## JSON (JavaScript Object Notation)

Working with JSON data format.

• JSON is a lightweight data interchange format
• Convert between JavaScript objects and JSON strings
• Essential for API communication and data storage

```javascript
// JavaScript object
const person = {
  name: "Spongebob",
  age: 34,
  city: "Seattle",
  hobbies: ["jellyfishing", "karate", "blowing bubbles"],
};

// Convert object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"Spongebob","age":34,"city":"Seattle","hobbies":["jellyfishing","karate","blowing bubbles"]}

// Convert JSON string back to object
const backToObject = JSON.parse(jsonString);
console.log(backToObject);

// Proper JSON format (for parsing)
const validJsonString = `[
  {
    "name": "Spongebob",
    "age": 34,
    "city": "Seattle",
    "hobbies": ["jellyfishing", "karate", "blowing bubbles"]
  },
  {
    "name": "Patrick",
    "age": 33,
    "city": "Seattle",
    "hobbies": ["rock collecting", "eating", "napping"]
  }
]`;

// Parse the JSON
const peopleArray = JSON.parse(validJsonString);
console.log(peopleArray[0].name); // "Spongebob"

// JSON parsing rules:
// - Property names must be in double quotes
// - No trailing commas
// - No comments allowed
// - No undefined values (use null instead)
```

---

## Fetch API & HTTP Requests

Making HTTP requests to APIs and external resources.

• `fetch()` returns a Promise for making HTTP requests
• Handle both successful responses and errors
• Parse JSON data from API responses

```javascript
// Basic fetch with promises
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.name);
    console.log(data.weight);
    console.log(data.abilities);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// Modern async/await approach
async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokemon:", error);
    return null;
  }
}

// Interactive Pokemon fetcher
async function fetchData() {
  try {
    const pokemonName = document.getElementById("input").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch resource`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("img");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    console.log(`Name: ${data.name}`);
    console.log(`Weight: ${data.weight}`);
    console.log(`Abilities:`, data.abilities);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
}

// Different HTTP methods
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("POST request failed:", error);
  }
}
```

---

## NodeLists vs HTMLCollections

Understanding different types of DOM collections.

• NodeLists are static (don't auto-update when DOM changes)
• HTMLCollections are dynamic (auto-update with DOM changes)
• Both are array-like but have different methods available

```javascript
// NodeList (static) - from querySelectorAll
let buttons = document.querySelectorAll(".myButtons");
console.log(buttons); // NodeList

// HTMLCollection (dynamic) - from getElementsByClassName
let buttonCollection = document.getElementsByClassName("myButtons");
console.log(buttonCollection); // HTMLCollection

// Working with NodeLists
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.style.backgroundColor = "lightblue";
    button.textContent = "Clicked!";

    // Add new button
    const newButton = document.createElement("button");
    newButton.textContent = "New Button";
    newButton.className = "myButtons";
    document.body.append(newButton);

    // NodeList won't include new button automatically
    console.log("NodeList length:", buttons.length);

    // Need to requery for updated list
    buttons = document.querySelectorAll(".myButtons");
    console.log("Updated NodeList length:", buttons.length);
  });
});

// Converting HTMLCollection to Array for forEach
Array.from(buttonCollection).forEach((button) => {
  button.style.fontSize = "20px";
});
```

---

## Image Slider Example

Creating an interactive image slideshow.

• Combines timers, DOM manipulation, and event handling
• Automatic slideshow with manual navigation controls
• CSS classes for animations and styling

```javascript
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// Initialize slider when page loads
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
  }
}

function showSlide(index) {
  // Handle index bounds
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Remove display class from all slides
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  // Show current slide
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId); // Stop auto-advance
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalId); // Stop auto-advance
  slideIndex++;
  showSlide(slideIndex);
}

// CSS for animations
/*
.slides img {
  width: 100%;
  display: none;
}

.displaySlide {
  display: block !important;
  animation: fade 1.5s;
}

@keyframes fade {
  from { opacity: 0.4 }
  to { opacity: 1 }
}
*/
```

---

## Complete Project Examples

Here are some complete interactive projects that demonstrate multiple concepts working together:

### Rock Paper Scissors Game

```javascript
let selection;
let computerselection;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const playerchoice = document.getElementById("player-choice");
const computerchoice = document.getElementById("computer-choice");

function computer() {
  computerselection = Math.floor(Math.random() * 3) + 1;
}

function playGame(playerSelection) {
  selection = playerSelection;

  // Display player choice
  switch (selection) {
    case 1:
      playerchoice.textContent = "Player chose Rock";
      break;
    case 2:
      playerchoice.textContent = "Player chose Paper";
      break;
    case 3:
      playerchoice.textContent = "Player chose Scissors";
      break;
  }

  // Generate and display computer choice
  computer();
  switch (computerselection) {
    case 1:
      computerchoice.textContent = "Computer chose Rock";
      break;
    case 2:
      computerchoice.textContent = "Computer chose Paper";
      break;
    case 3:
      computerchoice.textContent = "Computer chose Scissors";
      break;
  }

  // Determine winner
  if (computerselection === 1 && selection === 3) {
    result.textContent = "Computer wins!";
  } else if (selection === 1 && computerselection === 3) {
    result.textContent = "Player wins!";
  } else if (computerselection > selection) {
    result.textContent = "Computer wins!";
  } else if (selection > computerselection) {
    result.textContent = "Player wins!";
  } else {
    result.textContent = "It's a tie!";
  }
}

rock.addEventListener("click", () => playGame(1));
paper.addEventListener("click", () => playGame(2));
scissors.addEventListener("click", () => playGame(3));
```

### Calculator Application

```javascript
const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// HTML structure needed:
/*
<div id="calculator">
  <input id="display" readonly>
  <div id="keys">
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('+')" class="operatorBtn">+</button>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="appendToDisplay('-')" class="operatorBtn">-</button>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('*')" class="operatorBtn">*</button>
    <button onclick="appendToDisplay('0')">0</button>
    <button onclick="appendToDisplay('.')">.</button>
    <button onclick="calculateResult()">=</button>
    <button onclick="clearDisplay()" class="operatorBtn">C</button>
  </div>
</div>
*/
```

### Dice Roller with Images

```javascript
let dice = document.getElementById("dice");
let number;

function roll() {
  number = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-images/${number}.png`;
}

// HTML needed:
/*
<div id="container">
  <h1>Dice Roller</h1>
  <button onclick="roll()">Roll</button>
  <img id="dice" src="dice-images/1.png">
</div>
*/
```

### Payment Form Handler

```javascript
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mcBtn = document.getElementById("mastercardBtn");
const amexBtn = document.getElementById("amexBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  // Check subscription
  if (myCheckbox.checked) {
    subResult.textContent = "You are subscribed.";
  } else {
    subResult.textContent = "You must subscribe.";
  }

  // Check payment method
  if (visaBtn.checked) {
    paymentResult.textContent = "You selected Visa.";
  } else if (mcBtn.checked) {
    paymentResult.textContent = "You selected MasterCard.";
  } else if (amexBtn.checked) {
    paymentResult.textContent = "You selected AmEx.";
  } else {
    paymentResult.textContent = "You must select a payment method.";
  }
};
```

---

_This comprehensive cheatsheet now covers ALL the JavaScript concepts from your complete tutorial project, from basic syntax to advanced topics like async/await, DOM manipulation, and complete interactive applications. Each section includes practical, copy-pasteable examples that you can use in your own projects!_

```

```
