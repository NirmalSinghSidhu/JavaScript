//if statement

var age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}


// if else
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cold outside.");
}


//switch statements

var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's Wednesday.");
    break;
  case "Thursday":
    console.log("It's Thursday.");
    break;
  case "Friday":
    console.log("It's Friday.");
    break;
  case "Staurday":
    console.log("It's Saturday.");
    break;
  default:
    console.log("Invalid  day.");
    break;
}
