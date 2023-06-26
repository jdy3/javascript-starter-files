// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

const name = "Tanya";
let age = 10;

let a = 5;
let b = 10;
let c = a + b;

console.log(c);

a = 20;

console.log(c);

c = a + b;

console.log(c);

function sayHey() {
  console.log("Hey!");
}

function conversation() {
  sayHey();
  console.log("How are you?");
  console.log("Goodbye");
}

function futureAge(name, currentAge) {
  let age = currentAge + 5;
  //return "Hi " + name + "! You will turn " + age + "in 5 years.";
  return `Hi ${name}! You will turn ${age} in 5 years.`;
}

console.log(futureAge("Judith", 19));
