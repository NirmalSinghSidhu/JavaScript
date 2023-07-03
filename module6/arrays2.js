//Array Manipulatio methods

//push()
const fruits = ["apple", "banana"];
fruits.push("orange", "kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]


//pop()
const removedFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]
console.log(removedFruit); // Output: "kiwi"

//shift
const removedFruit2 = fruits.shift();
console.log(fruits); // Output: ["banana", "orange"]
console.log(removedFruit2); // Output: "apple"

//unshift
fruits.unshift("apple", "kiwi");
console.log(fruits); // Output: ["apple", "kiwi", "banana", "orange"]


