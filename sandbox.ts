// LESSON 5 Explicit Types - https://www.youtube.com/watch?v=__92ek8Xh4o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=5

// explicit types
let caracter: string;
let age: number;
let isLoggedIn: boolean;
age = 30;


// arrays
let ninjas: string[];
ninjas = ['23', '1'];


// union types
let uid: string|number
uid = 1;
uid = '123'

let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(1);
mixed.push(false);


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // oh, array is an object! :(

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};
ninjaTwo = { name: 'mario', age: 21, beltColor: 'black' };

// ninjaTwo = []; // can't do that anymore :)


// LESSON 6 Dynamic (any) Types - https://www.youtube.com/watch?v=nm9P2vnS9_I&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=6