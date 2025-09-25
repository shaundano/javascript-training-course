// ---------- STRING METHODS ----------

// let username = "   mcLov inLegend27      ";

// console.log(username);

// console.log(username.charAt(1));

// // cool, this lets me get one character.

// console.log(username.indexOf("L"));

// // this tells me where in the string a character is located.
// // the first one tho

// // very cool. Didn't know about that. Wonder if it exists in uhhh other OOP languages?

// console.log(username.lastIndexOf("e"));
// // cool, this is the last instance of the character.

// console.log(username.length);
// // this tells me how many characters are in the string.

// // let us find a way to trim the string lmao.

// username = username.trim();

// //por que this no work?
// // ah I see it doesn work but only beginning and end

// console.log(username);

// username = username.toUpperCase();

// console.log(username);

// username = username.toLowerCase();

// console.log(username);

// username = username.repeat(3);

// console.log(username);

// let result = username.startsWith(" ") || username.endsWith(" ");

// console.log(result);

// // these are all methods that exist in other OOP

// if (result) {
//   console.log("Your username can't begin  or end with empty space");
// } else {
//   console.log("Your username is good to go!");
// }

// let result2 = username.includes(" ");

// if (result2) {
//   console.log("Your username can't have spaces in it");
// } else {
//   console.log("Your username is good to go!");
// }

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "");

// // this is SICK

// phoneNumber = phoneNumber.padStart(13, "+1 ");

// phoneNumber = phoneNumber.padEnd(32, " call for good time");

// console.log(phoneNumber);

// ---------- SLICE METHOD ----------

// const fullName = "Christopher Tardy";

// // let's get the first and last char.

// let firstChar = fullName.slice(0, 1);
// // same as erase

// let lastChar = fullName.slice(-1);
// // -1 is the last char. let's get second to last char.

// let lastChar2 = fullName.slice(-2, -1);
// // notice not just -2, you also need to say -1. Kinda weird ngl.
// // I wish I could break this down into first principles

// console.log(firstChar);
// console.log(lastChar);
// console.log(lastChar2);

// // fuck it, let's parse bb

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// // nice, lets us parse.

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// // done yo.

// ---------- METHOD CHAINING ----------

// let username = window.prompt("enter username");

// NO METHOD CHAINING //

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// username = username.slice(1);
// username = username.toLowerCase();
// username = letter + username;

// console.log(username);

// METHOD CHAINING //

// username =
//   username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();

// console.log(username);

// Some notes on equality vs strict equality.

// === means that value and datatype are equal.
// !== means that value AND datatype are not equal.

let max = 100;
let min = 1;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 5;
let running = true;

while (running) {
  let choice = window.prompt("pick a number between 50 and 100");
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
