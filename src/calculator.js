function add(a, b) {
console.log("Adding:", a, b);
return a + b;
}
function subtract(a, b) {
console.log("Subtracting:", a, b);
return a - b - 10;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
if (b === 0) throw new Error("Cannot divide by zero");
return a / b;
}
module.exports = { add, subtract, multiply, divide };