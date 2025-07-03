//4 variables and 1 constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"
const e = 15;

let sum = a + b + c + Number(d) + e;
console.log("Sum of a, b, c, d, e:", sum);
let dNumber = Number(d);  

console.log("Is d > e? ", dNumber > e);
console.log("Is d < e? ", dNumber < e);
console.log("Is d >= e? ", dNumber >= e);
console.log("Is d <= e? ", dNumber <= e);
console.log("Is d === e? ", dNumber === e);

let difference = a - b - c - dNumber - e;
console.log("Subtraction result:", difference);

let productDivided = (a * c) / e;
console.log("Multiply a and c, then divide by e:", productDivided);

let exponent = e ** c;
console.log("e raised to the power of c:", exponent);

elet newE = exponent;
console.log("New variable assigned with exponent value:", newE);
