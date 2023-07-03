//Arrow functions

var multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

var square = x => x * x;
console.log(square(4)); // Output: 16

var divide = (a, b) => a / b;
console.log(divide(12,5));

//control statements

//return 

function sum(a, b) {
    return a + b;
  }
console.log(sum(2, 3)); // Output: 5

//throw : a user defined exception

function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }

console.log(divide(10, 0)); // Throws an exception


//try...catch...finally

try {
    // Code that may throw an exception
    console.log("Inside try block");
    throw new Error("Custom exception");
  } catch (error) {
    // Code to handle the exception
    console.log("Caught an exception:", error.message);
  } finally {
    // Code that always executes, regardless of whether an exception occurred or not
    console.log("Inside finally block");
  }
  
  
  