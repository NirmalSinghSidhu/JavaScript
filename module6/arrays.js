//creating arrays

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true];

//Accessing Elements

console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3


//Manipulating Arrays

//push
numbers.push(6, 7);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

//pop()
const lastNumber = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(lastNumber); // Output: 7

//splice
numbers.splice(2, 1); // Remove one element at index 2
console.log(numbers); // Output: [1, 2, 4, 5, 6]

numbers.splice(1, 0, 10, 20); // Insert elements at index 1
console.log(numbers);  




