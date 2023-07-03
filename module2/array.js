//declaring the arrays
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Jane", "Alice"];
var mixed = [1, "hello", true];

//accessing elements
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3


numbers[2] = 10; // Modifying the element at index 2
console.log(numbers); // Output: [1, 2, 10, 4, 5]

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5



var num = [1, 2, 3];
num.push(4); // Adds 4 at the end
num.unshift(0); // Adds 0 at the beginning
console.log(num); // Output: [0, 1, 2, 3, 4]

var removedElement = num.pop(); // Removes 4 and returns it
console.log(removedElement); // Output: 4
console.log(num); // Output: [0, 1, 2, 3]

//Iterating over an Array:

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});


var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


