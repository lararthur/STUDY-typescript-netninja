"use strict";
// LESSON 8 - Function Basics - https://www.youtube.com/watch?v=jXoSaX_yFh4&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=8
var greet;
greet = function () {
    console.log('hello, again!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);
