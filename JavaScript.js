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

 
*/
