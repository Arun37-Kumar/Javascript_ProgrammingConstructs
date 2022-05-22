// Find the expression that is maximum
// a + b * c
// c + a / b
// a % b + c
// a * b + c

"use strict";

const ps = require("prompt-sync");
let prompt = ps();

let a = parseInt(prompt("Enter the value of a : "));
let b = parseInt(prompt("Enter the value of b : "));
let c = parseInt(prompt("Enter the value of c : "));

let expr1 =  parseInt(a + b * c);
let expr2 =  parseInt(c + (a / b));
let expr3 =  parseInt((a % b) + c);
let expr4 =  parseInt((a * b) + c);

if(expr4>expr1 && expr4>expr2 && expr4>expr3){
    console.log("Expression 4  is greatest.");
}else if(expr3>expr4 && expr3>expr2 && expr3>expr1){
    console.log("Expression 4 is greatest");
}else if(expr2>expr1 && expr2>expr3 && expr2>expr4){
    console.log("Expression 2 is greatest");
}else {
    console.log("Expression 1 is greates");
}
