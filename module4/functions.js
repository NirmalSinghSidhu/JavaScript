//defining a function

function greet() {
    console.log("Hello, world!");
  }

//calling a function
greet();

// FUnction parameters


function greet(name){
    console.log("Hello, "+name+"!");
}

greet("John"); // Output: Hello, John!
greet("Alice"); // Output: Hello, Alice!

//Return values

function add(a,b){
    return a+b;
}

var result = add(2,3);

console.log(result) // output: 5


//function expressions
//Functions can also be defined as expressions, either by assigning them to variables or using them as anonymous functions.
// Function expression assigned to a variable
var greet = function(name) {
    console.log("Hello, " + name + "!");
  };
  
  greet("John"); // Output: Hello, John!
  
  // Anonymous function expression
  setTimeout(function() {
    console.log("Delayed message");
  }, 2000);