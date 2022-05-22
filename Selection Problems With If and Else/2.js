"use strict";

const ps = require("prompt-sync");
let prompt = ps();

let num1 = prompt("Enter the number 1 : ");
console.log(num1);

let num2 = prompt("Enter the number 2 : ");
console.log(num2);
num1 = parseInt(num1);
num2 = parseInt(num2);
let c = (num1 + num2);
c = parseInt(c);
console.log("The sum is ",c);