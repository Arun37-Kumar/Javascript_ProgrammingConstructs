// Read a number 1,10,100,1000,etc and display unit,tens,hundred

"use strict";
const ps = require("prompt-sync");
let prompt = ps();

let number = prompt("Enter the number : ");

if(number >= 1 && number < 10)
{
    console.log("Unit");
}
else if(number >= 10 && number <100)
{
    console.log("Tens");
}
else if(number >= 100 && number < 1000)
{
    console.log("Hundred");
}
else if(number >= 1000 && number < 10000)
{
    console.log("Thoudsands");
}
else{
    console.log("Beyond Thousands!")
}