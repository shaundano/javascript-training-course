// // --------- CALLBACKS ----------

// // function hello(callback1, callback2) {
// //   // setTimeout(function () {
// //   //   console.log("Hello!");
// //   // }, 3000);
// //   console.log("Hello!");
// //   callback1();
// //   callback2();
// // }

// // function leave() {
// //   console.log("Leave!");
// // }

// // function goodbye() {
// //   console.log("Goodbye!");
// // }

// // function wait() {
// //   console.log("Wait!");
// // }

// // hello(wait, goodbye);

// // function sum(callback, x, y) {
// //   let result = x + y;
// //   callback(result);
// // }

// // function display(result) {
// //   console.log(`result is ${result}`);
// // }

// // sum(display, 2, 6);

// // ----------- FOREACH ------------

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);
// // uses display as a callback

// function display(element) {
//   console.log(element);
// }

// let fruits = ["Apple", "Peach", "Pear"];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//   // I see, so element, index and array is everything available to us with forEach?
//   array[index] = element.toUpperCase();
// }

// // wait a sec. different param size?

// display(fruits[0], fruits[1]);

// // INTERESTING. if you pass too many parameters, it just takes the number that it can accept and throws away the rest.
// // that's why foreach can take just an element, or it can take index and array.

// --------- MAP ----------

// this is literally just the built-in abstraction.

// takes each element of the array, and then applies a function.

// question though. How is this at all differentfrom for Each

// however, it returns a NEW array.

// function square(element) {
//   return Math.pow(element, 2);
// }

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);
// // ah I see. it's gonna fail with for each but succeed with map.
// console.log(numbers);

// he goes through filter next.

// -------- FILTER ---------

// function isEven(element) {
//   return element % 2 === 0;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = numbers.filter(isEven);

// console.log(evens);

// -------- REDUCE ---------

// this is basically a fold operation.

// function sum(total, element) {
//   return total + element;
// }

// const prices = [5.99, 1.99, 3.49, 6.29];

// const total = prices.reduce(sum, 0);
// // the base and the callback.

// console.log(total);

// done.

// --------- FUNCTION EXPRESSIONS ---------

// we know this:

// function hello() {
//   console.log("hello");
// }

// function expressions now

// const hello = function () {
//   console.log("hello");
// };

// // hmmm, so it's a function expression.

// hello();

// setTimeout(hello, 3000);
// // callback, and amount of milliseconds to wait.
// // note that the function expression doesn't have brackets.

// setTimeout(function () {
//   console.log("Hello");
// }, 3000);
// this is basically an unwrapping of the callback function. Note that the function basically has no name.

// function square(element) {
//   return Math.pow(element, 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// // you can declare the functions right in the thing.

// console.log(squares);
// console.log(cubes);

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// console.log(evenNums);

// ----------- ARROW FUNCTIONS ------------

// parameters => some code

// function hello() {
//   console.log("hello");
// }

// I bet

// const hello = function () {
//   console.log("hello");
// };

// hello();

// const hello = (name, age) => {
//   // params go in the parentheses
//   console.log(`hello ${name}`);
//   console.log(`your age is ${age}`);
// };

// // this skips the function declaration.

