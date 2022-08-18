// business logic
function add(num1, num2) {
  return num1 + num2;
}

function subt(num1, num2) {
  return num1 - num2;
}

function multi(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// user interface logic 
const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));

window.alert(num1 + " + " + num2 + " = " + add(num1, num2) + "\n" + 
  num1 + " - " + num2 + " = " + subt(num1, num2) + "\n" + 
  num1 + " * " + num2 + " = " + multi(num1, num2) + "\n" + 
  num1 + " / " + num2 + " = " + divide(num1, num2));