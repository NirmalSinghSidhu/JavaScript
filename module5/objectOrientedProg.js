//Object Oriented Programming


// 1. Encapsulation

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const john = new Person("John", 30);
  john.greet(); // Output: "Hello, my name is John"

  

//2. Inheritance

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }
  
  const dog = new Dog("Buddy");
  dog.eat(); // Output: "Buddy is eating."
  dog.bark(); // Output: "Woof!"

  
// 3. Pilymorphism
class Shape {
    getArea() {
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  const circle = new Circle(5);
  const square = new Square(5);
  
  console.log(circle.getArea()); // Output: 78.53981633974483
  console.log(square.getArea()); // Output: 25
  
  
