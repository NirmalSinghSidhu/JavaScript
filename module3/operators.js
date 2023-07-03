//Artithmatic operators
/* Addition: +
Subtraction: -
Multiplication: *
Division: /
Remainder (Modulo): %
Exponentiation: **
*/

var x = 10;
var y = 5;
console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
console.log(x % y); // Output: 0
console.log(x ** y); // Output: 100000


//Assignment Operators:

var x = 10;
x += 5; // Equivalent to x = x + 5;
console.log(x); // Output: 15

x -= 5; // Equivalent to x = x - 5;
console.log(x); // Output: 15 - 5 = 10

x *= 5; // Equivalent to x = x * 5;
console.log(x); // Output: 10 * 5 = 50

x /= 5; // Equivalent to x = x / 5;
console.log(x); // Output: 50 / 5 = 10

x %= 5; // Equivalent to x = x % 5;
console.log(x); // Output: 0


//comparison operators

var x = 5;
var y = 10;
console.log(x == y); // Output: false
console.log(x !== y); // Output: true
console.log(x > y); // Output: false
console.log(x <= y); // Output: true

/* logical oparators
Logical AND: &&
Logical OR: ||
Logical NOT: !  
*/

var x = true;
var y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x); // Output: false


//String operators

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"


//Unary Opearators

var x = 5;
x++; // Equivalent to x = x + 1;
console.log(x); // Output: 6
console.log(-x); // Output: -6
console.log(!true); // Output: false
console.log(typeof x); // Output: "number"
