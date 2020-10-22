// LESSON 15 - Interfaces - https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
};

const me: IsPerson = {
    name: 'shawn',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

console.log(me);

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);

import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice('mario', 'work on mario site', 250);
const invTwo = new Invoice('luigi', 'work on luigi site', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, '-', inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    );
});