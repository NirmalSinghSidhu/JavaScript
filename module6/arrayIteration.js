// Array Iteration Methods

//forEach()

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});

const num = [7,8,9];
num.forEach((num) =>{
    console.log(num);
});

//map
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const cubedNumbers = numbers.map((number) =>{
    return number*number*number;
});

console.log(cubedNumbers);

//filter()

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

const odd = numbers.filter((numbers) =>{
    return numbers % 2 != 0;
});

console.log(odd)  //output :[ 1, 3, 5 ]

//reduce()

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);
console.log(sum); // Output: 15


const product = numbers.reduce((result,numbers) =>{
    return result * numbers;
});
console.log(product);  //output : 120


