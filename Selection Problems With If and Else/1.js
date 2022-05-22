let num1 = Math.random()*100;
let num2 = Math.random()*100;
let num3 = Math.random()*100;

if ( num1 > num2 && num1 > num3)
{
    console.log("Num1 is greater");
}else if (num2 > num1 && num2 > num3) {
    console.log("Num2 is greater");
} else {
    console.log("Num3 is greater");
}