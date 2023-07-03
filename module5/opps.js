// 1. Encapsulation


class Car {
    constructor() {
      this.speed = 0; // encapsulated property
    }
  
    accelerate() {
      this.speed += 10; // encapsulated method
    }
  
    brake() {
      this.speed -= 5; // encapsulated method
    }
  }
  
  const myCar = new Car();
  myCar.accelerate();
  console.log(myCar.speed); // Output: 10
  myCar.brake();
  console.log(myCar.speed); // Output: 5
  

  //2. Inheritence
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

// Polymorphisim
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
  
  