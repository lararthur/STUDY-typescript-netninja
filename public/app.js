"use strict";
// LESSON 13 - Public, Private & Readonly - https://www.youtube.com/watch?v=aYmnwDlPB8s&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=13
// classes
var Invoice = /** @class */ (function () {
    function Invoice(
    // readonly access modifier means that this property can be accessed from both inside and outside the class, but it can not be changed once the claqss is instanciated
    client, 
    // private access modifier means that only the class can access and modify it (format() method, for example)
    details, 
    // public access modifiers means that this property can be accessed and modified from both inside and outside the class
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // ATTENTION: when putting access modifier in front of the parameters in constructor, the properties are automatically created, thus it's not more necessary to create the properties and then assign it here :)
        // check transpiled JS to check it and see it for yourself
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
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
