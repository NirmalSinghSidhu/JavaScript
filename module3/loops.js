//Loops in the javascript

//for loops

for (var i = 0; i < 5; i++) {
    console.log(i);
  }

//while
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//do while
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


//break statement Terminates the current loop or switch statement.
for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }

  //continue: Skips the current iteration of a loop and continues with the next iteration.
  
  for (var i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }
  