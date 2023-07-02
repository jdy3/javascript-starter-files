// ****************************************************TASK 1 - OBJECTS****************************************************

const personA = {
  name: "Judith",
  age: 19,
  location: "Bethnal Green",
  likes: "Raving",
};

const personB = {
  name: "Lara",
  age: 18,
  location: "Chiswick",
  likes: "Hiking",
};

const personC = {
  name: "Michelle",
  age: 18,
  location: "Barnet",
  likes: "Swimming",
};

const personD = {
  name: "Shingui",
  age: 21,
  location: "Manchester",
  likes: "Running",
};

function biography(person) {
  return `Hello, my name is ${person.name}. I am ${person.age} years old, I live in ${person.location} and I like ${person.likes}`;
}

console.log(biography(personA));

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

// const x = 6;
// const y = 4;

// const addition = x + y;

// console.log("Addition: x + y " + addition);

// const subtraction = x - y;

// console.log("Subtraction: x - y " + subtraction);

// const multiplication = x * y;

// console.log("multiplication: x * y " + multiplication);

// const division = x * y;

// console.log("Division: x + y " + division);

// const exponent = x ** y;

// console.log(`Exponent: x**y ${exponent}`);

// const remainder = x % y;

// console.log(`Remainder: x % y ${remainder}`);

// const square = y * y;

// console.log(`Square: y*y ${square}`);

// let myAge = 19;
// const minDrivingAge = 18;

// const drive = (age, minAge) => {
//   return age >= minAge
//     ? "Yes, you are old enough to drive!"
//     : "No, you are not old enough to drive.";
// };

// console.log(drive(myAge, minDrivingAge));

// ****************************************************TASK 3****************************************************

// Homework

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

const whoIsOlder = (person1, person2) => {
  return person1.age > person2.age
    ? `${person1.name} is ${calculator.subtract(
        person1.age,
        person2.age
      )} years older that ${person2.name}.`
    : person2.age > person1.age
    ? `${person2.name} is ${calculator.subtract(
        person2.age,
        person1.age
      )} years older that ${person1.name}.`
    : `${person1.name} and ${person2.name} are both ${person1.age} years old.`;
};

console.log(
  whoIsOlder(personA, personD),
  whoIsOlder(personD, personA),
  whoIsOlder(personB, personC)
);
