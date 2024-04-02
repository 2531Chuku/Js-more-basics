function add7(number) {
  return number + 7;
}

// console.log(add7(2));

function multiple(num, num2) {
  return num * num2;
}
// console.log(multiple(2,2));

// i'm not happy with the returned results
function Capitalize(string) {
  let isLowerCase = /[a-z]/g;
  let isUpperCase = /[A-Z]/g;
  let isCombined = /[a-zA-Z]/g;
  const myString =
    string.match(isLowerCase) || string.match(isUpperCase)
      ? string[0].toUpperCase() + string.slice(1).toLowerCase()
      : string;

  if (string.match(isCombined)) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  } else {
    return `String should not include numbers`;
  }

  return myString;
}
// console.log(Capitalize("pErCVaL"));

function LastLetter(letter) {
  let myLastLetter = letter.slice(-1);
  return myLastLetter;
}
// console.log(LastLetter("Hello"));

function getUserInput() {
  // ask for user input
  let userInput = (prompt("Please input your desired number"));
  for (let i = 0; i <= userInput; i++) {
    if (userInput % 3 === 0) {
      console.log("fizz");
    } else if (userInput % 5 === 0) {
      console.log("buzz");
    } else if (userInput % 3 === 0 || userInput % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("please enter a number");
    }
  }
}

// PrintNumber();


// tacking  the errors  very vital to check the data type which  you are trying the method, rewrite my function and variable maintain consistant of the vocabulary

/*
have a length of line of code  of 80 words 
comments, do not use when using git and this should be a why
maintain function and variable naming
TTD writing a test to test our code before writing a code
*/ 

