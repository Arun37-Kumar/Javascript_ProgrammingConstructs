"use strict";

const ps = require("prompt-sync");
let prompt = ps();

let num = prompt("Enter the year : ");
let year = parseInt(num);

if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
    console.log("The year is leap")
} else {
    console.log("The year is not leap");
}

