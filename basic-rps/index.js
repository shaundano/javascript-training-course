// ---------- THE DOM ----------

// the DOCUMENT OBJECT MODEL

// web browser constructs the DOM from the HTML document

// previously, we'd get stuff like this:

// document.title = "My websoot";

// document.body.style.backgroundColor = "hsl(200, 100%, 90%)";
// // kind of annoying that it's a string.
// // cool!

// console.log(document);

// const username = "";

// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += ", " + (username === "" ? `Guest` : username) + "!";
// DAMN, that's a lot of stuff

// later on, we'll change to dark mode.

// very cool. Didn't know about document objecgt model.

// ---------- ELEMENT SELECTORS IN THE DOM ----------

// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// basically all of these.
// we've been doing getElementById

// const myHeading = document.getElementById("my heading");

// myHeading.style.color = "blue";
// // wow, so not only is the DOM editable,
// // all elements within the DOM can be edited.
// // but tbh this is super cumbersome.

// // more stuff.

// const fruits = document.getElementsByClassName("fruit");
// // this will give us an HTML collection.
// // it's like an array, but technically not the same.
// console.log(fruits);
// // their names is the textContent.

// fruits[0].style.color = "red";
// fruits[1].style.color = "green";
// fruits[2].style.color = "pink";

// // you can iterate over them as well.

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.fontSize = "40px";
// });

// // get elements by tag name. h4, ul, li,

// const h4elements = document.getElementsByTagName("h4");

// for (let elem of h4elements) {
//   console.log(elem.textContent);
//   // cool
// }

// // try all the root vegetables.

// const allveggies = document.getElementsByTagName("ul");

// for (let veg of allveggies[0].children) {
//   // oh SICK. So children is what allows us
//   // to go into the ul and get the li's.
//   // now, this isn't exactly SQL because
//   // we need the array index.
//   // I bet that query selector can do this better.

//   console.log(veg.textContent);
// }

// // this is how you can apply forEach, but I'm
// // not that passionate about forEach.

// // querySelector, first element or NULL.

// const element = document.querySelector(".fruit");
// // . fruit because fruit is a class and . represents class
// // # for id
// // tag name is just the tag name
// console.log(element.textContent);
// // apple as expected.

// // what about querySelectorAll?
// // what about nth   child?
// const allfruits = document.querySelectorAll(".fruit");
// // I bet this returns a node list.
// console.log(allfruits[1].textContent);
// sweet. it's just a list of HTML doms.

// NODE list is static. we fetch and that's it.
// HTML collections are dynamic.

// yes, it does.
// you can also do forEach on this.

// --------- NAVIGATING DOM ----------

// a child element is an element within another element.

// our ul list of fruits has three children.
// and so forth.

// const element = document.getElementById("fruits");

// const firstChild = element.firstElementChild;
// console.log(firstChild.textContent);
// firstChild.style.color = "red";

// const lastChild = element.lastElementChild;
// console.log(lastChild.textContent);
// lastChild.style.color = "pink";

// const ulElements = document.querySelectorAll("ul");
// // will return a node list.

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.children[0];
//   firstChild.style.backgroundColor = "yellow";
// });

// // cool! highlights first child of each ul element.

// // very sick.

// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.children[ulElement.children.length - 1];
//   // -1 for last doesn't work.
//   lastChild.style.backgroundColor = "pink";
// });

// // what about middle child?
// ulElements.forEach((ulElement) => {
//   const middleChild =
//     ulElement.children[Math.floor(ulElement.children.length / 2)];
//   middleChild.style.backgroundColor = "lightblue";
// });
// // ok, so it's non-standard, but it works.

// // now they all have id.

// // getting next sibling, you can access next.

// const element2 = document.getElementById("apple");
// const next = element2.nextElementSibling;
// console.log(next.textContent);
// // cool. it seems to know.
// // lets get the parent.

// const parent = element2.parentElement;
// console.log(parent.id);
// fruits, as expected. note you can't do textcontent,
// it's a ul element.

// --------- ADD & CHANGE HTML ELEMENTS --------

// 1. create the element

// const newH1 = document.createElement("h1");

// // 2. configure the element

// newH1.textContent = "I am a new h1!";

// newH1.id = "my-new-h1";
// newH1.style.color = "tomato";

// // 3. attach the element to the DOM

// document.body.append(newH1);
// document.getElementById("box4").prepend(newH1);
// // i see, it becomes the first child of the box.

// // doesn't duplicate. bottom, then top.

// // like, it's cool but also not that useful.
// // I guess you could have components
// // show up dynamically.

// // what about sandwich in between?

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// // ahhh, so this doesn't make it a child of box2,
// // but rather puts it before box2 in the body.