// hello("Chris", 25);

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((element) => {
//   return Math.pow(element, 2);
// });

// //rather than defining square. it's kind of like a lambda function.

// console.log(squares);

// -------- OBJECTS ---------

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 20,
//   sayHello: function (person) {
//     console.log(`Hello, ${person.firstName} ${person.lastName}!`);
//   },
//   sayBye: function (person) {
//     console.log(`Bye, ${person.firstName} ${person.lastName}!`);
//   },
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 19,
//   sayHello: function (person) {
//     console.log(`Hello, ${person.firstName} ${person.lastName}!`);
//   },
//   sayBye: function (person) {
//     console.log(`Bye, ${person.firstName} ${person.lastName}!`);
//   },
// };

// person1.sayHello(person2);
// person2.sayHello(person1);
// person1.sayBye(person2);
// person2.sayBye(person1);

// cool, so you can define attributes and functions. Nice.
// you could even construct a person with a name and then have them say hello to another person.

// --------- THIS ----------

// if we're within the context of an object, this refers to object itself.

// const person1 = {
//   name: "Spongebob",
//   favFood: "Krabby Patty",
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name}`);
//     // ah just saying name doesn't work, even though it's the local scope.
//     // you MUST use this.
//   },
//   sayFavFood: function () {
//     console.log(`My favorite food is ${this.favFood}`);
//   },
// };

// person1.sayHello();
// person1.sayFavFood();

// -------- CONSTRUCTORS ---------

// we can construct objects a lot faster.

// function Car(make, model, year, color) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color);
// }

// // so this is basically a constructor.

// // weird linting standard.

// const beetle = new Car("Volkswagen", "Beetle", 1960, "white");

// console.log(beetle.make);
// console.log(beetle.model);
// console.log(beetle.year);
// console.log(beetle.color);

// const racecar = new Car("Redbull", "V1", 2024, "red");

// console.log(racecar.make);
// console.log(racecar.model);
// console.log(racecar.year);
// console.log(racecar.color);

// ---------- CLASSES ----------

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product("Laptop", 999.99);
// product1.displayProduct();

// const product2 = new Product("Smartphone", 699.99);
// product2.displayProduct();

// const product3 = new Product("Tablet", 399.99);
// product3.displayProduct();

// const salesTax = 0.05;

// const total1 = product1.calculateTotal(salesTax);
// console.log(`Total on ${product1.name} with tax: $${total1.toFixed(2)}`);

// const total2 = product2.calculateTotal(salesTax);
// console.log(`Total on ${product2.name} with tax: $${total2.toFixed(2)}`);

// const total3 = product3.calculateTotal(salesTax);
// console.log(`Total on ${product3.name} with tax: $${total3.toFixed(2)}`);

// makes sense.

// -------- STATIC METHODS ---------

// a class owns anything static, not the methods.

// class MathUtil {
//   constructor() {}
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * radius * this.PI;
//   }
// }

// console.log(MathUtil.PI);

// // nice, this works.
// // I don't need to create an object to use this property.

// // I can do this tho.

// const MathUtil1 = new MathUtil();

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// interesting, this actually doesn't work.
// just reference the class, not the instance.

// --------- INHERITANCE -----------

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
//   hop() {
//     console.log(`This ${this.name} is hopping`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";
//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(rabbit.alive);

// rabbit.alive = false;
// console.log(rabbit.alive);

// rabbit.sleep();
// rabbit.eat();
// rabbit.hop();

// fish.sleep();
// fish.eat();
// fish.swim();

// -------- SUPER ----------

// class Animal {
//   constructor(age, name) {
//     this.age = age;
//     this.name = name;
//     this.alive = true;
//   }
// }

// class Rabbit extends Animal {
//   constructor(age, name, runSpeed) {
//     super(age, name);
//     // we abstract everything they have in common.
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal {
//   constructor(age, name, swimSpeed) {
//     super(age, name);
//     this.swimSpeed = swimSpeed;
//   }
// }

// const rabbit = new Rabbit(5, "Bunny", 10);
// const fish = new Fish(2, "Goldie", 5);

// console.log(rabbit.alive);
// console.log(fish.age);

// this is basically the exact same as Java, but in one file.

// we're gonna skip getters and setters because you know them already.

// -------- DESCTRUCTURING ----------

// example 1

// swap the value of two variables.

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// // this is actually kind of like einops in Python.

// console.log(a);
// console.log(b);

// // example 2, swap two elements in an array

// const colours = ["red", "green", "blue", "yellow", "purple"];

// [colours[0], colours[2]] = [colours[2], colours[0]];

// console.log(...colours);

// // cool.

// // example 3, assign array elements to variables

// const [first, second, third, ...extraColors] = colours;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(...extraColors);

// // the spillover. very cool.

// // ohhhh, this is cool. what if they don't match tho
// // undefined for fourth

// // example 4, values from objects

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook",
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
//   // no job
// };

// // const { firstName, lastName, age, job } = person1;

// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);

// // that's so freaking cool.
// // the curly brackets are for objects, the square brackets are for arrays.
// // okay, that makes sense.

// const { firstName, lastName, age, job = "Unemployed" } = person2;
// // default value if it doesn't exist.

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// // example 5, desctructuring in function parameters

// function displayPerson(person) {
//   console.log(`First Name: ${person.firstName}`);
//   console.log(`Last Name: ${person.lastName}`);
//   console.log(`Age: ${person.age}`);
//   console.log(`Job: ${person.job}`);
// }

// // that's so cool. So the curly braces basically means you're going to get this stuff
// // in an object, and you can assign. that said, you could do this.

// // either works. Just know you can "deconstruct" the object with the curly braces.

// displayPerson(person1);
// displayPerson(person2);

// --------- NESTED OBJECTS ----------

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   job: "Fry Cook",
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "123 Ocean Ave",
//     city: "Bikini Bottom",
//     country: "Int. Waters",
//   },
//   // this is the nested object.
// };

// console.log(person.fullName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// // I see, that's pretty simple.

// class Person {
//   constructor(fullName, age, ...address) {
//     this.fullName = fullName;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//     this.epicparam = "epicvalue";
//   }
//   // it's really interesting how you don't have to declare the attributes in advance.
// }

// const person1 = new Person(
//   "Spongebob Squarepants",
//   30,
//   "123 Ocean Ave",
//   "Bikini Bottom",
//   "Int. Waters"
// );

// // I see, doing ...address means that the rest of the parameters get passed as an array.
// // and THAT becomes the address. no need for a constructor in the params because it's in the
// // person class.

// console.log(person1.fullName);
// console.log(person1.address.city);
// console.log(person1.address.epicparam);
// you can even add new attributes on the fly.

// --------- ARRAY OF OBJECTS ---------

// const fruits = [
//   { name: "Apple", color: "Red", calories: 95 },
//   { name: "Banana", color: "Yellow", calories: 105, sentience: true },
//   { name: "Grapes", color: "Purple", calories: 62 },
// ];

// // gotcha, I understand that these are objects in an array, but the object is not templated.
// // let's add a bs variable for one of them

// console.log(fruits[1].sentience);

// function displayFruit(fruit) {
//   console.log(
//     `Fruit: ${fruit.name}, Color: ${fruit.color}, Calories: ${fruit.calories}`
//   );

//   if (fruit.sentience) {
//     console.log(`This fruit is sentient!`);
//   }
// }

// fruits.forEach(displayFruit);

// fruits.push({ name: "Orange", color: "Orange", calories: 62 });

// fruits.forEach(displayFruit);

// how would you define this otherwise

// --------- SORT METHOD ----------

// we sort in lexicographical order by default.

// let fruits = ["Banana", "Apple", "Grapes", "Orange", "Peach"];

// fruits.sort();

// console.log(fruits);

// // sorts alphabetically.

// // but what if we wanna sort by like length of the string?

// fruits.sort((a, b) => a.length - b.length);
// // this is defining a custom sort function. this is extremely powerful,
// // this is basically custom comparison like in Java which tripped you up so much.
// // if negative, a goes first. if positive, b goes first. if 0, no change.

// console.log(fruits);

// let numbers = [5, 3, 8, 1, 4];

// numbers.sort((a, b) => a - b);
// // if a is bigger, will return positive, so b goes first.
// console.log(numbers);

// numbers.sort((a, b) => b - a);
// // if b is bigger, will return positive, so a goes first.
// console.log(numbers);

// // so sick.

// const people = [
//   { name: "Spongebob", age: 20 },
//   { name: "Patrick", age: 19 },
//   { name: "Squidward", age: 30 },
//   { name: "Mr. Krabs", age: 45 },
// ];

// // let's sort them lexicographically by name

// people.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });

// people.forEach((person) => console.log(`${person.name} : ${person.age}`));

// // now let's do it by age.

// people.sort((a, b) => a.age - b.age);

// people.forEach((person) => console.log(`${person.name} : ${person.age}`));

// sweet. this is goated. This is a very simple way to sort.
// just keep in mind that if return 1, a goes second.
// if return -1, a goes first.
// and if return = 0, you can have another condition, but otherwise, nothing changes (so a goes first).

// --------- SHUFFLE ELEMENTS IN JAVASCRIPT ----------

// const cards = [
//   "A",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
// ];

// // ah I see, there's basically a 50% chance of swapping any two elements.
// // but this gets inefficient as things get large apparently, and apparently
// // it's not completely uniform.

// // Fisher-Yates Shuffle

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     // this gives us a random index from 0 to i, that makes sense.
//     // por que?
//     [array[i], array[random]] = [array[random], array[i]];
//     // cool. the current index with a random card.
//   }
// }

// shuffle(cards);

// console.log(cards);

// --------- DATE OBJECT ----------

// // Date (year, month, day, hours, minutes, seconds, milliseconds)
// const date = new Date(2024, 0, 1, 2, 30, 0, 0);
// // note 0 indexed, so january is 0
// // is this a predefined object? yes it is.

// // this is Jan 1st 2024 at 2:30am.

// console.log(date);
// // woahhh it's right now.

// const date2 = new Date("2024-01-01T02:30:00");
// // this is ISO 8601 format
// // let's always use copilot for this haha

// console.log(date2);

// const date3 = new Date(0);
// // this is what the computer thinks the first day was lol

// console.log(date3);

// const date4 = new Date(1700000000000);
// // this is milliseconds since Jan 1 1970

// console.log(date4);
// // lol this is 2023

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth();
// console.log(month + 1); // add 1 for human readability
// // the issue is that this is a number, is there any way to convert it to its actual month name?

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(monthNames[month]);
// // this feels janky. There's gotta be months pre-loaded into date class.

// const monthString = date.toLocaleString("default", { month: "long" });
// // cool, so this is the way to do it.
// console.log(monthString);

// const day = date.getDate();
// console.log(day);

// const hours = date.getHours();
// console.log(hours);

// const dayOfWeek = date.getDay();
// console.log(dayOfWeek);
// // 0 is sunday, 6 is saturday

// date.setFullYear(2050);

// date.setMonth(11); // december

// console.log(date);

// cool, I get it.

// --------- CLOSURES ----------

// closures now.

// function outer() {
//   let message = "hello";
//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();

// // this is one option to do it.

// // a closure can maintain the state of a variable

// function createCounter() {
//   count = 0;
//   // we keep initializing.
//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
//   // woah, this is like a jump table with generic function pointers in C.
//   // so do we need to return all the functions that are available?
//   // or can we just return the ones we need?
// }

// const counter = createCounter();
// counter.increment();
// // it does not reset when we call the method.
// counter.increment();
// counter.increment();

// console.log(counter.getCount());
// // this is undefined.

// function makeScoreboard() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`Score increased to ${score} pts`);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`Score decreased to ${score} pts`);
//   }

//   function getScore() {
//     return score;
//   }

//   return { getScore, increaseScore, decreaseScore };
// }

// const scoreboard = makeScoreboard();
// scoreboard.increaseScore(10);
// scoreboard.decreaseScore(5);
// scoreboard.increaseScore(3);
// console.log(`Final Score: ${scoreboard.getScore()} pts`);

// cool, this makes sense.
// awesome. so you have to make sure that you return an object of all the functions.

// ---------- SET TIMEOUT ------------

// basically artificially wait, but it's an approximation. Don't use for stopwatch.

// function sayHello() {
//   window.alert("Hello!");
// }

// // setTimeout(sayHello, 3000);

// setTimeout(function () {
//   window.alert("Hello from anonymous function!");
// }, 3000);

// we can cancel before it triggers, but we need to set an id

// const timeoutId = setTimeout(() => {
//   window.alert("Hello");
// }, 3000);

// clearTimeout(timeoutId);

// so now it doesn't actually happen.

// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => {
//     window.alert("Hello");
//   }, 3000);
//   console.log("Started");
// }

// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("Cleared");
//   // clear the speciifc timeoutId.
//   // this method requires an Id.
//   // does not work otherwise.
// }

// --------- DIGITAL CLOCK ---------

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  // I see, pad just adds two zeros to the left if it's not two characters long.
  // does it ensure that it's two characters long?
  // yes it does.
  // nice.
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
// this is like while true but does it every 1000 milliseconds.
// genius.
