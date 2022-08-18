// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subt(number1, number2) {
  return number1 - number2;
}

function multi(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The addition of your numbers equals: " + add(number1, number2) + " The subtraction of your numbers equals: " + subt(number1, number2) + " The multiplication of your numbers equals: " + multi(number1, number2) + " The division of your numbers equals: " + divide(number1, number2));