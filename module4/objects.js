
//Creating an object using curly braces { }
var person = {
    name: "John",
    age: 30,
    gender: "male"
};

//Constructor function
 function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
 }

 var person1 = new Person("John",30,"male");

// Creating an object using the Object.create()

var person = Object.create(null);
person.name = "John";
person.age = 30;
person.gender = "male";

//object methods
var person = {
    name: "John",
    age: 30,
    gender: "male",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.greet(); // Output: "Hello, my name is John"
  
  

  var person = {
    name: "John",
    age: 30
  };
  
  person.gender = "male";
  person.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  