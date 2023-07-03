var numbers = [1,2,3]
//push 
//elements at the end
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.push(6,7,8)   // Output: [1, 2, 3, 4, 5, 6, 7,8]


//removing the element from the end
var removedElement = numbers.pop();
console.log(removedElement); // Output: 8
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

//removing the element from the front
var removedElement = numbers.shift();
console.log(removedElement); // Output: 1
console.log(numbers); // Output: [ 2, 3, 4, 5, 6, 7 ]

//addidng element at the front
numbers.unshift(0, 1);
console.log(numbers); // Output: [ 0, 1, 2, 3, 4, 5, 6, 7 ]

var numbers2 = [8,9];
var combinedNumbers = numbers.concat(numbers2);
console.log(combinedNumbers); // Output: [ 0, 1, 2, 3, 4, 5, 6, 7 ,8,9]

var slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [ 1, 2, 3 ]

//splice: Changes the contents of an array by removing, replacing, or adding elements at a specific index.
numbers.splice(2, 2, 'a', 'b');
console.log(numbers); // Output: [  0, 1, 'a', 'b', 4, 5, 6,   7]

var numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number);
});

//map: Creates a new array with the results of calling a provided function on every element in the array.
var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6]

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]