// // what about after?

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3.nextElementSibling);
// // insertAfter doesn't exist.
// // ok, so you have to do nextElementSibling.

// // if you want to remove, go to parent and removeChild

// const parent = newH1.parentElement;
// parent.removeChild(newH1);
// ok, so this works.
// you can also do newH1.remove();
// which is way easier.

// nice. I see, it becomes the first child of the box.

// --------- MOUSE & CLICK EVENTS ---------

// we're gonna learn about event listeners, bitch.

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");
// // access via dom

// function changeColor(event) {
//   // just make it red and ouch.
//   myBox.style.backgroundColor = "red";
//   myBox.textContent = "Ow! D:";
//   // weird initial state.
// }

// myButton.addEventListener("click", changeColor);

// // I prefer this but of course we can lambda out it with =>

// myButton.addEventListener("mouseover", (event) => {
//   myBox.style.backgroundColor = "lightblue";
//   myBox.textContent = "Wait, noooooo noooo!";
// });

// myButton.addEventListener("mouseout", (event) => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Click Me :D";
// });

// ----------- KEY EVENTS -----------

// keydown, keyup, keypress (we not rly gonna learn,
// not compatible with all browsers)

// const myBox = document.getElementById("myBox");
// const moveAmount = 100;
// let x = 0;
// let y = 0;

// // Set position for top/left to work
// myBox.style.position = "relative";

// // we're gonna move it.

// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();
//     // prevent Default prevents scrolling
//     // it's an arrow key.
//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//     // you need position relative in style css for this.

//     myBox.textContent = "😱";
//     myBox.style.backgroundColor = "orange";
//     // very cool, this is how you move an object
//   }
// });

// document.addEventListener("keydown", (event) => {
//   // make the emoji = shocked
//   myBox.textContent = "😱";
//   myBox.style.backgroundColor = "orange";
//   // cool, it works.
//   // this actually logs an entire event which is an
//   // object
// });

// document.addEventListener("keyup", (event) => {
//   console.log(`Key up => ${event.key}`);
//   myBox.textContent = "😀";
//   myBox.style.backgroundColor = "lightgreen";
//   // cool, it works.
//   // this actually logs an entire event which is an
//   // object
// });

// arrows also accessible.

// what does the number mean?

// -------- HIDING IN HTML ---------

// const hide = document.getElementById("Hide");
// const img = document.getElementById("myImg");

// hide.addEventListener("click", (event) => {
//   if (img.style.visibility !== "hidden") {
//     img.style.visibility = "hidden";
//     hide.textContent = "Show";
//   } else {
//     img.style.visibility = "visible";
//     hide.textContent = "Hide";
//   }
// });

// ah just do visibility if you still want it to show up.
// display, no space is reserved for it.
// I can see uses for both.

// ---------- NODELIST ----------

// nodelist is static colelction of HTML elements
// we get em from query selector all.
// we don't have built in methods for em tho

// remember, . for classes.

// let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// // buttons.forEach((button) => {
// //   button.style.backgroundColor = "lightblue";
// //   button.textContent = "Yee button";
// // });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     button.style.backgroundColor = "lightblue";
//     button.textContent = "Yee button";
//     const newButton = document.createElement("button");
//     newButton.textContent = "New Button";
//     newButton.className = "myButtons";
//     document.body.append(newButton);
//     buttons = document.querySelectorAll(".myButtons");
//     console.log(buttons);
//     // this doesn't work because the nodelist is static.
//     // you have to requery it.
//   });
// });

// cool.

// cool, so for each allows us to query and then alter

// ---------- CLASS LIST ----------

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// // oh sick

// myButton.addEventListener("mouseover", (event) => {
//   myButton.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   myButton.classList.remove("hover");
// });

// myButton.addEventListener("click", (event) => {
//   if (myButton.classList.contains("enabled")) {
//     myButton.classList.replace("enabled", "disabled");
//   } else if (myButton.classList.contains("disabled")) {
//     myButton.classList.replace("disabled", "enabled");
//   }
//   // this is basically toggle.
// });

// so we toggle enabled, and we mouseover hover.
// pretty sick. This is all thanks to classList
// which operates like a list in Java.
// just add to it. You can add as many classes as you want.
// which is something that is cumbersome in html,
// and you can't add classes dynamically.

// there's also replace, you can replace enabled with disabled

// rock paper scissors time.

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

rock.addEventListener("click", (event) => {
  playGame(1);
});

paper.addEventListener("click", (event) => {
  playGame(2);
});

scissors.addEventListener("click", (event) => {
  playGame(3);
});
