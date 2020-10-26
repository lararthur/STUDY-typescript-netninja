// LESSON 17 - Rendering an HTML Template - https://www.youtube.com/watch?v=X-mUYxLjqLY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=17
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
var form = document.querySelector('.new-item-form');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
