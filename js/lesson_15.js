// Arrays

// ###############
// ###############

// const myArray = [];
// //  add elements to an array
// // base array for further examples
// myArray[0] = "John";
// myArray[1] = 2222;
// myArray[2] = false;

// -----------

// //  refer to an array
// console.log(myArray);

// //  length property
// console.log(myArray.length);

// // last element in an myArray
// console.log(myArray[myArray.length - 1]);

// // second element in myArray
// console.log(myArray[1]);

// -----------

// // The position of items are not locked. adding and removing items do change the position of other items

// // adding school to last position of myArray
// myArray.push("school");
// console.log(myArray);

// // remove the last item of an array by pop and saves it in lastItem
// const lastItem = myArray.pop();
// console.log(lastItem);

// --

// // adding 42 to first position of myArray
// myArray.unshift(42);
// console.log(myArray);

// // remove the first item of an array by shift and saves it in firstItem
// const firstItem = myArray.shift();
// console.log(firstItem);

// // adding 22 to first position of myArray and tells the length of myArray
// const newLength = myArray.unshift(22);
// console.log(newLength);

// --

// const newLength = myArray.unshift(22);
// console.log(newLength);

// -----------

// // deleting data in a array leaves undefined data items
// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// --

// // splice(); can be used to delete or replace one or more values
// myArray.splice(2, 1, 42);
// // 2, -> position where to begin to splice
// // 1, -> how many items are affected by splice to delete
// // 42, -> If specified, it replaced affected items. if nothing is affected it is just added
// console.log(myArray);
// console.log(myArray[1]);

// ###############
// ###############

// // creating array with items from A to F
// const myArray = ["A", "B", "C", "D", "E", "F"];

// -----------

// // slicing my Array from position 2 to 5
// const newArray = myArray.slice(2, 5);
// console.log(newArray);

// --

// // reverse the position of all items within a array
// myArray.reverse();
// console.log(myArray);

// --

// // takes all items within the array and put them together in one string. seperating all items with commas by default.
// const newString = myArray.join();

// console.log(newString);

// --

// // takes all items within the array and put them together in one string. seperating all items with commas by default.
// const newString = myArray.join();

// // split the whole string at all "," and add all splitted parts as items to the array
// const newArray = newString.split(",");

// console.log(newArray);

// --

// legacy way to combine arrays

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// // the concat method joins two arrays into one
// const newArray = myArrayB.concat(myArrayA);
// console.log(newArray);

// --

// // modern way to combine multiple arrays

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// // spread operator "..." : creating a new array
// // take the array values within the spread operator and spread them out as individuel values in  one array
// const newArray = [...myArrayB, ...myArrayB];
// console.log(newArray);

// --

// // Without the spread operator we would have to arrays nested in a array
// const newArray = [myArrayB, myArrayB];
// console.log(newArray);

// -----------

// // declare four different arrays with each 3 items
// const weaponShelfA = ["Heavy Pistol", "Very Heavy Pistol", "Rocket Launcher"];
// const weaponShelfB = ["Machete", "Sniper Rifle", "SMG"];

// const cyberShelfA = ["Mantis-Blades", "Sandevistan", "Subdermal Armor"];
// const cyberShelfB = ["MicroOptics", "Interface Plugs", "Quick Change Mount"];

// console.log(weaponShelfA[1]);
// // or
// console.log(cyberShelfB[0]);

// // put two of one sort of the four arrays into another array
// const weaponDept = [weaponShelfA, weaponShelfB];
// const cyberDept = [cyberShelfA, cyberShelfB];

// console.log(weaponDept[0][1]);
// console.log(cyberDept[1][0]);

// // put the two arrays with another two arrays within it into one array
// const nightMarket = [weaponDept, cyberDept];

// console.log(nightMarket[0][0][1]);
// console.log(nightMarket[1][1][0]);

// // navigatiion through multiple level arrays succeed with multpile braces [][]...
// // each braces stands for one dimesnion

// -----------

// adding a randomizer for the selection of array items

// declare four different arrays with each 3 items
const weaponShelfA = ["Heavy Pistol", "Very Heavy Pistol", "Rocket Launcher"];
const weaponShelfB = ["Machete", "Sniper Rifle", "SMG"];

const cyberShelfA = ["Mantis-Blades", "Sandevistan", "Subdermal Armor"];
const cyberShelfB = ["MicroOptics", "Interface Plugs", "Quick Change Mount"];

// put two of one sort of the four arrays into another array
const weaponDept = [weaponShelfA, weaponShelfB];
const cyberDept = [cyberShelfA, cyberShelfB];

// put the two arrays (with another two arrays within it) into another array
const nightMarket = [weaponDept, cyberDept];

// creating Randomizer
const randomThreeA = Math.floor(Math.random() * 3);
const randomThreeB = Math.floor(Math.random() * 3);
const randomThreeC = Math.floor(Math.random() * 3);
const randomTwoA = Math.floor(Math.random() * 2);
const randomTwoB = Math.floor(Math.random() * 2);
const randomTwoC = Math.floor(Math.random() * 2);
const randomTwoD = Math.floor(Math.random() * 2);
const randomTwoE = Math.floor(Math.random() * 2);
const randomTwoF = Math.floor(Math.random() * 2);

console.log(nightMarket[randomTwoD][randomTwoA][randomThreeA]);
console.log(nightMarket[randomTwoE][randomTwoB][randomThreeB]);
console.log(nightMarket[randomTwoF][randomTwoC][randomThreeC]);

// navigatiion through multiple level arrays succeed with multpile braces [][]...
// each braces stands for one dimesnion
