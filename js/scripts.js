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

window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + " and " + "\n" + number1 + " - " + number2 + " = " + subt(number1, number2) + " and " + "\n" + number1 + " * " + number2 + " = " + multi(number1, number2) + " and " + "\n" + number1 + " / " + number2 + " = " + divide(number1, number2));