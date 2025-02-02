// ****************************************************TASK 1****************************************************

// const animals = ["cat", "dog", "wolf", "lion", "eagle", "zebra"];

// animals.pop();

// console.log(animals);

// ****************************************************TASK 2****************************************************

// const names = [
//   "Jack",
//   "Dan",
//   "James",
//   "Stephen",
//   "Joe",
//   "Ben",
//   "Esther",
//   "Ella",
//   "Eve",
//   "Judith",
// ];

// names.sort();

// console.log(names);

// names.sort().reverse();

// console.log(names);

// const numbers = [5, 325, 67, 100000, 150];

// numbers.sort();

// console.log(numbers);

// numbers.sort().reverse();

// console.log(numbers);

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: "shuri", age: 16 },
  { name: "killmonger", age: 32 },
];

console.log(people.sort((a, b) => a.age - b.age).map((x) => x.name));

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// function compare(a, b) {
//   return a.age - b.age;
// }
