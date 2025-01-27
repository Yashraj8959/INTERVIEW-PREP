/*
scope------------------------------>

scope is a certain region of a program where a defined variable can be exist and recognized, beyond that it can't be recognized.
types of scopes---->
global scope ---> var a;
block scope ---- {}
functional scope-----> function(){}

var vs let vs const----------------->

var (ES5) is global scoped, if we define var in a block in can be accessable in any other scope. 
and let(ES6) and const are block scoped, they recognized where they wil be defined.


overshadowing in javascript----------------------->
function test(){
    let a = "hello";
    if(true){
        let a = "hi";
        console.log(a);
    }
    console.log(a);
}
true();


Declaration---------------->
var -> can be redeclare multiple times, reinitilization can be done.
let -> cannot be redeclare multiple times, reinitilization can be done.
const -> cannot be declare without initialize with any value.

Hoisting---------------------->
It is a concept where JS engine moves the variables and function declaration to the top with undefined value.
console.log(count);   // undefined
var count = 1; 
how JS views the code->
var count;
console.log(count);
count = 1;

In case of let, the variable is still declared but gives an error of using variable without initilization
it basically lies in temporal dead zone
function abc(){
    console.log(a,b,c);
    const c= 3;
    let b = 4;
    var a = 1;
}
abc();


*/
