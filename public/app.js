// LESSON 15 - Interfaces - https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15
;
var me = {
    name: 'shawn',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
var invOne = new Invoice('mario', 'work on mario site', 250);
var invTwo = new Invoice('luigi', 'work on luigi site', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, '-', inv.format());
});
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
