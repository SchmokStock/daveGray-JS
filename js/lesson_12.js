// Loops

// -----------------------------------------
// while loops

/*
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber);

// "++" the same as "myNumber = myNumber + 1"
  myNumber ++ ;

// "+= 2" the same as "myNumber = myNumber + 2"
myNumber += 2;
}
*/

//  do not create an endless loop, because it is gonna run infitely until the whole memory is used
//  solution: close the tab
// -----------------------------------------
// do while loop

/*
let myNumber = 50;
do {
  console.log(myNumber);
  myNumber++;
} while (myNumber < 50);
*/

// difference between while loops and do while loops
// -> do while loops executes the code block at least once, even if the requirements are not fulfilled
// -----------------------------------------
// for loop

// you can put "let i = 1;" before or within the braces
// you can put "i++;" in the code block or within the braces

// let i = 0;
for (let i = 0; i <= 10; i++) {
  console.log(i);
  // i++;
}

// first syntax
// let name = "John";
// let i = 0;

// for (; i < name.length; ) {
//   console.log(name.charAt(i));
//   i++;
// }

// second syntax
// let name = "John";

// for (let i = 0; i < name.length; i++) {
//   console.log(name.charAt(i));
// }

// while (true)

// let name = "John";
// let counter = 0;
// let myLetter;
// while (true) {
//   myLetter = name[counter];
//   console.log(myLetter);
//   if (myLetter === "h") break;
//   counter++;
// }

// let name = "John";
// let counter = 0;
// let myLetter = Math.floor(Math.random() * name.length);
// console.log(myLetter);

// while (true) {
//   if (counter === myLetter) break;
//   console.log(counter);
//   counter++;
// }

// Loops with "(true)" go on endlessly until a "break" statement comes in

// continue statements

let name = "John";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "h") break;
  counter++;
}

// If a loop reach a continue statement then the loop starts over immediately
