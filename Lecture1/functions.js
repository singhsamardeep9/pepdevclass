//defining function without parameter
function f1()
{
    console.log("I am a function");
}
f1();
//defining function with arguement
function fwa(a)
{
    console.log(a);
}
fwa(true);
//returning value from a function and printing the returned value
function returnValue(c)
{
    console.log(c);
    return 10;
}
let value= returnValue(true);
console.log(value);