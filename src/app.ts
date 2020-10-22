// LESSON 13 - Public, Private & Readonly - https://www.youtube.com/watch?v=aYmnwDlPB8s&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=13

// classes
class Invoice {

    constructor(
        // readonly access modifier means that this property can be accessed from both inside and outside the class, but it can not be changed once the claqss is instanciated
        readonly client: string,
        // private access modifier means that only the class can access and modify it (format() method, for example)
        private details: string,
        // public access modifiers means that this property can be accessed and modified from both inside and outside the class
        public amount: number,
    ) {
        // ATTENTION: when putting access modifier in front of the parameters in constructor, the properties are automatically created, thus it's not more necessary to create the properties and then assign it here :)
        // check transpiled JS to check it and see it for yourself
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on mario site', 250);
const invTwo = new Invoice('luigi', 'work on luigi site', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, '-', inv.format());
})

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