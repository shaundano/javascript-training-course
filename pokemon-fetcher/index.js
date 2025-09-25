// --------- PROMISES ---------

// promise will either be resolved or rejected
// this actually seems like new content for me.

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("Dog walked");
//       } else {
//         reject("Dog not walked");
//       }
//     }, 1000);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("Kitchen cleaned");
//       } else {
//         reject("Kitchen not cleaned");
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve("Trash taken out");
//       } else {
//         reject("Trash not taken out");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => console.log(value))
//   .then(() => console.log("All done!"))
//   .catch((error) => console.error(error));

// cool, that's promises & then.
// what if task fails

// callback hell here.
// promises are alternative.

// need to accept some callbacks.

// cool. . catch catches everything, we return an error on trash not. taken out.

// ---------- ASYNC & AWAIT ----------

// async makes a function return a promise
// await makes a function wait for a promise

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("Dog walked");
//       } else {
//         reject("Dog not walked");
//       }
//     }, 1000);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("Kitchen cleaned");
//       } else {
//         reject("Kitchen not cleaned");
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve("Trash taken out");
//       } else {
//         reject("Trash not taken out");
//       }
//     }, 500);
//   });
// }

// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();
//     // this is gonna wait for the promise to be resolved or rejected?
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("All done!");
//   } catch (error) {
//     console.error(error);
//   }

//   // cool. this catches trash.
// }

// // you NEED async to use await

// doChores();

// --------- JSON FILES ---------

// Javascript Object Notation (JSON) is a lightweight data-interchange format
// usually an object of key value pairs, or array. think of like const person1

// they're one long string. Can convert javascript object to JSON string with

// const names = ["Spongebob", "Patrick", "Sandy", "Mr. Krabs", "Squidward"];

// // console.log(names);
// // const jsonString = JSON.stringify(names);
// // // stringify basically turns something into JSON object, one long string.

// // console.log(names);

// const person = {
//   name: "Spongebob",
//   age: 34,
//   city: "Seattle",
//   hobbies: ["jellyfishing", "karate", "blowing bubbles"],
// };

// console.log(person);

// const jsonString = JSON.stringify(person);

// console.log(jsonString);
// // AHHHH ok i see now. it logs a long string and not an object.

// const people = [
//   {
//     name: "Spongebob",
//     age: 34,
//     city: "Seattle",
//     hobbies: ["jellyfishing", "karate", "blowing bubbles"],
//   },
//   {
//     name: "Patrick",
//     age: 33,
//     city: "Seattle",
//     hobbies: ["rock collecting", "eating", "napping"],
//   },
//   {
//     name: "Sandy",
//     age: 32,
//     city: "Houston",
//     hobbies: ["science", "karate", "surfing"],
//   },
//   {
//     name: "Mr. Krabs",
//     age: 55,
//     city: "Seattle",
//     hobbies: ["money", "business", "cooking"],
//   },
//   {
//     name: "Squidward",
//     age: 40,
//     city: "Seattle",
//     hobbies: ["playing clarinet", "painting", "napping"],
//   },
// ];

// console.log(people);

// const jstring = JSON.stringify(people);
// console.log(jstring);
// // cool... One really long string.

// // now let's parse

// const people2 = `[
//     {
//         "name": "Spongebob",
//         "age": 34,
//         "city": "Seattle",
//         "hobbies": ["jellyfishing", "karate", "blowing bubbles"]
//     },
//     {
//         "name": "Patrick",
//         "age": 33,
//         "city": "Seattle",
//         "hobbies": ["rock collecting", "eating", "napping"]
//     },
//     {
//         "name": "Sandy",
//         "age": 32,
//         "city": "Houston",
//         "hobbies": ["science", "karate", "surfing"]
//     },
//     {
//         "name": "Mr. Krabs",
//         "age": 55,
//         "city": "Seattle",
//         "hobbies": ["money", "business", "cooking"]
//     },
//     {
//         "name": "Squidward",
//         "age": 40,
//         "city": "Seattle",
//         "hobbies": ["playing clarinet", "painting", "napping"]
//     }
// ]`;
// // the backticks make it a string.

// const backToObj = JSON.parse(people2);

// console.log(people2);
// console.log(backToObj);

// idk how that happened. Oh well.
// cool.

// ----------- API CALLS NOW BABYYYYY -----------

// fetch (url of resources, object of options {})
// METHOD: GET, POST, PUT, DELETE

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Could not fetch resource`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.name);
//     console.log(data.weight);
//     console.log(data.abilities);
//     // cool! now we have a JSON object of pikachu data.
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// cool.

// status will be ok if in the 200 range.

// cool. but where is da pikachu

// pass in a string represenation of the URL.
// it's promise based, will either resolve or reject.

// if we try to get spongebob, it will 404 not found.

// let's do async and await.

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
    imgElement.style.display = "block"; // Make sure the image is visible
    console.log(data.name);
    console.log(data.weight);
    console.log(data.abilities);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
