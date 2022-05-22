// Read Number and display unit

"use strict";
const ps = require("prompt-sync");
let prompt = ps();

let option = parseInt(prompt("Enter the number : "));

switch (option) {
    case 1:
        console.log("Ones");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    default:
        console.log("Invalid Value")
        break;
}