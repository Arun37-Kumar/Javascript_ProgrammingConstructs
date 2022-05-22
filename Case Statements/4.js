// Unit Conversion of Lengths
// 1 : Feet to Inch     2 : Feet to Meter    3 : Inch to Feet    4 : Meter to Feet

"use strict";
const ps = require("prompt-sync");
let prompt = ps();

let option = parseInt(prompt("Enter the option : "));

switch (option) {
    case 1:
        let feet = parseInt(prompt("Enter the length in feet : "));
        let inch = feet * 12;
        console.log("After conversion "+inch);
        break;
    case 2:
        let feet1 = parseInt(prompt("Enter the length in feet : "));
        let meter = feet1 / 12;
        console.log("After conversion : "+meter);
        break;
    case 3:
        let Inch = parseInt(prompt("Enter the length in Inch : "));
        let feetConvert = Inch * 0.083;
        console.log("After conversion : "+ feetConvert);
        break;
    case 4:
        let Meter = parseInt(prompt("Enter the length in Meter : "));
        let convertToFeet = Meter * 3.28084;
        console.log("After conversion : "+convertToFeet);
        break;
    default:
        console.log("Invalid Value !");
        break;
}