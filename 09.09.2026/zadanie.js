const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dodawanie = function (a, b) {
  return Number(a) + Number(b);
}
const odejmowanie = function (a, b) {
  return a - b
}
const mnozenie = function (a, b) {
  return a * b
}




console.log("------------");
console.log("One simple equation calculator")
console.log("1. addition");
console.log("2. subtraction");
console.log("3. multiplication")
console.log("4. exit")
console.log("------------");

rl.question(`Choose an option from listed`, option => {
  switch (option) {
    case '1':
      rl.question("choose the first number", input1 => {
        rl.question("choose the second number", input2 => {
          console.log("the answer is: ", dodawanie(input1, input2)
          );
          rl.close();
        })
      })

      break;

    case '2':
      rl.question("choose the first number", input1 => {
        rl.question("choose the second number", input2 => {
          console.log("the answer is: ", odejmowanie(input1, input2)
          );
          rl.close();
        })
      })

      break;

    case '3':
      rl.question("choose the first number", input1 => {
        rl.question("choose the second number", input2 => {
          console.log("the answer is: ", mnozenie(input1, input2)

          );
          rl.close();
        })
      })
      break;

    case '4':
      console.log("Thank you for your time")
      rl.close();
      break;
  }
});


