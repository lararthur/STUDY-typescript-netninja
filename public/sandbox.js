"use strict";
// LESSON 10 - Function Signatures - https://www.youtube.com/watch?v=TZNbzyY6hMU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=10
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says: " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
