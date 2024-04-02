import { Car } from "./data.js"; // not a default module
import Dom from "./dom.js"; // default export

// Task 01
/* adding two numbers*/
let number = 1;
let number2 = 2;

let results = number + number2;
console.log("The results is " + results);

// Task 2

let max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

// playing with an  external file
let myCar = Car;
let myString = myCar.indexOf("W");
console.log(myString);

// console.log(Dom)

function getSum(number) {
  const firstNumber = number;
  return function generateSum(value) {
    const secondNumber = value;
    return firstNumber + secondNumber;
  };
}
const sum = getSum(2);
console.log(sum(4));

// destructuring  can be done from both objects and arrays
const Persons = {
  name: name,
  age: age,
  type: type,
};

const { name, age, type } = Persons;
console.log({ name, age, type });

// encapsulation and namespacing
// classes

